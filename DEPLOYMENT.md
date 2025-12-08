# 🚀 Deploying to purrfectcapture.pro

## Quick Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - SnapCat screenshot app"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### 3. Add Custom Domain

1. In Vercel project settings, go to **Domains**
2. Add `purrfectcapture.pro`
3. Add DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. Optional: Setup Cloud Storage

If you want the "Save to Cloud" feature:

1. In Vercel dashboard, go to **Storage**
2. Create a **Blob** store
3. Copy the `BLOB_READ_WRITE_TOKEN`
4. Add to **Environment Variables** in Vercel project settings:
   ```
   BLOB_READ_WRITE_TOKEN=your_token_here
   ```

## Alternative: Deploy Anywhere

This is a standard Next.js app and can be deployed to:
- **Netlify**
- **Cloudflare Pages**
- **AWS Amplify**
- **Railway**
- **Render**

Just run:
```bash
npm run build
npm start
```

## DNS Configuration

Point your domain `purrfectcapture.pro` to your hosting provider:

### For Vercel:
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### For Cloudflare:
```
A Record: @ → Your server IP
CNAME: www → Your server hostname
```

## Environment Variables

Optional variables for production:

```env
# Vercel Blob Storage (for cloud save feature)
BLOB_READ_WRITE_TOKEN=your_token_here

# Node Environment
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Test screenshot capture functionality
- [ ] Verify download to desktop works
- [ ] Check SnapCat logo displays correctly
- [ ] Test on mobile devices
- [ ] Verify custom domain is working
- [ ] Test cloud save feature (if enabled)

## 🐱 Your Site is Live!

Visit **https://purrfectcapture.pro** to see your purrfect screenshot app!

## Support

For issues or questions:
- Check the main [README.md](./README.md)
- Review Vercel deployment logs
- Ensure all environment variables are set
