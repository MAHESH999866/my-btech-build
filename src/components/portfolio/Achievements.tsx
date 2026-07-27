import { motion } from "framer-motion";
import { Trophy, Code2, BookOpenCheck, Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Code2, title: "100+ Coding Problems", desc: "Solved across LeetCode, HackerRank, and CodeChef." },
  { icon: Trophy, title: "Hackathon Participant", desc: "Took part in 3 inter-college hackathons and won 1." },
  { icon: BookOpenCheck, title: "Online Courses", desc: "Completed 10+ online courses on web dev and DSA." },
  { icon: Star, title: "Academic Achievements", desc: "Consistent top 10% rank in college semesters." },
];

export function Achievements() {
  return (
    <Section id="achievements" className="bg-accent/30">
      <SectionHeader eyebrow="Achievements" title="Things I'm proud of" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-2xl bg-card border border-border p-6 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <span className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 text-primary">
              <it.icon className="w-5 h-5" />
            </span>
            <h3 className="mt-4 font-bold">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
