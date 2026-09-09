# S. Meera Real Estate — Product Requirements Document

## 1. Product Overview

**S. Meera Real Estate** is a dedicated web presence for an independent, local real-estate broker and property consultant operating in **Anand, Gujarat** and its immediately surrounding areas.

### Purpose of the Product
- **Establish Trust**: Present a personal, accountable, transparent, and approachable local real-estate consultant.
- **Explain Services Clearly**: Demystify what the broker helps with (buying, renting, selling, and property paperwork/guidance) without industry jargon.
- **Effortless Contact**: Make connecting with the broker instantaneous via WhatsApp and direct telephone calls.
- **Collect Tailored Property Requirements**: Provide an intuitive, low-friction, single-card step-by-step form to capture buyer, tenant, and seller requirements.
- **Generate Qualified Leads**: Automatically convert completed property inquiries into clean, structured, pre-formatted WhatsApp messages delivered directly to the broker.

### Product Distinction
This product is **NOT** a massive real-estate marketplace or aggregated portal. It does **NOT** behave like, nor attempt to emulate:
- 99acres
- MagicBricks
- Housing.com

It is a boutique, relationship-led, local broker platform focused on personal service, verified local knowledge, and direct human-to-human communication.

---

## 2. Business Information

- **Brand**: S. Meera Real Estate
- **Business Type**: Real Estate Broker / Property Consultant
- **Primary Location**: Anand, Gujarat
- **Active Service Territory**:
  - Anand Town
  - Vallabh Vidyanagar (Vidyanagar)
  - Karamsad
  - Bakrol
  - Lambhvel
  - Mogri
  - Chikhodra
  - Boriavi
  - Vithal Udyognagar (GIDC)
- **Geographic Boundary & Rule**:
  - Do NOT claim the broker operates in any location unless confirmed.
  - **Zero Tolerance Policy**: Never use "Ahmedabad" anywhere in the project (copy, metadata, comments, or documentation).
- **Direct Phone & WhatsApp**: `+91 97370 35770`
- **WhatsApp Web Link**: `https://wa.me/919737035770`

---

## 3. Product Goals

### Primary Goal
- **Generate qualified, actionable real-estate enquiries** by connecting prospective clients directly with S. Meera on WhatsApp.

### Secondary Goals
- **Build Local Trust**: Establish immediate credibility through authentic imagery, genuine local area focus, and transparent operating principles.
- **Present the Broker Professionally**: Provide a clean, modern, and polished alternative to chaotic classified portals and generic builder advertisements.
- **Make the Business Easy to Understand**: Ensure first-time home buyers, families, and relocating professionals understand the scope of services within 5 seconds of landing.
- **Make WhatsApp Contact Effortless**: Place direct WhatsApp triggers contextually across headers, heroes, sections, forms, and mobile sticky bars.
- **Make Submitting a Requirement Simple**: Deliver a 5-step touch-friendly questionnaire that can be completed on a mobile phone in under 60 seconds.
- **Deliver a Superior Mobile-First Experience**: Optimize for mobile viewports where over 80% of local real-estate searches occur.

---

## 4. Target Users

1. **Property Buyers**:
   - Families looking for ready-to-move or resale apartments, tenements, or bungalows in Anand and Karamsad.
   - Long-term investors seeking plotted developments or commercial shops with steady rental yields.
2. **Property Renters**:
   - Families relocating to Anand or Vidyanagar for work or business.
   - University faculty, doctors, and students associated with Sardar Patel University, BVM, GCET, Charusat, or Pramukhswami Medical College seeking clean rental flats.
3. **Property Sellers & Landlords**:
   - Local property owners who want to sell residential apartments, houses, or plots without dealing with unsolicited calls from call centers.
   - Landlords looking for vetted, dependable tenants for their residential or commercial properties.
4. **Local Businesses & Retailers**:
   - Small business owners looking for office cabins, retail showrooms, or godown spaces in Anand and Vithal Udyognagar.

---

## 5. Core User Journey

