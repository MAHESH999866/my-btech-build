import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, BookOpen, Users, Cloud, User } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Bookworms Online Bookstore",
    description: "Responsive online bookstore website built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Student Management System",
    description: "Frontend design for managing student records, attendance, and grades.",
    tech: ["React", "Tailwind", "TypeScript"],
    category: "App",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Weather App",
    description: "Real-time weather UI using OpenWeather API integration (frontend only).",
    tech: ["React", "API", "CSS"],
    category: "App",
    icon: Cloud,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my skills, projects, and learning journey.",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "Web",
    icon: User,
    color: "from-violet-500 to-purple-500",
  },
];

const categories = ["All", "Web", "App"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" className="bg-accent/30">
      <SectionHeader eyebrow="Projects" title="Things I've built" description="A few projects from my learning journey." />

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
              filter === c
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "bg-card border border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={cn("h-44 bg-gradient-to-br grid place-items-center relative overflow-hidden", p.color)}>
                <p.icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/30 text-white text-xs font-medium backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
