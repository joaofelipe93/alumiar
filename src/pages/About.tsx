import { CtaBanner } from "../sections/CtaBanner";
import { Mandate } from "../sections/Mandate";

export function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white p-8 md:p-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
              Sobre nós
            </p>
            <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
              Iluminamos
              <br />
              <span className="text-brand-500">marcas.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm text-muted">
              Conheça quem somos, no que acreditamos e como ajudamos marcas a
              brilharem com estratégia, dados e propósito.
            </p>
          </div>
        </div>
      </section>
      <Mandate />
      <CtaBanner />
    </>
  );
}
