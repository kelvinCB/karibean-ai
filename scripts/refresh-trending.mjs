import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'src/data/marketplace.ts');
let content = fs.readFileSync(filePath, 'utf8');

const products = [
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'Editor AI-first para programar y entregar más rápido.',
    url: 'https://www.cursor.com/',
    logo: 'https://www.google.com/s2/favicons?domain=cursor.com&sz=128',
    pricing: 'Freemium',
    category: 'Tendencias',
    bestFor: 'Productividad de desarrollo',
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'Asistente fuerte para razonamiento, documentos largos y writing de alta calidad.',
    url: 'https://claude.ai/',
    logo: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128',
    pricing: 'Freemium',
    category: 'Tendencias',
    bestFor: 'Investigación y análisis',
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    tagline: 'Agentes AI que planifican, deciden y ejecutan tareas sobre herramientas reales.',
    url: 'https://openclaw.ai/',
    logo: 'https://www.google.com/s2/favicons?domain=openclaw.ai&sz=128',
    pricing: 'Gratis',
    category: 'Tendencias',
    bestFor: 'Automatización y agentes',
  },
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'Convierte prompts en interfaces y productos funcionales con velocidad brutal.',
    url: 'https://lovable.dev/',
    logo: 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=128',
    pricing: 'Freemium',
    category: 'Tendencias',
    bestFor: 'Prototipado de productos',
  },
];

const generated = `export const trendingProducts: Product[] = ${JSON.stringify(products, null, 2)
  .replace(/"([^"]+)":/g, '$1:')
  .replace(/"/g, "'")};`;

content = content.replace(/export const trendingProducts: Product\[\] = \[[\s\S]*?\];/, generated);
fs.writeFileSync(filePath, content);
console.log('Trending actualizado en src/data/marketplace.ts');
