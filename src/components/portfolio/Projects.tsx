import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sprout, GraduationCap, LineChart, Calculator, Gamepad2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AgroMart-Farm",
    description:
      "AgroMart Farm is a responsive frontend e-commerce web application designed for farmers, built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Sprout,
    color: "from-emerald-500 to-lime-500",
    github: "https://github.com/MAHESH999866/AgroMart-Farm.git",
    demo: "https://mahesh999866.github.io/AgroMart-Farm/",
  },
  {
    title: "Student Grade Tracker",
    description:
      "A Java console-based application designed to track and manage student grades, utilizing OOP principles to calculate and display summary reports.",
    tech: ["Java", "OOP"],
    category: "App",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-500",
    github: "https://github.com/MAHESH999866/Student_Grade_Tracker.git",
    demo: "https://github.com/MAHESH999866/Student_Grade_Tracker.git",
  },
  {
    title: "Stock Trading Tracker",
    description:
      "A Java console-based stock trading platform simulating market transactions with interactive menu-driven tools for portfolio management, share trading, and real-time wallet balance tracking.",
    tech: ["Java", "OOP"],
    category: "App",
    icon: LineChart,
    color: "from-amber-500 to-orange-500",
    github: "https://github.com/MAHESH999866/Stock-trading-tracker.git",
    demo: "https://github.com/MAHESH999866/Stock-trading-tracker.git",
  },
  {
    title: "CalcMate",
    description:
      "A clean, modern, and responsive web-based calculator designed for effortless daily calculations, featuring an intuitive UI and smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Calculator,
    color: "from-cyan-500 to-sky-500",
    github: "https://github.com/MAHESH999866/CalcMate.git",
    demo: "https://mahesh999866.github.io/CalcMate/",
  },
  {
    title: "Four Up",
    description:
      "A Connect Four game with a player login page where users enter names and choose colors. Features a dark violet neon UI and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Gamepad2,
    color: "from-violet-500 to-purple-500",
    github: "https://github.com/MAHESH999866/Four-Up.git",
    demo: "https://mahesh999866.github.io/Four-Up/",
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
