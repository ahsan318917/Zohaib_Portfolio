import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useScroll,
  useTransform
} from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  X
} from "lucide-react";
import "./styles.css";

const asset = (path) => `/assets/${path}`;

const contactLinks = {
  linkedin: "https://www.linkedin.com/in/zohaib-sajjad-44a704374",
  email: "mailto:zohaibsajjad1620@gmail.com",
  whatsapp: "https://wa.me/923366767687"
};

const projects = [
  {
    id: "confusedgirlla",
    title: "ConfusedGirlla",
    eyebrow: "Influencer / Instagram Growth",
    profile: "https://www.instagram.com/confusedgirlla/",
    intro:
      "Growth-focused influencer page built around audience engagement, content momentum, and consistent social visibility.",
    challenge:
      "The page needed stronger growth consistency, improved audience retention, and a more structured content direction to scale further.",
    wanted: [
      "Stronger Instagram growth",
      "Better audience engagement",
      "Consistent content momentum",
      "Improved profile authority"
    ],
    did: [
      "Managed content direction",
      "Improved posting consistency",
      "Supported engagement-focused content execution",
      "Strengthened profile presentation and audience momentum",
      "Supported overall Instagram growth strategy"
    ],
    results: [
      "50K -> 372K+ Followers",
      "Stronger Profile Authority",
      "Improved Audience Engagement",
      "Higher Social Proof & Visibility"
    ],
    metrics: [
      { value: "372K+", label: "Audience Growth" },
      { value: "50K", label: "Starting Point" },
      { value: "7.4x", label: "Scale Multiple" }
    ],
    preview: asset("confusedgirlla/confusedgirlla-profile-overview.png.jpeg"),
    images: [
      {
        src: asset("confusedgirlla/confusedgirlla-profile-overview.png.jpeg"),
        label: "Profile Overview Screenshot"
      },
      {
        src: asset("confusedgirlla/confusedgirlla-grid-showcase.png.jpeg"),
        label: "Instagram Grid Showcase"
      }
    ],
    accent: "from-pink-400/18 via-ember/10 to-transparent"
  },
  {
    id: "le-dental-spa",
    title: "LE Dental Spa",
    eyebrow: "Dental & Cosmetic Clinic",
    profile: "https://www.instagram.com/ledentalspa/",
    intro:
      "Premium dental and cosmetic clinic growth campaign focused on lead generation, local visibility, and premium digital positioning.",
    challenge:
      "The clinic needed stronger local visibility, more qualified appointment enquiries, and a premium digital presence aligned with the clinic experience.",
    wanted: [
      "More local lead generation",
      "Increased appointment enquiries",
      "Stronger online visibility",
      "Premium clinic positioning",
      "Better social media presence"
    ],
    did: [
      "Planned and launched Meta Ads lead generation campaigns",
      "Structured local audience targeting",
      "Used instant form campaigns for lead capture",
      "Monitored CPL and campaign performance",
      "Supported premium clinic branding",
      "Managed both the clinic page and Dr Pauline Le's personal brand presence",
      "Aligned paid media with social media positioning"
    ],
    results: [
      "98 Qualified Leads",
      "$12.72 Cost Per Lead",
      "84K+ Impressions",
      "41K+ Reach",
      "3.4x Estimated ROAS",
      "3,186 Link Clicks"
    ],
    metrics: [
      { value: "98", label: "Qualified Leads" },
      { value: "$12.72", label: "Cost Per Lead" },
      { value: "3.4x", label: "Estimated ROAS" }
    ],
    preview: asset("le-dental-spa/ledentalspa-meta-dashboard.png.png"),
    images: [
      {
        src: asset("le-dental-spa/dr-paulinele-profile-overview.png.jpeg"),
        label: "Dr Pauline Le Profile Screenshot"
      },
      {
        src: asset("le-dental-spa/dr-paulinele-grid-showcase.png.jpeg"),
        label: "Dr Pauline Le Grid Showcase"
      },
      {
        src: asset("le-dental-spa/ledentalspa-profile-overview.png.jpeg"),
        label: "LE Dental Spa Profile Screenshot"
      },
      {
        src: asset("le-dental-spa/ledentalspa-grid-showcase.png.jpeg"),
        label: "Clinic Grid Showcase"
      },
      {
        src: asset("le-dental-spa/ledentalspa-meta-dashboard.png.png"),
        label: "Meta Ads Dashboard"
      }
    ],
    accent: "from-sky-300/14 via-ember/10 to-transparent"
  },
  {
    id: "bitstop-burgers",
    title: "Bitstop Burgers",
    eyebrow: "Restaurant / Food Brand",
    intro:
      "Restaurant-focused awareness and engagement campaign combining Meta Ads performance with social media presentation and audience interaction.",
    challenge:
      "The brand needed stronger visibility, more engagement, increased messaging activity, and measurable audience action from paid campaigns.",
    wanted: [
      "Stronger local awareness",
      "Better engagement",
      "More profile activity",
      "Increased messaging conversations",
      "Better campaign performance",
      "More measurable customer actions"
    ],
    did: [
      "Managed social media presentation and grid structure",
      "Supported restaurant content direction",
      "Ran Meta Ads campaigns for reach, engagement, messaging, profile visits, and purchases",
      "Structured campaigns around multiple objectives",
      "Focused on turning visibility into measurable digital actions"
    ],
    results: [
      "1M+ Impressions",
      "64K+ Video Views",
      "6K+ Profile Visits",
      "1.7K+ Messaging Conversations",
      "147 Purchases Tracked",
      "437K+ Reach"
    ],
    metrics: [
      { value: "1M+", label: "Impressions" },
      { value: "64K+", label: "Video Views" },
      { value: "147", label: "Purchases Tracked" }
    ],
    preview: asset("bitstop-burgers/bitstopburgers-meta-dashboard.png.png"),
    images: [
      {
        src: asset("bitstop-burgers/bitstopburgers-grid-showcase.png.jpeg"),
        label: "Creative Grid Showcase"
      },
      {
        src: asset("bitstop-burgers/bitstopburgers-meta-dashboard.png.png"),
        label: "Meta Ads Dashboard"
      }
    ],
    accent: "from-orange-500/18 via-amber-200/8 to-transparent"
  }
];

