import { buildNights, calendar, featuredPaper, ledger, links, papers, programs } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section wrap">
      <h2 className="section__head">Who we are</h2>
      <div className="about__grid">
        <div className="prose">
          <p className="opener">
            Blockchain@USC is one of the oldest crypto student organizations in the country, run as
            two working desks: a research and investments desk, and a projects desk.
          </p>
          <h3>Research &amp; Investments</h3>
          <p>
            The research desk writes about the digital-asset ecosystem for bounties, publications,
            and competitions, and manages a portfolio of more than $100,000 in digital assets. Every
            position starts as a member pitch and passes a member vote before a dollar moves.
          </p>
          <h3>Projects</h3>
          <p>
            The projects desk builds for grants, hackathons, and consulting clients, and takes home
            real prize money and funding. Members can also work on marketing, events, and
            partnerships.
          </p>
          <p>
            New members get an education program that assumes zero background, plus access to
            professional research platforms and premium AI tooling. We sponsor travel to conferences
            like ETHDenver and UBC, and co-host our annual conference with VanEck alongside partners
            like Circle and Solana.
          </p>
          <p>
            Our alumni have recently landed at BlackRock, Coinbase, Jump Trading, Polychain Capital,
            and 50T. No prior crypto experience is required, and every major is welcomed.
          </p>
        </div>
        <aside className="aside">
          <h3 className="label">What membership includes</h3>
          <ul>
            <li>Education program that assumes zero background</li>
            <li>Professional research platforms and premium AI tooling</li>
            <li>Sponsored travel to ETHDenver, UBC, and more</li>
            <li>A vote on every portfolio position</li>
            <li>Annual conference co-hosted with VanEck</li>
          </ul>
          <p className="note">
            Questions? Write to{" "}
            <a className="tlink" href={links.email}>
              bchain@usc.edu
            </a>
          </p>
        </aside>
      </div>

      <div id="recruiting" className="cal">
        <h2 className="section__head">Fall &rsquo;26 calendar</h2>
        <div className="cal__table">
          <table>
            <caption>
              Six dates between you and membership. The first two are open to everyone; applications
              are due the Sunday after.
            </caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Event</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((row) => (
                <tr key={row.e} className={row.due ? "due" : undefined}>
                  <td className="d">{row.d}</td>
                  <td className="e">{row.e}</td>
                  <td className="n">{row.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Investments() {
  return (
    <section id="investments" className="section wrap">
      <h2 className="section__head">The ledger</h2>
      <div className="ledger">
        <div className="ledger__prose">
          <p>
            Blockchain@USC manages a live on-chain portfolio as <strong>Dorm Capital</strong>, our
            seat in DormDAO: a student-run investment DAO uniting 17 university blockchain clubs
            across the US, Canada, and the UK. Each school runs its own on-chain book and competes
            on a transparent, real-time leaderboard.
          </p>
          <p>
            The numbers are public and sometimes red. That is the point: real capital, real
            accountability, before graduation.
          </p>
          <div className="ledger__links">
            <a className="tlink" href={links.dormdao} target="_blank" rel="noopener">
              DormDAO ↗
            </a>
            <a className="tlink" href={links.leaderboard} target="_blank" rel="noopener">
              Live leaderboard ↗
            </a>
          </div>
        </div>
        <div className="ltable">
          <h3 className="label">Dorm Capital, on the record</h3>
          <dl>
            {ledger.map((row) => (
              <div key={row.k} style={{ display: "contents" }}>
                <dt>{row.k}</dt>
                <dd className={row.tone}>{row.v}</dd>
              </div>
            ))}
          </dl>
          <p className="ltable__note">
            Figures as shown on the DormDAO leaderboard; the season runs October to September.
          </p>
        </div>
      </div>
      <ul className="programs">
        {programs.map((p) => (
          <li key={p.name}>
            <span className="p-name">{p.name}</span>
            <span className="p-desc">{p.desc}</span>
            {p.link ? (
              <a className="tlink" href={p.link.href} target="_blank" rel="noopener">
                {p.link.label}
              </a>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="section wrap">
      <h2 className="section__head">The archive</h2>
      <article className="featured">
        <div>
          <p className="label featured__kicker">Latest paper</p>
          <h3>
            <a href={featuredPaper.href} target="_blank" rel="noopener">
              {featuredPaper.title}
            </a>
          </h3>
          <p>{featuredPaper.gloss}</p>
        </div>
        <div className="featured__meta">
          <strong>{featuredPaper.author}</strong>
          {featuredPaper.date}
        </div>
      </article>
      <ul className="archive">
        {papers.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener">
              <span className="a-date">{p.date}</span>
              <span className="a-title">{p.title}</span>
              <span className="a-by">{p.by}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="archive__more">
        <a className="tlink" href={links.medium} target="_blank" rel="noopener">
          Browse the full archive on Medium ↗
        </a>
      </p>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section wrap">
      <h2 className="section__head">Build nights</h2>
      <ol className="nights">
        {buildNights.map((n) => (
          <li key={n.name}>
            <span className="n-name">{n.name}</span>
            <span className="n-desc">{n.desc}</span>
            <a className="tlink" href={n.repo} target="_blank" rel="noopener">
              Repo ↗
            </a>
          </li>
        ))}
      </ol>
      <p className="projects__note">
        Bring a laptop, leave with a deployed contract. Past sessions live on{" "}
        <a className="tlink" href={links.github} target="_blank" rel="noopener">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
