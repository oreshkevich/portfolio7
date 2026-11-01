import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ADVANTAGES, CONTACTS, DEVELOPER_NAME, PROJECTS, SKILLS, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${DEVELOPER_NAME} — Frontend Developer | Портфолио` },
      { name: "description", content: "Портфолио Frontend-разработчика: современные, быстрые и визуально впечатляющие веб-сайты на React и TypeScript." },
      { property: "og:title", content: `${DEVELOPER_NAME} — Frontend Developer` },
      { property: "og:description", content: "Создаю современные, быстрые и визуально впечатляющие веб-сайты." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Главная" },
  { id: "projects", label: "Проекты" },
  { id: "about", label: "Обо мне" },
  { id: "skills", label: "Навыки" },
  { id: "contact", label: "Контакты" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      });
    };
    window.addEventListener("pointermove", move);
    if (ref.current) ref.current.style.opacity = "1";
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full bg-primary/10 opacity-0 blur-[120px] transition-opacity duration-700"
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const go = (id: string) => { setOpen(false); scrollTo(id); };
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-card" : "border border-transparent"}`}>
        <button onClick={() => go("home")} className="font-display text-sm font-semibold tracking-tight">
          <span className="text-gradient">FD</span><span className="text-muted-foreground">.dev</span>
        </button>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <button onClick={() => go(n.id)} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => go("contact")} className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:shadow-glow md:block">
          Связаться
        </button>
        <button aria-label="Меню" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>
      <div className={`glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl transition-all duration-500 md:hidden ${open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
        <ul className="p-3">
          {NAV.map((n) => (
            <li key={n.id}>
              <button onClick={() => go(n.id)} className="w-full rounded-2xl px-4 py-3 text-left text-lg hover:bg-accent">{n.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet/30 blur-[140px] animate-float" />
      <div aria-hidden className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-azure/25 blur-[140px] animate-float [animation-delay:-7s]" />
      {/* 3D orb */}
      <div aria-hidden className="absolute right-[-10%] top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block">
        <div className="absolute inset-0 rounded-full border border-border animate-spin-slow" />
        <div className="absolute inset-16 rounded-full border border-dashed border-primary/30 animate-spin-slow [animation-direction:reverse]" />
        <div className="absolute inset-32 rounded-full bg-brand opacity-90 shadow-card blur-[2px] animate-float" style={{ boxShadow: "inset -40px -40px 80px oklch(0 0 0 / 0.6), inset 30px 30px 60px oklch(1 0 0 / 0.25), var(--shadow-card)" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="reveal glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Available for projects
        </div>
        <p className="reveal mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">{DEVELOPER_NAME}</p>
        <h1 className="reveal mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          Привет, я <span className="text-gradient">Frontend Developer</span>
        </h1>
        <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Создаю современные, быстрые и визуально впечатляющие веб-сайты.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4">
          <button onClick={() => scrollTo("projects")} className="group rounded-full bg-brand px-7 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
            Посмотреть проекты <span className="inline-block transition group-hover:translate-x-1">→</span>
          </button>
          <button onClick={() => scrollTo("contact")} className="glass rounded-full px-7 py-4 font-semibold transition hover:bg-accent">
            Связаться со мной
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ k, title, children }: { k: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="reveal mb-14 max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{k}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-lg text-muted-foreground">{children}</p>}
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ transitionDelay: `${(i % 3) * 90}ms` }}
      className="reveal group relative block rounded-3xl border border-border bg-card/60 p-3 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-primary/40 hover:shadow-card"
    >
      <div aria-hidden className="absolute -inset-px -z-10 rounded-3xl bg-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative overflow-hidden rounded-2xl bg-muted">
        <div className="flex items-center gap-1.5 border-b border-border bg-background/80 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        </div>
        <div className="aspect-[16/10] overflow-hidden">
          <img src={p.image} alt={`Превью: ${p.title}`} loading="lazy" decoding="async" width={1280} height={800} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        </div>
        <span className="glass absolute bottom-3 right-3 translate-y-3 rounded-full px-4 py-2 text-sm font-semibold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Открыть ↗
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-semibold text-primary transition group-hover:translate-x-1">Посмотреть проект →</p>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead k="01 — Портфолио" title={<>Мои <span className="text-gradient">проекты</span></>}>
          Сейчас здесь показаны демонстрационные карточки — они будут заменены реальными работами.
        </SectionHead>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <SectionHead k="02 — Обо мне" title="Детали решают всё" />
          <p className="reveal text-2xl leading-relaxed text-muted-foreground">
            Я <span className="text-foreground">Frontend Developer</span>. Разрабатываю современные веб-интерфейсы, уделяя внимание деталям, производительности, адаптивности и пользовательскому опыту.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {ADVANTAGES.map((a, i) => (
            <li key={a.title} style={{ transitionDelay: `${i * 80}ms` }} className={`reveal glass group rounded-3xl p-6 transition hover:border-primary/40 hover:shadow-glow ${i === 4 ? "sm:col-span-2" : ""}`}>
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-6 font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead k="03 — Стек" title={<>Мои <span className="text-gradient">навыки</span></>} />
        <ul className="flex flex-wrap gap-4">
          {SKILLS.map((s, i) => (
            <li key={s} style={{ transitionDelay: `${i * 50}ms` }} className="reveal glass cursor-default rounded-2xl px-6 py-5 font-display text-lg transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-glow sm:text-2xl">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Telegram", href: CONTACTS.telegram },
    { label: "GitHub", href: CONTACTS.github },
    { label: "Email", href: CONTACTS.email },
  ];
  return (
    <section id="contact" className="px-6 py-32">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-card/50 px-6 py-24 text-center">
        <div aria-hidden className="absolute left-1/2 top-0 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]" />
        <p className="relative text-xs uppercase tracking-[0.3em] text-primary">04 — Контакты</p>
        <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Есть интересный проект? <span className="text-gradient">Давайте обсудим!</span>
        </h2>
        <div className="relative mt-12 flex flex-wrap justify-center gap-4">
          {links.map((l, i) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              className={`group rounded-full px-8 py-4 font-semibold transition hover:scale-[1.04] ${i === 0 ? "bg-brand text-primary-foreground shadow-glow" : "glass hover:bg-accent"}`}>
              {l.label} <span className="inline-block transition group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {DEVELOPER_NAME}. Frontend Developer.
      </footer>
    </>
  );
}
