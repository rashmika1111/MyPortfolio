# Email Setup Instructions

## Step 1: Create `.env.local` file

Create a file named `.env.local` in the `portfolio` directory with the following content:

```env
EMAIL_USER=rashmikanaveen111@gmail.com
EMAIL_PASSWORD=your-gmail-app-password-here
```

## Step 2: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", enable **2-Step Verification** (if not already enabled)
4. After enabling 2-Step Verification, go back to Security
5. Under "Signing in to Google", click on **App passwords**
6. Select **Mail** as the app and **Other (Custom name)** as the device
7. Enter "Portfolio Contact Form" as the name
8. Click **Generate**
9. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
10. Paste it in `.env.local` as `EMAIL_PASSWORD` (remove spaces)

## Step 3: Restart Your Dev Server

After creating `.env.local`, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Troubleshooting

- Make sure `.env.local` is in the `portfolio` folder (same level as `package.json`)
- The app password should be 16 characters without spaces
- Make sure 2-Step Verification is enabled before generating app password
- Restart the dev server after creating/updating `.env.local`

