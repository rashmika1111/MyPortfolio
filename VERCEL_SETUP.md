# Vercel Deployment Setup

## Important: Root Directory Configuration

Since your Next.js app is in the `portfolio` subdirectory, you need to configure Vercel to use it:

### Option 1: Deploy Portfolio Folder Directly (Recommended)
1. In Vercel Dashboard, when importing your project:
   - Set **Root Directory** to: `portfolio`
   - Vercel will automatically detect Next.js

### Option 2: Deploy from Root
If deploying from the root of the repository, you'll need to:
1. Set **Root Directory** to: `portfolio`
2. Or move `vercel.json` to the root directory

## Environment Variables Setup

**CRITICAL**: Add these in Vercel Dashboard → Settings → Environment Variables:

```
EMAIL_USER=rashmikanaveen111@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

Add for all environments: Production, Preview, Development

## Quick Deploy Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix Vercel deployment"
   git push
   ```

2. **In Vercel Dashboard**:
   - Import repository
   - Set Root Directory: `portfolio`
   - Add environment variables
   - Deploy

3. **After deployment**, redeploy to ensure environment variables are loaded

## Troubleshooting

- **Build fails**: Check that Root Directory is set to `portfolio`
- **API not working**: Verify environment variables are set
- **Contact form errors**: Check Vercel Function logs

