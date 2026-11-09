import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  { year: "2024", title: "ACCA", org: "Association of Chartered Certified Accountants · Bahrain" },
  { year: "2022", title: "MBA – Financial Management", org: "Bharathiar University · India" },
  { year: "2020", title: "Bachelor of Commerce", org: "Bharathiar University · India" },
  { year: "2016", title: "CA – Common Proficiency Test", org: "The Institute of Chartered Accountants of India · India" },
];

const CERTIFICATIONS = [
  { year: "May 2023", title: "Anti-Money Laundering (AML) Training", org: "Bahrain Institute of Banking and Finance" },
  {
    year: "May 2017",
    title: "ICITSS – Information Technology",
    org: "Integrated Course on IT and Soft Skills · The Institute of Chartered Accountants of India",
  },
];

function Group({ label, items, offset = 0, className = "" }) {
  return (
    <div className={className}>
      <p className="mb-5 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-500">{label}</p>
      <div className="border-t border-white/15">
        {items.map((item, i) => (
          <article
            key={item.title}
            className="cred-item grid gap-2 md:gap-10 md:grid-cols-[140px_1fr_auto] md:items-baseline
                       border-b border-white/15 py-6 md:py-8"
          >
            <p className="text-accent text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase">{item.year}</p>
            <div>
              <h3 className="text-lg md:text-2xl font-extrabold uppercase tracking-tight leading-tight">{item.title}</h3>
              <p className="mt-1.5 text-slate-400 font-light text-xs md:text-sm">{item.org}</p>
            </div>
            <span className="hidden md:block text-metal font-black text-4xl leading-none">
              {String(offset + i + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Credentials() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cred-head", {
        y: 80, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".cred-head", start: "top 85%" },
      });
      gsap.utils.toArray(".cred-item").forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="credentials" ref={ref} className="bg-navy text-white px-6 md:px-16 pt-20 pb-24 overflow-hidden">
      <div className="flex flex-col gap-5 mb-12 md:mb-16">
        <h2 className="cred-head text-metal font-black uppercase tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem]">
          Credentials
        </h2>
        <p className="max-w-xl font-light text-slate-300 text-sm leading-relaxed">
          Professional qualification, academic background and specialist training behind my audit and compliance work.
        </p>
      </div>

      <Group label="Education" items={EDUCATION} />
      <Group label="Certifications" items={CERTIFICATIONS} offset={EDUCATION.length} className="mt-14 md:mt-16" />
    </section>
  );
}