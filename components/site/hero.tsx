import { links, partners, stats } from "@/lib/content";
import { StatNumber, TiltMark } from "@/components/site/interactive";

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
        <TiltMark>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" width={1080} height={1080} />
        </TiltMark>
      </div>

      <div className="statrail reveal" style={{ "--i": 2 } as React.CSSProperties}>
        <div className="statrail__grid">
          {stats.map((s) => (
            <div key={s.n}>
              <StatNumber value={s.n} />
              <p className="stat__q">{s.q}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pband reveal" style={{ "--i": 3 } as React.CSSProperties} aria-label="Partners">
        <p className="label">Conference &amp; program partners</p>
        <ul className="logowall">
          {partners.map((p) => (
            <li key={p.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} height={24} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
