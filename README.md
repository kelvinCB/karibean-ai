# Karibean AI

Karibean AI es un marketplace curado de productos de inteligencia artificial, pensado para descubrir herramientas que realmente están empujando el mercado en categorías específicas.

## Alcance del MVP

- Hero principal con posicionamiento del producto
- Sección Trending con 4 productos destacados del día
- Categorías curadas con un máximo de 4 productos cada una
- Cada categoría con mezcla de pricing, incluyendo al menos un producto gratis y uno pago
- Cada producto muestra:
  - nombre
  - logo
  - URL
  - tagline
  - badge de pricing
  - uso recomendado

## Categorías incluidas en este MVP

- Trending
- IA para Presentaciones
- IDEs con IA
- Generadores de Imágenes
- Generadores de Video
- IA para Marketing
- Automatización y Agentes

## Stack tecnológico

- Next.js
- TypeScript
- Tailwind CSS

## Correr localmente

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000

## Features futuros

- Buscar productos
- Buscar categorías
- Guardar favoritos
- Vista detalle o modal por producto
- Flujo para sugerir nuevas tools
- Buscar por workflow
- Colecciones guardadas
- Comparación entre tools o stacks
- Remover residuos visuales de Next.js
- Crear identidad visual propia para Karibean AI
- Refresh automático de Trending a las 6:00 AM hora Santo Domingo

## Reglas de curación

- Máximo 4 productos por categoría
- Al menos un producto gratis por categoría
- Al menos un producto pago por categoría
- Priorizar productos con reconocimiento, utilidad o momentum real

## Nota

This MVP uses static curated data in `src/data/marketplace.ts` so the repo is easy to clone, inspect, and iterate on.


## Curation rules

- Maximum 4 products per category
- At least one free product per category
- At least one paid product per category
- Prefer products with strong brand/product recognition
