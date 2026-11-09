import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const START = "AFSAL ABOOBACKER";
const END = "PORTFOLIO";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Hero() {
  const [text, setText] = useState(START);
  const typoRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const isMobile = window.innerWidth < 768;
    let startTimer, interval, tl;
    let cancelled = false;

    const failsafe = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 8000);

    gsap.set(typoRef.current, { xPercent: -50, yPercent: -50, top: "50%" });
    gsap.set(btnRef.current, { opacity: 0, y: 50 });

    const runIntro = () => {
      if (cancelled) return;
      let i = 0;
      interval = setInterval(() => {
        i++;
        if (i <= END.length) {
          const scramble = CHARS[Math.floor(Math.random() * 26)];
          setText(END.slice(0, i - 1) + scramble + START.slice(i));
        }
        if (i > END.length) {
          clearInterval(interval);
          setText(END);
          tl = gsap.timeline({
            delay: 0.4,
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });
          tl.to(typoRef.current, { top: isMobile ? "35%" : "45%", duration: 1.5, ease: "power3.inOut" }, 0)
            .to(btnRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, 0.3);
        }
      }, 50);
    };

    startTimer = setTimeout(runIntro, 1000);

    return () => {
      cancelled = true;
      clearTimeout(failsafe);
      clearTimeout(startTimer);
      clearInterval(interval);
      tl && tl.kill();
      gsap.killTweensOf([typoRef.current, btnRef.current]);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section id="home" className="hero-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-navy-deep/20 backdrop-blur-[2px]" />

      <h1
        ref={typoRef}
        className="absolute left-1/2 z-10 whitespace-nowrap select-none font-black uppercase
                   tracking-tighter text-[6.5vw] md:text-[3.5rem] lg:text-[4.5rem] leading-none
                   bg-linear-to-b from-white via-pink-200 to-indigo-300 bg-clip-text text-transparent"
      >
        {text}
      </h1>

      <div className="absolute bottom-10 md:bottom-16 inset-x-0 z-30 flex justify-center">
        <a
          ref={btnRef}
          href="#contact"
          className="rounded-full backdrop-blur-md bg-navy/40 border border-white/20 px-7 py-2.5 text-sm
                     text-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-navy"
        >
          Contact
        </a>
      </div>
    </section>
  );
}