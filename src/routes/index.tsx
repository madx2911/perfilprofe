import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, GitBranch, FileSpreadsheet, Boxes, ListOrdered, Sparkles, Mail, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maddy Marín — Ingeniería de Software" },
      { name: "description", content: "Perfil profesional de Maddy Marín, estudiante de Ingeniería de Software apasionada por el código limpio y la lógica de programación." },
    ],
  }),
});

const skills = [
  { name: "Java", icon: Code2 },
  { name: "PHP", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "MariaDB", icon: Database },
  { name: "HTML / CSS", icon: Code2 },
  { name: "Git / GitHub", icon: GitBranch },
  { name: "Microsoft Excel", icon: FileSpreadsheet },
];

const projects = [
  {
    icon: Boxes,
    title: "Módulo de Inventario",
    tag: "Sistema de gestión",
    description:
      "Diseño e implementación de un módulo de inventario orientado a la gestión eficiente de productos, con foco en estructura de datos consistente y operaciones CRUD optimizadas.",
    stack: ["Java", "MariaDB", "PHP"],
  },
  {
    icon: ListOrdered,
    title: "Algoritmos de Ordenamiento",
    tag: "Análisis & Desarrollo",
    description:
      "Análisis y desarrollo de algoritmos de ordenamiento implementados en Java, validados mediante pruebas de escritorio detalladas para garantizar la eficiencia lógica del código.",
    stack: ["Java", "Pruebas de escritorio", "Análisis"],
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}>
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Maddy.dev</span>
        </div>
        <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="hover:text-foreground transition-colors">Sobre mí</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Proyectos</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Disponible para colaborar
        </div>
        <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Maddy Marín
        </h1>
        <h2 className="mt-4 text-2xl font-light text-muted-foreground sm:text-3xl">
          Estudiante de{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
            Ingeniería de Software
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Construyo soluciones tecnológicas con código limpio, pensamiento lógico
          y un análisis profundo respaldado por pruebas de escritorio.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
            Ver proyectos
          </a>
          <a href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-card">
            Conóceme
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="01" title="Sobre mí" />
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-2xl font-light leading-relaxed text-foreground sm:text-3xl">
              Estudiante de Ingeniería de Software apasionada por el{" "}
              <span className="text-primary">desarrollo de soluciones tecnológicas</span>{" "}
              y la lógica de programación.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mi enfoque se centra en el <span className="text-foreground">código limpio</span>,
              respaldado por análisis profundo mediante pruebas de escritorio que
              garantizan la eficiencia lógica antes de la ejecución.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border p-6"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-elegant)" }}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Filosofía</p>
              <p className="mt-3 text-lg font-medium leading-relaxed">
                "Pensar antes de codificar. Validar antes de ejecutar."
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-3xl font-bold text-primary">7+</p>
                  <p className="text-xs text-muted-foreground">Tecnologías</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-xs text-muted-foreground">Proyectos clave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="02" title="Habilidades técnicas" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name}
              className="group relative overflow-hidden rounded-xl border border-border p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
              style={{ background: "var(--gradient-card)" }}>
              <s.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <p className="mt-4 font-medium">{s.name}</p>
              <div className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-hero)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="03" title="Proyectos" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border p-8 transition-all hover:border-primary/50"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-elegant)" }}>
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}>
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-border p-10 text-center"
          style={{ background: "var(--gradient-card)" }}>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Construimos algo juntos?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Siempre abierta a nuevas ideas, proyectos académicos y colaboraciones.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <IconLink icon={Mail} label="Email" />
            <IconLink icon={Github} label="GitHub" />
            <IconLink icon={Linkedin} label="LinkedIn" />
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maddy Marín · Ingeniería de Software
          </p>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-4">
      <div className="flex items-baseline gap-4">
        <span className="text-sm font-mono text-primary">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function IconLink({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a href="#" aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/40 text-muted-foreground transition-all hover:border-primary hover:text-primary">
      <Icon className="h-5 w-5" />
    </a>
  );
}