```
┌─────────────────────────────────────────────────────────┐
│                       HOME PAGE                         │
│   (Hero, Broker Photo, Services, Local Areas, CTAs)     │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│               "TELL US YOUR REQUIREMENT"                │
│    (Quick CTA / Navigation Link / Header Button)        │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│            5-STEP REQUIREMENT FORM WIZARD               │
│   1. Purpose: Buy / Rent / Sell                         │
│   2. Property Type: Apartment, Tenement, Plot, etc.     │
│   3. Preferred Locality: Anand, Vidyanagar, etc.        │
│   4. Budget / Price Range                               │
│   5. Contact Info: Name & Mobile Number                 │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 REQUIREMENT SUBMITTED                   │
│         (Success Modal with Structured Summary)         │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│               WHATSAPP CONVERSATION                     │
│    (Structured pre-filled message sent to broker)       │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│             DIRECT BROKER CONSULTATION                  │
│    (S. Meera shares options & schedules site visits)    │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Website Pages & Information Architecture

The website strictly consists of **4 canonical pages**:

1. **`/` (`index.html`) — Home**
   - Introduces the broker, outlines core services, highlights Anand localities, and provides direct contact routes.
2. **`/requirements` (`requirements.html`) — Property Requirement Form**
   - Single-card 5-step adaptive form wizard for posting buy, rent, or sell needs.
3. **`/about` (`about.html`) — About S. Meera**
   - Broker portrait, professional philosophy, operating principles, and micro-market coverage.
4. **`/contact` (`contact.html`) — Contact Us**
   - Direct call/WhatsApp cards, service territory explanation, and quick inquiry form.

### Route Exclusions
The site does **NOT** feature individual listing or category portal pages:
- ❌ No `/buy`
- ❌ No `/rent`
- ❌ No `/sell`
- ❌ No `/properties`
- ❌ No `/property/[slug]`
- ❌ No `/services`

All inquiries and listings are handled personally and dynamically by the broker via WhatsApp.

---

## 7. Homepage Requirements

The Home page must deliver the following components in sequential order:

1. **Top Announcement Bar**:
   - Location tag: *"Local Property Brokerage — Anand & Vidyanagar"*.
   - Direct phone & WhatsApp link (`+91 97370 35770`).
2. **Global Header**:
   - Brand SVG logo.
   - Desktop navigation (`Home`, `About`, `Contact`).
   - Action buttons: *"Post Your Requirement"* (primary button) and *"WhatsApp"* (direct green badge).
   - Accessible mobile menu toggle (hamburger).
3. **Hero Section**:
   - High-trust headline: *"Find the Right Property in Anand. Without the Usual Stress."*
   - Subtitle describing personal guidance across Anand and Vidyanagar.
   - Authentic broker portrait card (`assets/broker.jpg`).
   - Quick Requirement CTA card with intent buttons (Buy, Rent, Sell).
4. **"What We Help With" (Services Grid)**:
   - 4 clean cards:
     1. *Buying a Property* (Apartments, tenements, bungalows, and plots).
     2. *Renting a Home or Space* (Vetted rental homes and commercial properties).
     3. *Selling Your Property* (Direct buyer scouting with no spam).
     4. *Property Guidance & Paperwork* (Title checks, agreements, and documentation support).
5. **Local Area Coverage**:
   - Clean, interactive chip group highlighting Anand, Vallabh Vidyanagar, Karamsad, Bakrol, Lambhvel, Mogri, Chikhodra, Boriavi, and Vithal Udyognagar.
6. **"How It Works" (3-Step Process)**:
   - Step 1: *Share Your Requirement* (Online form or direct WhatsApp message).
   - Step 2: *Curated Options & Site Visits* (Only matching, verified properties).
   - Step 3: *Fair Negotiation & Closing* (Honest pricing and complete documentation support).
7. **Broker Introduction Spotlight**:
   - Side-by-side feature card with the authentic broker photograph.
   - Personal statement on why independent property advisory works best for clients in Anand.
8. **Call to Action Strip**:
   - High-contrast card with headline *"Ready to Discuss Your Property?"*, requirement form link, and WhatsApp button.
9. **Global Footer**:
   - Brand logo, business overview, quick navigation links, direct broker contact details, and copyright bar.

---

## 8. Requirement Form Requirements

The form is hosted at `requirements.html` and rendered inside a single card with a live progress bar.

### Step 1: Purpose / Intent
- Selectable choice cards / chips:
  - **Buy Property** (Default)
  - **Rent / Lease**
  - **Sell Property**

### Step 2: Property Type & Configuration
- **If Buy or Rent**:
  - BHK configurations: `1 RK`, `1 BHK`, `2 BHK`, `3 BHK`, `4+ BHK`.
  - Property styles: `Apartment / Flat`, `Tenement / Row House`, `Independent Bungalow / Villa`, `Residential Plot / Land`, `Commercial Office / Shop`, `Industrial / Godown`.
  - Furnishing status: `Unfurnished`, `Semi-Furnished`, `Fully Furnished`.
- **If Sell**:
  - Property category: `Residential Flat / Apartment`, `Independent House / Bungalow`, `Residential Plot`, `Commercial Space`.
  - Ownership & Age of property.

### Step 3: Preferred Location in Anand
- Quick-select chips:
  - `Anand Town`
  - `Vallabh Vidyanagar`
  - `Karamsad`
  - `Bakrol`
  - `Lambhvel Road`
  - `Mogri / Gana`
  - `Chikhodra`
  - `Boriavi`
  - `Vithal Udyognagar (GIDC)`
  - `Any Nearby Area`
- Additional notes field for landmark or specific neighborhood preferences.

### Step 4: Budget Range
- **If Buy**: Range chips (e.g. `Under ₹25 Lakhs`, `₹25 - 40 Lakhs`, `₹40 - 65 Lakhs`, `₹65 Lakhs - 1 Crore`, `Above ₹1 Crore`).
- **If Rent**: Monthly rent range chips (e.g. `Under ₹8,000/mo`, `₹8,000 - 15,000/mo`, `₹15,000 - 25,000/mo`, `Above ₹25,000/mo`).
- **If Sell**: Expected selling price input or range selector.

### Step 5: Contact Details & Submission
- Client Full Name (Required).
- Mobile / WhatsApp Number (Required, 10-digit Indian mobile validation).
- Optional notes or preferred time to call.
- Submit Button: *"Submit Requirement & Connect on WhatsApp"*.

---

## 9. Dynamic Form Logic

The form adapts dynamically based on user selections in Step 1:

| User Choice | Step 2 Content | Step 4 Content | WhatsApp Message Tone |
| :--- | :--- | :--- | :--- |
| **BUY** | Apartment, Tenement, Villa, Plot, Commercial | Purchase budget ranges (Lakhs / Crores) | *"I am looking to BUY a property in Anand"* |
| **RENT** | Residential Flats, Shared/Single, Commercial Office | Monthly rental ranges (₹/month) | *"I am looking to RENT a property in Anand"* |
| **SELL** | Property type, age, area specifications | Expected sale price / valuation ask | *"I want to SELL my property in Anand"* |

### Validation Rules
- Stepping forward requires at least one valid selection in the current step.
- Mobile number must contain at least 10 numeric digits.
- Empty required fields show accessible inline error notifications.

---

## 10. WhatsApp Integration

### Phone & Endpoint
- Broker Number: `919737035770`
- Base URL: `https://wa.me/919737035770?text=`
- All text payloads must be strictly URL-encoded (`encodeURIComponent`).

