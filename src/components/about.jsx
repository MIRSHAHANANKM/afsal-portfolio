import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREETING = "Hey, I'm Afsal Aboobacker.";
const ROLE = "Senior Auditor · ACCA";
const LOCATION = "Jasra, Kingdom of Bahrain";

const PARAGRAPHS = [
  "ACCA-qualified auditor with 3+ years leading external and internal audit engagements across manufacturing, retail, and service sectors in the GCC. Specialized in IFRS-compliant financial reporting, VAT and AML regulatory frameworks, and internal control evaluation.",
  "Prepared and filed Suspicious Transaction Reports and built AML compliance frameworks adopted by corporate clients, backed by an MBA in Financial Management and AML training from the Bahrain Institute of Banking and Finance.",
];

const BOLD = ["ACCA-qualified", "IFRS-compliant", "VAT", "AML", "GCC", "MBA"];

const ROWS = [
  { dir: "right", items: ["External Audit", "Internal Audit", "IFRS Compliance", "Risk Assessment", "Internal Controls"] },
  { dir: "left", items: ["Financial Reporting", "Financial Analysis", "Budgeting", "Forecasting", "Feasibility Studies", "Fraud Detection"] },
  { dir: "right", items: ["VAT Compliance", "AML Compliance", "Suspicious Transaction Reporting", "Regulatory Reporting", "Audit Planning"] },
  { dir: "left", items: ["Leadership", "Collaboration", "Communication", "Problem-Solving", "Client Advisory"] },
];

function Marquee({ items, dir }) {
  const list = Array(4).fill(items).flat();
  const half = (
    <div className="flex shrink-0 items-center">
      {list.map((t, i) => (
        <span key={i} className="flex items-center text-xs md:text-base font-medium tracking-widest text-slate-400">
          <span className="mx-5">{t}</span>
          <span className="text-accent/60">•</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden py-2.5">
      <div className={`flex w-max ${dir === "left" ? "marquee-left" : "marquee-right"}`}>
        {half}
        {half}
      </div>
    </div>
  );
}

function Words({ text }) {
  return text.split(" ").map((w, i) => {
    const clean = w.replace(/[.,]/g, "");
    return (
      <span key={i} className={`word ${BOLD.includes(clean) ? "font-semibold" : ""}`}>
        {w}{" "}
      </span>
    );
  });
}

export default function About() {
  const headRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(
        ".word",
        { color: "#4b5280", opacity: 0.2 },
        {
          color: "#ffffff",
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%", end: "bottom 50%", scrub: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="min-h-screen bg-navy text-white flex flex-col justify-between overflow-hidden">
      <div className="mx-auto max-w-[1500px] w-full px-6 md:px-12 py-20 grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/afsal.png"
            alt="Afsal Aboobacker"
            className="w-[300px] sm:w-[380px] md:w-full md:h-[75vh] object-contain object-left
                       drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Heading + card + location/resume */}
        <div>
          <h2
            ref={headRef}
            className="text-metal font-black uppercase tracking-tighter leading-none text-center md:text-left
                       text-[14vw] md:text-[4.5rem] lg:text-[6rem]"
          >
            Intro
          </h2>

          <div
            ref={cardRef}
            className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8
                       shadow-2xl shadow-navy-deep/60 hover:bg-white/10 transition-colors md:text-left"
          >
            <p className="text-lg md:text-xl font-semibold">{GREETING}</p>
            <p className="mt-1 mb-4 text-xs md:text-sm tracking-wide text-accent">{ROLE}</p>

            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-sm md:text-lg font-light leading-relaxed mb-4 last:mb-0">
                <Words text={p} />
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6">
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0">
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {LOCATION}
            </p>

            <a
              href="/afsal_aboobacker.pdf"
              download="afsal_aboobacker.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-accent border border-accent text-navy
                         px-5 py-2 text-sm font-semibold transition-colors hover:bg-accent-dark"
            >
              Download Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M12 4v12M6 12l6 6 6-6M5 20h14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-navy-deep border-t border-white/5 py-3">
        {ROWS.map((r, i) => (
          <Marquee key={i} items={r.items} dir={r.dir} />
        ))}
      </div>
    </section>
  );
}