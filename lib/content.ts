/* All site content lives here, so officers edit data, not markup.
 * Every figure and date mirrors the club's public record; nothing is invented. */

export const stats = [
  { n: "$100K+", q: "member-run digital-asset portfolio" },
  { n: "10", q: "published papers since 2022" },
  { n: "$7M+", q: "raised by member founders" },
];

const gcal = (text: string, dates: string) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&ctz=America/Los_Angeles&location=${encodeURIComponent("University of Southern California")}`;

export const calendar = [
  { d: "Wed, Aug 26", e: "Involvement Fair", n: "11:00am to 2:00pm, open to all", cal: gcal("Blockchain@USC at the Involvement Fair", "20260826T110000/20260826T140000") },
  { d: "Tue, Sep 1", e: "Open Info Session", n: "7:00pm to 8:00pm, open to all", cal: gcal("Blockchain@USC Open Info Session", "20260901T190000/20260901T200000") },
  { d: "Sun, Sep 6", e: "Application deadline", n: "11:59pm sharp", due: true, cal: gcal("Blockchain@USC application deadline", "20260906T230000/20260906T235900") },
  { d: "Sep 10 & 11", e: "Interviews", n: "invite only, times TBD" },
  { d: "Sun, Sep 13", e: "Social Mixer", n: "6:00pm to 8:00pm, invite only" },
  { d: "Tue, Sep 15", e: "First member meeting", n: "invite only" },
] as { d: string; e: string; n: string; due?: boolean; cal?: string }[];

/* Fall '26 application deadline, used by the live countdown. */
export const applicationDeadline = "2026-09-06T23:59:00-07:00";

export const ledger = [
  { k: "Founded", v: "Oct 2023" },
  { k: "ETH return, since inception", v: "+18.30%", tone: "up" },
  { k: "USD return, since inception", v: "-29.56%", tone: "down" },
  { k: "All-time rank", v: "#2 / 17" },
  { k: "Season NAV (Oct 2025 to Sep 2026)", v: "$116,769" },
  { k: "Season rank", v: "#6 / 17" },
] as { k: string; v: string; tone?: "up" | "down" }[];

export const programs = [
  {
    name: "Trading competition",
    desc: "Turn $1,000 into $10,000 in a live competition on Legend, exclusive to members.",
    link: { label: "Legend ↗", href: "https://www.legend.trade/" },
  },
  {
    name: "Prediction markets",
    desc: "A partnership with Gemini gives members hands-on experience trading real-world event outcomes.",
    link: { label: "Gemini ↗", href: "https://www.gemini.com/predictions?status=active" },
  },
  {
    name: "Club treasury",
    desc: "Learn to manage a treasury and invest club assets with a long-term horizon and real accountability.",
  },
] as { name: string; desc: string; link?: { label: string; href: string } }[];

export const featuredPaper = {
  title: "Making Web3 Social",
  href: "https://medium.com/blockchain-at-usc/making-web3-social-9ce832042ed0",
  gloss:
    "On what it would take for social to move on-chain: identity, connection, and why we keep returning to the feed.",
  author: "Shriya Upadhyay",
  date: "April 30, 2026",
};

export const papers = [
  { date: "Oct 2025", title: "Unichain Incentive Analysis", by: "Sampedro, Saar, Becerra", tag: "DeFi", href: "https://medium.com/blockchain-at-usc/unichain-incentive-analysis-43390c48e423" },
  { date: "Sep 2025", title: "Incentive Impact Analysis: Velodrome", by: "Rai, Chai, Zhou, Feng", tag: "Optimism", href: "https://medium.com/blockchain-at-usc/incentive-impact-analysis-velodrome-0741ff9676c4" },
  { date: "Oct 2023", title: "The Fault-Tolerant Consensus Problem and Its Solutions", by: "Zaarour", tag: "distributed systems", href: "https://medium.com/blockchain-at-usc/the-fault-tolerant-consensus-problem-and-its-solutions-in-blockchains-and-distributed-systems-7f883227ebc7" },
  { date: "Oct 2023", title: "Web3 Social: Identity, Connection & Value Creation", by: "with Superscrypt", tag: "web3", href: "https://medium.com/blockchain-at-usc/web3-social-driving-new-forms-of-identity-connection-value-creation-889babc9fe54" },
  { date: "Mar 2023", title: "Account Abstraction and EIP-4337: Ethereum UX from 0 to 1", by: "Zaarour", tag: "Ethereum", href: "https://medium.com/blockchain-at-usc/deep-dive-into-account-abstraction-and-eip-4337-scaling-ethereum-ux-from-0-to-1-c2e6da49d226" },
  { date: "Nov 2022", title: "In the Re-embedding Moment", by: "Zhou", tag: "crypto", href: "https://medium.com/blockchain-at-usc/reembedding-dao-d372905624a8" },
  { date: "Nov 2022", title: "Talking to the Stranger, SBF", by: "Zhou", tag: "psychology", href: "https://medium.com/blockchain-at-usc/ftx-sbf-crisis-1e425004317a" },
  { date: "Nov 2022", title: "Scaling Solutions of Monolithic and Modular Chains", by: "Chen, Gnanasekaran, Jeter", tag: "Avalanche", href: "https://medium.com/blockchain-at-usc/scaling-solutions-of-monolithic-and-modular-chains-922b6ee7bfb4" },
  { date: "Nov 2022", title: "How Reddit Created a Successful NFT Project in Crypto Winter", by: "Cajigal", tag: "NFT", href: "https://medium.com/blockchain-at-usc/how-reddit-created-a-successful-nft-project-in-crypto-winter-and-what-it-means-for-the-web-3-27afac2d7bea" },
];

export const buildNights = [
  {
    name: "Hello World & Counter dApp",
    desc: "A Hello World contract in Remix, then a full-stack counter dApp on Sepolia with Hardhat, Solidity, and an ethers.js React frontend.",
    repo: "https://github.com/BlockchainUSC/Build-Night-1",
  },
  {
    name: "Crowdfunding dApp",
    desc: "Launchable campaigns, ETH pledges, and creator claims, deployed to Sepolia on the same stack.",
    repo: "https://github.com/BlockchainUSC/Build-Night-2",
  },
  {
    name: "Create your own token",
    desc: "An ERC-20 with OpenZeppelin: mint, burn, and transfer from a React frontend against a live Sepolia contract.",
    repo: "https://github.com/BlockchainUSC/Build-Night-3",
  },
  {
    name: "Voting dApp, at HackSC 2024",
    desc: "A decentralized voting app on Ethereum, built as a workshop with Solidity, Hardhat, and React.",
    repo: "https://github.com/BlockchainUSC/HackSC-2024",
  },
];

export const board = [
  { name: "Sebastian Sampedro", role: "Co-President", img: "/assets/team/thumbs/sebastian_sampedro_illustrated.jpg", x: "https://x.com/donostiako_", linkedin: "https://www.linkedin.com/in/sxsampedro/" },
  { name: "Alp Guneri", role: "Co-President", img: "/assets/team/thumbs/alp_guneri_illustrated.jpg", x: "https://x.com/GuneriAlp", linkedin: "https://www.linkedin.com/in/alpguneri/" },
  { name: "Austin Lee", role: "Director of Projects", img: "/assets/team/thumbs/austin_lee.jpg", linkedin: "https://www.linkedin.com/in/yuanchiaolee/" },
  { name: "Andrew Paik", role: "Director of Research & Investments", img: "/assets/team/thumbs/andrew_paik.jpg", linkedin: "https://www.linkedin.com/in/andrew-paik-9b78882b3/" },
  { name: "Lindsey Ren", role: "Head of Partnerships", img: "/assets/team/thumbs/lindsey_ren.jpg", linkedin: "https://www.linkedin.com/in/lindsey-ren/" },
  { name: "Bhargav Cowdary", role: "Head of Community", img: "/assets/team/thumbs/bhargav_cowdary.jpg", linkedin: "https://www.linkedin.com/in/bhargav-chowdary0/" },
  { name: "Melanie Aguirre", role: "Head of Marketing", img: "/assets/team/thumbs/melanie_aguirre_illustrated.jpg", linkedin: "https://www.linkedin.com/in/melanie-aguirre05/" },
] as { name: string; role: string; img: string; x?: string; linkedin: string }[];

export const partners = [
  { name: "VanEck", img: "/assets/logos/vaneck.svg" },
  { name: "a16z crypto", img: "/assets/logos/a16z-mono.png" },
  { name: "Solana", img: "/assets/logos/solana.svg" },
  { name: "Circle", img: "/assets/logos/circle.svg" },
  { name: "Optimism", img: "/assets/logos/optimism.svg" },
  { name: "Superscrypt", img: "/assets/logos/superscrypt.png" },
  { name: "DormDAO", img: "/assets/logos/dormdao.png" },
  { name: "Sui", img: "/assets/logos/sui.svg" },
  { name: "Aptos", img: "/assets/logos/aptos.svg" },
  { name: "Avalanche", img: "/assets/logos/avalanche.svg" },
  { name: "Akash", img: "/assets/logos/akash.png" },
  { name: "Kinexys", img: "/assets/logos/kinexys.png" },
];

export const socials = [
  { label: "X", href: "https://x.com/0xBlockchainSC" },
  { label: "Instagram", href: "https://www.instagram.com/blockchainatusc/" },
  { label: "GitHub", href: "https://github.com/BlockchainUSC" },
  { label: "Medium", href: "https://medium.com/blockchain-at-usc" },
  { label: "YouTube", href: "https://www.youtube.com/@blockchainusc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trojancrypto" },
];

export const links = {
  conference: "https://uscblockchainconf.com/",
  medium: "https://medium.com/blockchain-at-usc",
  github: "https://github.com/BlockchainUSC",
  dormdao: "https://www.dormdao.io/",
  leaderboard: "https://www.dormdao.io/leaderboard",
  email: "mailto:bchain@usc.edu",
};
