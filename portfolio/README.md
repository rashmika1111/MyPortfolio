# Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Optimized** - Built with Next.js App Router for optimal SEO
- **Fast Performance** - Optimized images and code splitting
- **Easy to Customize** - Simple configuration for personal details

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Styling**: Tailwind CSS for utility-first styling
- **Deployment**: Vercel-ready for instant deployment

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Skills.js
│       ├── Projects.js
│       ├── Contact.js
│       └── Footer.js
├── public/
│   ├── favicon.ico
│   └── images/
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information
Update these files with your details:

- **Hero.js**: Your name, role, and introduction
- **About.js**: Your background story and experience
- **Contact.js**: Your email, phone, and social links

### 2. Skills & Technologies
Edit `Skills.js` to add your technical skills with proficiency levels.

### 3. Projects
Update `Projects.js` with your real projects:
- Replace placeholder images with your project screenshots
- Update GitHub links and live demo URLs
- Modify project descriptions and technologies used

### 4. Styling
- Colors: Update the color scheme in `tailwind.config.js`
- Fonts: Modify fonts in `globals.css`
- Layout: Adjust spacing and sizing in component files

### 5. Images
- Add your profile photo to `public/` folder
- Add project screenshots to `public/` folder
- Update image paths in components

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Smooth scrolling navigation
- Touch-friendly buttons and links
- Optimized images for different screen sizes

## 🔗 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🎯 Next Steps

1. **Replace placeholder content** with your actual information
2. **Add your projects** with real screenshots and links
3. **Customize colors** to match your personal brand
4. **Add animations** using Framer Motion or CSS transitions
5. **Integrate contact form** with services like Formspree or Netlify Forms

## 📞 Support

For questions or issues, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ using Next.js and Tailwind CSS**
