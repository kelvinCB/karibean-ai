import { categories, futureRoadmap, trendingProducts } from "@/data/marketplace";

function Badge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    Free: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
    Freemium: "bg-sky-500/15 text-sky-300 ring-sky-400/30",
    Paid: "bg-amber-500/15 text-amber-200 ring-amber-300/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${styles[label] ?? "bg-white/10 text-white ring-white/15"}`}
    >
      {label}
    </span>
  );
}

function ProductCard({
  name,
  tagline,
  url,
  logo,
  pricing,
  bestFor,
}: {
  name: string;
  tagline: string;
  url: string;
  logo: string;
  pricing: string;
  bestFor: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/8"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-12 w-12 rounded-2xl bg-white/90 p-2 object-contain"
            />
            <div>
              <h3 className="text-base font-semibold text-white">{name}</h3>
              <p className="text-sm text-slate-400">{bestFor}</p>
            </div>
          </div>
          <Badge label={pricing} />
        </div>
        <p className="text-sm leading-6 text-slate-300">{tagline}</p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-cyan-200">
        <span>Visit site</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#10304a,_#050816_55%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <section className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                Karibean AI
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Un marketplace curado para descubrir los productos de IA que de verdad la están rompiendo.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Explora herramientas top por categoría, mezcla sana entre gratis y pago, y una franja trending pensada para refrescarse cada día.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Max 4 productos por categoría</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Al menos 1 gratis y 1 pago</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Preparado para trending diario</span>
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
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Trending</p>
              <h2 className="mt-2 text-2xl font-semibold">4 productos calientes del momento</h2>
            </div>
            <p className="text-sm text-slate-400">Future cron: 6:00 AM America/Santo_Domingo</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">{category.description}</p>
                </div>
                {category.futureFeatures?.length ? (
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Futuro: {category.futureFeatures.join(" · ")}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {category.products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
