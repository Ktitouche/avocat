# Quick Customization Guide

This guide will help you quickly customize the lawyer website for your needs.

## 🚀 Quick Start (5 Minutes)

### 1. Update Contact Information
Open `index.html` and search for these values, then replace:

```html
<!-- Change these -->
+33 1 23 45 67 89          → Your phone number
contact@cabinetjuridique.fr → Your email
123 Rue de la Justice      → Your office address
75001 Paris, France        → Your city/country
```

Repeat in: `about.html`, `services.html`, `appointment.html`, `contact.html`

### 2. Update Business Name
Search and replace: `Cabinet Juridique` → `Your Law Firm Name`

Files to update:
- All HTML files (search for "Cabinet Juridique")
- Update in navigation logo
- Update in footer

### 3. Update Lawyer Name
Search for: `Maître Jean Dupont`
Replace with: `Your Lawyer Name`

Files: `index.html`, `about.html`

### 4. Update Hero Title (Home Page)
In `index.html`, find hero section and update:
```html
<h1 class="hero-title">Cabinet d'Avocat</h1>
<p class="hero-subtitle">Défense, Conseil et Expertise Juridique</p>
```

## 🎨 Design Customization

### Change Primary Colors

Edit `css/style.css` (lines 23-34):

```css
:root {
    --primary-color: #1a365d;      /* Change this */
    --secondary-color: #2d5a8c;    /* And this */
    --accent-color: #d4af37;       /* And this */
    --light-bg: #f5f7fa;
    --text-dark: #222;
    --text-light: #666;
    --border-color: #ddd;
    --white: #fff;
    --success-color: #27ae60;
    --error-color: #e74c3c;
}
```

### Professional Color Schemes

**Option 1: Classic Navy Blue** (Default)
```
Primary: #1a365d (Dark Navy)
Secondary: #2d5a8c (Medium Navy)
Accent: #d4af37 (Gold)
```

**Option 2: Modern Teal**
```
Primary: #0f3460 (Dark Teal)
Secondary: #16213e (Navy Teal)
Accent: #e94560 (Red)
```

**Option 3: Corporate Gray**
```
Primary: #2c3e50 (Dark Gray-Blue)
Secondary: #34495e (Medium Gray-Blue)
Accent: #f39c12 (Orange)
```

**Option 4: Professional Purple**
```
Primary: #4a235a (Dark Purple)
Secondary: #6c3483 (Medium Purple)
Accent: #f1c40f (Yellow)
```

### Change Fonts

Edit `index.html` head section:

```html
<!-- Default fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

Replace with other Google Fonts combinations:
- Serif header: `Montserrat`, `Cormorant Garamond`, `Raleway`
- Body font: `Open Sans`, `Source Sans Pro`, `Inter`

## 📸 Add Images

### Hero Background
Replace in `index.html`:
```html
<header class="hero" style="background-image: url('assets/hero-bg.jpg')">
```

Change `assets/hero-bg.jpg` to your image path.

### Lawyer Photo
Replace in `about.html`:
```html
<img src="assets/lawyer-photo.jpg" alt="Maître Jean Dupont, Avocat">
```

### Office Photo
Replace in `about.html`:
```html
<img src="assets/office.jpg" alt="Cabinet d'avocat">
```

**Image Recommendations:**
- Hero background: 1920x600px (16:9 ratio)
- Lawyer photo: 400x500px (portrait)
- Office photo: 600x400px (landscape)

## ✏️ Content Updates

### Update Services
Edit `services.html`, find service sections:

```html
<div class="service-detail-card">
    <h2>Droit Civil</h2>                    <!-- Service name -->
    <span class="price-tag">À partir de 500€</span> <!-- Price -->
    <p class="service-description">        <!-- Description -->
        Your text here...
    </p>
    <ul class="service-list">               <!-- Features -->
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
    </ul>
</div>
```

### Update Testimonials
Edit `index.html`, testimonials section:

```html
<div class="testimonial-card">
    <div class="testimonial-stars">
        <i class="fas fa-star"></i>        <!-- Star rating -->
        <!-- Add/remove stars as needed -->
    </div>
    <p class="testimonial-text">
        "Your testimonial text here..."
    </p>
    <p class="testimonial-author">- Client Name</p>
