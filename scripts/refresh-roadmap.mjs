import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'src/data/marketplace.ts');
let content = fs.readFileSync(filePath, 'utf8');

const stamp = new Date().toISOString().slice(0, 10);
const marker = `Revisión curada automática (${stamp})`;

content = content.replace(
  /export const futureRoadmap = \[[\s\S]*?\];/,
  `export const futureRoadmap = [
  'Buscar productos',
  'Buscar categorías',
  'Guardar favoritos',
  'Actualizar Trending todos los días a las 6:00 AM, hora Santo Domingo',
  'Modal o vista detalle de producto',
  'Flujo para sugerir nuevas tools',
  'Buscar por workflow en automatización y agentes',
  'Colecciones guardadas de productos',
  'Comparar tools o stacks parecidos',
  'Quitar rastros visuales y logos heredados de Next.js',
  'Crear identidad visual propia para Karibean AI',
  '${marker}',
];`,
);

fs.writeFileSync(filePath, content);
console.log('Roadmap/curation metadata actualizada en src/data/marketplace.ts');
