# Arturo Zvezda (Arturo Israel Garcia Castro) - Portfolio

A modern, multilingual (English/Spanish) portfolio website built with Astro and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Development

1. **Install dependencies:**

   ```bash
   cd portfolio
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site:**

   ```bash
   npm run build
   ```

3. **Deploy:**

   ```bash
   netlify deploy --prod --dir=dist
   ```

   Or use the Netlify web interface:

   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Done! Your site is live.

### Option 2: Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Pages

1. **Install GitHub Pages adapter:**

   ```bash
   npm install @astrojs/github-pages
   ```

2. **Update `astro.config.mjs`:**

   ```javascript
   import { defineConfig } from "astro/config";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     site: "https://yourusername.github.io",
     base: "/portfolio",
     vite: {
       plugins: [tailwindcss()],
     },
   });
   ```

3. **Create `.github/workflows/deploy.yml`:**

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Push to GitHub and enable GitHub Pages in repository settings.**

### Option 4: Traditional Web Hosting

1. **Build the site:**

   ```bash
   npm run build
   ```

2. **Upload the `dist` folder to your web host via FTP/SFTP.**

## 🌐 Features

- ✅ **Multilingual**: Toggle between English and Spanish
- ✅ **Responsive**: Mobile-first design
- ✅ **Modern Stack**: Astro + Tailwind CSS
- ✅ **Fast**: Optimized for performance
- ✅ **SEO Ready**: Meta tags and semantic HTML
- ✅ **Contact Integration**: WhatsApp, Email, LinkedIn

## 📝 Customization

### Update Content

Edit the translation files:

- `src/i18n/en.json` - English content
- `src/i18n/es.json` - Spanish content

### Update Styling

Tailwind classes can be modified in component files located in `src/components/`

### Add New Sections

Create new components in `src/components/` and import them in `src/pages/index.astro`

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: TypeScript
- **Deployment**: Netlify/Vercel/GitHub Pages

## 📧 Contact

- **Email**: iskra.zvezda@gmail.com
- **WhatsApp**: +52 55 5498 6769
- **LinkedIn**: [linkedin.com/in/israel-gc](https://linkedin.com/in/israel-gc)

---

Built with ❤️ using Astro & Tailwind CSS