### Structured Message Examples

#### Buyer Message Format
```
Hello S. Meera Real Estate,

I have submitted my property requirement through your website:

• Purpose: BUY
• Looking For: 2 BHK Apartment
• Preferred Locality: Vallabh Vidyanagar
• Budget: ₹30 - 50 Lakhs
• Timeline: Immediate

My Contact Details:
• Name: Ramesh Patel
• Mobile: 9876543210

Please share matching options and property details.
```

#### Seller Message Format
```
Hello S. Meera Real Estate,

I would like to list my property for SALE:

• Purpose: SELL
• Property: 3 BHK Independent Bungalow
• Locality: Karamsad
• Expected Price: ₹75 Lakhs

My Contact Details:
• Name: Suresh Shah
• Mobile: 9825012345

Please contact me to discuss.
```

### Success Modal Behavior
When the user submits the form:
1. Form inputs are validated.
2. The structured message is prepared.
3. A success confirmation modal displays a summary of their submission.
4. Clicking *"Continue on WhatsApp"* opens WhatsApp with the message ready to send.

---

## 11. Branding Requirements

### Aesthetic Direction
A **warm, light luxury aesthetic** conveying stability, transparency, and personal care. The design must feel human-crafted and bespoke, not like a template.

### Color Palette
- **Warm Ivory / Background**: `#FAF8F5`
- **Soft Beige / Section Accent**: `#F3EFE7`
- **Card Surface**: `#FFFFFF`
- **Typography Charcoal**: `#1A221E`
- **Secondary Text**: `#58635D`
- **Muted Gold / Bronze Primary**: `#B88A28`
- **Gold Hover**: `#9E741E`
- **Light Gold Accent**: `#F9F4EB`
- **WhatsApp Green**: `#25D366`

