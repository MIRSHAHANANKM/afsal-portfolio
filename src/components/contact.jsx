import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOCIALS, EMAIL, EMAIL_URL, PHONE, PHONE_URL, linkProps } from "./contactInfo";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 70%" } });
      tl.from(".c-head", { y: 80, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".c-social", { scale: 0.5, opacity: 0, stagger: 0.15, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .from(".c-info", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen bg-navy text-white px-6 md:px-16 py-24 overflow-hidden
                 flex flex-col items-center justify-center text-center"
    >
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <h2 className="c-head relative text-metal font-black uppercase tracking-tighter leading-[0.95] text-4xl md:text-6xl">
        Get in<br />touch
      </h2>

      <div className="relative mt-10 flex gap-4">
        {SOCIALS.map(({ name, href, Icon, external }) => (
          <a
            key={name}
            href={href}
            {...linkProps(external)}
            aria-label={name}
            className="c-social w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                       text-white transition hover:scale-110 hover:bg-accent hover:text-navy hover:border-accent
                       hover:shadow-lg hover:shadow-accent/30"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="c-info relative mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-sm text-slate-400">
        <a href={EMAIL_URL} {...linkProps(true)} className="break-all transition-colors hover:text-accent">
          {EMAIL}
        </a>
        <span className="hidden sm:block w-1 h-1 rounded-full bg-accent/60" />
        <a href={PHONE_URL} className="transition-colors hover:text-accent">
          {PHONE}
        </a>
      </div>
    </section>
  );
}