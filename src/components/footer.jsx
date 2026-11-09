import { SOCIALS, EMAIL, EMAIL_URL, PHONE, PHONE_URL, linkProps } from "./contactInfo";

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["Credentials", "#credentials"],
];

export default function Footer() {
  return (
    <footer className="relative min-h-screen bg-navy-deep text-white overflow-hidden flex flex-col justify-between px-6 md:px-16 pt-20 pb-6">
      <div className="footer-glow absolute inset-x-0 bottom-0 h-1/2 pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs text-slate-500">Connect with me</p>

          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ name, href, Icon, external }) => (
              <a
                key={name}
                href={href}
                {...linkProps(external)}
                aria-label={name}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                           text-white transition hover:scale-110 hover:bg-accent hover:text-navy hover:border-accent"
              >
                <Icon />
              </a>
            ))}
          </div>

          <a
            href={EMAIL_URL}
            {...linkProps(true)}
            className="mt-6 block text-base sm:text-xl md:text-2xl font-semibold break-all text-slate-100 transition-colors hover:text-accent"
          >
            {EMAIL}
          </a>
          <a href={PHONE_URL} className="mt-2 inline-block text-sm md:text-base text-slate-400 transition-colors hover:text-accent">
            {PHONE}
          </a>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            {NAV.map(([n, h]) => (
              <a key={n} href={h} className="transition-colors hover:text-accent">
                {n}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:text-right">
          <h3 className="text-xl md:text-2xl font-semibold">Let's work together</h3>
          <p className="mt-2 text-sm text-slate-400">Open to audit, compliance and advisory opportunities across the GCC.</p>
          <a
            href="#contact"
            className="inline-block mt-5 rounded-full bg-accent text-navy px-6 py-2.5 text-sm font-semibold transition hover:scale-105 hover:bg-accent-dark"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-metal text-center font-bold uppercase tracking-tighter leading-none text-[13vw] md:text-[9vw] my-10">
          Afsal
        </h2>
        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Afsal Aboobacker. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-slate-300">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-slate-300">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}