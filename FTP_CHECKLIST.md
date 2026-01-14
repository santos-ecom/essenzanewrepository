# FTP Deployment Checklist

Use this checklist to verify your deployment to Hostinger.

## 1. File Structure Verification

Ensure the following structure exists in your `public_html` folder on the server:

- [ ] `/public_html/.htaccess` (The file we just updated)
- [ ] `/public_html/index.html` (Main entry point)
- [ ] `/public_html/assets/` (Folder containing .css, .js, .png, .jpg files)
    - [ ] Check for `index-DcQQoMRH.css` (or similar hash) inside assets
- [ ] `/public_html/lavadora/`
    - [ ] `/public_html/lavadora/index.html`
- [ ] `/public_html/lavadora2/`
    - [ ] `/public_html/lavadora2/index.html`
- [ ] `/public_html/motoserra/`
    - [ ] `/public_html/motoserra/index.html`
- [ ] `/public_html/motoserra2/`
    - [ ] `/public_html/motoserra2/index.html`

## 2. Asset Verification

Open these URLs in your browser to confirm assets are reachable:

- [ ] `https://yourdomain.com/assets/essenza_logo.png`
- [ ] `https://yourdomain.com/assets/index-DcQQoMRH.css` (or exact name from your local /assets folder)

## 3. White Screen Troubleshooting

If you see a white screen on `/motoserra` or other pages:

1.  **Open Developer Tools**: Right-click > Inspect > Console Tab.
2.  **Check for Red Errors**:
    -   **404 Not Found**: Means the file (CSS/JS) is missing or the path is wrong.
        -   *Fix*: Ensure the request URL is `https://domain.com/assets/...` and NOT `https://domain.com/motoserra/assets/...`. (We fixed this by changing `./assets` to `/assets`).
    -   **MIME Type Mismatch**: "Refused to apply style because MIME type is not text/css".
        -   *Fix*: This usually means the 404 page (HTML) is being returned instead of the CSS file. Check that the CSS file actually exists at that exact path.

## 4. Routing Checks

- [ ] Visit `https://yourdomain.com/lavadora/` (with trailing slash) -> Should load.
- [ ] Visit `https://yourdomain.com/lavadora` (no trailing slash) -> Should automatically add slash or load content.
- [ ] Visit `https://yourdomain.com/non-existent-page` -> Should show the root `index.html` (Home page) due to SPA fallback.

## 5. Cache Clearing

- [ ] **Important**: After uploading new files, always clear your browser cache or test in Incognito/Private mode to see changes immediately.
