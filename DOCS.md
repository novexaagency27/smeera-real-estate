# S. Meera Real Estate — Project Documentation

Technical and architectural documentation for developers maintaining and extending the **S. Meera Real Estate** web application.

---

## 1. Project Overview

The **S. Meera Real Estate** website is a lightweight, mobile-first, high-performance static multi-page web application. It is purpose-built for an independent property consultant operating in **Anand, Gujarat** and nearby towns.

The application architecture prioritizes:
- **Instant Load Times**: Static HTML delivery without hydration lag or heavy runtime frameworks.
- **Robust Mobile Ergonomics**: Generous tap targets, custom touch chips, smooth drawer navigation, and zero layout shift.
- **Direct Lead Conversion**: Automated conversion of user requirements into structured, pre-filled WhatsApp messages sent directly to the broker's phone.

---

## 2. Tech Stack

The codebase intentionally uses **pure native web standards** with **zero external framework dependencies**:

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic elements, accessible forms, Open Graph & SEO meta tags |
| **Styling** | Vanilla CSS3 | Modular architecture, CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, Fluid `clamp()` typography |
| **Scripting** | Vanilla ES6+ JavaScript | Lightweight DOM manipulation, custom state management for the multi-step form, no npm runtime dependencies |
| **Fonts** | Google Fonts | `Playfair Display` (editorial serif headings) and `DM Sans` (clean geometric body) |
| **Assets** | Native SVG & Optimized JPEG | Vector brand logo (`logo.svg`) and high-resolution broker portrait (`broker.jpg`) |
| **Hosting / Server** | Any Static File Server | Python `http.server`, Nginx, Apache, Cloudflare Pages, Vercel, or Netlify |

*Note: The project has no `package.json` or build step by design. Files are served directly as authored.*

---

## 3. Project Structure

The project structure is minimal, clean, and organized:

```
smeera-real-estate/
├── index.html              # Home page: Hero, Broker Spotlight, Services, Local Areas, CTAs
├── requirements.html       # 5-Step interactive requirement form wizard & success modal
├── about.html              # Broker bio, philosophy, 4 operating principles, coverage
├── contact.html            # Direct WhatsApp & call cards, inquiry form, coverage
├── styles.css              # Master root CSS import bundle
├── script.js               # Legacy minimal helper script
├── sitemap.xml             # XML sitemap containing the 4 canonical routes
├── robots.txt              # Standard search engine crawler directives
├── README.md               # High-level repository overview
├── PRD.md                  # Product Requirements Document (WHAT & WHY)
├── TASK.md                 # Development & QA implementation checklist
├── DOCS.md                 # Technical & architectural documentation (THIS FILE)
│
├── assets/
│   ├── broker.jpg          # Authentic portrait photograph of S. Meera
│   ├── logo.svg            # Clean vector SVG logo
│   └── original-logo.jpg   # Source raster logo archive
│
├── css/
│   ├── design-system.css   # Global design tokens, color palette, typography scales, base resets
│   ├── components.css      # Header, drawer, buttons, form controls, chips, modal, floating WA
│   └── pages.css           # Page-specific layouts (Hero, About grid, Contact layout, Wizard)
│
└── js/
    ├── main.js             # Global navigation, mobile drawer, year helper, contact form handler
    └── requirements.js     # 5-step requirement form state engine, validation, WhatsApp builder
```

---

## 4. Routes

The platform strictly maintains **4 canonical routes**:

### `index.html` — Home (`/`)
- **Purpose**: Welcomes visitors, establishes local trust, outlines the 4 primary services (Buy, Rent, Sell, Property Guidance), showcases the authentic broker portrait, displays active Anand area tags, explains the 3-step process, and provides clear WhatsApp conversion triggers.
- **Key Scripts**: `js/main.js`.

### `requirements.html` — Post Requirement (`/requirements`)
- **Purpose**: A focused, distraction-free 5-step form wizard allowing buyers, tenants, and property sellers to submit structured property specifications.
- **Key Scripts**: `js/main.js`, `js/requirements.js`.

### `about.html` — About S. Meera (`/about`)
- **Purpose**: Features the broker profile, personal advisory approach, 4 core operating principles (Factual Assessment, Direct Accountability, Fair Pricing, Transparent Documentation), and Anand-Vidyanagar micro-market coverage.
- **Key Scripts**: `js/main.js`.

### `contact.html` — Contact Us (`/contact`)
- **Purpose**: Offers immediate direct communication options: WhatsApp consultation card, direct telephone call card, coverage explanation, and a 4-field inquiry form connected directly to WhatsApp.
- **Key Scripts**: `js/main.js`.

---

## 5. Existing Components

All components are authored in modular Vanilla CSS (`css/components.css` and `css/pages.css`) and plain HTML:

