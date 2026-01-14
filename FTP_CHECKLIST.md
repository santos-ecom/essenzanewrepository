# FTP Deployment Checklist (FINAL)

## 1. Required File Structure (Public_html)

Ensure your `public_html` folder looks EXACTLY like this on the server:

```text
/public_html
  ├── .htaccess            <-- The NEW file provided below
  ├── index.html           <-- Root homepage
  ├── overrides.css
  ├── overrides.js
  ├── assets/              <-- FOLDER with all .css/.js/.png files
  │     ├── index-DcQQoMRH.css
  │     ├── index-DMFIf2t1.js
  │     └── ... (other hash files)
  ├── lavadora/            <-- FOLDER
  │     └── index.html
  ├── lavadora2/           <-- FOLDER
  │     └── index.html
  ├── motoserra/           <-- FOLDER
  │     └── index.html
  └── motoserra2/          <-- FOLDER
        └── index.html
```

## 2. CRITICAL WARNINGS
-   **DO NOT** upload a `dist` folder into `public_html`. The *contents* of your local folder must go directly into `public_html`. If you see `/public_html/dist/...`, IT IS WRONG. Move the files up.
-   **DO NOT** rename `assets` to anything else.
-   **DO NOT** put `index.html` of sub-pages in the root naming them `lavadora.html`. They MUST be inside folders: `lavadora/index.html`.

## 3. Validation Tests
After upload, perform these checks:

1.  **Redirect Check**:
    -   Open `yourdomain.com/motoserra` (no slash).
    -   Result: Should automatically change URL to `yourdomain.com/motoserra/` and load the page.
2.  **White Screen Check**:
    -   Open `yourdomain.com/motoserra/`.
    -   Result: Page loads, images appear, NO white screen.
3.  **Asset Check**:
    -   Open `yourdomain.com/assets/index-DcQQoMRH.css`.
    -   Result: Should see CSS code (not HTML, not 404).
4.  **Fallback Check**:
    -   Open `yourdomain.com/rota-que-nao-existe`.
    -   Result: Should show the Home Page (root `index.html`).
