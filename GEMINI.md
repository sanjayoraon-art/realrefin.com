# RealRefin Project Guidelines & Rules

## 1. Zero Duplicate Tools Policy (Critical)
* **Never create duplicate tools:** Before creating or proposing any new calculator or financial tool, ALWAYS inspect the existing HTML files in the repository.
* **No virtual aliases or duplicate URLs:** Each tool must have exactly one unique file (`<slug>.html`), one clean route (`/<slug>`), and one canonical URL (`https://realrefin.com/<slug>`).
* **No multi-route mapping to identical files:** Do not map multiple different URL slugs (e.g. `/how-to-calculate-x`, `/x-calculator`, `/x-estimator`) to the same HTML file in `server.js` or `sitemap.xml`. If keyword variations are required, redirect them via 301 Permanent Redirects to the canonical tool, or incorporate those keyword variations naturally inside the content and schema of the single canonical page.

## 2. Technical SEO Standards
* **Strict Canonical Sitemap:** `sitemap.xml` must only include actual, distinct, canonical pages (no redirects or duplicate aliases).
* **True HTTP 404 Status:** Any non-existent route or deleted file must return a genuine `404 Not Found` HTTP status code using `404.html`. Never fall back to `index.html` with a 200 OK status (Soft 404).
* **Embed Widget Compliance:** Any embed code widget provided on calculator pages must comply with Google's Link Schemes policy:
  * Links inside the embed code must use `rel="nofollow noopener"`.
  * Do not promise or mention "dofollow backlinks" in the UI.
