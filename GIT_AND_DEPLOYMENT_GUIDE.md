# Git Commands & Deployment Guide
*Quick reference for Purrfect Capture project*

---

## 📁 Project Structure

```
purrfectcapture/
├── app/
│   ├── page.tsx              # Main homepage (where taglines live!)
│   ├── capture/page.tsx      # /capture route
│   └── screenshot/page.tsx   # /screenshot route
├── components/
│   └── ui/
│       ├── screen-capture.tsx    # Main screenshot component
│       ├── screenshot-capture.tsx # Alternative component
│       └── snapcat-logo.tsx      # Logo component
├── .git/                     # Git internals (auto-generated)
├── .next/                    # Build output (gitignored)
├── node_modules/             # Dependencies (gitignored)
└── .gitignore               # Files to ignore
```

---

## 🔧 Common Git Commands

### Checking Status
```bash
# See what files have changed
git status

# See what changes were made
git diff

# See recent commits
git log --oneline -5
```

### Making Changes
```bash
# Stage specific file
git add app/page.tsx

# Stage all changed files
git add .

# Commit with message
git commit -m "Update tagline"

# Push to GitHub
git push
```

### Viewing Changes
```bash
# See what changed in a specific commit
git show <commit-hash>

# See file history
git log --follow app/page.tsx

# Compare with previous version
git diff HEAD~1 app/page.tsx
```

### Undoing Changes
```bash
# Discard changes in a file (NOT committed yet)
git restore app/page.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ DANGEROUS
git reset --hard HEAD~1
```

### Branches
```bash
# Create new branch
git checkout -b feature/new-tagline

# Switch branches
git checkout main

# Merge branch into main
git checkout main
git merge feature/new-tagline

# Delete branch
git branch -d feature/new-tagline
```

---

## 🚀 Vercel Deployment

### How It Works
1. You push code to GitHub
2. Vercel detects the change automatically
3. Vercel builds and deploys (takes 1-2 minutes)
4. Your site updates at `purrfectcapture.pro`

### Vercel Project Info
- **Project Name**: purrfectcapture
- **Production Domain**: purrfectcapture.pro
- **Alt Domains**: www.purrfectcapture.pro, purrfectcapture.vercel.app
- **Framework**: Next.js 16
- **GitHub Repo**: Jen-Rad/purrfectcapture
- **Branch**: main

### Viewing Deployments
1. Go to https://vercel.com/dashboard
2. Click on "purrfectcapture" project
3. Click "Deployments" tab
4. See all deployment history and logs

### Force Redeploy
If changes aren't showing:
1. Go to Vercel dashboard
2. Click latest deployment
3. Click "..." menu → "Redeploy"

---

## 📝 .gitignore Essentials

Your `.gitignore` file tells Git which files to **never** track. Here's what should be in it:

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Build outputs
.next/
out/
build/
dist/

# Environment variables (IMPORTANT - contains secrets!)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Testing
coverage/
.nyc_output/

# Temporary files
*.log
.cache/
```

### Why These Are Ignored

| File/Folder | Reason |
|------------|--------|
| `node_modules/` | Huge (100MB+), can be regenerated with `npm install` |
| `.next/` | Build output, regenerated on every build |
| `.env` | Contains API keys, passwords, secrets |
| `.vercel/` | Vercel deployment config (auto-generated) |
| `.DS_Store` | Mac OS junk files |

---

## 🎯 Quick Workflow

### Making a Change
```bash
# 1. Check current status
git status

# 2. Make your changes in VSCode
# (edit app/page.tsx, etc.)

# 3. See what changed
git diff

# 4. Stage your changes
git add .

# 5. Commit with descriptive message
git commit -m "Update hero tagline to Snap it. Save it. Purrfect it."

# 6. Push to GitHub (auto-deploys to Vercel)
git push

# 7. Wait 1-2 minutes, then check purrfectcapture.pro
```

### Typical Development Flow
```bash
# Morning: Pull latest changes
git pull

# Work on feature
# ... edit files ...

# Commit frequently (small, focused commits)
git add app/page.tsx
git commit -m "Update tagline"

git add components/ui/screen-capture.tsx
git commit -m "Fix mobile button sizing"

# End of day: Push everything
git push
```

---

## 🔍 Finding Where Things Are

### Common Edits

| What You Want to Change | File Location |
|------------------------|---------------|
| Main tagline/headline | `app/page.tsx` (lines 135-141) |
| Logo | `components/ui/snapcat-logo.tsx` |
| Screenshot button | `components/ui/screen-capture.tsx` |
| Background animations | `app/page.tsx` (lines 58-114) |
| Mobile warning message | `app/page.tsx` (lines 146-150) |

### Key Commands to Remember

```bash
# "Where am I? What changed?"
git status

# "What did I change in this file?"
git diff app/page.tsx

# "Show me recent commits"
git log --oneline -10

# "Save my changes"
git add . && git commit -m "Description" && git push
```

---

## 🆘 Troubleshooting

### "Changes not showing on live site"
1. Check Vercel dashboard for deployment status
2. Hard refresh browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
3. Wait 2-3 minutes for deployment
4. Check if commit was pushed: `git log --oneline -1`

### "Merge conflict!"
```bash
# Pull latest changes
git pull

# Fix conflicts in files (VSCode will show them)
# Then:
git add .
git commit -m "Resolve merge conflict"
git push
```

### "I broke something, how do I undo?"
```bash
# If NOT committed yet
git restore app/page.tsx

# If committed but not pushed
git reset --soft HEAD~1

# If pushed (create new commit that undoes)
git revert HEAD
git push
```

---

## 💡 Pro Tips

1. **Commit often** - Small commits are easier to understand and undo
2. **Write clear commit messages** - "Update tagline" is better than "changes"
3. **Pull before you push** - Avoid merge conflicts
4. **Never commit secrets** - Always use `.env` files for API keys
5. **Test locally first** - Run `npm run dev` before pushing
6. **Use branches for big changes** - Keep `main` stable

---

## 🎨 Your Current Setup

**Repository**: `https://github.com/Jen-Rad/purrfectcapture.git`
**Production URL**: `https://purrfectcapture.pro`
**Local Development**: `http://localhost:3000`

**Current Tagline**:
- Main: "Snap it. Save it. Purrfect it."
- Sub: "Screenshot with purrfection—no claws attached."

**Last Major Changes**:
- Fixed homepage to use correct design
- Added mobile responsiveness
- Updated tagline copy

---

*Keep this guide handy for quick reference!*
