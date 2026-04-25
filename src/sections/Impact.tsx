import { Link } from "react-router-dom";

const cases = [
  {
    title: "2.4× LIFETIME VALUE",
    description:
      "Estratégia de retenção reengenheirada para uma marca de luxo global de e-commerce.",
    gradient: "from-brand-200 to-brand-400",
  },
  {
    title: "45% REDUÇÃO EM CAC",
    description:
      "Geração de demanda com targeting estratégico para uma marca criativa premiada.",
    gradient: "from-brand-300 to-brand-500",
  },
  {
    title: "+310% PIPELINE",
    description:
      "Tornamos mais fácil transformar leads em oportunidades para uma SaaS Series B.",
    gradient: "from-brand-400 to-brand-700",
  },
];

export function Impact() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-white p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                Impacto
                <br />
                <span className="text-brand-500">comprovado.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted">
                Medimos sucesso pela velocidade do crescimento. Confira os
                dados dos nossos engajamentos mais recentes de alto valor.
              </p>
            </div>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 self-start bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-ink-soft md:self-auto"
            >
              MAIS CASES →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <article key={c.title} className="group">
                <div
                  className={`aspect-[4/3] w-full bg-gradient-to-br ${c.gradient}`}
                />
                <h3 className="mt-5 text-base font-extrabold uppercase tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-muted">{c.description}</p>
                <Link
                  to="/sobre"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink transition group-hover:text-brand-500"
                >
                  Ver case →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
