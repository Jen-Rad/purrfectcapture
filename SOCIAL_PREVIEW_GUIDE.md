# Social Media Preview & App Icon Guide

## 🖼️ What You're Seeing

When you share `purrfectcapture.pro` in iMessage, Slack, Discord, etc., you want to see:
- ✅ Your SnapCat logo
- ✅ "Purrfect Capture" title
- ✅ "Snap it. Save it. Purrfect it." description
- ✅ Nice preview image

Instead of just a generic link!

---

## 📱 What You Need

### 1. **Favicon** (Browser Tab Icon)
- **Size**: 32×32px or 16×16px
- **Format**: `.ico` or `.png`
- **File**: `public/favicon.ico`

### 2. **App Icon** (Apple Touch Icon)
- **Size**: 180×180px
- **Format**: `.png`
- **File**: `public/apple-touch-icon.png`
- Used when someone adds your site to their iPhone home screen

### 3. **Open Graph Image** (Social Preview)
- **Size**: 1200×630px (recommended)
- **Format**: `.png` or `.jpg`
- **File**: `public/og-image.png`
- Used by Facebook, LinkedIn, iMessage, Slack, Discord

### 4. **Twitter Card Image**
- **Size**: 1200×675px (recommended)
- **Format**: `.png` or `.jpg`
- **File**: `public/twitter-image.png`
- Used by Twitter/X

---

## 🎨 Creating Your Images

### Option 1: Use Your Existing Logo

If you have the SnapCat logo as a PNG file:

**For Favicon (32×32):**
```bash
# Resize your logo to 32×32
# Use online tool: favicon.io or realfavicongenerator.net
```

**For App Icon (180×180):**
```bash
# Resize your logo to 180×180
# Make sure background isn't transparent
```

**For Social Preview (1200×630):**
```bash
# Create a nice card with:
# - Your logo centered or on the left
# - "Purrfect Capture" in big text
# - "Snap it. Save it. Purrfect it." as subtitle
# - Dark background (matching your site)
```

### Option 2: Use Canva (Free)

1. Go to canva.com
2. Search for "Open Graph Image" template (1200×630)
3. Use your brand colors (black background)
4. Add SnapCat logo
5. Add text: "Purrfect Capture"
6. Add tagline: "Snap it. Save it. Purrfect it."
7. Download as PNG

### Option 3: Use Figma (Free)

1. Create new frame: 1200×630px
2. Set background to black (#09090b)
3. Add your SnapCat logo
4. Add text with your branding
5. Export as PNG

---

## 📦 File Structure

```
purrfectcapture/
├── public/
│   ├── favicon.ico              # 32×32 browser tab icon
│   ├── apple-touch-icon.png     # 180×180 iOS icon
│   ├── og-image.png             # 1200×630 social preview
│   ├── twitter-image.png        # 1200×675 Twitter preview (optional)
│   └── icon-512.png             # 512×512 PWA icon (optional)
```

---

## 💻 Adding Meta Tags to Your Site

Update your `app/layout.tsx` file to include these meta tags:

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Purrfect Capture',
  description: 'Snap it. Save it. Purrfect it. Screenshot with purrfection—no claws attached.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Purrfect Capture',
    description: 'Snap it. Save it. Purrfect it.',
    url: 'https://purrfectcapture.pro',
    siteName: 'Purrfect Capture',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Purrfect Capture - Screenshot tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purrfect Capture',
    description: 'Snap it. Save it. Purrfect it.',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

---

## 🎯 Quick Setup Checklist

### Step 1: Get Your Logo Ready
- [ ] Find or create SnapCat logo PNG (transparent background)
- [ ] Make sure it's high quality (at least 512×512px)

### Step 2: Create Required Images
- [ ] **favicon.ico** (32×32) - Use favicon.io generator
- [ ] **apple-touch-icon.png** (180×180) - Resize logo with solid background
- [ ] **og-image.png** (1200×630) - Create social preview card

### Step 3: Add to Project
```bash
# Put files in public folder
cp ~/Downloads/favicon.ico public/
cp ~/Downloads/apple-touch-icon.png public/
cp ~/Downloads/og-image.png public/
```

### Step 4: Update Metadata
- [ ] Check if `app/layout.tsx` exists
- [ ] Add metadata configuration
- [ ] Test locally

### Step 5: Deploy & Test
```bash
git add public/
git commit -m "Add social preview images and app icons"
git push
```

Then test by sharing your link in:
- iMessage
- Slack
- Discord
- Twitter/X
- Facebook

---

## 🔧 Testing Your Preview

### Online Tools
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **Open Graph Debugger**: https://opengraph.dev/

### Quick Test
```bash
# Share this link to yourself in iMessage or Slack
https://purrfectcapture.pro
```

If it doesn't update immediately:
1. Clear the cache using the tools above
2. Wait 24 hours for cache to expire
3. Try sharing with `?v=2` at the end: `https://purrfectcapture.pro?v=2`

---

## 📐 Image Size Reference

| Type | Size | Format | Purpose |
|------|------|--------|---------|
| Favicon | 32×32 | ICO/PNG | Browser tab |
| Apple Touch Icon | 180×180 | PNG | iOS home screen |
| Open Graph | 1200×630 | PNG/JPG | Social previews |
| Twitter Card | 1200×675 | PNG/JPG | Twitter/X |
| PWA Icon | 512×512 | PNG | Progressive Web App |

---

## 🎨 Design Tips for Social Preview

**Good Preview Card:**
```
┌─────────────────────────────────────┐
│  [Logo]                             │
│                                     │
│  Purrfect Capture                  │
│  Snap it. Save it. Purrfect it.    │
│                                     │
│  [Background: Dark/Black]          │
└─────────────────────────────────────┘
```

**Key Elements:**
- Clear logo (not too small)
- Large, readable text
- Consistent with your brand colors
- Dark background (matches your site)
- Simple and clean design

---

## 🖼️ Example OG Image Prompt

If using an AI tool like Midjourney or DALL-E to create the background:

```
"Professional dark-themed social media card for a screenshot tool
called Purrfect Capture, featuring a cute pink cat mascot icon,
minimalist design, black background with subtle gradients,
modern tech aesthetic"
```

Or use your existing spinning backgrounds from the site!

---

## ⚡ Super Quick Solution

**Don't want to design?** Use your SnapCat logo on a black background:

1. Open any image editor
2. Create 1200×630 canvas with black background
3. Place your SnapCat logo in center (large)
4. Add white text: "Purrfect Capture"
5. Add gray text: "Snap it. Save it. Purrfect it."
6. Save as PNG
7. Done!

---

## 📱 Testing on iPhone

After adding `apple-touch-icon.png`:

1. Open purrfectcapture.pro on Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Your icon should appear!

---

*Make your link previews purrfect!* 🐱
