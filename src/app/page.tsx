"use client";

import * as React from "react";
import { categories, futureRoadmap, trendingProducts } from "@/data/marketplace";

function normalizeText(value: string) {
  return value.toLowerCase();
}

function Badge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    Gratis: "bg-emerald-500/12 text-emerald-200 ring-emerald-500/20",
    Freemium: "bg-cyan-500/12 text-cyan-100 ring-cyan-500/20",
    Pago: "bg-amber-500/12 text-amber-100 ring-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ${styles[label]}`}
    >
      {label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8eb6ff]">
      {children}
    </p>
  );
}

function ProductCard({
  name,
  tagline,
  url,
  logo,
  pricing,
  bestFor,
  actionLabel = "Explorar producto",
}: {
  name: string;
  tagline: string;
  url: string;
  logo: string;
  pricing: string;
  bestFor: string;
  actionLabel?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#8eb6ff]/40 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/90 shadow-sm shadow-black/10">
              <img src={logo} alt={`${name} logo`} className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{name}</h3>
              <p className="text-sm text-slate-400">{bestFor}</p>
            </div>
          </div>
          <Badge label={pricing} />
        </div>
        <p className="text-sm leading-7 text-slate-300">{tagline}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-[#9bc2ff]">
        <span>{actionLabel}</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

function SectionBlock({
  eyebrow,
  title,
  description,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section className="space-y-8 border-t border-white/10 pt-14">
      <div className="space-y-4">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
        {footer}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [query, setQuery] = React.useState("");

  const filteredTrending = trendingProducts.filter((product) =>
    normalizeText(`${product.name} ${product.tagline} ${product.bestFor} ${product.category}`).includes(normalizeText(query)),
  );

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      products: category.products.filter((product) =>
        normalizeText(`${category.name} ${category.description} ${product.name} ${product.tagline} ${product.bestFor}`).includes(normalizeText(query)),
      ),
    }))
    .filter((category) => !query || category.products.length > 0 || normalizeText(`${category.name} ${category.description}`).includes(normalizeText(query)));

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="border-b border-white/10 pb-16">
          <div className="mb-10 rounded-[1.6rem] border border-white/10 bg-white/5 p-4 sm:p-5">
            <label htmlFor="search" className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8eb6ff]">
              Buscar en Karibean AI
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Busca productos, categorías o usos recomendados..."
              className="w-full rounded-2xl border border-white/10 bg-[#081624] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#8eb6ff]/50"
            />
          </div>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr] lg:items-end">
            <div className="space-y-8">
              <SectionLabel>Karibean AI</SectionLabel>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                  Un índice curado para encontrar productos de IA que sí están moviendo el mercado.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Karibean AI organiza herramientas por categoría, evita el ruido y te deja una selección compacta de productos útiles, conocidos o emergentes, con mezcla entre gratis, freemium y pago.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Max 4 productos por categoría</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Al menos 1 gratis y 1 pago</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Preparado para búsqueda, favoritos y refresh diario</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Roadmap del producto</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {futureRoadmap.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <SectionBlock
          eyebrow="Tendencias"
          title="Lo que está caliente ahora"
          description="Esta selección luego se refrescará cada día a las 6:00 AM hora Santo Domingo con una investigación real y múltiples fuentes."
          footer={<div className="pt-1 text-xs uppercase tracking-[0.16em] text-slate-500">Future cron: 6:00 AM America/Santo_Domingo</div>}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredTrending.map((product) => (
              <ProductCard key={product.id} {...product} actionLabel="Ver tendencia" />
            ))}
          </div>
        </SectionBlock>

        {filteredCategories.map((category) => (
          <SectionBlock
            key={category.id}
            eyebrow={category.name}
            title={category.name}
            description={category.description}
            footer={
              category.futureFeatures?.length ? (
                <div className="pt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Futuro: {category.futureFeatures.join(" · ")}
                </div>
              ) : undefined
            }
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </SectionBlock>
        ))}

        <SectionBlock
          eyebrow="Roadmap"
          title="Features futuros"
          description="Lo próximo aquí es convertir esta vitrina en producto: identidad visual, búsqueda, favoritos y un sistema real de actualización diaria."
        >
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {futureRoadmap.map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-white/8 pb-4">
                <span className="text-sm font-medium text-[#8eb6ff]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
