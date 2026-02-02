#!/bin/bash

# AWS S3 + CloudFront Deployment Script for Portfolio
# Usage: ./deploy-aws.sh <bucket-name> [cloudfront-distribution-id]

set -e  # Exit on error

# Colors for output
RED='\033[0:31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BUCKET_NAME=$1
CLOUDFRONT_ID=$2
BUILD_DIR="dist"

# Validate inputs
if [ -z "$BUCKET_NAME" ]; then
    echo -e "${RED}Error: Bucket name is required${NC}"
    echo "Usage: ./deploy-aws.sh <bucket-name> [cloudfront-distribution-id]"
    exit 1
fi

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Portfolio Deployment to AWS${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Step 1: Build the application
echo -e "${YELLOW}Step 1: Building production bundle...${NC}"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Error: Build directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Step 2: Check if bucket exists
echo -e "${YELLOW}Step 2: Checking S3 bucket...${NC}"
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "Bucket does not exist. Creating..."
    aws s3 mb "s3://$BUCKET_NAME"
    echo -e "${GREEN}✓ Bucket created${NC}"
else
    echo -e "${GREEN}✓ Bucket exists${NC}"
fi
echo ""

# Step 3: Sync files to S3
echo -e "${YELLOW}Step 3: Uploading files to S3...${NC}"
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET_NAME" \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.html"

# Upload HTML files with shorter cache
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET_NAME" \
    --exclude "*" \
    --include "*.html" \
    --cache-control "public, max-age=0, must-revalidate"

echo -e "${GREEN}✓ Files uploaded successfully${NC}"
echo ""

# Step 4: Invalidate CloudFront cache (if distribution ID provided)
if [ -n "$CLOUDFRONT_ID" ]; then
    echo -e "${YELLOW}Step 4: Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_ID" \
        --paths "/*"
    echo -e "${GREEN}✓ CloudFront invalidation initiated${NC}"
else
    echo -e "${YELLOW}Step 4: Skipping CloudFront invalidation (no distribution ID provided)${NC}"
fi
echo ""

# Step 5: Display URLs
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Completed Successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "S3 Website URL: ${GREEN}http://$BUCKET_NAME.s3-website-$(aws configure get region).amazonaws.com${NC}"

if [ -n "$CLOUDFRONT_ID" ]; then
    CLOUDFRONT_DOMAIN=$(aws cloudfront get-distribution --id "$CLOUDFRONT_ID" --query 'Distribution.DomainName' --output text 2>/dev/null || echo "")
    if [ -n "$CLOUDFRONT_DOMAIN" ]; then
        echo -e "CloudFront URL: ${GREEN}https://$CLOUDFRONT_DOMAIN${NC}"
    fi
fi

echo ""
echo -e "${YELLOW}Note: CloudFront cache invalidation may take 5-15 minutes to complete.${NC}"
