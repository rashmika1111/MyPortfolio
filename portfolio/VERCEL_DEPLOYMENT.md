# Vercel Deployment Guide

## Prerequisites
- GitHub account with your portfolio repository
- Vercel account (free tier works)

## Deployment Steps

### 1. Push to GitHub
Make sure all your changes are committed and pushed to GitHub:
```bash
git add .
git commit -m "Update portfolio for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio` (if your Next.js app is in a subdirectory)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

#### Option B: Via Vercel CLI
```bash
npm i -g vercel
cd portfolio
vercel
```

### 3. Configure Environment Variables

**IMPORTANT**: Add these environment variables in Vercel Dashboard:

1. Go to your project in Vercel Dashboard
2. Click on **Settings** → **Environment Variables**
3. Add the following:
   - `EMAIL_USER` = `rashmikanaveen111@gmail.com`
   - `EMAIL_PASSWORD` = `your-gmail-app-password`

4. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 4. Redeploy

After adding environment variables:
- Go to **Deployments** tab
- Click the **⋯** menu on the latest deployment
- Click **Redeploy**

Or push a new commit to trigger automatic deployment.

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)

### API Route Not Working
- Verify environment variables are set correctly
- Check that `EMAIL_USER` and `EMAIL_PASSWORD` are added
- Ensure Gmail App Password is correct

### Contact Form Not Sending Emails
- Verify environment variables in Vercel Dashboard
- Check Vercel function logs for errors
- Ensure Gmail App Password is valid

## Project Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
├── public/
├── package.json
├── next.config.mjs
└── vercel.json
```

## Environment Variables Required
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail App Password (16 characters)

## Notes
- Vercel automatically detects Next.js projects
- The `vercel.json` file is optional but helps with configuration
- Environment variables must be set in Vercel Dashboard, not in `.env.local` (that's only for local development)

