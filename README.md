# 🐱 SnapCat - Purrfect Screenshot Captures

**🌐 Live at:** [purrfectcapture.pro](https://purrfectcapture.pro)

A beautiful screenshot capture app with a fun cat-themed design!

## ✨ Features

- 📸 **One-Click Screen Capture** - Capture your entire screen, window, or browser tab
- 💾 **Download to Desktop** - Save screenshots directly to your local machine
- ☁️ **Cloud Storage** (Optional) - Save to Vercel Blob for permanent storage
- 🎨 **Beautiful UI** - Animated gradient backgrounds and smooth transitions
- 🐱 **SnapCat Logo** - Fun cat pun branding with "PURRFECT CAPTURES"

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit **http://localhost:3000/capture** to use the app!

## 📱 Pages

- **Waitlist Hero:** http://localhost:3000 - Original waitlist design
- **Screenshot Capture:** http://localhost:3000/capture - Main screenshot app ⭐
- **File Upload:** http://localhost:3000/screenshot - Manual file upload

## 🎯 How to Use

1. Click **"Take Screenshot"**
2. Select what you want to capture (screen, window, or tab)
3. Preview your screenshot
4. Choose your save option:
   - **Download to Desktop** - Saves as `snapcat-[timestamp].png` to your Downloads folder
   - **Save to Cloud** - Requires Vercel Blob setup (optional)

## 🔧 Cloud Storage Setup (Optional)

If you want to save screenshots to the cloud:

1. Go to https://vercel.com/dashboard
2. Create a Blob store
3. Copy your `BLOB_READ_WRITE_TOKEN`
4. Create `.env.local` file:

```env
BLOB_READ_WRITE_TOKEN=your_token_here
```

5. Restart the dev server

## 🎨 Branding

**SnapCat** - Screenshot app with a playful cat theme
- Logo: Pink cat with sunglasses and camera flash
- Tagline: "PURRFECT CAPTURES"
- Screenshots saved as: `snapcat-[timestamp].png`

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel Blob** - Optional cloud storage
- **getDisplayMedia API** - Native browser screen capture

## 📝 Notes

- Screenshots are saved in PNG format
- Files are automatically named with timestamp
- Works in Chrome, Edge, and other modern browsers
- Safari support may vary

Enjoy your purrfect screenshots! 🐱📸