1. **Site Header (`.site-header`)**:
   - Sticky navbar with brand logo, desktop links, *"Post Your Requirement"* button, WhatsApp badge, and mobile hamburger button.
   - Adds `.scrolled` shadow on vertical scroll via `js/main.js`.
2. **Mobile Navigation Drawer (`.mobile-drawer`, `.mobile-drawer-overlay`)**:
   - Slide-out off-canvas drawer with large touch navigation links and direct WhatsApp & call buttons.
3. **Announcement Top Bar (`.top-bar`)**:
   - Displays local territory (*"Local Property Brokerage — Anand & Vidyanagar"*) and broker telephone number.
4. **Subtle Floating WhatsApp Button (`.floating-wa-btn`)**:
   - Pinned to bottom-right on mobile devices (`max-width: 768px`) with high z-index, green brand accent, and pulse dot.
5. **Breadcrumb Navigation (`.breadcrumbs`)**:
   - Accessible breadcrumbs for secondary pages (`Home / About S. Meera`).
6. **Requirement Form Wizard (`.wizard-card`)**:
   - Includes progress bar (`.wizard-progress-fill`), step panes (`.wizard-step-pane`), navigation bar (`.wizard-nav-bar`), and validation alert box (`.wizard-alert`).
7. **Chip Selectors (`.chip`, `.chip-static`)**:
   - Large touch targets for selecting property configurations, localities, and budget ranges.
8. **Selection Choice Cards (`.option-choice-card`)**:
   - Step 1 purpose selector cards (Buy, Rent, Sell) with clean border highlights and active state styling.
9. **Values 4-Grid (`.values-4-grid`, `.value-item-card`)**:
   - Minimalist cards showcasing core operating principles with gold numbers and refined typography.
10. **Contact Direct Cards (`.contact-action-card`)**:
    - Direct action blocks for WhatsApp and phone calls with custom SVG icons.
11. **Success Modal (`.modal-overlay`, `.modal-card`)**:
    - Accessible dialog presenting a confirmation summary and *"Continue on WhatsApp"* action button.

---

## 6. Form Architecture (`js/requirements.js`)

The requirement form engine is encapsulated inside a self-executing closure with pure vanilla DOM event listeners.

### State Structure
```javascript
const formData = {
  intent: 'BUY',               // 'BUY' | 'RENT' | 'SELL'
  propertyType: 'Apartment',   // 'Apartment', 'Tenement', 'Bungalow', 'Plot', etc.
  configurations: [],          // ['2 BHK', '3 BHK']
  furnishing: '',              // 'Furnished', 'Unfurnished', etc.
  location: 'Anand Town',      // Selected area chip
  locationNotes: '',           // Additional landmark text
  budget: '₹30 - 50 Lakhs',    // Price or rent range
  name: '',                    // Client full name
  phone: '',                   // 10-digit mobile number
  notes: ''                    // Optional instructions
};
```

### Form Flow & Step Logic
1. **Step 1 (Purpose)**: User selects Buy, Rent, or Sell. Dynamically adapts the options and labels in Steps 2 and 4.
2. **Step 2 (Property Type)**: Shows relevant property styles and BHK configurations.
3. **Step 3 (Location)**: Provides quick-tap chips for Anand, Vidyanagar, Karamsad, Bakrol, etc.
4. **Step 4 (Budget)**: Switches dynamically between purchase capital ranges and monthly rent brackets.
5. **Step 5 (Contact Details)**: Captures client name, mobile number, and notes.
6. **Submission**: Validates all inputs, constructs the structured WhatsApp message, displays the success modal, and prepares the direct WhatsApp trigger.

### Input Validation Rules
- Stepping from Step 1 $\rightarrow$ 2 requires an active `intent`.
- Stepping from Step 2 $\rightarrow$ 3 requires at least one selected property type.
- Stepping from Step 3 $\rightarrow$ 4 requires a selected location chip or text note.
- Stepping from Step 4 $\rightarrow$ 5 requires a selected budget range.
- Step 5 validation requires:
  - Non-empty name (`length >= 2`).
  - Valid Indian mobile number (`/^[6-9]\d{9}$/` or digits count $\ge 10$).

---

## 7. WhatsApp Integration

### Endpoint Configuration
- **Phone Number**: `919737035770`
- **Base URL**: `https://wa.me/919737035770?text=`
- **Encoder Function**: All text payloads pass through `encodeURIComponent(message.trim())`.

### Payload Constructors

#### 1. Buyer Payload
```javascript
function buildBuyerMessage(data) {
  return `Hello S. Meera Real Estate,

I have submitted my property requirement via your website:

• Requirement: BUY PROPERTY
• Property Type: ${data.propertyType} ${data.configurations.join(', ')}
• Preferred Locality: ${data.location} ${data.locationNotes ? '(' + data.locationNotes + ')' : ''}
• Budget: ${data.budget}

