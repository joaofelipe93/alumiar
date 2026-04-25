import { Contact as ContactSection } from "../sections/Contact";

export function ContactPage() {
  return (
    <>
      <section className="bg-cream pb-4 pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-white p-8 md:p-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
              Contato
            </p>
            <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
              Vamos
              <br />
              <span className="text-brand-500">iluminar</span> juntos.
            </h1>
            <p className="mt-6 max-w-xl text-sm text-muted">
              Conte pra gente o seu desafio. Em até 24 horas você recebe uma
              proposta sob medida do nosso time.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
