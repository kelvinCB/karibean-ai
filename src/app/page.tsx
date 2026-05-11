import { categories, futureRoadmap, trendingProducts } from "@/data/marketplace";

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

function TrendingRow({
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
      className="group grid gap-4 border-b border-white/8 py-5 transition first:pt-0 last:border-b-0 last:pb-0 hover:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/90 shadow-sm shadow-black/10">
            <img src={logo} alt={`${name} logo`} className="h-7 w-7 object-contain" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-medium text-white">{name}</h3>
              <Badge label={pricing} />
            </div>
            <p className="text-sm text-slate-400">{bestFor}</p>
          </div>
        </div>
        <span className="hidden text-sm text-[#9bc2ff] transition group-hover:translate-x-1 sm:inline">
          Visitar →
        </span>
      </div>
      <p className="max-w-3xl pl-16 text-sm leading-7 text-slate-300">{tagline}</p>
    </a>
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
        <span>Explorar producto</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="border-b border-white/10 pb-16">
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
            </div>

            <div className="space-y-6 lg:pl-8">
              <div className="border-l border-[#2a4a73] pl-5">
                <p className="text-sm leading-7 text-slate-300">
                  El objetivo no es parecer otro dashboard genérico de IA, sino una vitrina curada, clara y con suficiente personalidad para que navegar categorías se sienta útil.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="text-2xl font-semibold text-white">4</p>
                  <p className="mt-1 leading-6">productos máximo por categoría</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">1+1</p>
                  <p className="mt-1 leading-6">al menos un gratis y un pago</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-[0.42fr_1fr]">
          <div className="space-y-4">
            <SectionLabel>Tendencias</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">
              Lo que está caliente ahora
            </h2>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Esta franja luego se refrescará cada día a las 6:00 AM hora Santo Domingo con un cron real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trendingProducts.map((product) => (
              <div key={product.id} className="border-t border-white/10 pt-4">
                <TrendingRow {...product} />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-14 py-14 lg:grid-cols-[0.42fr_1fr]">
          <div className="space-y-4">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">
              Features futuros
            </h2>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              La prioridad ahora es pulir identidad visual, búsqueda y estructura para que Karibean AI empiece a sentirse como producto real.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {futureRoadmap.map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-white/8 pb-4">
                <span className="text-sm font-medium text-[#8eb6ff]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16 border-t border-white/10 pt-14">
          {categories.map((category) => (
            <div key={category.id} className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
              <div className="space-y-4">
                <SectionLabel>{category.name}</SectionLabel>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                  {category.name}
                </h2>
                <p className="max-w-sm text-sm leading-7 text-slate-400">
                  {category.description}
                </p>
                {category.futureFeatures?.length ? (
                  <div className="pt-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                    Futuro: {category.futureFeatures.join(" · ")}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
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
