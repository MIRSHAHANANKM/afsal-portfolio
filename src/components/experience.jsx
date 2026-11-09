import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COMPANY1 = "GSPU Chartered Accountants Specialized Bahraini Partnership Company · Al Seef, Bahrain";
const COMPANY2 = "Millenial Auditing · Al Seef, Bahrain";

const EXPERIENCE = [
    {
    period: "aug 2026 – Present",
    role: "Senior Auditor",
    company: COMPANY2,
    points: [
      "Lead audit engagements across manufacturing, retail and service sectors, ensuring full IFRS and regulatory compliance.",
      "Plan audit strategies and supervise team members to deliver engagements on schedule.",
      "Review financial statements and accounting records for accuracy against regulatory standards.",
      "Evaluate internal control systems and risk management frameworks, identifying gaps and recommending remediation.",
      "Advise clients on VAT compliance, AML regulations and financial reporting standards.",
    ],
  },
  {
    period: "Sep 2025 – Aug 2026",
    role: "Senior Auditor",
    company: COMPANY1,
    points: [
      "Lead audit engagements across manufacturing, retail and service sectors, ensuring full IFRS and regulatory compliance.",
      "Plan audit strategies and supervise team members to deliver engagements on schedule.",
      "Review financial statements and accounting records for accuracy against regulatory standards.",
      "Evaluate internal control systems and risk management frameworks, identifying gaps and recommending remediation.",
      "Advise clients on VAT compliance, AML regulations and financial reporting standards.",
    ],
  },
  {
    period: "Sep 2022 – Sep 2025",
    role: "Auditor",
    company: COMPANY1,
    points: [
      "Conducted statutory and internal audits across manufacturing, retail and service sectors, ensuring IFRS compliance.",
      "Prepared and reviewed financial statements in accordance with IFRS standards.",
      "Prepared and submitted Suspicious Transaction Reports (STR) in compliance with AML regulations.",
      "Developed AML compliance frameworks for corporate clients, strengthening regulatory adherence and risk monitoring.",
      "Performed financial projections and feasibility studies to support strategic business decisions.",
      "Maintained client relationships, advising finance teams directly on audit findings and regulatory obligations.",
    ],
  },
  {
    period: "May 2022 – Sep 2022",
    role: "Assistant Auditor",
    company: COMPANY1,
    points: [
      "Assisted in planning and executing external and internal audit assignments.",
      "Conducted financial analysis, reconciliations and substantive audit testing.",
      "Prepared audit documentation and working papers in compliance with audit standards and professional ethics.",
      "Supported senior auditors in evaluating financial statements and internal control processes.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-head", {
        y: 80, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-head", start: "top 85%" },
      });
      gsap.utils.toArray(".exp-item").forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="bg-navy text-white py-20 md:py-24 overflow-hidden">
      <h2
        className="exp-head text-metal px-6 md:px-16 mb-12 md:mb-16 font-black uppercase tracking-tighter
                   leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem]"
      >
        Experience
      </h2>

      <div className="border-t border-white/15">
        {EXPERIENCE.map((e) => (
          <article key={e.role + e.period} className="exp-item border-b border-white/15 px-6 md:px-16 py-8 md:py-12">
            <p className="text-accent text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase mb-4">{e.period}</p>

            <div className="max-w-4xl">
              <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">{e.role}</h3>
              <p className="mt-2 text-slate-400 font-light text-xs md:text-sm">{e.company}</p>

              <ul className="mt-5 space-y-2.5">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-slate-300 font-light text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}