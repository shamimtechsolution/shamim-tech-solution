const fs = require('fs');
const path = require('path');

// 1. Read the 242 URLs from uploaded TXT file
const txtPath = path.join(__dirname, '../public/assets/aistudio/shamim_tech_solution_242_new_urls_and_ai_studio_prompt_d406037e.txt');
const txtContent = fs.readFileSync(txtPath, 'utf8');

const regex = /^\s*(\d+)\.\s+URL:\s+([^\s]+)\s*\n\s*Title:\s+([^\n]+)/gm;
let m;
const entries = [];
while ((m = regex.exec(txtContent)) !== null) {
  entries.push({
    id: parseInt(m[1]),
    url: m[2].trim(),
    title: m[3].trim()
  });
}

console.log(`Parsed ${entries.length} entries from text file.`);

const products = entries.filter(e => e.url.startsWith('/products/'));
const services = entries.filter(e => e.url.startsWith('/services/'));

console.log(`Found ${products.length} products and ${services.length} services.`);

// Export entries for helper scripts
module.exports = { entries, products, services };
