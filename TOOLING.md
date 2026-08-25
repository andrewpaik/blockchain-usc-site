# Tooling notes

The site is deliberately dependency-free: hand-written HTML/CSS on a token system
(`tokens.css`), no framework, no build step. That is where its speed and its
non-template character come from, so component libraries are not installed here.

## Reviewed 2026-08-25 (suggested by the team)

| Tool | What it is | Fit today | Fit later |
|---|---|---|---|
| ui.shadcn.com | Design-system foundation for React/Tailwind | No React runtime here | The base if the site ever becomes a Next.js app |
| beui.dev | 110 animated React components (Motion + Tailwind, ships via shadcn CLI) | Same | Good source for app-like features |
| rareui.com | 14 animated React components via shadcn CLI | Same | Same |
| beautifului.dev | React primitives for AI-native interfaces (thinking traces, tool chips, task rows) | No AI-chat surface on this site | The kit to reach for if the club builds an assistant or live-agent UI |
| transitions.dev | Micro-transition patterns (copy-paste + agent skill) | Patterns are portable; the nav underline (origin-aware grow, left) is adapted natively in `index.html` | Full catalog applies once there is app UI |

## Ground rules if the React migration ever happens

- One system: shadcn/ui as the foundation; beui/rareui install into it via the registry.
- Never default state: everything re-tokenized to `tokens.css` (paper, cardinal, wash, Newsreader/Geist/Geist Mono) before it ships.
- Motion stays motivated: this is a quiet editorial site; transitions exist as feedback, not decoration.
