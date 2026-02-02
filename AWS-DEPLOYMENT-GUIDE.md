# AWS Deployment Guide

Complete guide for deploying the Sanjay Suthraye Portfolio to AWS.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install and configure AWS CLI
   ```bash
   # Install AWS CLI
   pip install awscli
   
   # Configure with your credentials
   aws configure
   ```
3. **Node.js**: Version 18 or higher

## Deployment Options

### Option 1: Quick Deploy with Script (Recommended)

1. **Build the project**:
   ```bash
   npm install
   npm run build
   ```

2. **Run the deployment script**:
   ```bash
   ./deploy-aws.sh your-bucket-name [cloudfront-distribution-id]
   ```

   Example:
   ```bash
   ./deploy-aws.sh sanjay-portfolio
   ```

### Option 2: CloudFormation (Infrastructure as Code)

This creates everything automatically: S3 bucket, CloudFront distribution, and all necessary policies.

1. **Deploy the CloudFormation stack**:
   ```bash
   aws cloudformation create-stack \
     --stack-name sanjay-portfolio \
     --template-body file://cloudformation-template.yaml \
     --region us-east-1
   ```

2. **Wait for stack creation** (takes 5-10 minutes):
   ```bash
   aws cloudformation wait stack-create-complete \
     --stack-name sanjay-portfolio \
     --region us-east-1
   ```

3. **Get outputs**:
   ```bash
   aws cloudformation describe-stacks \
     --stack-name sanjay-portfolio \
     --region us-east-1 \
     --query 'Stacks[0].Outputs'
   ```

4. **Build and deploy**:
   ```bash
   npm run build
   
   # Get bucket name from outputs
   BUCKET_NAME=$(aws cloudformation describe-stacks \
     --stack-name sanjay-portfolio \
     --region us-east-1 \
     --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
     --output text)
   
   # Get CloudFront distribution ID
   DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
     --stack-name sanjay-portfolio \
     --region us-east-1 \
     --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
     --output text)
   
   # Deploy using script
   ./deploy-aws.sh $BUCKET_NAME $DISTRIBUTION_ID
   ```

### Option 3: Manual Setup

#### Step 1: Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://sanjay-portfolio-YOUR-ACCOUNT-ID --region us-east-1

# Enable static website hosting
aws s3 website s3://sanjay-portfolio-YOUR-ACCOUNT-ID \
  --index-document index.html \
  --error-document index.html
```

#### Step 2: Configure Bucket Policy

1. Update `bucket-policy.json` with your bucket name
2. Apply the policy:
   ```bash
   aws s3api put-bucket-policy \
     --bucket sanjay-portfolio-YOUR-ACCOUNT-ID \
     --policy file://bucket-policy.json
   ```

#### Step 3: Upload Files

```bash
npm run build

aws s3 sync dist/ s3://sanjay-portfolio-YOUR-ACCOUNT-ID \
  --delete \
  --cache-control "public, max-age=31536000"
```

#### Step 4: Create CloudFront Distribution

```bash
# Create distribution
aws cloudfront create-distribution \
  --origin-domain-name sanjay-portfolio-YOUR-ACCOUNT-ID.s3.amazonaws.com \
  --default-root-object index.html
```

Or use the AWS Console:
1. Go to CloudFront console
2. Create distribution
3. Select S3 bucket as origin
4. Configure settings as described in README.md

## Custom Domain Setup

### Step 1: Request SSL Certificate

1. Go to AWS Certificate Manager (ACM) in **us-east-1** region
2. Request a public certificate
3. Enter your domain name (e.g., `sanjaysuthraye.com`)
4. Add DNS validation records to your domain provider
5. Wait for validation (usually 5-30 minutes)

### Step 2: Update CloudFormation (if using)

```bash
aws cloudformation update-stack \
  --stack-name sanjay-portfolio \
  --template-body file://cloudformation-template.yaml \
  --parameters \
    ParameterKey=DomainName,ParameterValue=sanjaysuthraye.com \
    ParameterKey=CertificateArn,ParameterValue=arn:aws:acm:us-east-1:YOUR-ACCOUNT:certificate/YOUR-CERT-ID
```

### Step 3: Update CloudFront (if manual)

1. Go to CloudFront distribution settings
2. Edit > Add Alternate Domain Names (CNAMEs)
3. Add your domain: `sanjaysuthraye.com`
4. Select your SSL certificate
5. Save changes

### Step 4: Configure DNS

In Route 53 or your DNS provider:
```bash
# Create A record pointing to CloudFront
aws route53 change-resource-record-sets \
  --hosted-zone-id YOUR-ZONE-ID \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "sanjaysuthraye.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "d111111abcdef8.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    }]
  }'
```

## Continuous Deployment

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to S3
        run: |
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} --delete
      
      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_ID }} \
            --paths "/*"
```

Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET`
- `CLOUDFRONT_ID`

## Monitoring and Maintenance

### View CloudFront Logs

```bash
# Enable logging in CloudFront distribution
aws cloudfront update-distribution --id YOUR-DIST-ID \
  --distribution-config file://distribution-config.json
```

### Monitor Costs

```bash
# Check S3 storage costs
aws s3api list-buckets --query "Buckets[].Name" | xargs -I {} aws s3 ls s3://{} --summarize --recursive

# View CloudFront usage
aws cloudfront get-distribution-stats --id YOUR-DIST-ID
```

### Update Content

```bash
# Make your changes
# Build
npm run build

# Deploy
./deploy-aws.sh YOUR-BUCKET-NAME YOUR-DISTRIBUTION-ID
```

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution**: Check bucket policy allows public access:
```bash
aws s3api get-bucket-policy --bucket YOUR-BUCKET-NAME
```

### Issue: CloudFront Serves Old Content

**Solution**: Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR-DIST-ID \
  --paths "/*"
```

### Issue: Custom Domain Not Working

**Solution**: 
1. Verify DNS records are correct
2. Check certificate is valid and in us-east-1
3. Ensure CNAME is added to CloudFront distribution

### Issue: Build Fails

**Solution**:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## Cost Estimation

Typical monthly costs for a portfolio website:
- **S3 Storage**: $0.023/GB (~$0.50/month for 20GB)
- **CloudFront**: $0.085/GB for first 10TB ($1-5/month for typical traffic)
- **Route 53** (if using custom domain): $0.50/month
- **Total**: $2-10/month for moderate traffic

First 12 months on AWS Free Tier:
- 5GB S3 storage (free)
- 50GB CloudFront transfer (free)
- Estimated cost: $0.50-2/month

## Security Best Practices

1. **Enable CloudFront**: Protects against DDoS
2. **Use HTTPS**: Always redirect HTTP to HTTPS
3. **Set proper cache headers**: Optimize performance
4. **Enable AWS CloudTrail**: Track API calls
5. **Use IAM roles**: Don't hardcode credentials

## Performance Tips

1. **Enable compression** in CloudFront
2. **Use cache headers** appropriately
3. **Optimize images** before upload
4. **Minimize JavaScript** bundles
5. **Use CDN** (CloudFront) for global delivery

## Support

For issues or questions:
- Email: sanjay.suthraye96@gmail.com
- GitHub: https://github.com/Sanjay-Suthraye

## Resources

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [AWS CLI Reference](https://docs.aws.amazon.com/cli/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
