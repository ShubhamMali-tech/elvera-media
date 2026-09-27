const fs = require('fs');
let content = fs.readFileSync('../src/app/App.tsx', 'utf8');

content = content.replace('function Footer() {', 'function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {');

content = content.replace(
  `<button onClick={() => onNavigate('lets-grow')} className="rounded-full bg-white text-primary px-10 py-5 text-lg font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300">`,
  `<button onClick={() => onNavigate?.('lets-grow')} className="rounded-full bg-white text-primary px-10 py-5 text-lg font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300">`
);

content = content.replace(
  `<Footer />`,
  `<Footer onNavigate={navigateTo} />`
).replace(
  `<Footer />`,
  `<Footer onNavigate={navigateTo} />`
).replace(
  `<Footer />`,
  `<Footer onNavigate={navigateTo} />`
).replace(
  `<Footer />`,
  `<Footer onNavigate={navigateTo} />`
);

fs.writeFileSync('../src/app/App.tsx', content);
console.log('Fixed Footer');