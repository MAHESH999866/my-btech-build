import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeader eyebrow="Resume" title="My resume" description="A quick snapshot of my education, skills, and experience." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto rounded-2xl bg-card border border-border p-8 shadow-sm grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center"
      >
        <div className="w-20 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center border border-border mx-auto sm:mx-0">
          <FileText className="w-9 h-9 text-primary" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">Durga_MaheswaraRao_Pulicharla_Resume.pdf</h3>
          <p className="text-sm text-muted-foreground mt-1">Updated July 2026 · PDF</p>
        </div>
        <div className="flex gap-2 justify-center">
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-accent transition-colors"
          >
            <Eye className="w-4 h-4" /> Preview
          </a>
          <a
            href={resumeAsset.url}
            download="Durga_MaheswaraRao_Pulicharla_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" /> Download
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
