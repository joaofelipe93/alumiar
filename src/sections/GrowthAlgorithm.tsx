import { Link } from "react-router-dom";

export function GrowthAlgorithm() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-white p-8 md:p-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            <div className="bg-cream-soft/40 p-8 md:row-span-2">
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-4xl">
                O <span className="text-brand-500">algoritmo</span> do
                crescimento.
              </h2>
              <p className="mt-6 text-sm text-muted">
                Quebramos a fricção convencional do marketing. Nossa abordagem é
                um sistema calibrado e data-intensivo, desenhado para destravar
                crescimento exponencial e não-linear no seu negócio.
              </p>
              <Link
                to="/contato"
                className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-ink-soft"
              >
                FALE SOBRE SEU PROJETO →
              </Link>
            </div>

            <div className="bg-cream-soft/40 p-6">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-ink">
                Performance Otimizada
              </h3>
              <p className="mt-2 text-xs text-muted">
                Identificamos e exploramos canais subaproveitados e demanda de
                mercado latente para garantir uma vantagem competitiva
                decisiva.
              </p>
            </div>

            <div className="bg-brand-500 p-6 text-white">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest">
                Arquitetura Escalável
              </h3>
              <p className="mt-2 text-xs text-white/90">
                Construímos fundações digitais robustas e stacks de marketing
                engenheirados para conversão máxima e crescimento sustentado.
              </p>
            </div>

            <div className="bg-cream-soft/40 p-6">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-ink">
                Inteligência Preditiva
              </h3>
              <p className="mt-2 text-xs text-muted">
                Modelos de IA proprietários e machine learning para analisar
                dados e prever tendências de mercado com precisão.
              </p>
            </div>

            <div className="bg-cream-soft/40 p-6">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-ink">
                Full-Funnel Hacking
              </h3>
              <p className="mt-2 text-xs text-muted">
                Aplicamos pressão estratégica em toda a jornada do cliente —
                da consciência inicial à aquisição e conversão final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
