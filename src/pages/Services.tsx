import { CtaBanner } from "../sections/CtaBanner";
import { Services as ServicesSection } from "../sections/Services";

export function ServicesPage() {
  return (
    <>
      <section className="bg-cream pb-4 pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-white p-8 md:p-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
              Nossos serviços
            </p>
            <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
              Soluções que <span className="text-brand-500">iluminam</span>
              <br />
              o seu negócio.
            </h1>
            <p className="mt-6 max-w-xl text-sm text-muted">
              Soluções de marketing digital sob medida para iluminar a sua
              marca e gerar resultados reais. Da estratégia à execução, do
              branding ao tráfego pago.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
