const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Canonical XML Sitemap (Strictly canonical URLs, no duplicates)
const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://realrefin.com/</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://realrefin.com/10-year-heloc-payment-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/1031-exchange-tax-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/2-1-buydown-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/203k-loan-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/about</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/adu-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/airbnb-profit-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/arv-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/assumable-mortgage-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/bah-mortgage-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/bank-statement-loan-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/barndominium-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/brrrr-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/business-loan-payment-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/calculate-debt-to-income-ratio-for-mortgage</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/calculate-fha-mortgage-insurance</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cash-out-refinance-vs-heloc-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/closing-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/concrete-calculator-yards</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/construction-loan-draw-schedule-excel</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/contact</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cookie-policy</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cost-per-square-foot-to-build-a-house-in-alabama</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cost-segregation-study-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/crawl-space-encapsulation-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/creative-financing-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/detail-car-payment-calculator-formulas</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/disclaimer</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/divorce-house-buyout-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/driveway-gravel-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/drywall-installation-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/dscr-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/epoxy-flooring-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/fence-post-distance-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/hard-money-loan-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/home-affordability-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/house-flipping-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/house-hacking-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/interest-rate-cap-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/lease-amortization-schedule-excel</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/maximum-allowable-offer-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mid-term-rental-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mortgage-payoff-vs-investing-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mortgage-refinance-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/paint-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/paver-patio-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/pmi-removal-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/privacy-policy</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/prorated-rent-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/real-estate-capital-gains-tax-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/real-estate-commission-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rent-to-own-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rent-vs-buy-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rental-yield-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/reverse-mortgage-purchase-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/roof-truss-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rubber-mulch-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/section-8-rental-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/seller-financing-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/seller-net-sheet-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/spray-foam-insulation-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/subto-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/terms-of-service</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://realrefin.com/timbertech-deck-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/usda-home-loan-mortgage-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-bonus-entitlement-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-closing-cost-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-irrrl-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/wholesale-real-estate-calculator</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

