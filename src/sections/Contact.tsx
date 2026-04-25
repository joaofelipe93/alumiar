import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contato" className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
                Vamos conversar
              </p>
              <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                Pronto para
                <br />
                <span className="text-brand-500">acelerar?</span>
              </h2>
              <p className="mt-6 max-w-md text-sm text-muted">
                Conte pra gente o seu desafio. Nosso time entra em contato com
                uma proposta sob medida em até 24 horas.
              </p>

              <ul className="mt-8 space-y-3 text-xs text-muted">
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white text-[10px]">
                    @
                  </span>
                  contato@alumiar.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white text-[10px]">
                    ☎
                  </span>
                  +55 (00) 0000-0000
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white text-[10px]">
                    ◎
                  </span>
                  Atendimento em todo o Brasil
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-cream-soft/40 p-6 md:p-8"
            >
              {submitted ? (
                <div className="grid place-items-center py-12 text-center">
                  <p className="text-2xl font-extrabold uppercase tracking-tight text-ink">
                    Mensagem recebida!
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Em breve entraremos em contato.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  <label className="grid gap-1.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    Nome
                    <input
                      required
                      type="text"
                      className="border border-line bg-white px-4 py-3 text-sm font-normal text-ink placeholder:text-muted/60 focus:border-brand-500 focus:outline-none"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="grid gap-1.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    E-mail
                    <input
                      required
                      type="email"
                      className="border border-line bg-white px-4 py-3 text-sm font-normal text-ink placeholder:text-muted/60 focus:border-brand-500 focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </label>
                  <label className="grid gap-1.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    Mensagem
                    <textarea
                      required
                      rows={4}
                      className="border border-line bg-white px-4 py-3 text-sm font-normal text-ink placeholder:text-muted/60 focus:border-brand-500 focus:outline-none"
                      placeholder="Conte sobre o seu projeto"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-brand-500"
                  >
                    ENVIAR MENSAGEM →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
