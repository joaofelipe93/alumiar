import { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Inteligência de Mercado & Auditoria",
    description:
      "Analisamos vastos conjuntos de dados com IA proprietária para prever movimentos de mercado.",
    iconPath: "M11 4a7 7 0 105.2 11.7L21 21M11 4a7 7 0 017 7",
  },
  {
    title: "Engenharia de Crescimento",
    description:
      "Construímos sistemas escaláveis que aceleram aquisição, ativação e retenção.",
    iconPath: "M12 6v12M6 12h12",
  },
  {
    title: "Analytics Preditivo & Modelagem",
    description:
      "Modelos preditivos que transformam dados em decisões de marketing acionáveis.",
    iconPath: "M3 17l6-6 4 4 8-8",
  },
  {
    title: "Otimização de Infraestrutura",
    description:
      "Construímos fundações digitais robustas e stacks de marketing engenheirados para conversão.",
    iconPath: "M4 7h16M4 12h16M4 17h10",
    highlight: true,
  },
  {
    title: "Performance & Tráfego Pago",
    description:
      "Pressão estratégica em todo o funil — do primeiro toque à conversão final.",
    iconPath: "M5 12l5 5L20 7",
  },
  {
    title: "Branding & Identidade",
    description:
      "Marcas que conectam, comunicam e posicionam negócios de forma única no mercado.",
    iconPath: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z",
  },
];

export function Services() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 280;
    const gap = 16;
    el.scrollBy({
      left: (cardWidth + gap) * (direction === "left" ? -1 : 1),
      behavior: "smooth",
    });
  }

  return (
    <section id="servicos" className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                Seu parceiro <span className="text-brand-500">estratégico.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted">
                Nosso portfólio de serviços é construído em três pilares
                desenhados para máximo impacto e mínimo desperdício de recursos.
                Entregamos crescimento engenheirado, não suposições.
              </p>
              <Link
                to="/servicos"
                className="mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-ink-soft"
              >
                VER TODOS OS SERVIÇOS →
              </Link>
            </div>

            <div className="flex gap-2 self-start md:self-end">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Anterior"
                className="grid h-11 w-11 place-items-center border border-line bg-white text-ink transition hover:border-ink hover:bg-cream-soft/40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Próximo"
                className="grid h-11 w-11 place-items-center bg-brand-500 text-white transition hover:bg-brand-600"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const isHighlight = service.highlight;
              return (
                <article
                  key={service.title}
                  className={`flex w-[260px] flex-shrink-0 snap-start flex-col p-6 transition sm:w-[280px] ${
                    isHighlight
                      ? "bg-brand-500 text-white"
                      : "bg-cream-soft/40 text-ink hover:bg-cream-soft/70"
                  }`}
                >
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full ${
                      isHighlight
                        ? "bg-white text-brand-500"
                        : "bg-brand-500 text-white"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={service.iconPath} />
                    </svg>
                  </div>
                  <h3 className="mt-16 text-sm font-bold uppercase tracking-widest">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 text-xs ${
                      isHighlight ? "text-white/90" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
