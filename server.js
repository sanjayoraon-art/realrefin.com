const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://realrefin.com/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://realrefin.com/hard-money-loan-calculator</loc>
    <lastmod>2026-10-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/maximum-allowable-offer-calculator</loc>
    <lastmod>2026-10-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cash-out-refinance-vs-heloc-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/1031-exchange-tax-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/pmi-removal-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/subto-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/creative-financing-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/bah-mortgage-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-bonus-entitlement-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/2-1-buydown-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/section-8-rental-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/dscr-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/assumable-mortgage-calculator</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/brrrr-calculator</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/home-affordability-calculator</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-irrrl-calculator</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rental-yield-calculator</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/about</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://realrefin.com/contact</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://realrefin.com/privacy-policy</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/terms-of-service</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/disclaimer</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cookie-policy</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://realrefin.com/sitemap.xml
`;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

const FILE_MAP = {
  '/': 'index.html',
  '/index.html': 'index.html',
  '/hard-money-loan-calculator': 'hard-money-loan-calculator.html',
  '/hard-money-loan-calculator.html': 'hard-money-loan-calculator.html',
  '/hard-money-loan-payment-calculator': 'hard-money-loan-calculator.html',
  '/hard-money-loan-payment-calculator.html': 'hard-money-loan-calculator.html',
  '/hard-money-lender-loan-calculator': 'hard-money-loan-calculator.html',
  '/hard-money-lender-loan-calculator.html': 'hard-money-loan-calculator.html',
  '/hard-money-calculator': 'hard-money-loan-calculator.html',
  '/hard-money-calculator.html': 'hard-money-loan-calculator.html',
  '/maximum-allowable-offer-calculator': 'maximum-allowable-offer-calculator.html',
  '/maximum-allowable-offer-calculator.html': 'maximum-allowable-offer-calculator.html',
  '/mao-calculator': 'maximum-allowable-offer-calculator.html',
  '/mao-calculator.html': 'maximum-allowable-offer-calculator.html',
  '/70-rule-calculator': 'maximum-allowable-offer-calculator.html',
  '/70-rule-calculator.html': 'maximum-allowable-offer-calculator.html',
  '/wholesale-mao-calculator': 'maximum-allowable-offer-calculator.html',
  '/wholesale-mao-calculator.html': 'maximum-allowable-offer-calculator.html',
  '/cash-out-refinance-vs-heloc-calculator': 'cash-out-refinance-vs-heloc-calculator.html',
  '/cash-out-refinance-vs-heloc-calculator.html': 'cash-out-refinance-vs-heloc-calculator.html',
  '/heloc-vs-cash-out-refinance-calculator': 'cash-out-refinance-vs-heloc-calculator.html',
  '/heloc-vs-cash-out-refinance-calculator.html': 'cash-out-refinance-vs-heloc-calculator.html',
  '/heloc-vs-cash-out-refi-calculator': 'cash-out-refinance-vs-heloc-calculator.html',
  '/heloc-vs-cash-out-refi-calculator.html': 'cash-out-refinance-vs-heloc-calculator.html',
  '/cash-out-refi-vs-heloc-calculator': 'cash-out-refinance-vs-heloc-calculator.html',
  '/cash-out-refi-vs-heloc-calculator.html': 'cash-out-refinance-vs-heloc-calculator.html',
  '/1031-exchange-tax-calculator': '1031-exchange-tax-calculator.html',
  '/1031-exchange-tax-calculator.html': '1031-exchange-tax-calculator.html',
  '/1031-tax-exchange-calculator': '1031-exchange-tax-calculator.html',
  '/1031-tax-exchange-calculator.html': '1031-exchange-tax-calculator.html',
  '/pmi-removal-calculator': 'pmi-removal-calculator.html',
  '/pmi-removal-calculator.html': 'pmi-removal-calculator.html',
  '/remove-pmi-calculator': 'pmi-removal-calculator.html',
  '/remove-pmi-calculator.html': 'pmi-removal-calculator.html',
  '/removing-pmi-calculator': 'pmi-removal-calculator.html',
  '/removing-pmi-calculator.html': 'pmi-removal-calculator.html',
  '/pmi-calculator-removal': 'pmi-removal-calculator.html',
  '/pmi-calculator-removal.html': 'pmi-removal-calculator.html',
  '/subto-calculator': 'subto-calculator.html',
  '/subto-calculator.html': 'subto-calculator.html',
  '/creative-financing-calculator': 'creative-financing-calculator.html',
  '/creative-financing-calculator.html': 'creative-financing-calculator.html',
  '/creative-finance-calculator': 'creative-financing-calculator.html',
  '/creative-finance-calculator.html': 'creative-financing-calculator.html',
  '/bah-mortgage-calculator': 'bah-mortgage-calculator.html',
  '/bah-mortgage-calculator.html': 'bah-mortgage-calculator.html',
  '/va-bonus-entitlement-calculator': 'va-bonus-entitlement-calculator.html',
  '/va-bonus-entitlement-calculator.html': 'va-bonus-entitlement-calculator.html',
  '/2-1-buydown-calculator': '2-1-buydown-calculator.html',
  '/2-1-buydown-calculator.html': '2-1-buydown-calculator.html',
  '/section-8-rental-calculator': 'section-8-rental-calculator.html',
  '/section-8-rental-calculator.html': 'section-8-rental-calculator.html',
  '/dscr-calculator': 'dscr-calculator.html',
  '/dscr-calculator.html': 'dscr-calculator.html',
  '/assumable-mortgage-calculator': 'assumable-mortgage-calculator.html',
  '/assumable-mortgage-calculator.html': 'assumable-mortgage-calculator.html',
  '/brrrr-calculator': 'brrrr-calculator.html',
  '/brrrr-calculator.html': 'brrrr-calculator.html',
  '/home-affordability-calculator': 'home-affordability-calculator.html',
  '/home-affordability-calculator.html': 'home-affordability-calculator.html',
  '/va-irrrl-calculator': 'va-irrrl-calculator.html',
  '/va-irrrl-calculator.html': 'va-irrrl-calculator.html',
  '/rental-yield-calculator': 'rental-yield-calculator.html',
  '/rental-yield-calculator.html': 'rental-yield-calculator.html',
  '/about': 'about.html',
  '/about.html': 'about.html',
  '/contact': 'contact.html',
  '/contact.html': 'contact.html',
  '/privacy-policy': 'privacy-policy.html',
  '/privacy-policy.html': 'privacy-policy.html',
  '/terms-of-service': 'terms-of-service.html',
  '/terms-of-service.html': 'terms-of-service.html',
  '/disclaimer': 'disclaimer.html',
  '/disclaimer.html': 'disclaimer.html',
  '/cookie-policy': 'cookie-policy.html',
  '/cookie-policy.html': 'cookie-policy.html',
  '/site.webmanifest': 'site.webmanifest',
  '/favicon.svg': 'favicon.svg',
  '/favicon-48x48.png': 'favicon-48x48.png',
  '/favicon-96x96.png': 'favicon-96x96.png',
  '/favicon-192x192.png': 'favicon-192x192.png',
  '/apple-touch-icon.png': 'apple-touch-icon.png',
  '/logo.png': 'logo.png',
  '/logo.svg': 'logo.svg',
  '/favicon.ico': 'favicon.ico',
  '/og-image.png': 'og-image.png'
};

const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0];

  // 1. Guaranteed In-Memory Sitemap
  if (reqUrl === '/sitemap.xml') {
    res.writeHead(200, {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    });
    res.end(SITEMAP_XML);
    return;
  }

  // 2. Guaranteed In-Memory Robots.txt
  if (reqUrl === '/robots.txt') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    });
    res.end(ROBOTS_TXT);
    return;
  }

  // 3. Known File Mapping
  const targetFileName = FILE_MAP[reqUrl] || (reqUrl.startsWith('/') ? reqUrl.substring(1) : reqUrl);
  const filePath = path.join(__dirname, targetFileName);

  fs.readFile(filePath, (err, data) => {
    if (!err) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=0, must-revalidate'
      });
      res.end(data);
      return;
    }

    // 4. Fallback to index.html
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, (indexErr, indexData) => {
      if (!indexErr) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexData);
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p><a href="/">Return Home</a></p>');
    });
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = server;
