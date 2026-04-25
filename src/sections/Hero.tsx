import { Link } from "react-router-dom";

import heroImg from "../assets/hero/hero.webp";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-6xl lg:text-7xl">
                ILUMINE
                <br />
                <span className="text-brand-500">SEU MERCADO</span>
                <br />
                COM FORÇA.
              </h1>
              <p className="mt-6 max-w-md text-sm text-muted">
                Estratégias de marketing digital de alta velocidade para
                negócios B2B, e-commerces e marcas que querem dominar o mercado.
                Redefina sua vantagem competitiva.
              </p>
              <Link
                to="/contato"
                className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-ink-soft"
              >
                INICIAR ESTRATÉGIA →
              </Link>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Equipe Alumiar em ação"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute right-4 top-6 bg-brand-500 px-5 py-3 text-white shadow-lg">
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                  Performance
                </p>
                <p className="mt-1 text-2xl font-extrabold leading-none">70%</p>
                <p className="text-[10px] font-medium uppercase tracking-wider">
                  Aumento em conversão
                </p>
              </div>

              <div className="absolute right-4 top-40 bg-white px-5 py-3 shadow-lg">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Awards
                </p>
                <p className="mt-1 text-2xl font-extrabold leading-none text-ink">
                  20+
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                  Reconhecimentos
                </p>
              </div>

              <div className="absolute bottom-6 right-4 grid h-16 w-16 place-items-center rounded-full border-2 border-brand-500/30 text-center text-[9px] font-bold uppercase tracking-widest text-brand-700">
                Top
                <br />
                Award
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 border-t border-line pt-8">
            <div className="px-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                Reviews
              </p>
              <p className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
                98%
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Satisfação dos clientes
              </p>
            </div>
            <div className="bg-brand-500 px-4 py-4 text-center text-white">
              <p className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                Projetos
              </p>
              <p className="mt-2 text-3xl font-extrabold md:text-4xl">800+</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider opacity-90">
                Entregues com sucesso
              </p>
            </div>
            <div className="px-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                Parceiros
              </p>
              <p className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
                2K+
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Stakeholders globais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
