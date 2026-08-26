import { board } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="section wrap">
      <h2 className="section__head">The masthead</h2>
      <ul className="board">
        {board.map((m) => (
          <li key={m.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.img} alt="" width={48} height={48} loading="lazy" />
            <span className="b-id">
              <span className="b-role">{m.role}</span>
              <span className="b-name">{m.name}</span>
            </span>
            <span className="b-links">
              {m.x && (
                <a href={m.x} target="_blank" rel="noopener">
                  X
                </a>
              )}
              <a href={m.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
