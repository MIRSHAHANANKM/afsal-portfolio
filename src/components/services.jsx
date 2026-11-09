import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "External & Internal Audit",
    desc: "I plan and lead statutory and internal audit engagements across manufacturing, retail and service sectors, supervising teams to deliver on schedule.",
    caps: ["External Audit", "Internal Audit", "Audit Planning & Execution", "Substantive Testing", "Audit Documentation", "Team Supervision"],
    cta: "VIEW EXPERIENCE",
    href: "#experience",
  },
  {
    title: "IFRS Reporting",
    desc: "I prepare and review financial statements and accounting records for accuracy and full compliance with IFRS and regulatory standards.",
    caps: ["IFRS Compliance", "Financial Statement Preparation", "Financial Statement Review", "Reconciliations", "Regulatory Reporting"],
  },
  {
    title: "Risk & Internal Controls",
    desc: "I evaluate internal control systems and risk management frameworks, identify gaps and recommend practical remediation.",
    caps: ["Risk Assessment", "Internal Controls Evaluation", "Risk Management Frameworks", "Gap Identification", "Remediation Planning", "Fraud Detection"],
  },
  {
    title: "VAT & AML Compliance",
    desc: "I advise clients on VAT and AML obligations, prepare Suspicious Transaction Reports and build AML compliance frameworks for corporate clients.",
    caps: ["VAT Compliance", "AML Compliance", "AML Frameworks", "Suspicious Transaction Reporting (STR)", "Regulatory Reporting"],
    cta: "VIEW CREDENTIALS",
    href: "#credentials",
  },
  {
    title: "Financial Advisory",
    desc: "I perform financial analysis, projections and feasibility studies that support strategic business decisions.",
    caps: ["Financial Analysis", "Budgeting & Forecasting", "Financial Projections", "Feasibility Studies", "Client Advisory"],
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: -100, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="bg-navy text-white py-20 overflow-hidden">
      <h2
        ref={headRef}
        className="text-metal text-right px-6 md:px-16 mb-12 font-black uppercase tracking-tighter
                   leading-[0.95] text-4xl sm:text-5xl md:text-6xl xl:text-[5.5rem]"
      >
        What I<br />can do
      </h2>

      <div className="border-t border-white/15">
        {SERVICES.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.title} className="group border-b border-white/15 transition-colors duration-300 hover:bg-accent hover:text-navy">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full cursor-pointer flex items-center justify-between gap-4 px-6 md:px-16 py-5 md:py-7 text-left"
              >
                <span className="flex items-center gap-4 md:gap-8 min-w-0">
                  <span className="text-xs md:text-base font-light">0{i + 1}</span>
                  <span className="truncate text-base sm:text-xl md:text-3xl font-bold uppercase tracking-tight">
                    {s.title}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`shrink-0 w-5 h-5 md:w-8 md:h-8 text-accent group-hover:text-navy
                              transition-transform duration-300 ${isOpen ? "-rotate-45" : "rotate-45"}`}
                >
                  <path d="M3 12h17M14 6l6 6-6 6" />
                </svg>
              </button>

              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-6 md:px-16 pb-8 grid md:grid-cols-2 gap-8 text-sm md:text-base">
                    <ul className="space-y-2 font-light">
                      {s.caps.map((c) => (
                        <li key={c} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 shrink-0 bg-accent group-hover:bg-navy" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p className="font-light leading-relaxed text-slate-300 group-hover:text-navy max-w-md">{s.desc}</p>
                      {s.cta && (
                        <a
                          href={s.href}
                          className="inline-block mt-5 border border-accent group-hover:border-navy px-5 py-2.5 text-xs font-bold
                                     tracking-widest bg-navy text-accent"
                        >
                          {s.cta}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}