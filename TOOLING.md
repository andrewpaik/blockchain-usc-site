# Tooling notes

Update 2026-08-25: the site now runs on Next.js (App Router, static export) with the
Tailwind v4 + shadcn/ui foundation initialized and mapped to the design tokens in
`app/globals.css`. beui/rareui components can now install via `npx shadcn@latest add ...`;
re-tokenize anything added (never default state). Content lives in `lib/content.ts`.

## Reviewed 2026-08-25 (suggested by the team)

| Tool | What it is | Fit today | Fit later |
|---|---|---|---|
| ui.shadcn.com | Design-system foundation for React/Tailwind | Foundation initialized (components.json, tokens mapped) | Add components as features need them |
| beui.dev | 110 animated React components (Motion + Tailwind, ships via shadcn CLI) | Installable now via the shadcn CLI | Good source for app-like features |
| rareui.com | 14 animated React components via shadcn CLI | Installable now via the shadcn CLI | Same |
| beautifului.dev | React primitives for AI-native interfaces (thinking traces, tool chips, task rows) | No AI-chat surface on this site | The kit to reach for if the club builds an assistant or live-agent UI |
| transitions.dev | Micro-transition patterns (copy-paste + agent skill) | Patterns are portable; the nav underline (origin-aware grow, left) is adapted natively in `index.html` | Full catalog applies once there is app UI |

## Ground rules if the React migration ever happens

- One system: shadcn/ui as the foundation; beui/rareui install into it via the registry.
- Never default state: everything re-tokenized to `tokens.css` (paper, cardinal, wash, Newsreader/Geist/Geist Mono) before it ships.
- Motion stays motivated: this is a quiet editorial site; transitions exist as feedback, not decoration.
