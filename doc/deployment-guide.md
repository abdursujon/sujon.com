# Deployment Guide (Netlify)

Hosting sujon.com on Netlify: a Vite + React static site in `dist/`, one Netlify Function at `/api/contributions`, and security headers from `netlify.toml`.

## 1. How the project is configured

| File | Purpose |
|---|---|
| `netlify.toml` → `[build]` | Runs `npm run build` and publishes `dist/` |
| `netlify.toml` → `[[headers]]` | Security headers (CSP, X-Frame-Options, etc.) for every page |
| `netlify/functions/fetch-github-contributions.mts` | Serverless function served at `/api/contributions` |
| `.env` (git-ignored) | `GITHUB_USERNAME` and `GITHUB_TOKEN` for local development only |

Netlify reads all build and header settings from `netlify.toml`, so nothing needs to be configured by hand in the dashboard apart from environment variables and the domain.

## 2. Pre-deploy checklist

- [ ] Every file in `public/` is meant to be public. Reference screenshots (`image*.png`) and private documents are removed.
- [ ] No link points at a deleted file (e.g. `src/data/projectData.ts`).
- [ ] `npm run build` succeeds locally.
- [ ] The CSP hash matches the inline theme script (see section 7).
- [ ] All work is committed and pushed to `main`.

## 3. Install and log in to the Netlify CLI

```bash
npx netlify-cli login
```

The first command opens the browser to authorise the CLI.

## 4. Create or link the Netlify project

From the project root:

```bash
npx netlify-cli link
```

- Project already exists on Netlify → **Link this directory to an existing project**.
- First deploy → **Create & configure a new project**, then pick the team and a project name (becomes `<name>.netlify.app`).

The link is stored in `.netlify/state.json` (git-ignored).

## 5. Add environment variables

The function needs the GitHub credentials. `.env` is never uploaded, so they must be stored on Netlify:

```bash
npx netlify-cli env:import .env
```

Or set them in the dashboard: **Project configuration → Environment variables**.

| Variable | Value |
|---|---|
| `GITHUB_USERNAME` | `abdursujon` |
| `GITHUB_TOKEN` | Token with read-only access only (classic with `read:user`, or fine-grained with public repositories read-only) |

Variables persist across all future deploys. Redeploy after changing them.

## 6. Draft deploy and verify

A draft deploy builds the site and gives a private preview URL without touching production:

```bash
npx netlify-cli deploy --build
```

Copy the **Website draft URL** from the output and check:

**Security headers**

```bash
curl -sI https://<draft-url> | grep -iE "content-security|x-frame|x-content|referrer|permissions"
```

All five headers should be listed.

**GitHub contributions function**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://<draft-url>/api/contributions
```

Expected: `200`. `500` means `GITHUB_USERNAME` is missing; `502` means the token is invalid or GitHub is unavailable.

**In the browser**

1. Open the draft URL, then DevTools → Console.
2. No `Refused to load…` or `Refused to execute…` messages (CSP violations).
3. Theme loads without a flash, fonts render, images and logos load, GitHub calendar appears.
4. Paste the URL into https://securityheaders.com and confirm an A grade.

## 7. Updating the CSP hash

The CSP only allows the inline theme script in `index.html` by its SHA-256 hash. After any edit to that script, rebuild and regenerate the hash:

```bash
npm run build
python3 -c "
import re,hashlib,base64
html=open('dist/index.html').read()
inline_script=re.search(r'<script>(.*?)</script>',html,re.S).group(1)
print('sha256-'+base64.b64encode(hashlib.sha256(inline_script.encode()).digest()).decode())"
```

Replace the `'sha256-…'` value in `script-src` in `netlify.toml` with the printed value.

## 8. Go live

**Option A: continuous deployment from GitHub (recommended)**

1. Netlify dashboard → the project → **Project configuration → Build & deploy → Link repository**.
2. Choose GitHub and select `abdursujon/sujon.com`, branch `main`.
3. Build settings are read from `netlify.toml`; leave the fields as detected.

Every push to `main` now deploys to production. Pull requests get their own deploy preview URLs.

**Option B: manual production deploy from the CLI**

```bash
npx netlify-cli deploy --build --prod
```

## 9. Custom domain

1. Dashboard → **Domain management → Add a domain** → enter the domain (e.g. `sujons.com`).
2. Point DNS at Netlify, using one of:
   - **Netlify DNS:** change the nameservers at the domain registrar to the four Netlify nameservers shown in the dashboard.
   - **External DNS:** add an `A` record for the apex domain to `75.2.60.5`, and a `CNAME` for `www` to `<name>.netlify.app`.
3. Wait for DNS to propagate (minutes to a few hours).
4. **Domain management → HTTPS** → confirm the Let's Encrypt certificate is issued. Netlify renews it automatically.

## 10. Post-deploy checks

- [ ] Repeat the checks from section 6 against the production URL.
- [ ] `http://` redirects to `https://`.
- [ ] Both `sujons.com` and `www.sujons.com` resolve to the site.
- [ ] Update the "Last updated" label in `src/components/layout/Footer.tsx` when content changes.

## 11. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| GitHub section shows "Couldn't load contributions" | Env vars missing on Netlify | Section 5, then redeploy |
| Theme flashes light before dark, console shows CSP error for inline script | CSP hash out of date | Section 7 |
| Fonts missing, console shows `style-src` or `font-src` error | Google Fonts blocked by CSP | Check `fonts.googleapis.com` in `style-src` and `fonts.gstatic.com` in `font-src` |
| An external image is blocked | Image served over `http://` | Use an `https://` URL or host the image in `public/` |
| External logo returns 404 | Third-party site removed the file | Download the image into `public/` and reference it locally |
| `netlify dev` shows CSP errors | Vite dev server injects its own inline scripts | Test headers on a draft deploy, not in dev mode |