// Robots.txt
const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://realrefin.com/sitemap.xml
`;

// MIME Types
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

// 301 Permanent Redirects for legacy keyword variations to prevent duplicate doorway penalties
const ALIAS_REDIRECTS = {
  "/10-year-heloc-calculator": "/10-year-heloc-payment-calculator",
  "/10-year-heloc-calculator.html": "/10-year-heloc-payment-calculator",
  "/1031-tax-exchange-calculator": "/1031-exchange-tax-calculator",
  "/1031-tax-exchange-calculator.html": "/1031-exchange-tax-calculator",
  "/203k-fha-loan-calculator": "/203k-loan-calculator",
  "/203k-fha-loan-calculator.html": "/203k-loan-calculator",
  "/203k-loan-mortgage-calculator": "/203k-loan-calculator",
  "/203k-loan-mortgage-calculator.html": "/203k-loan-calculator",
  "/203k-loan-payment-calculator": "/203k-loan-calculator",
  "/203k-loan-payment-calculator.html": "/203k-loan-calculator",
  "/203k-rehab-loan-calculator": "/203k-loan-calculator",
  "/203k-rehab-loan-calculator.html": "/203k-loan-calculator",
  "/203k-renovation-loan-calculator": "/203k-loan-calculator",
  "/70-rule-calculator": "/maximum-allowable-offer-calculator",
  "/70-rule-calculator.html": "/maximum-allowable-offer-calculator",
  "/adu-cost-calculator-los-angeles": "/adu-cost-calculator",
  "/adu-cost-calculator-los-angeles.html": "/adu-cost-calculator",
  "/ai-arv-calculator": "/arv-calculator",
  "/ai-arv-calculator.html": "/arv-calculator",
  "/airbnb-calculator": "/airbnb-profit-calculator",
  "/airbnb-calculator.html": "/airbnb-profit-calculator",
  "/airbnb-cash-flow-calculator": "/airbnb-profit-calculator",
  "/airbnb-cash-flow-calculator.html": "/airbnb-profit-calculator",
  "/airbnb-profit-calculator-excel": "/airbnb-profit-calculator",
  "/airbnb-profit-calculator-excel.html": "/airbnb-profit-calculator",
  "/airbnb-profit-calculator-spreadsheet": "/airbnb-profit-calculator",
  "/airbnb-profit-calculator-spreadsheet.html": "/airbnb-profit-calculator",
  "/arv-calculator-by-address": "/arv-calculator",
  "/arv-calculator-by-address.html": "/arv-calculator",
  "/arv-calculator-free": "/arv-calculator",
  "/arv-calculator-free.html": "/arv-calculator",
  "/arv-real-estate-calculator": "/arv-calculator",
  "/arv-real-estate-calculator.html": "/arv-calculator",
  "/auto-loan-payment-calculator-formulas": "/detail-car-payment-calculator-formulas",
  "/auto-loan-payment-calculator-formulas.html": "/detail-car-payment-calculator-formulas",
  "/bank-statement-loan-income-calculator": "/bank-statement-loan-calculator",
  "/bank-statement-loan-income-calculator.html": "/bank-statement-loan-calculator",
  "/bank-statement-mortgage-calculator": "/bank-statement-loan-calculator",
  "/bank-statement-mortgage-calculator.html": "/bank-statement-loan-calculator",
  "/bank-statement-mortgage-loan-calculator": "/bank-statement-loan-calculator",
  "/bank-statement-mortgage-loan-calculator.html": "/bank-statement-loan-calculator",
  "/bark-mulch-calculator": "/rubber-mulch-calculator",
  "/bark-mulch-calculator.html": "/rubber-mulch-calculator",
  "/barndominium-build-cost-calculator": "/barndominium-cost-calculator",
  "/barndominium-build-cost-calculator.html": "/barndominium-cost-calculator",
  "/barndominium-cost-calculator-oklahoma": "/barndominium-cost-calculator",
  "/barndominium-cost-calculator-oklahoma.html": "/barndominium-cost-calculator",
  "/barndominium-cost-to-build-calculator": "/barndominium-cost-calculator",
  "/barndominium-cost-to-build-calculator.html": "/barndominium-cost-calculator",
  "/biggerpockets-arv-calculator": "/arv-calculator",
  "/biggerpockets-arv-calculator.html": "/arv-calculator",
  "/bonus-depreciation-calculator-real-estate": "/cost-segregation-study-calculator",
  "/bonus-depreciation-calculator-real-estate.html": "/cost-segregation-study-calculator",
  "/business-loan-calculator": "/business-loan-payment-calculator",
  "/business-loan-calculator.html": "/business-loan-payment-calculator",
  "/buyer-closing-cost-calculator": "/va-closing-cost-calculator",
  "/buyer-closing-cost-calculator.html": "/va-closing-cost-calculator",
  "/buying-vs-renting-calculator": "/rent-vs-buy-calculator",
  "/buying-vs-renting-calculator.html": "/rent-vs-buy-calculator",
  "/calculate-paver-sand": "/paver-patio-cost-calculator",
  "/calculate-paver-sand.html": "/paver-patio-cost-calculator",
  "/calculate-prorated-rent": "/prorated-rent-calculator",
  "/calculate-prorated-rent.html": "/prorated-rent-calculator",
  "/calculate-real-estate-agent-commission": "/real-estate-commission-calculator",
  "/calculate-real-estate-agent-commission.html": "/real-estate-commission-calculator",
  "/calculate-real-estate-commission": "/real-estate-commission-calculator",
  "/calculate-real-estate-commission.html": "/real-estate-commission-calculator",
  "/calculator-real-estate-commission": "/real-estate-commission-calculator",
  "/calculator-real-estate-commission.html": "/real-estate-commission-calculator",
  "/capital-gains-tax-calculator-for-real-estate": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-calculator-for-real-estate.html": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-calculator-on-real-estate": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-calculator-on-real-estate.html": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-calculator-real-estate": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-calculator-real-estate.html": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-on-real-estate-calculator": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-on-real-estate-calculator.html": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-real-estate-calculator": "/real-estate-capital-gains-tax-calculator",
  "/capital-gains-tax-real-estate-calculator.html": "/real-estate-capital-gains-tax-calculator",
  "/capital-lease-amortization-schedule-excel-template": "/lease-amortization-schedule-excel",
  "/capital-lease-amortization-schedule-excel-template.html": "/lease-amortization-schedule-excel",
  "/car-payment-calculator-formulas": "/detail-car-payment-calculator-formulas",
  "/car-payment-calculator-formulas.html": "/detail-car-payment-calculator-formulas",
  "/cash-out-refi-vs-heloc-calculator": "/cash-out-refinance-vs-heloc-calculator",
  "/cash-out-refi-vs-heloc-calculator.html": "/cash-out-refinance-vs-heloc-calculator",
  "/cash-out-refinance-calculator": "/mortgage-refinance-calculator",
  "/cash-out-refinance-calculator.html": "/mortgage-refinance-calculator",
  "/cash-to-close-calculator": "/va-closing-cost-calculator",
  "/cash-to-close-calculator.html": "/va-closing-cost-calculator",
  "/chatham-interest-rate-cap-calculator": "/interest-rate-cap-calculator",
  "/chatham-interest-rate-cap-calculator.html": "/interest-rate-cap-calculator",
  "/chatham-rate-cap-calculator": "/interest-rate-cap-calculator",
  "/chatham-rate-cap-calculator.html": "/interest-rate-cap-calculator",
  "/closed-cell-spray-foam-insulation-cost-calculator": "/spray-foam-insulation-cost-calculator",
  "/closed-cell-spray-foam-insulation-cost-calculator.html": "/spray-foam-insulation-cost-calculator",
  "/closing-cost-calculator": "/va-closing-cost-calculator",
  "/closing-cost-calculator-tn": "/va-closing-cost-calculator",
  "/closing-cost-calculator-tn.html": "/va-closing-cost-calculator",
  "/closing-cost-calculator.html": "/va-closing-cost-calculator",
  "/closing-costs-calculator-for-seller": "/va-closing-cost-calculator",
  "/closing-costs-calculator-for-seller.html": "/va-closing-cost-calculator",
  "/commercial-cost-segregation-calculator": "/cost-segregation-study-calculator",
  "/commercial-cost-segregation-calculator.html": "/cost-segregation-study-calculator",
  "/commercial-loan-payment-calculator": "/business-loan-payment-calculator",
  "/commercial-loan-payment-calculator.html": "/business-loan-payment-calculator",
  "/commission-calculator-for-real-estate-agents": "/real-estate-commission-calculator",
  "/commission-calculator-for-real-estate-agents.html": "/real-estate-commission-calculator",
  "/composite-deck-cost-calculator": "/timbertech-deck-cost-calculator",
  "/composite-deck-cost-calculator.html": "/timbertech-deck-cost-calculator",
  "/concrete-slab-calculator": "/concrete-calculator-yards",
  "/concrete-slab-calculator.html": "/concrete-calculator-yards",
  "/concrete-yardage-calculator": "/concrete-calculator-yards",
  "/concrete-yardage-calculator.html": "/concrete-calculator-yards",
  "/construction-draw-schedule-excel": "/construction-loan-draw-schedule-excel",
  "/construction-draw-schedule-excel.html": "/construction-loan-draw-schedule-excel",
  "/construction-draw-schedule-template-excel": "/construction-loan-draw-schedule-excel",
  "/construction-draw-schedule-template-excel.html": "/construction-loan-draw-schedule-excel",
  "/cost-of-spray-foam-insulation-calculator": "/spray-foam-insulation-cost-calculator",
  "/cost-of-spray-foam-insulation-calculator.html": "/spray-foam-insulation-cost-calculator",
  "/cost-per-square-foot-to-build-a-house": "/cost-per-square-foot-to-build-a-house-in-alabama",
  "/cost-per-square-foot-to-build-a-house.html": "/cost-per-square-foot-to-build-a-house-in-alabama",
  "/cost-segregation-bonus-depreciation-calculator": "/cost-segregation-study-calculator",
  "/cost-segregation-bonus-depreciation-calculator.html": "/cost-segregation-study-calculator",
  "/cost-segregation-calculator": "/cost-segregation-study-calculator",
  "/cost-segregation-calculator.html": "/cost-segregation-study-calculator",
  "/cost-segregation-study-cost-vs-savings": "/cost-segregation-study-calculator",
  "/cost-segregation-study-cost-vs-savings.html": "/cost-segregation-study-calculator",
  "/cost-segregation-tax-savings-calculator": "/cost-segregation-study-calculator",
  "/cost-segregation-tax-savings-calculator.html": "/cost-segregation-study-calculator",
  "/cost-to-build-a-barndominium-calculator": "/barndominium-cost-calculator",
  "/cost-to-build-a-barndominium-calculator.html": "/barndominium-cost-calculator",
  "/cost-to-build-a-house-in-alabama": "/cost-per-square-foot-to-build-a-house-in-alabama",
  "/cost-to-build-a-house-in-alabama.html": "/cost-per-square-foot-to-build-a-house-in-alabama",
  "/cost-to-build-an-adu": "/adu-cost-calculator",
  "/cost-to-build-barndominium-calculator": "/barndominium-cost-calculator",
  "/cost-to-build-barndominium-calculator.html": "/barndominium-cost-calculator",
  "/cost-to-paint-a-room-calculator": "/paint-cost-calculator",
  "/cost-to-paint-a-room-calculator.html": "/paint-cost-calculator",
  "/crawl-space-cost-calculator": "/crawl-space-encapsulation-cost-calculator",
  "/crawl-space-cost-calculator.html": "/crawl-space-encapsulation-cost-calculator",
  "/crawl-space-vapor-barrier-calculator": "/crawl-space-encapsulation-cost-calculator",
  "/crawl-space-vapor-barrier-calculator.html": "/crawl-space-encapsulation-cost-calculator",
  "/crawl-space-waterproofing-cost-calculator": "/crawl-space-encapsulation-cost-calculator",
  "/crawl-space-waterproofing-cost-calculator.html": "/crawl-space-encapsulation-cost-calculator",
  "/creative-finance-calculator": "/creative-financing-calculator",
  "/creative-finance-calculator.html": "/creative-financing-calculator",
  "/cubic-yards-concrete-calculator": "/concrete-calculator-yards",
  "/cubic-yards-concrete-calculator.html": "/concrete-calculator-yards",
  "/debt-to-income-ratio-calculator-mortgage": "/calculate-debt-to-income-ratio-for-mortgage",
  "/debt-to-income-ratio-calculator-mortgage.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/deck-cost-calculator": "/timbertech-deck-cost-calculator",
  "/deck-cost-calculator.html": "/timbertech-deck-cost-calculator",
  "/deck-paint-cost-calculator": "/timbertech-deck-cost-calculator",
  "/deck-paint-cost-calculator.html": "/timbertech-deck-cost-calculator",
  "/deck-stairs-cost-calculator": "/timbertech-deck-cost-calculator",
  "/deck-stairs-cost-calculator.html": "/timbertech-deck-cost-calculator",
  "/drywall-calculator": "/drywall-installation-cost-calculator",
  "/drywall-calculator.html": "/drywall-installation-cost-calculator",
  "/drywall-cost-calculator": "/drywall-installation-cost-calculator",
  "/drywall-cost-calculator.html": "/drywall-installation-cost-calculator",
  "/drywall-material-calculator": "/drywall-installation-cost-calculator",
  "/drywall-material-calculator.html": "/drywall-installation-cost-calculator",
  "/dti-calculator-for-mortgage": "/calculate-debt-to-income-ratio-for-mortgage",
  "/dti-calculator-for-mortgage.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/duplex-house-hacking-calculator": "/house-hacking-calculator",
  "/duplex-house-hacking-calculator.html": "/house-hacking-calculator",
  "/epoxy-garage-floor-cost-calculator": "/epoxy-flooring-cost-calculator",
  "/epoxy-garage-floor-cost-calculator.html": "/epoxy-flooring-cost-calculator",
  "/fence-post-spacing-calculator": "/fence-post-distance-calculator",
  "/fence-post-spacing-calculator.html": "/fence-post-distance-calculator",
  "/fha-203k-loan-calculator": "/203k-loan-calculator",
  "/fha-dti-calculator": "/calculate-debt-to-income-ratio-for-mortgage",
  "/fha-dti-calculator.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/fha-mip-calculator": "/calculate-fha-mortgage-insurance",
  "/fha-mip-calculator.html": "/calculate-fha-mortgage-insurance",
  "/fha-monthly-mortgage-insurance-calculator": "/calculate-fha-mortgage-insurance",
  "/fha-monthly-mortgage-insurance-calculator.html": "/calculate-fha-mortgage-insurance",
  "/fha-mortgage-calculator-with-mip": "/calculate-fha-mortgage-insurance",
  "/fha-mortgage-calculator-with-mip.html": "/calculate-fha-mortgage-insurance",
  "/fha-mortgage-insurance-calculator": "/calculate-fha-mortgage-insurance",
  "/fha-mortgage-insurance-calculator.html": "/calculate-fha-mortgage-insurance",
  "/fix-and-flip-calculator": "/house-flipping-calculator",
  "/fix-and-flip-calculator.html": "/house-flipping-calculator",
  "/fix-and-flip-loan-calculator": "/house-flipping-calculator",
  "/fix-and-flip-loan-calculator.html": "/house-flipping-calculator",
  "/fix-flip-calculator": "/house-flipping-calculator",
  "/fix-flip-calculator.html": "/house-flipping-calculator",
  "/flip-calculator": "/house-flipping-calculator",
  "/flip-calculator.html": "/house-flipping-calculator",
  "/florida-seller-net-sheet-calculator": "/seller-net-sheet-calculator",
  "/florida-seller-net-sheet-calculator.html": "/seller-net-sheet-calculator",
  "/fourplex-house-hacking-calculator": "/house-hacking-calculator",
  "/fourplex-house-hacking-calculator.html": "/house-hacking-calculator",
  "/free-airbnb-revenue-calculator": "/airbnb-profit-calculator",
  "/free-airbnb-revenue-calculator.html": "/airbnb-profit-calculator",
  "/free-arv-calculator": "/arv-calculator",
  "/free-arv-calculator.html": "/arv-calculator",
  "/free-construction-draw-schedule-template-excel": "/construction-loan-draw-schedule-excel",
  "/free-construction-draw-schedule-template-excel.html": "/construction-loan-draw-schedule-excel",
  "/free-wholesale-real-estate-calculator": "/wholesale-real-estate-calculator",
  "/free-wholesale-real-estate-calculator.html": "/wholesale-real-estate-calculator",
  "/front-end-and-back-end-dti-calculator": "/calculate-debt-to-income-ratio-for-mortgage",
  "/front-end-and-back-end-dti-calculator.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/furnished-finder-calculator": "/mid-term-rental-calculator",
  "/furnished-finder-calculator.html": "/mid-term-rental-calculator",
  "/garage-conversion-adu-cost": "/adu-cost-calculator",
  "/garage-floor-epoxy-calculator": "/epoxy-flooring-cost-calculator",
  "/garage-floor-epoxy-calculator.html": "/epoxy-flooring-cost-calculator",
  "/gravel-calculator-driveway": "/driveway-gravel-calculator",
  "/gravel-calculator-driveway.html": "/driveway-gravel-calculator",
  "/gravel-calculator-for-driveway": "/driveway-gravel-calculator",
  "/gravel-calculator-for-driveway.html": "/driveway-gravel-calculator",
  "/gravel-driveway-calculator": "/driveway-gravel-calculator",
  "/gravel-driveway-calculator.html": "/driveway-gravel-calculator",
  "/gravel-driveway-cost-calculator": "/driveway-gravel-calculator",
  "/gravel-driveway-cost-calculator.html": "/driveway-gravel-calculator",
  "/hard-money-calculator": "/hard-money-loan-calculator",
  "/hard-money-calculator.html": "/hard-money-loan-calculator",
  "/hard-money-lender-loan-calculator": "/hard-money-loan-calculator",
  "/hard-money-lender-loan-calculator.html": "/hard-money-loan-calculator",
  "/hard-money-loan-payment-calculator": "/hard-money-loan-calculator",
  "/hard-money-loan-payment-calculator.html": "/hard-money-loan-calculator",
  "/hecm-for-purchase-calculator": "/reverse-mortgage-purchase-calculator",
  "/hecm-for-purchase-calculator.html": "/reverse-mortgage-purchase-calculator",
  "/heloc-calculator-with-extra-payments": "/10-year-heloc-payment-calculator",
  "/heloc-calculator-with-extra-payments.html": "/10-year-heloc-payment-calculator",
  "/heloc-payment-calculator-with-extra-payments": "/10-year-heloc-payment-calculator",
  "/heloc-payment-calculator-with-extra-payments.html": "/10-year-heloc-payment-calculator",
  "/heloc-vs-cash-out-refi-calculator": "/cash-out-refinance-vs-heloc-calculator",
  "/heloc-vs-cash-out-refi-calculator.html": "/cash-out-refinance-vs-heloc-calculator",
  "/heloc-vs-cash-out-refinance-calculator": "/cash-out-refinance-vs-heloc-calculator",
  "/heloc-vs-cash-out-refinance-calculator.html": "/cash-out-refinance-vs-heloc-calculator",
  "/home-equity-buyout-calculator-divorce": "/divorce-house-buyout-calculator",
  "/home-equity-buyout-calculator-divorce.html": "/divorce-house-buyout-calculator",
  "/home-sale-capital-gains-tax-calculator": "/real-estate-capital-gains-tax-calculator",
  "/home-sale-capital-gains-tax-calculator.html": "/real-estate-capital-gains-tax-calculator",
  "/house-flip-calculator": "/house-flipping-calculator",
  "/house-flip-calculator-excel": "/house-flipping-calculator",
  "/house-flip-calculator-excel.html": "/house-flipping-calculator",
  "/house-flip-calculator.html": "/house-flipping-calculator",
  "/house-hack-calculator": "/house-hacking-calculator",
  "/house-hack-calculator.html": "/house-hacking-calculator",
  "/house-hacking-fha-loan-calculator": "/house-hacking-calculator",
  "/house-hacking-fha-loan-calculator.html": "/house-hacking-calculator",
  "/house-hacking-rent-calculator": "/house-hacking-calculator",
  "/house-hacking-rent-calculator.html": "/house-hacking-calculator",
  "/how-is-house-buyout-calculated-in-a-divorce": "/divorce-house-buyout-calculator",
  "/how-is-house-buyout-calculated-in-a-divorce.html": "/divorce-house-buyout-calculator",
  "/how-to-calculate-arv-wholesaling": "/arv-calculator",
  "/how-to-calculate-arv-wholesaling.html": "/arv-calculator",
  "/how-to-calculate-bark-mulch-coverage": "/rubber-mulch-calculator",
  "/how-to-calculate-bark-mulch-coverage.html": "/rubber-mulch-calculator",
  "/how-to-calculate-car-loan-payment": "/detail-car-payment-calculator-formulas",
  "/how-to-calculate-car-loan-payment.html": "/detail-car-payment-calculator-formulas",
  "/how-to-calculate-cost-of-a-loan": "/detail-car-payment-calculator-formulas",
  "/how-to-calculate-cost-of-a-loan.html": "/detail-car-payment-calculator-formulas",
  "/how-to-calculate-debt-to-income-ratio-for-mortgage": "/calculate-debt-to-income-ratio-for-mortgage",
  "/how-to-calculate-debt-to-income-ratio-for-mortgage.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/how-to-calculate-divorce-house-buyout": "/divorce-house-buyout-calculator",
  "/how-to-calculate-divorce-house-buyout.html": "/divorce-house-buyout-calculator",
  "/how-to-calculate-drywall": "/drywall-installation-cost-calculator",
  "/how-to-calculate-drywall.html": "/drywall-installation-cost-calculator",
  "/how-to-calculate-heloc-interest-only-payment": "/10-year-heloc-payment-calculator",
  "/how-to-calculate-heloc-interest-only-payment.html": "/10-year-heloc-payment-calculator",
  "/how-to-calculate-house-buyout-in-divorce": "/divorce-house-buyout-calculator",
  "/how-to-calculate-house-buyout-in-divorce.html": "/divorce-house-buyout-calculator",
  "/how-to-calculate-house-hacking": "/house-hacking-calculator",
  "/how-to-calculate-house-hacking.html": "/house-hacking-calculator",
  "/how-to-calculate-interest-only-payments-on-a-heloc": "/10-year-heloc-payment-calculator",
  "/how-to-calculate-interest-only-payments-on-a-heloc.html": "/10-year-heloc-payment-calculator",
  "/how-to-calculate-real-estate-commission": "/real-estate-commission-calculator",
  "/how-to-calculate-real-estate-commission.html": "/real-estate-commission-calculator",
  "/how-to-calculate-wholesale-price-real-estate": "/wholesale-real-estate-calculator",
  "/how-to-create-a-lease-amortization-schedule-in-excel": "/lease-amortization-schedule-excel",
  "/how-to-create-a-lease-amortization-schedule-in-excel.html": "/lease-amortization-schedule-excel",
  "/interior-paint-calculator": "/paint-cost-calculator",
  "/interior-paint-calculator.html": "/paint-cost-calculator",
  "/jadu-cost-calculator": "/adu-cost-calculator",
  "/labor-cost-to-hang-and-finish-drywall-calculator": "/drywall-installation-cost-calculator",
  "/labor-cost-to-hang-and-finish-drywall-calculator.html": "/drywall-installation-cost-calculator",
  "/lease-amortization-schedule": "/lease-amortization-schedule-excel",
  "/lease-amortization-schedule.html": "/lease-amortization-schedule-excel",
  "/lease-option-calculator": "/rent-to-own-calculator",
  "/lease-option-calculator.html": "/rent-to-own-calculator",
  "/lease-to-own-calculator": "/rent-to-own-calculator",
  "/lease-to-own-calculator.html": "/rent-to-own-calculator",
  "/mao-calculator": "/maximum-allowable-offer-calculator",
  "/mao-calculator.html": "/maximum-allowable-offer-calculator",
  "/midterm-rental-calculator": "/mid-term-rental-calculator",
  "/midterm-rental-calculator.html": "/mid-term-rental-calculator",
  "/mortgage-dti-calculator": "/calculate-debt-to-income-ratio-for-mortgage",
  "/mortgage-dti-calculator.html": "/calculate-debt-to-income-ratio-for-mortgage",
  "/mortgage-payoff-vs-investment-calculator": "/mortgage-payoff-vs-investing-calculator",
  "/mortgage-payoff-vs-investment-calculator.html": "/mortgage-payoff-vs-investing-calculator",
  "/mortgage-refinance-calculator-excel": "/mortgage-refinance-calculator",
  "/mortgage-refinance-calculator-excel.html": "/mortgage-refinance-calculator",
  "/mortgage-vs-investing-calculator": "/mortgage-payoff-vs-investing-calculator",
  "/mortgage-vs-investing-calculator.html": "/mortgage-payoff-vs-investing-calculator",
  "/mtr-calculator": "/mid-term-rental-calculator",
  "/mtr-calculator.html": "/mid-term-rental-calculator",
  "/mulch-calculator": "/rubber-mulch-calculator",
  "/mulch-calculator.html": "/rubber-mulch-calculator",
  "/mulch-coverage-calculator": "/rubber-mulch-calculator",
  "/mulch-coverage-calculator.html": "/rubber-mulch-calculator",
  "/net-seller-sheet-calculator": "/seller-net-sheet-calculator",
  "/net-seller-sheet-calculator.html": "/seller-net-sheet-calculator",
  "/net-sheet-calculator-for-seller": "/seller-net-sheet-calculator",
  "/net-sheet-calculator-for-seller.html": "/seller-net-sheet-calculator",
  "/non-qm-bank-statement-calculator": "/bank-statement-loan-calculator",
  "/non-qm-bank-statement-calculator.html": "/bank-statement-loan-calculator",
  "/owner-financing-calculator": "/seller-financing-calculator",
  "/owner-financing-calculator.html": "/seller-financing-calculator",
  "/painting-estimate-calculator": "/paint-cost-calculator",
  "/painting-estimate-calculator.html": "/paint-cost-calculator",
  "/paver-calculator": "/paver-patio-cost-calculator",
  "/paver-calculator-with-spacing": "/paver-patio-cost-calculator",
  "/paver-calculator-with-spacing.html": "/paver-patio-cost-calculator",
  "/paver-calculator.html": "/paver-patio-cost-calculator",
  "/paver-sand-calculator": "/paver-patio-cost-calculator",
  "/paver-sand-calculator.html": "/paver-patio-cost-calculator",
  "/pay-off-mortgage-early-vs-invest-calculator": "/mortgage-payoff-vs-investing-calculator",
  "/pay-off-mortgage-early-vs-invest-calculator.html": "/mortgage-payoff-vs-investing-calculator",
  "/pay-off-mortgage-or-invest-calculator": "/mortgage-payoff-vs-investing-calculator",
  "/pay-off-mortgage-or-invest-calculator.html": "/mortgage-payoff-vs-investing-calculator",
  "/playground-mulch-calculator": "/rubber-mulch-calculator",
  "/playground-mulch-calculator.html": "/rubber-mulch-calculator",
  "/pmi-calculator-removal": "/pmi-removal-calculator",
  "/pmi-calculator-removal.html": "/pmi-removal-calculator",
  "/prorate-rent-calculator": "/prorated-rent-calculator",
  "/prorate-rent-calculator.html": "/prorated-rent-calculator",
  "/prorated-rent": "/prorated-rent-calculator",
  "/prorated-rent.html": "/prorated-rent-calculator",
  "/rate-cap-calculator": "/interest-rate-cap-calculator",
  "/rate-cap-calculator.html": "/interest-rate-cap-calculator",
  "/real-estate-agent-commission-calculator": "/real-estate-commission-calculator",
  "/real-estate-agent-commission-calculator.html": "/real-estate-commission-calculator",
  "/real-estate-agents-commission-calculator": "/real-estate-commission-calculator",
  "/real-estate-agents-commission-calculator.html": "/real-estate-commission-calculator",
  "/real-estate-broker-commission-calculator": "/real-estate-commission-calculator",
  "/real-estate-broker-commission-calculator.html": "/real-estate-commission-calculator",
  "/real-estate-commission-calculator-with-broker-split": "/real-estate-commission-calculator",
  "/real-estate-commission-calculator-with-broker-split.html": "/real-estate-commission-calculator",
  "/real-estate-wholesale-calculator-excel": "/wholesale-real-estate-calculator",
  "/real-estate-wholesale-calculator-excel.html": "/wholesale-real-estate-calculator",
  "/refinance-break-even-calculator": "/mortgage-refinance-calculator",
  "/refinance-break-even-calculator.html": "/mortgage-refinance-calculator",
  "/refinance-calculator": "/mortgage-refinance-calculator",
  "/refinance-calculator-excel": "/mortgage-refinance-calculator",
  "/refinance-calculator-excel.html": "/mortgage-refinance-calculator",
  "/refinance-calculator.html": "/mortgage-refinance-calculator",
  "/remove-pmi-calculator": "/pmi-removal-calculator",
  "/remove-pmi-calculator.html": "/pmi-removal-calculator",
  "/removing-pmi-calculator": "/pmi-removal-calculator",
  "/removing-pmi-calculator.html": "/pmi-removal-calculator",
  "/rent-or-buy-calculator": "/rent-vs-buy-calculator",
  "/rent-or-buy-calculator.html": "/rent-vs-buy-calculator",
  "/rent-to-own-home-calculator": "/rent-to-own-calculator",
  "/rent-to-own-home-calculator.html": "/rent-to-own-calculator",
  "/rent-to-own-mortgage-calculator": "/rent-to-own-calculator",
  "/rent-to-own-mortgage-calculator.html": "/rent-to-own-calculator",
  "/rent-to-own-payment-calculator": "/rent-to-own-calculator",
  "/rent-to-own-payment-calculator.html": "/rent-to-own-calculator",
  "/renting-vs-buying-calculator": "/rent-vs-buy-calculator",
  "/renting-vs-buying-calculator.html": "/rent-vs-buy-calculator",
  "/residential-rental-cost-segregation-calculator": "/cost-segregation-study-calculator",
  "/residential-rental-cost-segregation-calculator.html": "/cost-segregation-study-calculator",
  "/reverse-mortgage-calculator-for-purchase": "/reverse-mortgage-purchase-calculator",
  "/reverse-mortgage-calculator-for-purchase.html": "/reverse-mortgage-purchase-calculator",
  "/reverse-mortgage-calculator-sc": "/reverse-mortgage-purchase-calculator",
  "/reverse-mortgage-calculator-sc.html": "/reverse-mortgage-purchase-calculator",
  "/reverse-mortgage-purchase-down-payment-calculator": "/reverse-mortgage-purchase-calculator",
  "/reverse-mortgage-purchase-down-payment-calculator.html": "/reverse-mortgage-purchase-calculator",
  "/roof-truss-count-calculator": "/roof-truss-calculator",
  "/roof-truss-count-calculator.html": "/roof-truss-calculator",
  "/roofing-material-calculator": "/roof-truss-calculator",
  "/roofing-material-calculator.html": "/roof-truss-calculator",
  "/roofing-material-estimator": "/roof-truss-calculator",
  "/roofing-material-estimator.html": "/roof-truss-calculator",
  "/section-121-exclusion-calculator": "/real-estate-capital-gains-tax-calculator",
  "/section-121-exclusion-calculator.html": "/real-estate-capital-gains-tax-calculator",
  "/seller-carryback-calculator": "/seller-financing-calculator",
  "/seller-finance-calculator": "/seller-financing-calculator",
  "/seller-finance-calculator.html": "/seller-financing-calculator",
  "/seller-financing-calculator-with-balloon-payment": "/seller-financing-calculator",
  "/seller-net-sheet-calculator-california": "/seller-net-sheet-calculator",
  "/seller-net-sheet-calculator-california.html": "/seller-net-sheet-calculator",
  "/seller-net-sheet-calculator-florida": "/seller-net-sheet-calculator",
  "/seller-net-sheet-calculator-florida.html": "/seller-net-sheet-calculator",
  "/seller-net-sheet-calculator-texas": "/seller-net-sheet-calculator",
  "/seller-net-sheet-calculator-texas.html": "/seller-net-sheet-calculator",
  "/seller-net-sheet-florida-calculator": "/seller-net-sheet-calculator",
  "/seller-net-sheet-florida-calculator.html": "/seller-net-sheet-calculator",
  "/seller-proceeds-calculator": "/seller-net-sheet-calculator",
  "/seller-proceeds-calculator.html": "/seller-net-sheet-calculator",
  "/sellers-net-sheet-calculator": "/seller-net-sheet-calculator",
  "/sellers-net-sheet-calculator.html": "/seller-net-sheet-calculator",
  "/should-i-rent-or-buy-calculator": "/rent-vs-buy-calculator",
  "/should-i-rent-or-buy-calculator.html": "/rent-vs-buy-calculator",
  "/small-business-loan-calculator": "/business-loan-payment-calculator",
  "/small-business-loan-calculator.html": "/business-loan-payment-calculator",
  "/south-carolina-reverse-mortgage-calculator": "/reverse-mortgage-purchase-calculator",
  "/south-carolina-reverse-mortgage-calculator.html": "/reverse-mortgage-purchase-calculator",
  "/southern-california-adu-guide-and-cost-calculator": "/adu-cost-calculator",
  "/southern-california-adu-guide-and-cost-calculator.html": "/adu-cost-calculator",
  "/spray-foam-calculator": "/spray-foam-insulation-cost-calculator",
  "/spray-foam-calculator.html": "/spray-foam-insulation-cost-calculator",
  "/spray-foam-insulation-calculator-cost": "/spray-foam-insulation-cost-calculator",
  "/spray-foam-insulation-calculator-cost.html": "/spray-foam-insulation-cost-calculator",
  "/spray-foam-insulation-cost-per-sq-ft-calculator": "/spray-foam-insulation-cost-calculator",
  "/spray-foam-insulation-cost-per-sq-ft-calculator.html": "/spray-foam-insulation-cost-calculator",
  "/tennessee-closing-cost-calculator": "/va-closing-cost-calculator",
  "/tennessee-closing-cost-calculator.html": "/va-closing-cost-calculator",
  "/travel-nurse-housing-calculator": "/mid-term-rental-calculator",
  "/travel-nurse-housing-calculator.html": "/mid-term-rental-calculator",
  "/triplex-house-hacking-calculator": "/house-hacking-calculator",
  "/triplex-house-hacking-calculator.html": "/house-hacking-calculator",
  "/upfront-mip-calculator": "/calculate-fha-mortgage-insurance",
  "/upfront-mip-calculator.html": "/calculate-fha-mortgage-insurance",
  "/usda-guarantee-fee-calculator": "/usda-home-loan-mortgage-calculator",
  "/usda-guarantee-fee-calculator.html": "/usda-home-loan-mortgage-calculator",
  "/usda-home-loan-calculator": "/usda-home-loan-mortgage-calculator",
  "/usda-home-loan-calculator.html": "/usda-home-loan-mortgage-calculator",
  "/usda-loan-calculator": "/usda-home-loan-mortgage-calculator",
  "/usda-loan-calculator.html": "/usda-home-loan-mortgage-calculator",
  "/usda-mortgage-calculator": "/usda-home-loan-mortgage-calculator",
  "/usda-mortgage-calculator.html": "/usda-home-loan-mortgage-calculator",
  "/usda-rural-development-loan-calculator": "/usda-home-loan-mortgage-calculator",
  "/usda-rural-development-loan-calculator.html": "/usda-home-loan-mortgage-calculator",
  "/vinyl-fence-cost-calculator": "/fence-post-distance-calculator",
  "/vinyl-fence-cost-calculator.html": "/fence-post-distance-calculator",
  "/vinyl-fencing-cost-calculator": "/fence-post-distance-calculator",
  "/vinyl-fencing-cost-calculator.html": "/fence-post-distance-calculator",
  "/wholesale-calculator-real-estate": "/wholesale-real-estate-calculator",
  "/wholesale-calculator-real-estate.html": "/wholesale-real-estate-calculator",
  "/wholesale-mao-calculator": "/maximum-allowable-offer-calculator",
  "/wholesale-mao-calculator.html": "/maximum-allowable-offer-calculator",
  "/wholesale-real-estate-arv-calculator": "/wholesale-real-estate-calculator",
  "/wholesale-real-estate-offer-calculator": "/wholesale-real-estate-calculator"
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

  // 3. Check for 301 Alias Redirects (Consolidate keyword variations to canonical tools)
  const normalizedRoute = reqUrl.replace(/\/$/, '');
  if (ALIAS_REDIRECTS[reqUrl] || ALIAS_REDIRECTS[normalizedRoute]) {
    const target = ALIAS_REDIRECTS[reqUrl] || ALIAS_REDIRECTS[normalizedRoute];
    res.writeHead(301, {
      'Location': target,
      'Cache-Control': 'public, max-age=86400'
    });
    res.end();
    return;
  }

  // 4. Strip Trailing Slash for Clean URLs (e.g. /dscr-calculator/ -> /dscr-calculator)
  if (reqUrl.length > 1 && reqUrl.endsWith('/')) {
    res.writeHead(301, {
      'Location': reqUrl.slice(0, -1),
      'Cache-Control': 'public, max-age=86400'
    });
    res.end();
    return;
  }

  // 5. Clean URL Redirects: Redirect explicit .html to extensionless URL
  if (reqUrl.endsWith('.html')) {
    const cleanDestination = reqUrl === '/index.html' ? '/' : reqUrl.replace(/\.html$/, '');
    res.writeHead(301, {
      'Location': cleanDestination,
      'Cache-Control': 'public, max-age=86400'
    });
    res.end();
    return;
  }

  // 6. Homepage Resolution
  if (reqUrl === '/' || reqUrl === '') {
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, (err, data) => {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=0, must-revalidate'
        });
        res.end(data);
        return;
      }
      send404(res);
    });
    return;
  }

  // 7. Direct Static Asset Resolution (images, manifest, icons, css, js)
  const cleanPath = reqUrl.startsWith('/') ? reqUrl.substring(1) : reqUrl;
  const directFilePath = path.join(__dirname, cleanPath);
  if (fs.existsSync(directFilePath) && fs.statSync(directFilePath).isFile()) {
    fs.readFile(directFilePath, (err, data) => {
      if (!err) {
        const ext = path.extname(directFilePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': ext === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=86400'
        });
        res.end(data);
        return;
      }
      send404(res);
    });
    return;
  }

  // 8. Clean URL HTML Resolution (e.g. /dscr-calculator -> dscr-calculator.html)
  const htmlFilePath = path.join(__dirname, cleanPath + '.html');
  if (fs.existsSync(htmlFilePath) && fs.statSync(htmlFilePath).isFile()) {
    fs.readFile(htmlFilePath, (err, data) => {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=0, must-revalidate'
        });
        res.end(data);
        return;
      }
      send404(res);
    });
    return;
  }

  // 9. True HTTP 404 Response (Eliminates Soft 404 Penalties)
  send404(res);
});

function send404(res) {
  const notFoundPath = path.join(__dirname, '404.html');
  fs.readFile(notFoundPath, (err, data) => {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    if (!err) {
      res.end(data);
    } else {
      res.end('<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 - Page Not Found</h1><p><a href="/">Return Home</a></p></body></html>');
    }
  });
}

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = server;