</div>
```

### Update About Content
Edit `about.html`:

```html
<h2>Maître Jean Dupont</h2>               <!-- Name -->
<p class="title">Avocat au Barreau de Paris</p> <!-- Title -->
<p class="bio">Your biography here...</p>  <!-- Bio -->
```

### Update Hours of Operation

Edit these files:
- `index.html` (Quick Contact Section)
- `appointment.html` (Hours Card)
- `contact.html` (Hours Card)

```html
<p><strong>Lundi - Vendredi:</strong><br>9:00 - 18:00</p>
<p><strong>Samedi:</strong><br>10:00 - 13:00</p>
<p><strong>Dimanche:</strong><br>Fermé</p>
```

## 🗺️ Update Google Maps

In `contact.html`, find the iframe and update:

1. Go to: https://www.google.com/maps
2. Search for your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `contact.html` (around line 164)

## 📱 Update Navigation Links

The navigation menu links to:
- `index.html` - Home
- `about.html` - About
- `services.html` - Services
- `appointment.html` - Appointments
- `contact.html` - Contact

If you rename or move files, update the links in the `<nav class="nav-menu">` section on every page.

## 🎯 Update Call-to-Action Buttons

Search for `.btn` elements and update hrefs:
```html
<a href="appointment.html" class="btn btn-primary">Prendre Rendez-vous</a>
<a href="contact.html" class="btn btn-secondary">Nous Contacter</a>
```

## 💬 Update Social Media Links

In footer, update social media URLs:
```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
</a>
<a href="https://twitter.com/yourprofile" aria-label="Twitter">
    <i class="fab fa-twitter"></i>
</a>
<a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🔧 Form Setup

### Contact Form Setup

To enable actual email notifications, you need a backend service:

**Option 1: Using Formspree (Easiest)**
1. Go to: https://formspree.io/
2. Create account and add your email
3. Create a new form
4. Update the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2: Using Netlify Forms (If hosting on Netlify)**
1. Add `netlify` attribute to forms
2. Forms will automatically submit to Netlify

## 📊 Add Google Analytics

Add this to the `<head>` of all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

## 🔍 SEO Optimization

Update meta tags in each HTML file:

```html
<meta name="description" content="Your law firm description here">
<title>Your Firm Name - Legal Services</title>
```

## 🚀 Deployment

### Local Testing
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

### Live Hosting Options
1. **Netlify** (Free, recommended)
   - Drag & drop folder
   - Automatic form handling
   - Free SSL

2. **GitHub Pages** (Free)
   - Push to GitHub
   - Enable Pages in settings

3. **Vercel** (Free)
   - Optimized for performance

4. **Traditional Hosting** (Paid)
   - GoDaddy, Bluehost, SiteGround

## ✅ Testing Checklist

- [ ] Test all navigation links
- [ ] Test all buttons and CTAs
- [ ] Test forms (validation)
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Check all images load
- [ ] Check all fonts load
- [ ] Test contact form submission
- [ ] Test appointment form submission
- [ ] Check Google Maps loads
- [ ] Verify all contact information is current
- [ ] Test email links (mailto:)
- [ ] Test phone links (tel:)

## 📝 Common Changes Summary

| What to Change | Where | How |
|---|---|---|
| Contact Info | All pages | Search & replace phone/email/address |
| Lawyer Name | `about.html`, `index.html` | Replace "Jean Dupont" |
| Business Name | All pages | Replace "Cabinet Juridique" |
| Services | `services.html` | Edit service cards |
| Colors | `css/style.css` | Update CSS variables |
| Fonts | All HTML files | Update Google Fonts link |
| Images | HTML files | Update src attributes |
| Hours | Multiple pages | Edit hours of operation |
| Social Links | Footer on all pages | Update href attributes |

## 🆘 Troubleshooting

### Forms not working?
- Make sure you set up a form backend (Formspree, Netlify, etc.)
- Check browser console for errors (F12)
- Validate form fields match the HTML IDs

### Images not showing?
- Check image paths are correct
- Ensure images are in the `assets/` folder
- Try using absolute URLs instead of relative paths

### Styling looks off?
- Clear browser cache (Ctrl+Shift+Del)
- Check all CSS files are linked in HTML head
- Verify CSS variable values are correct

### Mobile view looks wrong?
- Check viewport meta tag is present
- Test at specific breakpoints (480px, 768px)
- Use browser DevTools responsive mode

---

**Need help?** Check the inline comments in the HTML and CSS files for more details!
