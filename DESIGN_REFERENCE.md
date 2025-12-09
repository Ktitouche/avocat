# 🎨 Design Reference & Code Snippets

Quick reference guide for common customizations with code examples.

## 📋 Table of Contents
1. [Color Schemes](#color-schemes)
2. [Common Edits](#common-edits)
3. [Adding New Sections](#adding-new-sections)
4. [JavaScript Examples](#javascript-examples)
5. [CSS Examples](#css-examples)

---

## 🎨 Color Schemes

### Current Scheme (Professional Navy)
```css
--primary-color: #1a365d;      /* Dark Navy */
--secondary-color: #2d5a8c;    /* Medium Navy */
--accent-color: #d4af37;       /* Gold */
```

### Alternative 1: Modern Teal
```css
--primary-color: #0f3460;      /* Dark Teal */
--secondary-color: #16213e;    /* Navy Teal */
--accent-color: #e94560;       /* Red */
```

### Alternative 2: Corporate Purple
```css
--primary-color: #4a235a;      /* Dark Purple */
--secondary-color: #6c3483;    /* Medium Purple */
--accent-color: #f1c40f;       /* Yellow */
```

### Alternative 3: Classic Green
```css
--primary-color: #1b5e20;      /* Dark Green */
--secondary-color: #2e7d32;    /* Medium Green */
--accent-color: #ffd700;       /* Gold */
```

### How to Apply
1. Open `css/style.css`
2. Find `:root` section (lines 23-34)
3. Replace the three color values
4. Save and refresh browser

---

## 📝 Common Edits

### 1. Update Phone Number (All Pages)

**Find these in each HTML file:**
```html
<!-- Old -->
<a href="tel:+33123456789">+33 1 23 45 67 89</a>

<!-- New -->
<a href="tel:+33212345678">+33 2 12 34 56 78</a>
```

**Files to update:**
- index.html (line 173)
- about.html (N/A)
- services.html (N/A)
- appointment.html (line 174)
- contact.html (line 183)

### 2. Update Email Address

```html
<!-- Old -->
<a href="mailto:contact@cabinetjuridique.fr">contact@cabinetjuridique.fr</a>

<!-- New -->
<a href="mailto:legal@yourfirm.com">legal@yourfirm.com</a>
```

### 3. Update Street Address

```html
<!-- Old -->
123 Rue de la Justice<br>
75001 Paris<br>
France

<!-- New -->
456 Avenue du Droit<br>
69000 Lyon<br>
France
```

### 4. Update Business Name

```html
<!-- Old -->
<span>Cabinet Juridique</span>

<!-- New -->
<span>Dupont Legal Services</span>
```

### 5. Update Hero Title

```html
<!-- Old -->
<h1 class="hero-title">Cabinet d'Avocat</h1>
<p class="hero-subtitle">Défense, Conseil et Expertise Juridique</p>

<!-- New -->
<h1 class="hero-title">Your Law Firm Name</h1>
<p class="hero-subtitle">Your Tagline Here</p>
```

### 6. Update Lawyer Name

```html
<!-- Old -->
<h2>Maître Jean Dupont</h2>
<p class="title">Avocat au Barreau de Paris</p>

<!-- New -->
<h2>Attorney Jane Smith</h2>
<p class="title">Attorney at Law</p>
```

---

## ➕ Adding New Sections

### Add New Service Card

```html
<!-- Copy this block in services.html -->
<div class="service-detail-card fade-in-up">
    <div class="service-detail-header">
        <div class="service-detail-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <div>
            <h2>Your Service Name</h2>
            <span class="price-tag">À partir de 500€</span>
        </div>
    </div>
    <p class="service-description">
        Your service description here...
    </p>
    <h4>Domaines couverts :</h4>
    <ul class="service-list">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
        <li><i class="fas fa-check"></i> Feature 3</li>
    </ul>
    <a href="appointment.html" class="btn btn-secondary">Consulter</a>
</div>
```

**Font Awesome Icons**: https://fontawesome.com/icons

Popular legal icons:
- `fa-gavel` - Law/Gavel
- `fa-balance-scale` - Balance/Justice
- `fa-home` - Real Estate
- `fa-ring` - Family/Marriage
- `fa-briefcase` - Business
- `fa-building` - Administrative
- `fa-handshake` - Partnership
- `fa-certificate` - Certification
- `fa-shield` - Protection

### Add New Testimonial

```html
<!-- Add in index.html testimonials section -->
<div class="testimonial-card fade-in-up">
    <div class="testimonial-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">
        "Quote from your client here..."
    </p>
    <p class="testimonial-author">- Client Name</p>
</div>
```

### Add New Team Member

```html
<!-- Add to about.html -->
<div class="profile-content fade-in-right">
    <h2>Team Member Name</h2>
    <p class="title">Position/Specialization</p>
    <p class="bio">
        Biography and experience here...
    </p>
</div>
```

---

## 💻 JavaScript Examples

### Custom Form Validation

```javascript
// Add custom validation rule
function validateCustomField(value) {
    if (value.length < 5) {
        return false;
    }
    return true;
}

// Use in form submission
const isValid = validateCustomField(fieldValue);
if (!isValid) {
    showFieldError(field, errorElement, 'Error message');
}
```

### Add Custom Animation

```javascript
// Add animation on scroll
const elements = document.querySelectorAll('.my-class');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
});

elements.forEach(el => observer.observe(el));
```

### Add Click Handler

```javascript
// Example: Track button clicks
const button = document.querySelector('.btn-primary');
button.addEventListener('click', () => {
    console.log('Button clicked!');
    // Do something here
});
```

### Add Confirmation Popup

```javascript
// Confirm before form submission
form.addEventListener('submit', (e) => {
    const confirmed = confirm('Are you sure you want to submit?');
    if (!confirmed) {
        e.preventDefault();
    }
});
```

---

## 🎨 CSS Examples

### Change Button Style

```css
/* Original */
.btn-primary {
    background-color: var(--accent-color);
    color: var(--primary-color);
}

/* Updated */
.btn-primary {
    background-color: #3498db;      /* New color */
    color: white;                   /* New text color */
    border-radius: 25px;            /* More rounded */
    font-weight: 700;               /* Bolder text */
}
```

### Change Card Hover Effect

```css
/* Original */
.about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

/* Updated - More dramatic */
.about-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #f5f7fa 0%, #e0e6f0 100%);
}
```

### Add Background Gradient

```css
/* Gradient background */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Multi-color gradient */
.cta-section {
    background: linear-gradient(90deg, 
        #1a365d 0%, 
        #2d5a8c 50%, 
        #d4af37 100%);
}
```

### Customize Typography

```css
/* Make text larger */
h1 {
    font-size: 4.5rem;  /* Was 3rem */
}

/* Change letter spacing */
h2 {
    letter-spacing: 2px;  /* Add space between letters */
}

/* Change line height */
p {
    line-height: 1.8;  /* Was 1.6 */
}
```

### Add Border Effects

```css
/* Original */
.service-card {
    border: 2px solid #f0f0f0;
}

/* Updated - Add left border accent */
.service-card {
    border: none;
    border-left: 5px solid var(--accent-color);
    box-shadow: -5px 0 15px rgba(212, 175, 55, 0.1);
}
```

### Media Query Example

```css
/* Add custom responsive rule */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;  /* Smaller on mobile */
    }
    
    .grid-2 {
        grid-template-columns: 1fr;  /* Single column */
    }
    
    .navbar {
        padding: 0.5rem 0;  /* Less padding */
    }
}
```

---

## 🔄 Common Replacements (Find & Replace)

### Global Replace Commands

| Find | Replace | Notes |
|------|---------|-------|
| `Cabinet Juridique` | `Your Firm Name` | Business name |
| `Maître Jean Dupont` | `Your Name` | Lawyer name |
| `+33 1 23 45 67 89` | `Your Phone` | Phone number |
| `contact@cabinetjuridique.fr` | `Your Email` | Email address |
| `123 Rue de la Justice` | `Your Address` | Street address |
| `75001 Paris` | `Your City` | City/Postal code |
| `Droit Civil` | `Your Service` | Service names |
| `À partir de 500€` | `Your Price` | Pricing |

---

## 📌 Quick Tips

### CSS Variables Quick Reference
```css
:root {
    /* Main colors */
    --primary-color: #1a365d;
    --secondary-color: #2d5a8c;
    --accent-color: #d4af37;
    
    /* Backgrounds */
    --light-bg: #f5f7fa;
    --white: #fff;
    
    /* Text colors */
    --text-dark: #222;
    --text-light: #666;
    
    /* Borders */
    --border-color: #ddd;
    
    /* Status colors */
    --success-color: #27ae60;
    --error-color: #e74c3c;
}
```

### HTML Structure Template
```html
<!-- Page section template -->
<section class="service-section">
    <div class="container">
        <!-- Header -->
        <div class="section-header">
            <h2>Section Title</h2>
            <p>Section subtitle</p>
        </div>
        
        <!-- Content -->
        <div class="service-grid">
            <!-- Cards here -->
        </div>
    </div>
</section>
```

### Form Structure Template
```html
<!-- Form field template -->
<div class="form-group">
    <label for="fieldId">Field Label *</label>
    <input 
        type="text" 
        id="fieldId" 
        name="fieldName"
        placeholder="Placeholder text"
        required
    >
    <span class="error-message" id="fieldIdError"></span>
</div>
```

---

## 🎯 Icon Library Reference

Font Awesome 6 commonly used icons:

```
Symbols:
- fa-scales (⚖️) 
- fa-gavel (🔨)
- fa-balance-scale (⚖️)
- fa-judge (👨‍⚖️)

Business:
- fa-briefcase (💼)
- fa-building (🏢)
- fa-handshake (🤝)
- fa-trophy (🏆)

Communication:
- fa-envelope (✉️)
- fa-phone-alt (📞)
- fa-comments (💬)
- fa-megaphone (📢)

Navigation:
- fa-home (🏠)
- fa-map-marker-alt (📍)
- fa-arrow-up (↑)
- fa-chevron-down (v)

Media:
- fa-star (⭐)
- fa-heart (❤️)
- fa-lock (🔒)
- fa-shield (🛡️)

Utilities:
- fa-check (✓)
- fa-times (✗)
- fa-clock (🕐)
- fa-calendar (📅)
```

Full list: https://fontawesome.com/icons

---

## 🚀 Quick Deployment Checklist

```bash
# 1. Test locally
python -m http.server 8000

# 2. Check all links work
# - Test all navigation
# - Test all forms
# - Test all buttons

# 3. Verify content
# - Contact info updated
# - Services updated
# - Photos added

# 4. Deploy to Netlify
# - Drag folder to Netlify
# - Get live URL
# - Share with clients

# 5. Monitor
# - Check for errors
# - Monitor performance
# - Collect feedback
```

---

## 📚 Resources

- **Font Awesome**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/
- **Color Picker**: https://htmlcolorcodes.com/
- **CSS Generator**: https://cssgenerator.org/
- **Responsive Tester**: https://responsively.app/

---

## ✅ Final Checklist

- [ ] Updated all contact information
- [ ] Changed lawyer name
- [ ] Changed business name
- [ ] Updated services
- [ ] Added photos
- [ ] Updated colors (if needed)
- [ ] Updated testimonials
- [ ] Tested all forms
- [ ] Tested on mobile
- [ ] Tested all links
- [ ] Ready to deploy

---

**Good luck with your customization! 🎉**
