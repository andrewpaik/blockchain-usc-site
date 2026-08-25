# Brand spec: Blockchain@USC site rebuild

Compiled 2026-08-25 from the live site (blockchainatusc.com) and its real assets.
Per huashu-design §1.a: assets over guesses; nothing below is invented.

## Assets (downloaded, in `assets/`)

- `logo.png`: club mark. Isometric block "S/C" in cardinal red (#B01E24 range, dark face #8C1518),
  USC gold (#FFC72C range), rose highlight (#E89AA4 range). 1080x1080, transparent bg.
- `logos/`: 12 partner marks (VanEck, a16z, Solana, Optimism, Superscrypt, DormDAO, Sui, Aptos,
  Avalanche, Akash, Kinexys, Circle) + 6 social icons (LinkedIn, X, Instagram, GitHub, YouTube, Medium).
  Mixed fills (several are white-on-transparent, from the old dark site). Treatment: monochrome via
  CSS `filter: brightness(0)` on light pages, `brightness(0) invert(1)` on dark. Logo-only walls, no captions.
- `team/`: 7 real headshots (jpg, ~1024px wide).

## Color derivation (huashu three-step: sample, converge, argue)

Sampled from the club mark + USC identity (Cardinal #990000, Gold #FFCC00). Not from trend palettes.

- Cardinal (mark red) is the accent for the light directions; chroma pressed to ink density (oklch C ~0.15)
  per the print-ink rule: it should read as press ink on paper, not as a screen glow.
- Gold appears only where the mark itself carries it, except Direction C, where USC gold is pressed
  into a phosphor amber accent (terminal-CRT cultural register): the one place gold leads.
- Neutrals tinted warm (hue 40-90) to agree with the cardinal/gold anchor. No pure #000/#fff.

## Voice and facts (all real, from the live site)

- One of the oldest crypto student organizations in the country. Two functions:
  Research & Investments (>$100K digital-asset portfolio; every investment pitched and voted by members)
  and Projects (grants, hackathons, consulting; plus marketing, events, partnerships).
- Dorm Capital via DormDAO: 17 university clubs (US, Canada, UK), live on-chain leaderboard.
  Since Oct 2023: +18.30% ETH return, #2/17 rank, -29.56% USD return.
  2025-26 season: $116,769 NAV, #6/17 rank.
- Alumni: BlackRock, Coinbase, Jump Trading, Polychain Capital, 50T. Founders raised $7M+ (incl. Paradigm).
- 10 published papers on Medium (2022-2026); 4 Build Nights on GitHub; 7 officers; annual conference
  with VanEck alongside Circle and Solana; sponsored travel (ETHDenver, UBC); Legend $1K-to-$10K
  trading competition; Gemini prediction-markets partnership.
- Recruiting Fall '26: Involvement Fair Aug 26 (11am-2pm) · Info Session Sep 1 (7-8pm) ·
  Application deadline Sep 6 (11:59pm) · Interviews Sep 10-11 · Mixer Sep 13 · First meeting Sep 15.
- Email bchain@usc.edu · Conference uscblockchainconf.com · Socials: X @0xBlockchainSC,
  IG @blockchainatusc, GitHub BlockchainUSC, LinkedIn /company/trojancrypto, YouTube @blockchainusc,
  Medium /blockchain-at-usc. Sign-off: FIGHT ON. © 2026 Blockchain@USC.

## No-go zones (from the four skills, applied to this brand)

- Zero em/en dashes anywhere visible. Zero section-number eyebrows ("01 / ABOUT"), zero fake terminal
  chrome ("SYS.LOG_v2.4", "README.md" props), zero decorative status dots, zero scroll cues,
  zero typing-cursor hero animation, zero invented metrics or testimonials, zero purple gradients,
  zero uniform-dark-blue + neon glow, zero Space Grotesk / Fraunces / Instrument Serif / Inter-as-display.
- Anchor ids and nav labels preserved from the old site: #about #investments #research #projects #team.
- Apply CTA anchors to the real recruiting timeline (the old button had no working destination).
- Newsletter modal not reproduced (no endpoint to submit to); research follow goes to the real Medium.
