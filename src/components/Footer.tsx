import { Link } from "react-router-dom";

const cols = [
  {
    title: "NAVEGAÇÃO",
    links: [
      { label: "SERVIÇOS", to: "/servicos" },
      { label: "METODOLOGIA", to: "/sobre" },
      { label: "RESULTADOS", to: "/sobre" },
      { label: "INSIGHTS", to: "/sobre" },
    ],
  },
  {
    title: "SERVIÇOS",
    links: [
      { label: "INTELIGÊNCIA DE MERCADO", to: "/servicos" },
      { label: "ENGENHARIA DE CRESCIMENTO", to: "/servicos" },
      { label: "ANALYTICS & MODELAGEM", to: "/servicos" },
      { label: "INFRA & OTIMIZAÇÃO", to: "/servicos" },
    ],
  },
  {
    title: "INSTITUCIONAL",
    links: [
      { label: "TERMOS", to: "/sobre" },
      { label: "POLÍTICAS", to: "/sobre" },
      { label: "PRIVACIDADE", to: "/sobre" },
      { label: "NDA", to: "/sobre" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="grid h-8 w-8 place-items-center bg-brand-500 text-white font-extrabold">
                A
              </span>
              <span>Alumiar</span>
            </Link>
            <p className="mt-4 max-w-xs text-xs text-white/60">
              Implantamos frameworks de crescimento proprietários para negócios
              B2B de alta performance, e-commerces e marcas criativas.
            </p>

            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                Contato
              </p>
              <p className="mt-2 text-xs text-white/80">contato@alumiar.com</p>
              <p className="text-xs text-white/80">+55 (00) 0000-0000</p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-[10px] uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} Alumiar Agência. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
