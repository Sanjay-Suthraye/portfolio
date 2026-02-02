# Sanjay Suthraye - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist and AI/ML Engineer. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with dark mode support
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📊 Showcases projects, experience, skills, and achievements
- 🔗 Direct links to GitHub and LinkedIn profiles

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: AWS S3 + CloudFront (Static Hosting)

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## Project Structure

```
portfolio-app/
├── public/
│   └── profile.png          # Profile image
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Awards.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js # All content and data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Update Content

Edit `src/data/portfolioData.js` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Awards

### Update Styling

- Modify Tailwind configuration in `tailwind.config.js`
- Update global styles in `src/index.css`
- Adjust component-specific styles in individual component files

## Deployment to AWS

### Option 1: S3 Static Website Hosting

1. **Build the production bundle**:
   ```bash
   npm run build
   ```

2. **Create an S3 bucket**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name --region us-east-1
   ```

3. **Configure bucket for static website hosting**:
   ```bash
   aws s3 website s3://your-portfolio-bucket-name --index-document index.html --error-document index.html
   ```

4. **Update bucket policy** (replace YOUR-BUCKET-NAME):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
   ```

   Apply the policy:
   ```bash
   aws s3api put-bucket-policy --bucket your-portfolio-bucket-name --policy file://bucket-policy.json
   ```

5. **Upload files**:
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket-name --delete
   ```

6. **Access your website**:
   ```
   http://your-portfolio-bucket-name.s3-website-us-east-1.amazonaws.com
   ```

### Option 2: S3 + CloudFront (Recommended for HTTPS and better performance)

1. **Build the production bundle**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket and upload files**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   aws s3 sync dist/ s3://your-portfolio-bucket-name
   ```

3. **Create CloudFront distribution**:
   - Go to AWS CloudFront console
   - Click "Create Distribution"
   - Origin Domain: Select your S3 bucket
   - Origin Access: Legacy access identities (Create new OAI)
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: index.html
   - Create custom error responses:
     - Error Code: 403, Response Page: /index.html, Response Code: 200
     - Error Code: 404, Response Page: /index.html, Response Code: 200

4. **Update S3 bucket policy** to allow CloudFront access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AllowCloudFrontOAI",
         "Effect": "Allow",
         "Principal": {
           "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR-OAI-ID"
         },
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
   ```

5. **Access your website** via CloudFront domain:
   ```
   https://d111111abcdef8.cloudfront.net
   ```

### Option 3: Automated Deployment with AWS CLI Script

See `deploy-aws.sh` script for automated deployment.

### Custom Domain (Optional)

1. Register a domain with Route 53 or your preferred registrar
2. Request SSL certificate in AWS Certificate Manager (ACM) for your domain
3. In CloudFront, add your custom domain as Alternate Domain Name (CNAME)
4. Select your ACM certificate
5. Create Route 53 A record pointing to CloudFront distribution

## Environment Variables

No environment variables are required for this project. All configuration is in the codebase.

## Performance Optimizations

- Code splitting with React lazy loading
- Optimized images
- Minified CSS and JavaScript
- Gzip compression (handled by CloudFront)
- Browser caching headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Sanjay Suthraye. All rights reserved.

## Contact

- **Email**: sanjay.suthraye96@gmail.com
- **LinkedIn**: [linkedin.com/in/sanjaysuthraye](https://www.linkedin.com/in/sanjaysuthraye/)
- **GitHub**: [github.com/Sanjay-Suthraye](https://github.com/Sanjay-Suthraye)
