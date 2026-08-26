import { Masthead } from "@/components/site/masthead";
import { Hero } from "@/components/site/hero";
import { About, Investments, Projects, Research } from "@/components/site/sections";
import { Team } from "@/components/site/people";
import { ApplyBand, Colophon } from "@/components/site/footer";

export default function Page() {
  return (
    <>
      <Masthead />
      <main id="top">
        <Hero />
        <About />
        <Investments />
        <Research />
        <Projects />
        <Team />
        <ApplyBand />
      </main>
      <Colophon />
    </>
  );
}
