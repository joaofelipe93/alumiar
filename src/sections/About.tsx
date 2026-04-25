export function About() {
  return (
    <section className="bg-brand-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Sobre nós
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">
            Iluminamos marcas com estratégia e propósito
          </h2>
          <p className="mt-6 text-muted">
            Na Alumiar, acreditamos que toda marca tem uma luz própria — só
            precisa do parceiro certo para revelá-la. Por isso, combinamos
            estratégia orientada a dados com criatividade que conecta para gerar
            resultados consistentes.
          </p>
          <p className="mt-4 text-muted">
            Atendemos negócios de diferentes portes e segmentos, sempre com foco
            em performance, ROI e crescimento sustentável.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-brand-600">+150</p>
              <p className="text-xs text-muted">Clientes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-600">+5</p>
              <p className="text-xs text-muted">Anos de mercado</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-600">+300%</p>
              <p className="text-xs text-muted">ROI médio</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-300 to-brand-500" />
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 mt-12" />
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-700 to-ink mt-12" />
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600" />
        </div>
      </div>
    </section>
  );
}
