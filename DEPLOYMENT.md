# Deployment Guide - Gangarampur Doi Ghar

## ⚡ Vercel Deployment (Recommended)

Vercel is the easiest and fastest way to deploy this Vite + React application.

### Method 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to your Vercel account:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   vercel
   ```
   - Follow the prompts (usually just press Enter for defaults)
   - Your site will be live in ~30 seconds!

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub (Recommended for Continuous Deployment)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Vite framework
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to `main` branch triggers automatic deployment
   - Pull requests get preview deployments

### Method 3: Deploy via Vercel Dashboard (Manual)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI and deploy:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Configuration Details

The project includes `vercel.json` with optimized settings:
- ✅ Automatic SPA routing
- ✅ Asset caching for 1 year
- ✅ Security headers
- ✅ Framework auto-detection

**Build Settings (Auto-detected):**
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x (recommended)

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. SSL is automatic and free!

### Environment Variables (if needed)

1. Go to Vercel project → "Settings" → "Environment Variables"
2. Add any required variables
3. Redeploy for changes to take effect

---

## Alternative Deployment Options

### 2. Netlify

#### Via CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Via Drag & Drop:
1. Run `npm run build`
2. Go to [netlify.com](https://app.netlify.com)
3. Drag the `dist` folder to deploy

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`

---

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/shop",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/shop/',
  plugins: [react()]
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```

2. Initialize:
```bash
firebase init hosting
```
- Select "Use an existing project" or create new
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub deploys: Optional

3. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## Pre-Deployment Checklist

✅ **Update Google Maps**
- Replace the placeholder map URL in [Footer.tsx](src/components/Footer.tsx)
- Get actual coordinates from Google Maps

✅ **Verify Phone Number**
- Current: 9932552763
- Used in: Header, Footer, ProductCard, ProductModal, FloatingCallButton

✅ **Add Favicon**
- Replace `/public/vite.svg` with shop logo
- Update `index.html` favicon reference

✅ **Test Build Locally**
```bash
npm run build
npm run preview
```

✅ **Environment Variables** (if needed)
Create `.env`:
```
VITE_PHONE_NUMBER=9932552763
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

---

## Post-Deployment

### Custom Domain Setup

#### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

#### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### Recommended DNS Setup:
```
Type: CNAME
Name: www
Value: your-project.vercel.app (or netlify.app)

Type: A
Name: @
Value: [Provider's IP]
```

---

## Performance Optimization

### Before Deploying:

1. **Optimize Images** (when you add real product photos):
```bash
npm install -D vite-plugin-imagemin
```

2. **Add Compression**:
Already handled by Vite build

3. **Enable Caching**:
Add to `vite.config.ts`:
```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        animations: ['framer-motion']
      }
    }
  }
}
```

---

## Analytics Setup (Optional)

### Google Analytics:
Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Monitoring

### After Deployment, Check:
- ✅ All pages load correctly
- ✅ Phone links work on mobile
- ✅ Search functionality works
- ✅ Product modals open/close
- ✅ Responsive design on all devices
- ✅ Performance (Lighthouse score > 90)

### Test URLs:
- Homepage: `/`
- Direct product links: `/#bestsellers`, `/#ice_cream`
- Call functionality: `tel:9932552763`

---

## Troubleshooting

### Common Issues:

**White screen after deploy:**
- Check browser console for errors
- Verify `base` in `vite.config.ts` matches deployment path

**404 on refresh:**
- Add `_redirects` file to `public/`:
```
/*    /index.html   200
```

**CSS not loading:**
- Clear browser cache
- Check build output for CSS files

---

## Support

For issues or questions:
- 📧 Email: [your-email]
- 📞 Phone: 9932552763
- 📍 Visit: Gangarampur Doi Ghar

---

**Pro Tip:** Use Vercel for the fastest and easiest deployment with automatic HTTPS and CDN!
