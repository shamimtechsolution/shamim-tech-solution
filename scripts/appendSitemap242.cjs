const fs = require('fs');
const path = require('path');
const { entries } = require('./parse242Entries.cjs');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Check existing URLs
const existingMatches = [...sitemapContent.matchAll(/<loc>https:\/\/www\.shamimtechsolution\.com([^<]+)<\/loc>/g)].map(m => m[1]);
const existingSet = new Set(existingMatches);

console.log(`Current sitemap has ${existingSet.size} unique URLs.`);

let addedCount = 0;
let newXmlChunks = [];

for (const item of entries) {
  if (!existingSet.has(item.url)) {
    addedCount++;
    newXmlChunks.push(`  <url>
    <loc>https://www.shamimtechsolution.com${item.url}</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }
}

console.log(`Adding ${addedCount} new URLs to sitemap.xml...`);

if (newXmlChunks.length > 0) {
  const insertBefore = '</urlset>';
  const updatedContent = sitemapContent.replace(
    insertBefore,
    `  <!-- 242 New Specialized Service & Product URLs -->\n${newXmlChunks.join('\n')}\n${insertBefore}`
  );
  fs.writeFileSync(sitemapPath, updatedContent, 'utf8');
  console.log(`sitemap.xml successfully updated! Total URLs now: ${existingSet.size + addedCount}`);
} else {
  console.log('No new URLs needed to be added to sitemap.xml.');
}
