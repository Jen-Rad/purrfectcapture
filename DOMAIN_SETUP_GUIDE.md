# Domain Setup Guide: Switching to purrfectcapture.com on Vercel

This guide walks you through making **purrfectcapture.com** your primary domain while keeping **purrfectcapture.pro** as a redirect.

## Overview

- **Current domain**: purrfectcapture.pro (live on Vercel)
- **New primary domain**: purrfectcapture.com (purchased through Vercel)
- **Goal**: Make .com the main URL, keep .pro redirecting to it

---

## Step 1: Access Vercel Domain Settings

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Purrfect Capture** project
3. Navigate to **Settings > Domains**

---

## Step 2: Add purrfectcapture.com (Purchased on Vercel)

Since you purchased the domain through Vercel, the process is simple:

1. Click **"Add Domain"**
2. Enter `purrfectcapture.com`
3. Vercel will **auto-detect** that you own this domain
4. Click **"Add"** or **"Verify"** to confirm
5. The domain should be verified almost instantly (no DNS configuration needed!)

> **Note**: Since you bought it on Vercel, DNS is already managed by Vercel automatically.

---

## Step 3: Verify Domain

1. The domain should show as **verified** immediately (green checkmark ✓)
2. HTTPS certificate will be automatically provisioned within a few minutes
3. You'll see the domain listed in your Domains section

---

## Step 4: Set purrfectcapture.com as Primary

1. In **Settings > Domains**, find `purrfectcapture.com`
2. Click the **three dots menu (⋯)** next to the domain
3. Select **"Set as Primary Domain"**
4. Confirm the change

---

## Step 5: Configure Domain Redirects

Once purrfectcapture.com is primary:

- **purrfectcapture.pro** → Automatically redirects to purrfectcapture.com
- **www.purrfectcapture.com** → Redirects to purrfectcapture.com (apex domain)

No additional configuration needed—Vercel handles this automatically!

---

## Verification Checklist

After setup, test these URLs:

- [ ] https://purrfectcapture.com (should load your site)
- [ ] https://www.purrfectcapture.com (should redirect to apex)
- [ ] https://purrfectcapture.pro (should redirect to .com)
- [ ] HTTPS certificate shows valid (green padlock in browser)

---

## Troubleshooting

### Domain not verifying?
- **Check nameservers**: Use [whatsmydns.net](https://www.whatsmydns.net) to verify DNS propagation
- **Wait longer**: DNS can take up to 48 hours to fully propagate
- **Clear cache**: Try in an incognito window or different browser

### Old domain still showing?
- **Clear browser cache**: Hard refresh with `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- **Wait for deployment**: Vercel may need a minute to update after setting primary domain

### HTTPS certificate not showing?
- Vercel automatically provisions SSL certificates via Let's Encrypt
- This usually happens within 10 minutes of domain verification
- If delayed, try clicking "Refresh" in the Domains settings

---

## Common Registrar DNS Settings Locations

- **Vercel Domains**: Managed automatically
- **GoDaddy**: Domain Settings > DNS Management
- **Namecheap**: Domain List > Manage > Advanced DNS
- **Google Domains**: DNS > Custom name servers
- **Cloudflare**: DNS tab (if using Cloudflare nameservers)

---

## Need Help?

- [Vercel Domain Documentation](https://vercel.com/docs/concepts/projects/domains)
- [Vercel Support](https://vercel.com/support)
- Check your project's deployment logs in the Vercel dashboard

---

## Summary

1. ✅ Add purrfectcapture.com in Vercel
2. ✅ Update DNS/nameservers at your registrar
3. ✅ Verify domain ownership in Vercel
4. ✅ Set purrfectcapture.com as primary
5. ✅ Test all domains and redirects

Your site will now be accessible at **purrfectcapture.com** with automatic redirects from the .pro domain!