My Details:
• Name: ${data.name}
• Mobile: ${data.phone}
${data.notes ? '• Notes: ' + data.notes : ''}

Please share available options in Anand.`;
}
```

#### 2. Tenant / Rental Payload
```javascript
function buildRentalMessage(data) {
  return `Hello S. Meera Real Estate,

I am looking to RENT a property in Anand:

• Requirement: RENTAL / LEASE
• Property Type: ${data.propertyType}
• Preferred Locality: ${data.location}
• Monthly Budget: ${data.budget}

My Details:
• Name: ${data.name}
• Mobile: ${data.phone}
${data.notes ? '• Notes: ' + data.notes : ''}

Please let me know if any properties are available.`;
}
```

#### 3. Seller Payload
```javascript
function buildSellerMessage(data) {
  return `Hello S. Meera Real Estate,

I would like to list my property for SALE:

• Property Type: ${data.propertyType}
• Location: ${data.location}
• Expected Price: ${data.budget}

Owner Details:
• Name: ${data.name}
• Mobile: ${data.phone}
${data.notes ? '• Property Details: ' + data.notes : ''}

Please contact me to discuss.`;
}
```

#### 4. Contact Page Form Payload (`js/main.js`)
```javascript
const waText = `Hello S. Meera Real Estate,

I would like to get in touch regarding:
• Requirement / Query: ${service}

Name: ${name}
Mobile: ${phone}
${message ? 'Message:\n' + message : ''}

Please contact me.`;
```

---

## 8. Branding & Design Tokens

Design tokens are defined in `css/design-system.css`:

### Color System
```css
:root {
  /* Warm Luxury Neutrals */
  --bg-page: #FAF8F5;          /* Warm ivory background */
  --bg-surface: #FFFFFF;       /* Crisp card white */
  --bg-subtle: #F3EFE7;        /* Soft sand / beige accent */
  --bg-dark: #141A17;          /* Deep forest charcoal for CTA strip & footer */

  /* Typography Colors */
  --text-primary: #1A221E;     /* Deep rich charcoal */
  --text-secondary: #525C56;   /* Balanced readable secondary */
  --text-muted: #838E88;       /* Subtle helper text */
  --text-light: #FFFFFF;       /* Pure white on dark surfaces */
  --text-light-muted: #CBD5CE; /* Soft gray on dark surfaces */

  /* Gold / Bronze Accents */
  --gold-primary: #B88A28;     /* Restrained warm gold */
  --gold-hover: #9E741E;       /* Deepened gold hover */
  --gold-light: #FBF6EC;       /* Soft gold tint for highlights */
  --gold-border: #E8D5AC;      /* Elegant metallic border */

  /* WhatsApp Brand Green */
  --wa-green: #25D366;
  --wa-green-hover: #1EBE5B;

  /* Borders & Shadows */
  --border-light: #EBE6DC;
  --border-medium: #D9D2C3;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --shadow-sm: 0 2px 8px rgba(26, 34, 30, 0.04);
  --shadow-md: 0 8px 24px rgba(26, 34, 30, 0.07);
}
```

### Typography Scale
- **Headings Font**: `'Playfair Display', Georgia, serif`
- **Body & UI Font**: `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif`
- **Fluid Sizing**: Utilizes CSS `clamp()` (e.g. `clamp(2rem, 3.8vw, 3.2rem)`) to prevent awkward line breaks on mobile.

---

## 9. Image Assets & Policy

### Active Assets
- `assets/broker.jpg`: Authentic client portrait of S. Meera.
- `assets/logo.svg`: SVG brand identity mark.
- `assets/original-logo.jpg`: Source raster logo archive.

### Strict Asset Rules
- ❌ **No AI Property Photographs**: Synthetic AI luxury villas or foreign apartment towers are strictly forbidden.
- ❌ **No Stock Placeholders**: No unsourced stock photos from third-party sites.
- Only genuine photos supplied directly by the client or verified local property owners may be added in the future.

---

## 10. Responsive Architecture

The project adheres to a **mobile-first layout strategy**:

### Breakpoint Structure
- **Mobile Standard (`< 600px`)**:
  - All multi-column grids collapse into a single column (`grid-template-columns: 1fr`).
  - Option choice cards and service cards stretch to full container width.
  - Floating WhatsApp button displays on the screen.
- **Tablet / Phablet (`600px – 900px`)**:
  - Services grid displays 2 columns (`grid-template-columns: repeat(2, 1fr)`).
  - Broker hero and about layouts collapse to vertical stack to preserve readable text line length.
- **Desktop (`> 900px`)**:
  - Full multi-column grids: 3-column wizard options, 2-column hero split, 2-column contact layout.
  - Desktop horizontal navigation bar is active; mobile hamburger button is hidden.

