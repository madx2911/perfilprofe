import { createFileRoute } from "@tanstack/react-router";
import {
  Code2, Database, GitBranch, Globe, Wrench, Mail, Github, Linkedin,
  Download, ArrowRight, Boxes, ListChecks, Gamepad2, Sparkles,
} from "lucide-react";
import portrait from "@/assets/maddy-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maddy Marín — Ingeniería en Software" },
      {
        name: "description",
        content:
          "Portafolio de Maddy Marín, estudiante de Ingeniería en Software. Proyectos en Java, PHP, MariaDB y desarrollo de videojuegos en LÖVE/Lua.",
      },
    ],
  }),
});

const GITHUB = "https://github.com/madx2911";
const LINKEDIN = "https://www.linkedin.com/in/maddy-tatiana-marin-garzon-328386409";
const CV = "https://drive.google.com/file/d/1uIRbQFDuQ6rkRdCw_gN080dW0_kWkZu7/view";
const EMAIL = "Maddytatiana2911@hotmail.com";

const skillGroups = [
  { icon: Code2, title: "Lenguajes", items: ["Java", "PHP", "C++"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS"] },
  { icon: Database, title: "Bases de Datos", items: ["MariaDB"] },
  {
    icon: Wrench,
    title: "Herramientas",
    items: ["Git / GitHub", "PSeInt", "Lógica de programación", "Verificación de algoritmos"],
  },
];

const projects = [
  {
    icon: ListChecks,
    tag: "Análisis & Lógica",
    title: "Análisis Lógico de Algoritmos",
    description:
      "Estudio detallado de algoritmos mediante pruebas de escritorio, validando paso a paso la lógica y la eficiencia antes de la ejecución.",
    stack: ["Pruebas de escritorio", "PSeInt", "Lógica"],
  },
  {
    icon: Boxes,
    tag: "Aplicación Web",
    title: "Módulo de Gestión de Inventario",
    description:
      "Sistema web para administrar productos, stock y movimientos. Backend en PHP con persistencia y consultas optimizadas en MariaDB.",
    stack: ["PHP", "MariaDB", "HTML/CSS"],
  },
  {
    icon: Gamepad2,
    tag: "Game Dev",
    title: "Plataformas 2D inspirado en Ecuador",
    description:
      "Videojuego de plataformas 2D desarrollado en LÖVE y Lua, con escenarios, personajes y estética inspirada en la cultura ecuatoriana.",
    stack: ["LÖVE", "Lua", "2D"],
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="h-4 w-4" />
            </span>
            Maddy Marín
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="hover:text-foreground transition-colors">Sobre mí</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Disponible para nuevas oportunidades
            </div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              Hola, soy{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Maddy Marín
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Estudiante de Ingeniería en Software. Me apasiona la lógica de programación
              y construir soluciones limpias, simples y bien pensadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <Download className="h-4 w-4" /> Descargar CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Ver proyectos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <SocialPill href={GITHUB} icon={Github} label="GitHub" />
              <SocialPill href={LINKEDIN} icon={Linkedin} label="LinkedIn" />
              <SocialPill href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div
                className="relative overflow-hidden rounded-[2rem] border border-border bg-card"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={portrait}
                  alt="Retrato profesional de Maddy Marín"
                  width={768}
                  height={960}
                  className="h-auto w-64 object-cover sm:w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" index="01" title="Sobre mí">
        <div className="grid gap-10 lg:grid-cols-5">
          <p className="lg:col-span-3 text-2xl font-light leading-relaxed sm:text-3xl">
            Soy estudiante de Ingeniería en Software apasionada por la{" "}
            <span className="text-primary">lógica de programación</span> y las{" "}
            <span className="text-primary">soluciones limpias</span>. Disfruto analizar
            problemas paso a paso, validar algoritmos con pruebas de escritorio y
            convertir ideas en código mantenible.
          </p>
          <div
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-6"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Enfoque</p>
            <p className="mt-3 text-lg font-medium leading-relaxed">
              "Pensar antes de codificar, validar antes de ejecutar."
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <Stat value="3+" label="Proyectos" />
              <Stat value="8+" label="Tecnologías" />
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" index="02" title="Habilidades técnicas">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" index="03" title="Proyectos">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" index="04" title="Hablemos">
        <div
          className="rounded-3xl border border-border bg-card p-10 text-center sm:p-14"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Construimos algo juntos?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Abierta a prácticas, proyectos y colaboraciones. Escríbeme o revisa mis perfiles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={`mailto:${EMAIL}`} icon={Mail} primary>
              {EMAIL}
            </CTA>
            <CTA href={GITHUB} icon={Github}>GitHub</CTA>
            <CTA href={LINKEDIN} icon={Linkedin}>LinkedIn</CTA>
            <CTA href={CV} icon={Download}>Descargar CV</CTA>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maddy Marín · Ingeniería en Software
      </footer>
    </main>
  );
}

function Section({
  id, index, title, children,
}: { id: string; index: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex items-baseline gap-4 border-b border-border pb-4">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function SocialPill({
  href, icon: Icon, label,
}: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}

function CTA({
  href, icon: Icon, children, primary,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5";
  const styles = primary
    ? "bg-primary text-primary-foreground"
    : "border border-border bg-background text-foreground hover:bg-secondary";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <Icon className="h-4 w-4" /> {children}
    </a>
  );
}