### Prohibited Styles
- ❌ No dark/black theme for the entire site.
- ❌ No neon or cyber aesthetics.
- ❌ No gaming or crypto visual motifs.
- ❌ No heavy glassmorphism or blurred backgrounds that compromise text contrast.
- ❌ No jarring multi-color gradients.

---

## 12. Image Requirements

### Allowed Images
1. **Actual Broker Photograph**: `assets/broker.jpg` (authentic portrait of S. Meera).
2. **Supplied Brand Logo**: `assets/logo.svg` (and original reference `assets/original-logo.jpg`).
3. **Client-Supplied Photos**: Genuine property photos provided by actual property owners in the future.

### Strict Asset Constraints
- **Zero AI-generated property photos**: No synthetic villas, AI mansions, or generic foreign architecture.
- **Zero fake property listings**: Do not show cards of nonexistent apartments with fabricated prices.

---

## 13. Responsive Requirements

The design follows a **strict mobile-first philosophy**, ensuring complete usability across all screen widths without horizontal scrollbars:

### Tested Viewport Widths
- **Mobile**: `320px`, `360px`, `375px`, `390px`, `414px`, `430px`, `480px`
- **Tablet / Phablet**: `600px`, `768px`, `820px`
- **Laptop & Desktop**: `1024px`, `1280px`, `1366px`, `1440px`, `1600px`, `1920px`

### Mobile Ergonomics
- Minimum touch target height: `46px` to `48px` for all buttons, inputs, and chips.
- Sticky mobile navigation drawer with large tap items.
- Subtle floating WhatsApp button pinned to the lower-right corner on mobile viewports.
- Single-column vertical flow on screens below `768px`.

---

## 14. Accessibility (A11y)

- **Semantic HTML**: Proper usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Heading Hierarchy**: Exactly one `<h1>` per page, followed by logical `<h2>` and `<h3>` tags.
- **Form Controls**: All inputs have associated `<label>` elements or accessible `aria-label` tags.
- **Keyboard Usability**: Visible `:focus-visible` outlines on all interactive elements.
- **Color Contrast**: All body text meets WCAG AA contrast ratio standards (4.5:1 against backgrounds).
- **Responsive Typography**: Uses fluid typography (`clamp()`) ensuring readability without breaking layouts.

---

## 15. Performance

- **Zero Heavy Frameworks**: No React, Vue, Angular, or jQuery runtime overhead.
- **Native Vanilla Stack**: Pure HTML5, Vanilla CSS3, and modern ES6+ JavaScript.
- **Fast Load Times**: Page sizes under 50KB (excluding optimized images).
- **Self-Contained Styling**: Three modular CSS files (`design-system.css`, `components.css`, `pages.css`).
- **Hardware-Accelerated Transitions**: All CSS animations utilize `transform` and `opacity` for smooth 60fps mobile scrolling.

---

## 16. Search Engine Optimization (SEO)

- **Descriptive Titles**: Tailored per page incorporating "S. Meera Real Estate", "Anand", and "Property Consultant".
- **Compelling Meta Descriptions**: Clear summaries of local brokerage services.
- **Open Graph Metadata**: Complete `og:title`, `og:description`, and `og:type` tags.
- **Canonical `sitemap.xml`**: Reflects only the 4 live pages.
- **Compliant `robots.txt`**: Configured to allow complete search engine crawling.
- **Zero Keyword Stuffing**: Authentic local keyword density focused on Anand and Vidyanagar.

---

## 17. Non-Goals (Explicit Exclusions)

To ensure focus and simplicity, the product explicitly **DOES NOT** include:
- ❌ Large multi-portal property search engines.
- ❌ Fake property listings with stock photos and imaginary rents.
- ❌ AI-generated property imagery.
- ❌ Complex multi-parameter listing filters.
- ❌ Separate `/buy`, `/rent`, `/sell`, or `/properties` sub-pages.
- ❌ Dedicated bedroom-count sub-pages (`/1-bhk`, `/2-bhk`).
- ❌ Fake user reviews, fabricated awards, or invented transaction counts.
- ❌ Fabricated corporate office addresses.
- ❌ Any mention or positioning of the business in Ahmedabad.
