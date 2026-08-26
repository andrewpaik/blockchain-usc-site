"use client";

/* The site's interaction layer. Every behavior here has a job: orientation
 * (scroll-spy nav, return bar), live data (deadline countdown), data emphasis
 * (stat count-up), or objecthood (the mark tilting like the solid it draws).
 * All of it collapses gracefully: no scroll listeners, IntersectionObserver
 * only, direct DOM mutation for per-frame work, and reduced-motion opts out. */

import { useEffect, useRef, useState } from "react";
import { applicationDeadline } from "@/lib/content";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- nav with scroll-spy: the underline rests on the section you are reading ---- */
const sections = ["about", "investments", "research", "projects", "team"];

export function NavRow() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="nav__row">
      {sections.map((id) => (
        <a
          key={id}
          className={`nav__link${active === id ? " nav__link--active" : ""}`}
          href={`#${id}`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
      <a className="nav__link nav__link--apply" href="#recruiting">
        Apply Fall &rsquo;26
      </a>
    </div>
  );
}

/* ---- return bar: a slim issue-line that appears once the masthead has scrolled away ---- */
export function ReturnBar() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const masthead = document.querySelector(".masthead");
    if (!masthead) return;
    const io = new IntersectionObserver(([entry]) => setOn(!entry.isIntersecting), {
      rootMargin: "-1px 0px 0px 0px",
    });
    io.observe(masthead);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`returnbar${on ? " returnbar--on" : ""}`} aria-hidden={!on}>
      <div className="wrap returnbar__in">
        <a className="returnbar__word" href="#top" tabIndex={on ? 0 : -1}>
          Blockchain@USC
        </a>
        <a className="returnbar__apply" href="#recruiting" tabIndex={on ? 0 : -1}>
          Apply Fall &rsquo;26 →
        </a>
      </div>
    </div>
  );
}

/* ---- stat count-up: numbers tick in once, when first seen ---- */
export function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const match = value.match(/\d+/);
    if (!match) return;
    const target = parseInt(match[0], 10);
    let done = false;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done) return;
      done = true;
      io.disconnect();
      const t0 = performance.now();
      const dur = 650;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = value.replace(match[0], String(Math.round(target * eased)));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = value;
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <p ref={ref} className="stat__n">
      {value}
    </p>
  );
}

/* ---- the mark is drawn as a solid; on fine pointers it behaves like one ---- */
export function TiltMark({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const img = el.querySelector("img");
    if (!img) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = `perspective(900px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg)`;
    };
    const leave = () => {
      img.style.transform = "";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className="lede__mark">
      {children}
    </div>
  );
}

/* ---- live countdown in the apply band; renders nothing once the deadline passes ---- */
export function DeadlineCountdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const ms = new Date(applicationDeadline).getTime() - Date.now();
    if (ms > 0) setDays(Math.ceil(ms / 86_400_000));
  }, []);

  if (days === null) return null;
  return <p className="deadline">{days === 1 ? "1 day remains." : `${days} days remain.`}</p>;
}
