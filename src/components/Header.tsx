import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/servicos", label: "SERVIÇOS" },
  { to: "/sobre", label: "METODOLOGIA" },
  { to: "/sobre", label: "RESULTADOS" },
  { to: "/sobre", label: "INSIGHTS" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-sm bg-brand-500 text-white font-extrabold">
        A
      </span>
      <span className="text-ink">Alumiar</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, idx) => (
            <NavLink
              key={`${item.label}-${idx}`}
              to={item.to}
              className="text-xs font-semibold tracking-widest text-ink-soft transition-colors hover:text-brand-500"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden items-center gap-2 bg-brand-500 px-5 py-2.5 text-xs font-bold tracking-widest text-white transition-colors hover:bg-brand-600 md:inline-flex"
        >
          VAMOS CONVERSAR
        </Link>

        <button
          type="button"
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line bg-white px-6 py-4 md:hidden">
          {navItems.map((item, idx) => (
            <NavLink
              key={`${item.label}-${idx}`}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold tracking-widest text-ink-soft"
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="bg-brand-500 px-5 py-2.5 text-center text-xs font-bold tracking-widest text-white"
          >
            VAMOS CONVERSAR
          </Link>
        </nav>
      )}
    </header>
  );
}