---

## 11. Local Content & Geographic Rules

### Geographic Boundary
- **City & District**: **Anand, Gujarat**
- **Approved Localities**:
  - Anand Town
  - Vallabh Vidyanagar (Vidyanagar)
  - Karamsad
  - Bakrol
  - Lambhvel
  - Mogri
  - Chikhodra
  - Boriavi
  - Vithal Udyognagar (GIDC)

### Absolute Exclusion Rule
- **NEVER mention Ahmedabad anywhere in the project** (HTML, CSS, JS, meta tags, sitemaps, or documentation) unless explicitly instructed by the business owner.

---

## 12. Content Integrity Rules

The website's primary asset is trust. Content must never fabricate:
- ❌ Invented transaction counts (e.g. *"Over 5,000+ happy clients"*).
- ❌ Fake testimonials or manufactured client reviews.
- ❌ Fictitious property listings with fabricated prices and specs.
- ❌ Imaginary corporate office addresses.
- ❌ Fictitious awards or industry certifications.

---

## 13. Development Guidelines for Future Engineers

When adding features or modifying code:
1. **Preserve Native Standards**: Do NOT introduce heavyweight frameworks (React, Vue, Tailwind, Bootstrap, jQuery) unless requested.
2. **Use Existing Design Tokens**: Always style components using `var(--color-name)` from `css/design-system.css`.
3. **Keep Files Modular**:
   - Layout & reset $\rightarrow$ `css/design-system.css`
   - Reusable buttons, inputs, headers $\rightarrow$ `css/components.css`
   - Page-specific sections $\rightarrow$ `css/pages.css`
4. **Maintain Accessibility**: All new buttons and inputs must have accessible labels and visible focus rings.
5. **Test Touch Ergonomics**: Test all interactive changes on mobile viewports ($\le 390\text{px}$).

---

## 14. Running & Serving the Project

Because the project is built with static web standards, it requires no compilation or package installation.

### Local Development Server

#### Option 1: Python 3 (Standard)
```bash
python3 -m http.server 3000
```
Open your browser at `http://localhost:3000`.

#### Option 2: Node.js / NPX
```bash
npx serve .
```

#### Option 3: Direct File Viewing
Double-click `index.html` or open any `.html` file directly in Google Chrome, Safari, or Mozilla Firefox.

---

## 15. Testing & Verification Procedures

### 1. Cross-Device Responsive Testing
Verify all 4 pages at the following widths:
- `320px` (iPhone 5/SE compact)
- `375px` / `390px` (Standard iOS)
- `414px` / `430px` (Large iOS)
- `768px` / `820px` (iPad)
- `1024px` / `1280px` / `1440px` (Desktop)
*Check for: zero horizontal scrollbars, proper button touch heights, and no overlapping text.*

### 2. Requirement Form Verification
1. Navigate to `requirements.html`.
2. Select **Buy**, click Next.
3. Select **2 BHK**, click Next.
4. Select **Vallabh Vidyanagar**, click Next.
5. Select **₹30 - 50 Lakhs**, click Next.
6. Enter name and a 10-digit mobile number, click Submit.
7. Confirm the success modal appears with the exact data summarized.
8. Click *"Continue on WhatsApp"* and verify the generated URL payload.

### 3. Contact Form Verification
1. Navigate to `contact.html`.
2. Fill Name and Mobile number.
3. Select an interest from the dropdown.
4. Click *"Connect on WhatsApp"*.
5. Confirm the pre-filled message contains the user's name and query.

### 4. Codebase Integrity Check
Run ripgrep to ensure zero mentions of prohibited terms:
```bash
grep -rnwi "ahmedabad" .
```
*(Must return 0 results).*

---

## 16. Future Integration Architecture

The following integrations can be plugged into the existing static architecture if required in future phases:

1. **Serverless Lead Storage (Supabase / Firebase)**:
   - Wire `requirements.js` submit event to `fetch('https://your-project.supabase.co/rest/v1/leads')` before launching WhatsApp to persist inquiries in a PostgreSQL database.
2. **WhatsApp Business Cloud API (Meta)**:
   - Connect the front-end to a serverless webhook to trigger automated WhatsApp confirmation messages to the client simultaneously.
3. **Headless CMS for Local Blog / Market Updates**:
   - If the client decides to publish local Anand real-estate market guides, integrate a lightweight static site generator (e.g. 11ty or Astro) or headless CMS (Decap CMS / Sanity).
4. **Verified Property Showcase**:
   - If genuine client-supplied listings become available, create a lightweight JSON data file (`data/properties.json`) loaded dynamically via Vanilla `fetch()`.

*Do NOT implement any backend or database integrations until explicitly requested.*
