const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://realrefin.com/</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://realrefin.com/concrete-calculator-yards</loc>
    <lastmod>2026-11-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mid-term-rental-calculator</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/divorce-house-buyout-calculator</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/barndominium-cost-calculator</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/detail-car-payment-calculator-formulas</loc>
    <lastmod>2026-11-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/bank-statement-loan-calculator</loc>
    <lastmod>2026-11-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/usda-home-loan-mortgage-calculator</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/reverse-mortgage-purchase-calculator</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cost-per-square-foot-to-build-a-house-in-alabama</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/business-loan-payment-calculator</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/prorated-rent-calculator</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/calculate-fha-mortgage-insurance</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/house-flipping-calculator</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/va-closing-cost-calculator</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/closing-cost-calculator</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mortgage-refinance-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/lease-amortization-schedule-excel</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/construction-loan-draw-schedule-excel</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://realrefin.com/interest-rate-cap-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/arv-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/10-year-heloc-payment-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/seller-financing-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/203k-loan-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/adu-cost-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/wholesale-real-estate-calculator</loc>
    <lastmod>2026-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/house-hacking-calculator</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/cost-segregation-study-calculator</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/calculate-debt-to-income-ratio-for-mortgage</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/seller-net-sheet-calculator</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/real-estate-capital-gains-tax-calculator</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/real-estate-commission-calculator</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/mortgage-payoff-vs-investing-calculator</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rent-vs-buy-calculator</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/rent-to-own-calculator</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://realrefin.com/airbnb-profit-calculator</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
  '/concrete-calculator-yards': 'concrete-calculator-yards.html',
  '/concrete-calculator-yards.html': 'concrete-calculator-yards.html',
  '/concrete-yardage-calculator': 'concrete-calculator-yards.html',
  '/concrete-yardage-calculator.html': 'concrete-calculator-yards.html',
  '/concrete-slab-calculator': 'concrete-calculator-yards.html',
  '/concrete-slab-calculator.html': 'concrete-calculator-yards.html',
  '/cubic-yards-concrete-calculator': 'concrete-calculator-yards.html',
  '/cubic-yards-concrete-calculator.html': 'concrete-calculator-yards.html',
  '/mid-term-rental-calculator': 'mid-term-rental-calculator.html',
  '/mid-term-rental-calculator.html': 'mid-term-rental-calculator.html',
  '/midterm-rental-calculator': 'mid-term-rental-calculator.html',
  '/midterm-rental-calculator.html': 'mid-term-rental-calculator.html',
  '/mtr-calculator': 'mid-term-rental-calculator.html',
  '/mtr-calculator.html': 'mid-term-rental-calculator.html',
  '/travel-nurse-housing-calculator': 'mid-term-rental-calculator.html',
  '/travel-nurse-housing-calculator.html': 'mid-term-rental-calculator.html',
  '/furnished-finder-calculator': 'mid-term-rental-calculator.html',
  '/furnished-finder-calculator.html': 'mid-term-rental-calculator.html',
  '/divorce-house-buyout-calculator': 'divorce-house-buyout-calculator.html',
  '/divorce-house-buyout-calculator.html': 'divorce-house-buyout-calculator.html',
  '/how-is-house-buyout-calculated-in-a-divorce': 'divorce-house-buyout-calculator.html',
  '/how-is-house-buyout-calculated-in-a-divorce.html': 'divorce-house-buyout-calculator.html',
  '/how-to-calculate-house-buyout-in-divorce': 'divorce-house-buyout-calculator.html',
  '/how-to-calculate-house-buyout-in-divorce.html': 'divorce-house-buyout-calculator.html',
  '/how-to-calculate-divorce-house-buyout': 'divorce-house-buyout-calculator.html',
  '/how-to-calculate-divorce-house-buyout.html': 'divorce-house-buyout-calculator.html',
  '/home-equity-buyout-calculator-divorce': 'divorce-house-buyout-calculator.html',
  '/home-equity-buyout-calculator-divorce.html': 'divorce-house-buyout-calculator.html',
  '/barndominium-cost-calculator': 'barndominium-cost-calculator.html',
  '/barndominium-cost-calculator.html': 'barndominium-cost-calculator.html',
  '/barndominium-build-cost-calculator': 'barndominium-cost-calculator.html',
  '/barndominium-build-cost-calculator.html': 'barndominium-cost-calculator.html',
  '/barndominium-cost-to-build-calculator': 'barndominium-cost-calculator.html',
  '/barndominium-cost-to-build-calculator.html': 'barndominium-cost-calculator.html',
  '/cost-to-build-a-barndominium-calculator': 'barndominium-cost-calculator.html',
  '/cost-to-build-a-barndominium-calculator.html': 'barndominium-cost-calculator.html',
  '/cost-to-build-barndominium-calculator': 'barndominium-cost-calculator.html',
  '/cost-to-build-barndominium-calculator.html': 'barndominium-cost-calculator.html',
  '/barndominium-cost-calculator-oklahoma': 'barndominium-cost-calculator.html',
  '/barndominium-cost-calculator-oklahoma.html': 'barndominium-cost-calculator.html',
  '/reverse-mortgage-purchase-calculator': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-purchase-calculator.html': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-purchase-down-payment-calculator': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-purchase-down-payment-calculator.html': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-calculator-for-purchase': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-calculator-for-purchase.html': 'reverse-mortgage-purchase-calculator.html',
  '/south-carolina-reverse-mortgage-calculator': 'reverse-mortgage-purchase-calculator.html',
  '/south-carolina-reverse-mortgage-calculator.html': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-calculator-sc': 'reverse-mortgage-purchase-calculator.html',
  '/reverse-mortgage-calculator-sc.html': 'reverse-mortgage-purchase-calculator.html',
  '/hecm-for-purchase-calculator': 'reverse-mortgage-purchase-calculator.html',
  '/hecm-for-purchase-calculator.html': 'reverse-mortgage-purchase-calculator.html',
  '/usda-home-loan-mortgage-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-home-loan-mortgage-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/usda-loan-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-loan-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/usda-mortgage-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-mortgage-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/usda-home-loan-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-home-loan-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/usda-guarantee-fee-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-guarantee-fee-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/usda-rural-development-loan-calculator': 'usda-home-loan-mortgage-calculator.html',
  '/usda-rural-development-loan-calculator.html': 'usda-home-loan-mortgage-calculator.html',
  '/bank-statement-loan-calculator': 'bank-statement-loan-calculator.html',
  '/bank-statement-loan-calculator.html': 'bank-statement-loan-calculator.html',
  '/bank-statement-mortgage-loan-calculator': 'bank-statement-loan-calculator.html',
  '/bank-statement-mortgage-loan-calculator.html': 'bank-statement-loan-calculator.html',
  '/bank-statement-loan-income-calculator': 'bank-statement-loan-calculator.html',
  '/bank-statement-loan-income-calculator.html': 'bank-statement-loan-calculator.html',
  '/bank-statement-mortgage-calculator': 'bank-statement-loan-calculator.html',
  '/bank-statement-mortgage-calculator.html': 'bank-statement-loan-calculator.html',
  '/non-qm-bank-statement-calculator': 'bank-statement-loan-calculator.html',
  '/non-qm-bank-statement-calculator.html': 'bank-statement-loan-calculator.html',
  '/detail-car-payment-calculator-formulas': 'detail-car-payment-calculator-formulas.html',
  '/detail-car-payment-calculator-formulas.html': 'detail-car-payment-calculator-formulas.html',
  '/car-payment-calculator-formulas': 'detail-car-payment-calculator-formulas.html',
  '/car-payment-calculator-formulas.html': 'detail-car-payment-calculator-formulas.html',
  '/how-to-calculate-cost-of-a-loan': 'detail-car-payment-calculator-formulas.html',
  '/how-to-calculate-cost-of-a-loan.html': 'detail-car-payment-calculator-formulas.html',
  '/how-to-calculate-car-loan-payment': 'detail-car-payment-calculator-formulas.html',
  '/how-to-calculate-car-loan-payment.html': 'detail-car-payment-calculator-formulas.html',
  '/auto-loan-payment-calculator-formulas': 'detail-car-payment-calculator-formulas.html',
  '/auto-loan-payment-calculator-formulas.html': 'detail-car-payment-calculator-formulas.html',
  '/cost-per-square-foot-to-build-a-house-in-alabama': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/cost-per-square-foot-to-build-a-house-in-alabama.html': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/cost-to-build-a-house-in-alabama': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/cost-to-build-a-house-in-alabama.html': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/cost-per-square-foot-to-build-a-house': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/cost-per-square-foot-to-build-a-house.html': 'cost-per-square-foot-to-build-a-house-in-alabama.html',
  '/business-loan-payment-calculator': 'business-loan-payment-calculator.html',
  '/business-loan-payment-calculator.html': 'business-loan-payment-calculator.html',
  '/business-loan-calculator': 'business-loan-payment-calculator.html',
  '/business-loan-calculator.html': 'business-loan-payment-calculator.html',
  '/small-business-loan-calculator': 'business-loan-payment-calculator.html',
  '/small-business-loan-calculator.html': 'business-loan-payment-calculator.html',
  '/commercial-loan-payment-calculator': 'business-loan-payment-calculator.html',
  '/commercial-loan-payment-calculator.html': 'business-loan-payment-calculator.html',
  '/prorated-rent-calculator': 'prorated-rent-calculator.html',
  '/prorated-rent-calculator.html': 'prorated-rent-calculator.html',
  '/prorate-rent-calculator': 'prorated-rent-calculator.html',
  '/prorate-rent-calculator.html': 'prorated-rent-calculator.html',
  '/calculate-prorated-rent': 'prorated-rent-calculator.html',
  '/calculate-prorated-rent.html': 'prorated-rent-calculator.html',
  '/prorated-rent': 'prorated-rent-calculator.html',
  '/prorated-rent.html': 'prorated-rent-calculator.html',
  '/calculate-fha-mortgage-insurance': 'calculate-fha-mortgage-insurance.html',
  '/calculate-fha-mortgage-insurance.html': 'calculate-fha-mortgage-insurance.html',
  '/fha-mortgage-insurance-calculator': 'calculate-fha-mortgage-insurance.html',
  '/fha-mortgage-insurance-calculator.html': 'calculate-fha-mortgage-insurance.html',
  '/fha-mip-calculator': 'calculate-fha-mortgage-insurance.html',
  '/fha-mip-calculator.html': 'calculate-fha-mortgage-insurance.html',
  '/upfront-mip-calculator': 'calculate-fha-mortgage-insurance.html',
  '/upfront-mip-calculator.html': 'calculate-fha-mortgage-insurance.html',
  '/fha-monthly-mortgage-insurance-calculator': 'calculate-fha-mortgage-insurance.html',
  '/fha-monthly-mortgage-insurance-calculator.html': 'calculate-fha-mortgage-insurance.html',
  '/fha-mortgage-calculator-with-mip': 'calculate-fha-mortgage-insurance.html',
  '/fha-mortgage-calculator-with-mip.html': 'calculate-fha-mortgage-insurance.html',
  '/house-flipping-calculator': 'house-flipping-calculator.html',
  '/house-flipping-calculator.html': 'house-flipping-calculator.html',
  '/fix-and-flip-calculator': 'house-flipping-calculator.html',
  '/fix-and-flip-calculator.html': 'house-flipping-calculator.html',
  '/flip-calculator': 'house-flipping-calculator.html',
  '/flip-calculator.html': 'house-flipping-calculator.html',
  '/house-flip-calculator': 'house-flipping-calculator.html',
  '/house-flip-calculator.html': 'house-flipping-calculator.html',
  '/fix-flip-calculator': 'house-flipping-calculator.html',
  '/fix-flip-calculator.html': 'house-flipping-calculator.html',
  '/house-flip-calculator-excel': 'house-flipping-calculator.html',
  '/house-flip-calculator-excel.html': 'house-flipping-calculator.html',
  '/fix-and-flip-loan-calculator': 'house-flipping-calculator.html',
  '/fix-and-flip-loan-calculator.html': 'house-flipping-calculator.html',
  '/va-closing-cost-calculator': 'va-closing-cost-calculator.html',
  '/va-closing-cost-calculator.html': 'va-closing-cost-calculator.html',
  '/closing-cost-calculator': 'va-closing-cost-calculator.html',
  '/closing-cost-calculator.html': 'va-closing-cost-calculator.html',
  '/buyer-closing-cost-calculator': 'va-closing-cost-calculator.html',
  '/buyer-closing-cost-calculator.html': 'va-closing-cost-calculator.html',
  '/closing-costs-calculator-for-seller': 'va-closing-cost-calculator.html',
  '/closing-costs-calculator-for-seller.html': 'va-closing-cost-calculator.html',
  '/closing-cost-calculator-tn': 'va-closing-cost-calculator.html',
  '/closing-cost-calculator-tn.html': 'va-closing-cost-calculator.html',
  '/tennessee-closing-cost-calculator': 'va-closing-cost-calculator.html',
  '/tennessee-closing-cost-calculator.html': 'va-closing-cost-calculator.html',
  '/cash-to-close-calculator': 'va-closing-cost-calculator.html',
  '/cash-to-close-calculator.html': 'va-closing-cost-calculator.html',
  '/mortgage-refinance-calculator': 'mortgage-refinance-calculator.html',
  '/mortgage-refinance-calculator.html': 'mortgage-refinance-calculator.html',
  '/refinance-calculator': 'mortgage-refinance-calculator.html',
  '/refinance-calculator.html': 'mortgage-refinance-calculator.html',
  '/refinance-calculator-excel': 'mortgage-refinance-calculator.html',
  '/refinance-calculator-excel.html': 'mortgage-refinance-calculator.html',
  '/mortgage-refinance-calculator-excel': 'mortgage-refinance-calculator.html',
  '/mortgage-refinance-calculator-excel.html': 'mortgage-refinance-calculator.html',
  '/refinance-break-even-calculator': 'mortgage-refinance-calculator.html',
  '/refinance-break-even-calculator.html': 'mortgage-refinance-calculator.html',
  '/cash-out-refinance-calculator': 'mortgage-refinance-calculator.html',
  '/cash-out-refinance-calculator.html': 'mortgage-refinance-calculator.html',
  '/lease-amortization-schedule-excel': 'lease-amortization-schedule-excel.html',
  '/lease-amortization-schedule-excel.html': 'lease-amortization-schedule-excel.html',
  '/how-to-create-a-lease-amortization-schedule-in-excel': 'lease-amortization-schedule-excel.html',
  '/how-to-create-a-lease-amortization-schedule-in-excel.html': 'lease-amortization-schedule-excel.html',
  '/capital-lease-amortization-schedule-excel-template': 'lease-amortization-schedule-excel.html',
  '/capital-lease-amortization-schedule-excel-template.html': 'lease-amortization-schedule-excel.html',
  '/lease-amortization-schedule': 'lease-amortization-schedule-excel.html',
  '/lease-amortization-schedule.html': 'lease-amortization-schedule-excel.html',
  '/construction-loan-draw-schedule-excel': 'construction-loan-draw-schedule-excel.html',
  '/construction-loan-draw-schedule-excel.html': 'construction-loan-draw-schedule-excel.html',
  '/construction-draw-schedule-template-excel': 'construction-loan-draw-schedule-excel.html',
  '/construction-draw-schedule-template-excel.html': 'construction-loan-draw-schedule-excel.html',
  '/free-construction-draw-schedule-template-excel': 'construction-loan-draw-schedule-excel.html',
  '/free-construction-draw-schedule-template-excel.html': 'construction-loan-draw-schedule-excel.html',
  '/construction-draw-schedule-excel': 'construction-loan-draw-schedule-excel.html',
  '/construction-draw-schedule-excel.html': 'construction-loan-draw-schedule-excel.html',
  '/house-hacking-calculator': 'house-hacking-calculator.html',
  '/house-hacking-calculator.html': 'house-hacking-calculator.html',
  '/house-hack-calculator': 'house-hacking-calculator.html',
  '/house-hack-calculator.html': 'house-hacking-calculator.html',
  '/house-hacking-rent-calculator': 'house-hacking-calculator.html',
  '/house-hacking-rent-calculator.html': 'house-hacking-calculator.html',
  '/duplex-house-hacking-calculator': 'house-hacking-calculator.html',
  '/duplex-house-hacking-calculator.html': 'house-hacking-calculator.html',
  '/triplex-house-hacking-calculator': 'house-hacking-calculator.html',
  '/triplex-house-hacking-calculator.html': 'house-hacking-calculator.html',
  '/fourplex-house-hacking-calculator': 'house-hacking-calculator.html',
  '/fourplex-house-hacking-calculator.html': 'house-hacking-calculator.html',
  '/house-hacking-fha-loan-calculator': 'house-hacking-calculator.html',
  '/house-hacking-fha-loan-calculator.html': 'house-hacking-calculator.html',
  '/how-to-calculate-house-hacking': 'house-hacking-calculator.html',
  '/how-to-calculate-house-hacking.html': 'house-hacking-calculator.html',
  '/cost-segregation-study-calculator': 'cost-segregation-study-calculator.html',
  '/cost-segregation-study-calculator.html': 'cost-segregation-study-calculator.html',
  '/cost-segregation-calculator': 'cost-segregation-study-calculator.html',
  '/cost-segregation-calculator.html': 'cost-segregation-study-calculator.html',
  '/bonus-depreciation-calculator-real-estate': 'cost-segregation-study-calculator.html',
  '/bonus-depreciation-calculator-real-estate.html': 'cost-segregation-study-calculator.html',
  '/cost-segregation-tax-savings-calculator': 'cost-segregation-study-calculator.html',
  '/cost-segregation-tax-savings-calculator.html': 'cost-segregation-study-calculator.html',
  '/cost-segregation-bonus-depreciation-calculator': 'cost-segregation-study-calculator.html',
  '/cost-segregation-bonus-depreciation-calculator.html': 'cost-segregation-study-calculator.html',
  '/cost-segregation-study-cost-vs-savings': 'cost-segregation-study-calculator.html',
  '/cost-segregation-study-cost-vs-savings.html': 'cost-segregation-study-calculator.html',
  '/commercial-cost-segregation-calculator': 'cost-segregation-study-calculator.html',
  '/commercial-cost-segregation-calculator.html': 'cost-segregation-study-calculator.html',
  '/residential-rental-cost-segregation-calculator': 'cost-segregation-study-calculator.html',
  '/residential-rental-cost-segregation-calculator.html': 'cost-segregation-study-calculator.html',
  '/calculate-debt-to-income-ratio-for-mortgage': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/calculate-debt-to-income-ratio-for-mortgage.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/debt-to-income-ratio-calculator-mortgage': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/debt-to-income-ratio-calculator-mortgage.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/dti-calculator-for-mortgage': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/dti-calculator-for-mortgage.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/mortgage-dti-calculator': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/mortgage-dti-calculator.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/how-to-calculate-debt-to-income-ratio-for-mortgage': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/how-to-calculate-debt-to-income-ratio-for-mortgage.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/front-end-and-back-end-dti-calculator': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/front-end-and-back-end-dti-calculator.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/fha-dti-calculator': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/fha-dti-calculator.html': 'calculate-debt-to-income-ratio-for-mortgage.html',
  '/seller-net-sheet-calculator': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator.html': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-florida': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-florida.html': 'seller-net-sheet-calculator.html',
  '/sellers-net-sheet-calculator': 'seller-net-sheet-calculator.html',
  '/sellers-net-sheet-calculator.html': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-texas': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-texas.html': 'seller-net-sheet-calculator.html',
  '/florida-seller-net-sheet-calculator': 'seller-net-sheet-calculator.html',
  '/florida-seller-net-sheet-calculator.html': 'seller-net-sheet-calculator.html',
  '/net-seller-sheet-calculator': 'seller-net-sheet-calculator.html',
  '/net-seller-sheet-calculator.html': 'seller-net-sheet-calculator.html',
  '/net-sheet-calculator-for-seller': 'seller-net-sheet-calculator.html',
  '/net-sheet-calculator-for-seller.html': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-california': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-calculator-california.html': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-florida-calculator': 'seller-net-sheet-calculator.html',
  '/seller-net-sheet-florida-calculator.html': 'seller-net-sheet-calculator.html',
  '/seller-proceeds-calculator': 'seller-net-sheet-calculator.html',
  '/seller-proceeds-calculator.html': 'seller-net-sheet-calculator.html',
  '/real-estate-capital-gains-tax-calculator': 'real-estate-capital-gains-tax-calculator.html',
  '/real-estate-capital-gains-tax-calculator.html': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-on-real-estate-calculator': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-on-real-estate-calculator.html': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-real-estate': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-real-estate.html': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-real-estate-calculator': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-real-estate-calculator.html': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-on-real-estate': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-on-real-estate.html': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-for-real-estate': 'real-estate-capital-gains-tax-calculator.html',
  '/capital-gains-tax-calculator-for-real-estate.html': 'real-estate-capital-gains-tax-calculator.html',
  '/home-sale-capital-gains-tax-calculator': 'real-estate-capital-gains-tax-calculator.html',
  '/home-sale-capital-gains-tax-calculator.html': 'real-estate-capital-gains-tax-calculator.html',
  '/section-121-exclusion-calculator': 'real-estate-capital-gains-tax-calculator.html',
  '/section-121-exclusion-calculator.html': 'real-estate-capital-gains-tax-calculator.html',
  '/real-estate-commission-calculator': 'real-estate-commission-calculator.html',
  '/real-estate-commission-calculator.html': 'real-estate-commission-calculator.html',
  '/real-estate-agent-commission-calculator': 'real-estate-commission-calculator.html',
  '/real-estate-agent-commission-calculator.html': 'real-estate-commission-calculator.html',
  '/calculate-real-estate-commission': 'real-estate-commission-calculator.html',
  '/calculate-real-estate-commission.html': 'real-estate-commission-calculator.html',
  '/calculate-real-estate-agent-commission': 'real-estate-commission-calculator.html',
  '/calculate-real-estate-agent-commission.html': 'real-estate-commission-calculator.html',
  '/commission-calculator-for-real-estate-agents': 'real-estate-commission-calculator.html',
  '/commission-calculator-for-real-estate-agents.html': 'real-estate-commission-calculator.html',
  '/how-to-calculate-real-estate-commission': 'real-estate-commission-calculator.html',
  '/how-to-calculate-real-estate-commission.html': 'real-estate-commission-calculator.html',
  '/real-estate-agents-commission-calculator': 'real-estate-commission-calculator.html',
  '/real-estate-agents-commission-calculator.html': 'real-estate-commission-calculator.html',
  '/real-estate-commission-calculator-with-broker-split': 'real-estate-commission-calculator.html',
  '/real-estate-commission-calculator-with-broker-split.html': 'real-estate-commission-calculator.html',
  '/calculator-real-estate-commission': 'real-estate-commission-calculator.html',
  '/calculator-real-estate-commission.html': 'real-estate-commission-calculator.html',
  '/real-estate-broker-commission-calculator': 'real-estate-commission-calculator.html',
  '/real-estate-broker-commission-calculator.html': 'real-estate-commission-calculator.html',
  '/mortgage-payoff-vs-investing-calculator': 'mortgage-payoff-vs-investing-calculator.html',
  '/mortgage-payoff-vs-investing-calculator.html': 'mortgage-payoff-vs-investing-calculator.html',
  '/mortgage-payoff-vs-investment-calculator': 'mortgage-payoff-vs-investing-calculator.html',
  '/mortgage-payoff-vs-investment-calculator.html': 'mortgage-payoff-vs-investing-calculator.html',
  '/pay-off-mortgage-or-invest-calculator': 'mortgage-payoff-vs-investing-calculator.html',
  '/pay-off-mortgage-or-invest-calculator.html': 'mortgage-payoff-vs-investing-calculator.html',
  '/pay-off-mortgage-early-vs-invest-calculator': 'mortgage-payoff-vs-investing-calculator.html',
  '/pay-off-mortgage-early-vs-invest-calculator.html': 'mortgage-payoff-vs-investing-calculator.html',
  '/mortgage-vs-investing-calculator': 'mortgage-payoff-vs-investing-calculator.html',
  '/mortgage-vs-investing-calculator.html': 'mortgage-payoff-vs-investing-calculator.html',
  '/rent-vs-buy-calculator': 'rent-vs-buy-calculator.html',
  '/rent-vs-buy-calculator.html': 'rent-vs-buy-calculator.html',
  '/renting-vs-buying-calculator': 'rent-vs-buy-calculator.html',
  '/renting-vs-buying-calculator.html': 'rent-vs-buy-calculator.html',
  '/buying-vs-renting-calculator': 'rent-vs-buy-calculator.html',
  '/buying-vs-renting-calculator.html': 'rent-vs-buy-calculator.html',
  '/should-i-rent-or-buy-calculator': 'rent-vs-buy-calculator.html',
  '/should-i-rent-or-buy-calculator.html': 'rent-vs-buy-calculator.html',
  '/rent-or-buy-calculator': 'rent-vs-buy-calculator.html',
  '/rent-or-buy-calculator.html': 'rent-vs-buy-calculator.html',
  '/rent-to-own-calculator': 'rent-to-own-calculator.html',
  '/rent-to-own-calculator.html': 'rent-to-own-calculator.html',
  '/rent-to-own-mortgage-calculator': 'rent-to-own-calculator.html',
  '/rent-to-own-mortgage-calculator.html': 'rent-to-own-calculator.html',
  '/lease-to-own-calculator': 'rent-to-own-calculator.html',
  '/lease-to-own-calculator.html': 'rent-to-own-calculator.html',
  '/lease-option-calculator': 'rent-to-own-calculator.html',
  '/lease-option-calculator.html': 'rent-to-own-calculator.html',
  '/rent-to-own-home-calculator': 'rent-to-own-calculator.html',
  '/rent-to-own-home-calculator.html': 'rent-to-own-calculator.html',
  '/rent-to-own-payment-calculator': 'rent-to-own-calculator.html',
  '/rent-to-own-payment-calculator.html': 'rent-to-own-calculator.html',
  '/airbnb-profit-calculator': 'airbnb-profit-calculator.html',
  '/airbnb-profit-calculator.html': 'airbnb-profit-calculator.html',
  '/airbnb-profit-calculator-excel': 'airbnb-profit-calculator.html',
  '/airbnb-profit-calculator-excel.html': 'airbnb-profit-calculator.html',
  '/airbnb-profit-calculator-spreadsheet': 'airbnb-profit-calculator.html',
  '/airbnb-profit-calculator-spreadsheet.html': 'airbnb-profit-calculator.html',
  '/free-airbnb-revenue-calculator': 'airbnb-profit-calculator.html',
  '/free-airbnb-revenue-calculator.html': 'airbnb-profit-calculator.html',
  '/airbnb-calculator': 'airbnb-profit-calculator.html',
  '/airbnb-calculator.html': 'airbnb-profit-calculator.html',
  '/airbnb-cash-flow-calculator': 'airbnb-profit-calculator.html',
  '/airbnb-cash-flow-calculator.html': 'airbnb-profit-calculator.html',
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
  '/interest-rate-cap-calculator': 'interest-rate-cap-calculator.html',
  '/interest-rate-cap-calculator.html': 'interest-rate-cap-calculator.html',
  '/chatham-rate-cap-calculator': 'interest-rate-cap-calculator.html',
  '/chatham-rate-cap-calculator.html': 'interest-rate-cap-calculator.html',
  '/chatham-interest-rate-cap-calculator': 'interest-rate-cap-calculator.html',
  '/chatham-interest-rate-cap-calculator.html': 'interest-rate-cap-calculator.html',
  '/rate-cap-calculator': 'interest-rate-cap-calculator.html',
  '/rate-cap-calculator.html': 'interest-rate-cap-calculator.html',
  '/arv-calculator': 'arv-calculator.html',
  '/arv-calculator.html': 'arv-calculator.html',
  '/free-arv-calculator': 'arv-calculator.html',
  '/free-arv-calculator.html': 'arv-calculator.html',
  '/arv-calculator-free': 'arv-calculator.html',
  '/arv-calculator-free.html': 'arv-calculator.html',
  '/arv-calculator-by-address': 'arv-calculator.html',
  '/arv-calculator-by-address.html': 'arv-calculator.html',
  '/biggerpockets-arv-calculator': 'arv-calculator.html',
  '/biggerpockets-arv-calculator.html': 'arv-calculator.html',
  '/how-to-calculate-arv-wholesaling': 'arv-calculator.html',
  '/how-to-calculate-arv-wholesaling.html': 'arv-calculator.html',
  '/ai-arv-calculator': 'arv-calculator.html',
  '/ai-arv-calculator.html': 'arv-calculator.html',
  '/arv-real-estate-calculator': 'arv-calculator.html',
  '/arv-real-estate-calculator.html': 'arv-calculator.html',
  '/10-year-heloc-payment-calculator': '10-year-heloc-payment-calculator.html',
  '/10-year-heloc-payment-calculator.html': '10-year-heloc-payment-calculator.html',
  '/10-year-heloc-calculator': '10-year-heloc-payment-calculator.html',
  '/10-year-heloc-calculator.html': '10-year-heloc-payment-calculator.html',
  '/heloc-calculator-with-extra-payments': '10-year-heloc-payment-calculator.html',
  '/heloc-calculator-with-extra-payments.html': '10-year-heloc-payment-calculator.html',
  '/heloc-payment-calculator-with-extra-payments': '10-year-heloc-payment-calculator.html',
  '/heloc-payment-calculator-with-extra-payments.html': '10-year-heloc-payment-calculator.html',
  '/how-to-calculate-heloc-interest-only-payment': '10-year-heloc-payment-calculator.html',
  '/how-to-calculate-heloc-interest-only-payment.html': '10-year-heloc-payment-calculator.html',
  '/how-to-calculate-interest-only-payments-on-a-heloc': '10-year-heloc-payment-calculator.html',
  '/how-to-calculate-interest-only-payments-on-a-heloc.html': '10-year-heloc-payment-calculator.html',
  '/seller-financing-calculator': 'seller-financing-calculator.html',
  '/seller-financing-calculator.html': 'seller-financing-calculator.html',
  '/seller-finance-calculator': 'seller-financing-calculator.html',
  '/seller-finance-calculator.html': 'seller-financing-calculator.html',
  '/owner-financing-calculator': 'seller-financing-calculator.html',
  '/owner-financing-calculator.html': 'seller-financing-calculator.html',
  '/seller-financing-calculator-with-balloon-payment': 'seller-financing-calculator.html',
  '/seller-carryback-calculator': 'seller-financing-calculator.html',
  '/wholesale-real-estate-calculator': 'wholesale-real-estate-calculator.html',
  '/wholesale-real-estate-calculator.html': 'wholesale-real-estate-calculator.html',
  '/wholesale-calculator-real-estate': 'wholesale-real-estate-calculator.html',
  '/wholesale-calculator-real-estate.html': 'wholesale-real-estate-calculator.html',
  '/real-estate-wholesale-calculator-excel': 'wholesale-real-estate-calculator.html',
  '/real-estate-wholesale-calculator-excel.html': 'wholesale-real-estate-calculator.html',
  '/free-wholesale-real-estate-calculator': 'wholesale-real-estate-calculator.html',
  '/free-wholesale-real-estate-calculator.html': 'wholesale-real-estate-calculator.html',
  '/how-to-calculate-wholesale-price-real-estate': 'wholesale-real-estate-calculator.html',
  '/wholesale-real-estate-arv-calculator': 'wholesale-real-estate-calculator.html',
  '/wholesale-real-estate-offer-calculator': 'wholesale-real-estate-calculator.html',
  '/adu-cost-calculator': 'adu-cost-calculator.html',
  '/adu-cost-calculator.html': 'adu-cost-calculator.html',
  '/southern-california-adu-guide-and-cost-calculator': 'adu-cost-calculator.html',
  '/southern-california-adu-guide-and-cost-calculator.html': 'adu-cost-calculator.html',
  '/adu-cost-calculator-los-angeles': 'adu-cost-calculator.html',
  '/adu-cost-calculator-los-angeles.html': 'adu-cost-calculator.html',
  '/cost-to-build-an-adu': 'adu-cost-calculator.html',
  '/garage-conversion-adu-cost': 'adu-cost-calculator.html',
  '/jadu-cost-calculator': 'adu-cost-calculator.html',
  '/203k-loan-calculator': '203k-loan-calculator.html',
  '/203k-loan-calculator.html': '203k-loan-calculator.html',
  '/203k-fha-loan-calculator': '203k-loan-calculator.html',
  '/203k-fha-loan-calculator.html': '203k-loan-calculator.html',
  '/203k-loan-mortgage-calculator': '203k-loan-calculator.html',
  '/203k-loan-mortgage-calculator.html': '203k-loan-calculator.html',
  '/203k-loan-payment-calculator': '203k-loan-calculator.html',
  '/203k-loan-payment-calculator.html': '203k-loan-calculator.html',
  '/203k-rehab-loan-calculator': '203k-loan-calculator.html',
  '/203k-rehab-loan-calculator.html': '203k-loan-calculator.html',
  '/fha-203k-loan-calculator': '203k-loan-calculator.html',
  '/203k-renovation-loan-calculator': '203k-loan-calculator.html',
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

  // 3. Known File Mapping & Dynamic .html Resolution
  let targetFileName = FILE_MAP[reqUrl] || FILE_MAP[reqUrl.replace(/\/$/, '')];
  if (!targetFileName) {
    const cleanUrl = reqUrl.startsWith('/') ? reqUrl.substring(1) : reqUrl;
    if (cleanUrl && fs.existsSync(path.join(__dirname, cleanUrl + '.html'))) {
      targetFileName = cleanUrl + '.html';
    } else {
      targetFileName = cleanUrl;
    }
  }
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
