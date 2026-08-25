import { links, stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="lede wrap">
      <div className="lede__grid reveal" style={{ "--i": 1 } as React.CSSProperties}>
        <div>
          <h1>Research. Invest. Build.</h1>
          <p className="lede__sub">
            A community that thinks differently, with teams across research, investments, projects,
            consulting, and engineering.
          </p>
          <div className="lede__ctas">
            <a className="chip chip--ink" href="#recruiting">
              Apply Fall &rsquo;26 →
            </a>
            <a className="tlink" href={links.conference} target="_blank" rel="noopener">
              Our conference ↗
            </a>
          </div>
        </div>
        {/* The issue's figure: the club's own mark, printed large. Swap for a real
            photograph of the club when one exists; the slot takes either. */}
        <div className="lede__mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" width={1080} height={1080} />
        </div>
      </div>

      <div className="statrail reveal" style={{ "--i": 2 } as React.CSSProperties}>
        <div className="statrail__grid">
          {stats.map((s) => (
            <div key={s.n}>
              <p className="stat__n">{s.n}</p>
              <p className="stat__q">{s.q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
