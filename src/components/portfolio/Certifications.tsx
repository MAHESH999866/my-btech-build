import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const certs = [
  {
    title: "ServiceNow VIP Virtual Internship",
    issuer: "ServiceNow",
    year: "2026",
    link: "https://myskillwallet.ai/dashboard/skillwallet/module/servicenow-system-administrator-6984661dcd34a57368dcc8e6?moduleTab=certificate",
  },
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-accent/30">
      <SectionHeader eyebrow="Certifications" title="Courses I've completed" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center border-b border-border">
              <Award className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-5">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer} · {c.year}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                View certificate <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
