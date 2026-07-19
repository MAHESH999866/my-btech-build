import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building2, Award, Languages } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const infoCards = [
  { icon: MapPin, label: "Location", value: "Tirupati, India" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech in CSE" },
  { icon: Building2, label: "College", value: "Mohan Babu University" },
  { icon: Award, label: "CGPA", value: "8.59 / 10" },
  { icon: Languages, label: "Languages", value: "English, Telugu" },
];

export function About() {
  return (
    <Section id="about" className="bg-accent/30">
      <SectionHeader eyebrow="About Me" title="Get to know me" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold">Hello there 👋</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            I am a passionate 4th-year B.Tech student with an interest in Web Development,
            Programming, and Software Engineering. I enjoy building responsive websites and
            continuously learning new technologies to improve my problem-solving skills
            and development experience.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Outside of academics, I love contributing to open-source, participating in
            hackathons, and learning about new frameworks and tools.
          </p>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {infoCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <c.icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{c.label}</div>
                <div className="font-semibold mt-0.5 truncate">{c.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
