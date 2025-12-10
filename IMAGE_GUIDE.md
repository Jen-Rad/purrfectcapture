# Image Storage Guide for Purrfect Capture

## 📁 Where to Store Images

### Using the `public` Folder (Recommended)

```
purrfectcapture/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── cat-icon.png
│   │   └── backgrounds/
│   │       ├── bg-1.png
│   │       ├── bg-2.png
│   │       └── bg-3.png
│   ├── favicon.ico
│   └── cat-excited.jpg  # (you already have this!)
```

**How to reference them:**
```tsx
// In your React components
<img src="/images/logo.png" alt="Logo" />
<img src="/cat-excited.jpg" alt="Cat" />

// From CSS
background-image: url('/images/backgrounds/bg-1.png');
```

---

## ✅ When to Store Images in Your Repo

**YES - Store these in your repo:**
- ✅ Logo files
- ✅ Icons
- ✅ UI elements (buttons, decorations)
- ✅ Favicon
- ✅ Small background images (<500KB)
- ✅ Images that rarely change

**NO - Don't store these in your repo:**
- ❌ User-uploaded screenshots
- ❌ Very large images (>5MB)
- ❌ Videos
- ❌ Frequently changing content
- ❌ Temporary files

---

## 📏 Image Size Guidelines

### Size Limits
- **Logos/Icons**: Keep under 100KB
- **Background images**: Keep under 500KB
- **Photos**: Keep under 1MB
- **Total repo size**: Try to stay under 100MB

### Currently Used External Images

Your site currently uses these **external** images from Framer:
1. `https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048` (2000×2000px)
2. `https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024` (1000×1000px)
3. `https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png` (800×800px)

**Location**: [app/page.tsx](app/page.tsx) lines 70, 89, 108

---

## 🔄 Should You Move External Images to Your Repo?

### Pros of Moving to Repo
✅ Full control over images
✅ No dependency on external CDN
✅ Guaranteed availability
✅ Can optimize specifically for your needs

### Cons of Moving to Repo
❌ Increases repo size
❌ Makes git operations slower
❌ Uses your Vercel bandwidth
❌ Framer's CDN is already optimized

### Recommendation
**Keep using external images** if:
- They're already optimized
- The external CDN is reliable
- File sizes are reasonable

**Move to repo** if:
- You want to customize them
- External source might disappear
- You're worried about loading speed

---

## 🖼️ How to Add Images to Your Repo

### Step 1: Create Organized Folders
```bash
mkdir -p public/images/{backgrounds,icons,logos}
```

### Step 2: Add Your Images
Put your image files in the appropriate folder:
```
public/
├── images/
│   ├── backgrounds/
│   │   ├── spin-bg-1.png
│   │   ├── spin-bg-2.png
│   │   └── spin-bg-3.png
│   ├── icons/
│   │   └── snapcat-icon.png
│   └── logos/
│       └── snapcat-logo.png
└── favicon.ico
```

### Step 3: Reference in Code
```tsx
// Before (external)
<img src="https://framerusercontent.com/images/..." />

// After (local)
<img src="/images/backgrounds/spin-bg-1.png" />
```

### Step 4: Commit to Git
```bash
git add public/images/
git commit -m "Add background images to repo"
git push
```

---

## 🎨 Optimizing Images

### Before Adding to Repo

**Resize large images:**
```bash
# Using ImageMagick (if installed)
convert large-image.png -resize 2000x2000 optimized-image.png

# Or use online tools:
# - tinypng.com (best compression)
# - squoosh.app (browser-based)
# - imageoptim.com (Mac app)
```

**Convert to WebP for better compression:**
```bash
# Smaller file size, same quality
convert image.png image.webp
```

**Use in Next.js:**
```tsx
import Image from 'next/image'

<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={200}
  priority // for above-the-fold images
/>
```

---

## 📦 Git LFS (Large File Storage)

If you have **very large images** (>10MB), use Git LFS:

### Setup (one time)
```bash
# Install Git LFS
brew install git-lfs  # Mac
# or download from git-lfs.github.com

# Initialize in your repo
git lfs install

# Track large files
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.webp"

# Commit the tracking file
git add .gitattributes
git commit -m "Configure Git LFS"
```

### Usage
```bash
# Add large files normally
git add public/images/huge-background.png
git commit -m "Add large background"
git push
```

Git LFS stores large files separately and only downloads them when needed.

---

## 🚫 What NOT to Commit

Add these to `.gitignore`:

```gitignore
# User uploads (if you implement file upload)
public/uploads/
public/screenshots/

# Temporary images
public/temp/
*.tmp.png
*.tmp.jpg

# Very large files
*.psd
*.ai
*.sketch
```

---

## 🔍 Current Image Inventory

### In Your Repo
- ✅ `public/cat-excited.jpg` (575KB - reasonable size)

### External (Framer CDN)
- 🌐 Background image 1 (large - 2000×2000px)
- 🌐 Background image 2 (medium - 1000×1000px)
- 🌐 Background image 3 (small - 800×800px)

### Recommendation
Keep your current setup! The external images are:
- Already optimized with `?scale-down-to=` parameters
- Hosted on a fast CDN
- Not critical enough to warrant repo storage

Only move them if:
1. You want to modify them
2. You're concerned about Framer's availability
3. You want complete control

---

## 📊 Checking Image Sizes

```bash
# See all images in public folder
ls -lh public/**/*.{png,jpg,jpeg,webp,gif}

# See total size of public folder
du -sh public/

# Find large files
find public/ -type f -size +1M
```

---

## ✨ Next.js Image Component Benefits

Use Next.js `<Image>` component instead of `<img>`:

```tsx
import Image from 'next/image'

// Automatic optimization!
<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={200}
  quality={90}
  priority={true}  // Load immediately
/>
```

**Benefits:**
- Automatic lazy loading
- Automatic image optimization
- Prevents layout shift
- Responsive images
- WebP conversion

---

## 💡 Best Practices

1. **Organize by purpose**: backgrounds/, icons/, logos/
2. **Use descriptive names**: `snapcat-logo-pink.png` not `img1.png`
3. **Optimize before committing**: Use TinyPNG or Squoosh
4. **Use appropriate formats**:
   - PNG: Logos, icons (need transparency)
   - JPG: Photos, backgrounds
   - WebP: Best compression (if browser support OK)
   - SVG: Icons, simple graphics (vector)
5. **Keep repo lean**: Under 100MB total if possible
6. **Use Git LFS** for files >10MB

---

## 📝 Quick Reference

```bash
# Add new image
cp ~/Downloads/new-logo.png public/images/logos/
git add public/images/logos/new-logo.png
git commit -m "Add new logo"
git push

# Replace image (same name)
cp ~/Downloads/updated-logo.png public/images/logos/logo.png
git add public/images/logos/logo.png
git commit -m "Update logo design"
git push

# Remove image
git rm public/images/old-image.png
git commit -m "Remove unused image"
git push
```

---

*Keep your images organized and optimized!* 🎨
