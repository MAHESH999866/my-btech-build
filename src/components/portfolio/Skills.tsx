import { motion } from "framer-motion";
import { Code, Layout, Wrench, Database } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    icon: Code,
    title: "Programming Languages",
    items: [
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 50 },
      { name: "Python", level: 40 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "React", level: 40 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "SQL", level: 80 },
      { name: "MySQL", level: 60 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Skills" title="What I work with" description="Tech I use daily and continue to grow with." />
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-lg">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map((it) => (
                <div key={it.name}>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span>{it.name}</span>
                    <span className="text-muted-foreground">{it.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
