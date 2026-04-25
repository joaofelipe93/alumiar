import { Link } from "react-router-dom";

// 📸 Para adicionar imagem de fundo do CTA:
// 1. Coloque o arquivo em src/assets/cta/  (ex: cta-bg.jpg, ~1600x600px, escura)
// 2. Descomente a linha abaixo e ajuste o nome:
// import ctaBg from "../assets/cta/cta-bg.jpg";
const ctaBg: string | undefined = undefined;

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {ctaBg && (
        <img
          src={ctaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      )}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(242,84,21,0.6), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
            Pronto para iluminar
            <br />
            <span className="text-brand-400">seu crescimento?</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-white/70">
            O mercado não espera por ninguém. Agende uma sessão estratégica
            confidencial com nosso time executivo e defina seu próximo movimento.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-brand-500 px-8 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-brand-600"
          >
            AGENDAR CONSULTORIA →
          </Link>
        </div>
      </div>
    </section>
  );
}
