# Nisarg Patel — Portfolio Website

A modern, responsive personal portfolio built with React.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── App.js                        # Root component
├── index.js                      # React entry point
├── data/
│   └── constants.js              # All content & data
├── styles/
│   └── globalStyles.js           # Global CSS + responsive breakpoints
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Certifications.jsx
    ├── ResumeBanner.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

---

## ✏️ Customization

- **Update content** → edit `src/data/constants.js`
- **Add resume PDF** → place file in `public/` folder, update `href` in `ResumeBanner.jsx`
- **Change colors** → search for `#6366f1` in `globalStyles.js` to update accent color

---

## 🌐 Deploy

**Vercel:** `npx vercel`  
**Netlify:** Drag & drop the `build/` folder at netlify.com  
**GitHub Pages:** `npm install gh-pages --save-dev` then `npm run deploy`
