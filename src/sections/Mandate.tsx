import { Link } from "react-router-dom";

import teamImg from "../assets/mandate/team.jpg";

export function Mandate() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="bg-white p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <img
              src={teamImg}
              alt="Time Alumiar"
              className="aspect-[4/3] w-full object-cover"
            />

            <div>
              <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                Nossa
                <br />
                missão.
              </h2>
              <p className="mt-6 max-w-md text-sm text-muted">
                Implantamos frameworks de crescimento proprietários para
                negócios B2B de alta performance, e-commerces e marcas
                criativas. Redefina sua vantagem competitiva.
              </p>
              <Link
                to="/sobre"
                className="mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-ink-soft"
              >
                CONHEÇA O TIME →
              </Link>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="bg-cream-soft/40 p-5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M3 12h4l3-9 4 18 3-9h4" />
                    </svg>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-ink">
                    Execução Data-First
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Cada decisão é validada por inteligência de mercado em tempo
                    real e modelos proprietários.
                  </p>
                </div>
                <div className="bg-cream-soft/40 p-5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0116 0" />
                    </svg>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-ink">
                    Foco no Cliente
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Nosso sucesso é medido apenas pelo crescimento mensurável e
                    de alta velocidade dos parceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
