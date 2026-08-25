const navLinks = [
  { label: "About", href: "#about" },
  { label: "Investments", href: "#investments" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

export function Masthead() {
  return (
    <header className="masthead wrap reveal" style={{ "--i": 0 } as React.CSSProperties}>
      <p className="masthead__issue">
        Est. 2018<span className="org"> · The student blockchain organization of USC</span>
      </p>
      <div className="masthead__bank">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="masthead__mark" src="/assets/logo-128.png" alt="" width={44} height={44} />
        <p className="masthead__word">
          <a href="#top">Blockchain@USC</a>
        </p>
      </div>
      <div className="masthead__rules" aria-hidden="true" />
      <nav className="nav" aria-label="Sections">
        <div className="nav__row">
          {navLinks.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="nav__link nav__link--apply" href="#recruiting">
            Apply Fall &rsquo;26
          </a>
        </div>
      </nav>
    </header>
  );
}