const stats = [
  { value: 372, suffix: "K+", label: "Influencer Audience Growth" },
  { value: 98, suffix: "", label: "Qualified Leads Generated" },
  { value: 3.4, suffix: "x", label: "Estimated ROAS", decimals: 1 },
  { value: 1, suffix: "M+", label: "Impressions" },
  { value: 64, suffix: "K+", label: "Video Views" },
  { value: 147, suffix: "", label: "Purchases Tracked" }
];

const capabilities = [
  "Meta Ads & Performance Campaigns",
  "Instagram Growth Systems",
  "Lead Generation Campaigns",
  "Audience Targeting & Optimization",
  "Retargeting Strategies",
  "Campaign Setup & A/B Testing",
  "Pixel Setup & Conversion Tracking",
  "Creative Direction & Brand Positioning",
  "Content Strategy & Calendar Planning",
  "Ad Copywriting & Hook Creation",
  "Short-Form Video Editing",
  "Canva Social Media Creatives",
  "Analytics & Performance Reporting",
  "Community Management",
  "Trend Research & Competitor Analysis"
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Results", "results"],
  ["Projects", "work"],
  ["Contact", "contact"]
];

const navSectionIds = navItems.map(([, id]) => id);

const heroMarqueeItems = [
  "Social Media Marketing Specialist",
  "Social Growth",
  "Meta Ads",
  "Content Strategy",
  "Video Editing",
  "Lead Generation"
];

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", ""));

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function scrollToId(id) {
  window.location.hash = "";
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function useActiveSection(ids) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const referenceLine = Math.min(window.innerHeight * 0.38, 320);
      let nextActive = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= referenceLine && rect.bottom >= referenceLine;
        const distance = Math.abs(rect.top - referenceLine);

        if (isInView && distance < closestDistance) {
          closestDistance = distance;
          nextActive = id;
        }
      });

      setActive(nextActive);
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [ids]);

  return active;
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const activeSection = useActiveSection(navSectionIds);

  return (
    <header className="site-header">
      <button
        type="button"
        onClick={() => scrollToId("home")}
        className="site-brand"
      >
        Zohaib Sajjad
      </button>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToId(id)}
            className={`site-nav-link ${activeSection === id ? "is-active" : ""}`}
          >
            {activeSection === id && (
              <motion.span
                layoutId="active-nav-pill"
                className="site-nav-active"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="site-menu-slot">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="mobile-menu-button"
          style={{ display: "grid" }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}

function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-40 bg-black/95 text-white backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,163,91,0.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_28%)]" />
          <nav className="relative flex min-h-screen flex-col justify-end px-5 pb-16 md:px-12 md:pb-20">
            <p className="project-label mb-8">Navigation</p>
            <div className="space-y-2">
              {navItems.map(([label, id], index) => (
                <motion.button
                  key={label}
                  type="button"
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  onClick={() => {
                    onClose();
                    scrollToId(id);
                  }}
                  className="group flex w-full items-center justify-between border-t border-white/10 py-5 text-left text-5xl font-black uppercase leading-[0.85] text-white transition hover:text-ember sm:text-6xl md:text-8xl lg:text-9xl"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    className="mr-2 opacity-30 transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100"
                    size={32}
                  />
                </motion.button>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <section
      id="home"
      className="hero-section hero-personal"
    >
      <div className="hero-scene-glow" />
      <div className="hero-scene-vignette" />

      <div className="hero-shell hero-personal-shell">
        <div className="hero-stage">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hero-message"
          >
            <p className="hero-kicker">
              Social Media Marketing Specialist
            </p>
            <h1 className="hero-heading">
              <span className="hero-heading-main">
                <span>Social</span>
                <span>Growth</span>
              </span>
              <span className="hero-heading-sub">& Meta Ads</span>
            </h1>
            <p className="hero-description">
              Turning social attention into measurable business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-person"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px"
            }}
          >
            <motion.div
              animate={{
                x: mouse.x * 16,
                y: mouse.y * 12,
                rotateY: mouse.x * 4,
                rotateX: mouse.y * -3
              }}
              transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.7 }}
              className="hero-person-inner"
            >
              <div className="hero-person-glow" />
              <img
                src={asset("hero/hero-zohaib-portrait.png-removebg-preview.png")}
                alt=""
                aria-hidden="true"
                className="hero-person-shadow"
              />
              <img
                src={asset("hero/hero-zohaib-portrait.png-removebg-preview.png")}
                alt="Zohaib Sajjad portrait"
                className="hero-person-main"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hero-marquee hero-marquee-bottom" aria-hidden="true">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
          className="hero-marquee-track"
        >
          {Array.from({ length: 3 }).map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {heroMarqueeItems.map((item) => (
                <span key={`${groupIndex}-${item}`}>{item}</span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeTitle() {
  return (
    <div className="pointer-events-none overflow-hidden border-y border-white/10 py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap font-black uppercase leading-none text-white/[0.055]"
        style={{ fontSize: "clamp(4rem, 15vw, 13rem)" }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>About Me&nbsp;&nbsp; My Story</span>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#070707] py-12 text-white md:py-32">
      <MarqueeTitle />
      <div className="about-grid mx-auto grid max-w-7xl items-center gap-8 px-5 pt-12 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:px-8 md:pt-24">
        <Reveal className="about-visual-column">
          <p className="section-label">About / My Story</p>
          <motion.div
            className="about-photo-stage"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={asset("about/zohaib-cutout-removebg-preview.png")}
              alt="Zohaib Sajjad"
              className="about-cutout"
              loading="lazy"
            />
          </motion.div>
        </Reveal>
        <div className="about-copy space-y-6 md:space-y-10">
          <Reveal>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl lg:text-[6.5rem]">
              I&apos;m Zohaib Sajjad
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-4xl text-3xl font-semibold leading-[1.08] text-white/86 md:text-5xl">
              Building modern growth systems through content, paid media, and
              performance-driven creative strategy.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-3xl border-l border-ember/60 pl-6 text-xl font-medium leading-relaxed text-white/62 md:text-2xl">
              Focused on attention, positioning, and measurable digital growth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="skills" className="bg-ink px-5 py-12 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label mb-6 md:mb-10">What I Do</p>
        </Reveal>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {capabilities.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="capability-pill rounded-full border border-white/10 bg-white/[0.035] px-5 py-4 text-xs font-bold uppercase leading-normal text-white/88 antialiased shadow-gold backdrop-blur-xl transition hover:border-ember/60 hover:bg-ember/10 hover:text-white md:px-7 md:text-[0.84rem]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest)
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
}

function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-[#080808] px-5 py-12 text-white md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(240,163,91,0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-8 md:mb-12">
          <p className="section-label">Results / Stats</p>
          <h2 className="mt-4 text-6xl font-black uppercase leading-[0.82] text-white sm:text-7xl md:text-[9rem] lg:text-[11rem]">
            Proof in
            <span className="block text-white/38">Numbers</span>
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -7 }}
              className="min-h-[210px] bg-[#090909] p-6 transition duration-300 hover:bg-[#0d0b09] md:p-8"
            >
              <div className="text-6xl font-black leading-none text-white md:text-8xl lg:text-[6.5rem]">
                <AnimatedCounter {...stat} />
              </div>
              <p className="mt-6 max-w-[14rem] text-sm uppercase leading-relaxed text-white/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group grid overflow-hidden border-t border-white/12 py-8 md:grid-cols-[0.86fr_1.14fr] md:gap-16 md:py-16"
    >
      <div className="flex flex-col justify-between gap-6 md:gap-8">
        <div>
          <p className="project-label">{project.eyebrow}</p>
          <h3 className="mt-5 text-5xl font-black uppercase leading-[0.85] text-white md:text-7xl lg:text-8xl">
            {project.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => {
            window.location.hash = project.id;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-xs font-bold uppercase text-white transition hover:border-ember/70 hover:bg-ember/10"
        >
          View Case Study <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="mt-6 flex flex-col justify-end md:mt-0">
        <p className="max-w-3xl text-2xl font-medium leading-snug text-white/76 md:text-3xl">
          {project.intro}
        </p>
        <p className="project-label mt-8 md:mt-9">Result Highlight</p>
        <p className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-5xl">
          {project.results[0]}
        </p>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="work" className="bg-ink px-5 py-12 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 md:mb-16">
          <p className="section-label">Projects</p>
          <h2 className="mt-4 text-6xl font-black uppercase leading-[0.78] text-white sm:text-8xl md:text-[10rem] lg:text-[13rem]">
            Selected
            <span className="block text-white/35">Work</span>
          </h2>
        </Reveal>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const buttons = [
    ["LinkedIn", contactLinks.linkedin, Linkedin],
    ["Email", contactLinks.email, Mail],
    ["WhatsApp", contactLinks.whatsapp, MessageCircle]
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-5 py-16 text-white md:px-8 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(240,163,91,0.17),transparent_33%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="mt-5 max-w-6xl text-6xl font-black uppercase leading-[0.82] text-white sm:text-7xl md:text-[8.5rem] lg:text-[10rem]">
            Let&apos;s build something that gets attention
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 md:mt-12 flex flex-wrap gap-3">
          {buttons.map(([label, href, Icon]) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.05, y: -4 }}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-6 py-4 text-sm font-bold uppercase text-white/86 shadow-gold backdrop-blur-xl transition hover:border-ember/70 hover:bg-ember/10 hover:text-white"
            >
              <Icon size={16} /> {label}
            </motion.a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Results />
      <Projects />
      <Contact />
    </>
  );
}

function CaseStudy({ project, onOpenImage }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  return (
    <main ref={containerRef} className="case-study-main min-h-screen bg-ink text-white">
      <section className="case-hero-section relative isolate overflow-hidden px-5 pb-8 pt-20 md:min-h-[92vh] md:px-8 md:pb-12 md:pt-36">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <motion.div style={{ y }} className="absolute -right-12 top-40 h-[55vh] w-[70vw] opacity-20 blur-2xl">
          <img src={project.preview} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <div className="relative mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => {
              window.location.hash = "";
              requestAnimationFrame(() => scrollToId("work"));
            }}
            className="mb-6 md:mb-10 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.035] px-5 py-3 text-xs font-bold uppercase text-white/80 transition hover:border-ember/60 hover:text-white"
          >
            <ArrowLeft size={15} /> Back to Work
          </button>
          <Reveal>
            <p className="project-label">
              {project.eyebrow}
            </p>
            <h1 className="case-hero-title mt-4 md:mt-5 max-w-full break-words text-6xl font-black uppercase leading-[0.82] text-white sm:text-7xl md:text-[6rem] lg:text-[7.2rem]">
              {project.title}
            </h1>
            <p className="mt-6 md:mt-8 max-w-3xl text-xl leading-relaxed text-white/70 md:text-2xl">
              {project.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-10 pt-2 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-12">
          <Reveal>
            <p className="project-label">Project Intro</p>
          </Reveal>
          <div className="case-metric-grid grid gap-4 md:grid-cols-3 md:gap-5">
            {project.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -6 }}
                className="case-metric-card border border-white/10 bg-white/[0.035] p-6 shadow-gold"
              >
                <p className="text-4xl font-black md:text-5xl">{metric.value}</p>
                <p className="mt-4 text-xs uppercase leading-relaxed text-white/48">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CaseSection title="The Challenge" body={project.challenge} />
      <CaseList title="What They Wanted" items={project.wanted} />
      <CaseList title="What I Did" items={project.did} />
      <CaseList title="Results" items={project.results} featured />
      <VisualProof project={project} onOpenImage={onOpenImage} />

      <section className="px-5 pb-12 pt-4 md:px-8 md:pb-28 md:pt-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {project.profile && (
            <a
              href={project.profile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-xs font-bold uppercase transition hover:border-ember/70 hover:bg-ember/10"
            >
              Open Instagram <ArrowUpRight size={16} />
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              window.location.hash = "";
              requestAnimationFrame(() => scrollToId("work"));
            }}
            className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-xs font-bold uppercase transition hover:border-ember/70 hover:bg-ember/10"
          >
            Back to Work
          </button>
        </div>
      </section>
    </main>
  );
}

function CaseSection({ title, body }) {
  return (
    <section className="border-t border-white/10 px-5 py-10 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.72fr_1.28fr] md:gap-10">
        <Reveal>
          <p className="project-label">{title}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="case-section-lead max-w-4xl text-3xl font-semibold leading-[1.08] text-white/88 md:text-5xl lg:text-[4rem]">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CaseList({ title, items, featured = false }) {
  return (
    <section className={`case-list-section border-t border-white/10 px-5 py-10 md:px-8 md:py-24 ${featured ? "case-results-section" : ""}`}>
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.72fr_1.28fr] md:gap-10">
        <Reveal>
          <p className="project-label">{title}</p>
        </Reveal>
        <div className={featured ? "case-results-grid grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2" : "grid gap-3"}>
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={
                featured
                  ? "case-result-card bg-[#090909] p-6 text-3xl font-black uppercase leading-[0.95] text-white md:text-5xl"
                  : "border-b border-white/10 pb-5 text-xl font-medium leading-snug text-white/78 md:text-2xl"
              }
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualProof({ project, onOpenImage }) {
  return (
    <section className="border-t border-white/10 px-5 py-10 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="project-label">Visual Proof</p>
          <h2 className="mt-4 text-6xl font-black uppercase leading-[0.82] text-white sm:text-7xl md:mt-5 md:text-[8.5rem] lg:text-[10rem]">
            Real Assets.
            <span className="block text-white/35">Real Results.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:mt-24 md:gap-24">
          {project.images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015, rotate: 0 }}
              className="relative overflow-visible"
            >
              <div className="absolute inset-x-8 bottom-0 top-8 rounded-[28px] bg-ember/10 blur-[70px]" />
              <button
                type="button"
                onClick={() => onOpenImage?.({ ...image, project: project.title })}
                className="relative z-10 block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
                aria-label={`Open ${image.label} fullscreen`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="max-h-[86vh] w-full rounded-[6px] object-contain shadow-[0_35px_120px_rgba(0,0,0,0.58)]"
                />
              </button>
              <figcaption className="relative z-10 mt-4 flex items-center justify-between gap-4 text-xs uppercase text-white/50">
                <span>{image.label}</span>
                <span>{project.title}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/94 px-4 py-8 text-white backdrop-blur-xl md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(240,163,91,0.13),transparent_42%)]" />
          <button
            type="button"
            aria-label="Close fullscreen preview"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white shadow-gold backdrop-blur-xl transition hover:border-ember/70 hover:bg-ember/10 md:right-8 md:top-8"
          >
            <X size={18} />
          </button>
          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-7xl"
            initial={{ opacity: 0, scale: 0.94, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.label}
              className="mx-auto max-h-[82vh] w-full rounded-[6px] object-contain shadow-[0_38px_130px_rgba(0,0,0,0.7)]"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-xs uppercase text-white/55">
              <span>{image.label}</span>
              <span>{image.project}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const route = useHashRoute();
  const activeProject = projects.find((project) => project.id === route);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <CaseStudy project={activeProject} onOpenImage={setLightboxImage} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
