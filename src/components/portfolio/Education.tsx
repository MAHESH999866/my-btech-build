import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    title: "B.Tech in Computer Science",
    place: "XYZ Institute of Technology",
    period: "2023 - Present",
    score: "CGPA: 8.7 / 10",
  },
  {
    title: "Intermediate (12th)",
    place: "ABC Junior College",
    period: "2021 - 2023",
    score: "Percentage: 92%",
  },
  {
    title: "SSC (10th)",
    place: "DEF High School",
    period: "2020 - 2021",
    score: "Percentage: 95%",
  },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="My academic journey" />
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-8 sm:flex sm:items-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
              <div className="rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold text-primary">{it.period}</span>
                <h3 className="mt-1 font-bold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.place}</p>
                <p className="text-sm font-semibold mt-2">{it.score}</p>
              </div>
            </div>
            <div className="absolute left-4 sm:left-1/2 top-5 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center -translate-x-1/2 shadow-lg shadow-primary/30 ring-4 ring-background">
              <GraduationCap className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
