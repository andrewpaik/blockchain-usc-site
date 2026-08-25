import { links, socials } from "@/lib/content";

export function ApplyBand() {
  return (
    <div className="applyband">
      <div className="wrap applyband__in">
        <div>
          <h2>Applications for Fall &rsquo;26 close September 6.</h2>
          <p>
            No prior crypto experience required. Start at the Involvement Fair on August 26 or the
            info session on September 1.
          </p>
        </div>
        <a className="chip chip--accent" href="#recruiting">
          See the calendar
        </a>
      </div>
    </div>
  );
}

export function Colophon() {
  return (
    <footer className="colophon wrap">
      <div className="colophon__grid">
        <div>
          <h3 className="label">Colophon</h3>
          <p>
            Blockchain@USC advances decentralized systems through rigorous research and development
            at the University of Southern California. Est. 2018. Set in Newsreader and Geist.
          </p>
        </div>
        <div>
          <h3 className="label">Write to us</h3>
          <ul>
            <li>
              <a href={links.email}>bchain@usc.edu</a>
            </li>
            <li>
              <a href={links.conference} target="_blank" rel="noopener">
                USC Blockchain Conference
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="label">Elsewhere</h3>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="colophon__base">
        <span>© 2026 Blockchain@USC. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
        <span className="fo">FIGHT ON</span>
      </div>
    </footer>
  );
}
