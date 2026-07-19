import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeader } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(60),
  email: z.string().trim().email("Invalid email").max(120),
  subject: z.string().trim().min(2, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handle = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! Your message has been received (Frontend Demo).");
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 700);
  };

  const input = "w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm";

  return (
    <Section id="contact">
      <SectionHeader eyebrow="Contact" title="Let's get in touch" description="Have an opportunity or just want to say hi? Drop me a message." />
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "dmsraop@gmail.com" },
            { icon: MapPin, label: "Location", value: "Tirupati, India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <c.icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                <div className="font-semibold mt-0.5 truncate">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handle}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-sm space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold mb-1.5 block">Name</label>
              <input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block">Email</label>
              <input type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold mb-1.5 block">Subject</label>
            <input className={input} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" />
          </div>
          <div>
            <label className="text-sm font-semibold mb-1.5 block">Message</label>
            <textarea rows={5} className={`${input} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message..." />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
          >
            {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
