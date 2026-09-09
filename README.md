# S. Meera Real Estate — Personal Property Consultant Website

A simple, premium, mobile-first website for **S. Meera Real Estate**, an independent local real estate broker and property consultant serving **Anand, Gujarat** and nearby areas.

---

## 🏛️ Business & Contact Details
- **Brand**: S. Meera Real Estate
- **Role**: Personal Property Broker & Consultant
- **Location**: Anand, Gujarat
- **Service Territory**: Anand Town, Vallabh Vidyanagar, Karamsad, Bakrol, Lambhvel, Mogri, Chikhodra, Boriavi, Vithal Udyognagar (GIDC).
- **Direct Line & WhatsApp**: `+91 97370 35770` (`https://wa.me/919737035770`)

---

## 💎 Design Philosophy & Aesthetics
- **Warm Luxury Palette**: Soft warm ivory (`#FAF8F5`) and warm light beige (`#F3EFE7`) backgrounds, crisp white card surfaces (`#FFFFFF`), deep charcoal typography (`#1A221E`), and restrained warm gold/bronze accents (`#B88A28`).
- **Authentic & Human-Led**: Features genuine client broker portrait (`assets/broker.jpg`). Zero fake AI property images, zero fabricated transaction numbers, zero large portal bloat.
- **Mobile-First Touch Ergonomics**: Native chips, comfortable tap targets (min 46–48px), responsive layout without horizontal overflow, and a subtle floating mobile WhatsApp button.

---

## 📑 Core 4-Page Structure
1. **`index.html` (Home)**
   - Welcoming hero headline: *"Find the Right Property in Anand. Without the Usual Stress."*
   - Authentic broker portrait showcase
   - Quick Requirement CTA card
   - What We Help With (4 core services: Buy, Rent, Sell, Property Guidance)
   - Local Area coverage tags (Anand, Vidyanagar, Karamsad, Bakrol, etc.)
   - How It Works (3 clear, honest steps)
   - Personal broker introduction
   - Call to Action strip & trustworthy footer

2. **`requirements.html` (Post Requirement)**
   - Focused, single-card 5-step adaptive wizard (Intent → Property Type → Location → Budget → Contact)
   - Native chip selectors for easy mobile thumb tapping
   - Real-time client-side validation
   - Automated WhatsApp lead generation formatted specifically for Buyers, Renters, and Sellers
   - Completion modal with direct WhatsApp redirection button

3. **`about.html` (About S. Meera)**
   - Authentic broker profile with photo and direct consultation contacts
   - Story and philosophy behind independent, relationship-led property consulting in Anand
   - 4 core operating principles (Factual Assessment, Direct Accountability, Fair Pricing, Transparent Documentation)
   - Active micro-market coverage across Anand and nearby towns

4. **`contact.html` (Contact Us)**
   - Direct contact actions: WhatsApp consultation & Direct phone call
   - Service territory clarification
   - Simple 4-field inquiry form connected directly to WhatsApp

---

## 🚀 Running Locally
```bash
# Python 3
python3 -m http.server 3000

# or NPX
npx serve .
```
Access at: `http://localhost:3000`

---

## 🛠️ Codebase Architecture
- `css/design-system.css`: Color variables, typography tokens, layout utilities, elevation shadows.
- `css/components.css`: Header, mobile drawer, buttons, form inputs, chips, wizard progress bar, modal, floating WhatsApp button.
- `css/pages.css`: Clean layouts for Home, Requirements, About, and Contact pages.
- `js/main.js`: Sticky navigation, mobile drawer toggle, year updater, WhatsApp URL generator, and contact form handler.
- `js/requirements.js`: Adaptive 5-step wizard state engine, dynamic option branching, validation, and structured WhatsApp lead builder.
- `assets/broker.jpg`: Authentic client portrait.
- `assets/logo.svg`: Brand logo.
