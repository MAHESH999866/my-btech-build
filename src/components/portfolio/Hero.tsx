import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Download, ArrowRight, FolderGit2 } from "lucide-react";

const roles = [
  "Aspiring Software Developer",
  "Web Developer",
  "Problem Solver",
  "Lifelong Learner",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to internships & opportunities
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Durga MaheswaraRao</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium">
            4th Year B.Tech Student <span className="text-primary">|</span>{" "}
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse align-middle" />
          </p>
          <p className="mt-5 text-base text-muted-foreground max-w-xl leading-relaxed">
            I'm a passionate Computer Science student who loves building clean, responsive
            websites and exploring new technologies. Currently learning, building, and
            sharing my journey one project at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-border bg-background font-semibold hover:bg-accent transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-foreground font-semibold hover:text-primary transition-colors group"
            >
              <FolderGit2 className="w-4 h-4" /> View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 grid place-items-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary to-primary/60 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-card grid place-items-center overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text">DM</div>
                  <div className="mt-2 text-sm text-muted-foreground font-medium">Profile Photo</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-card border border-border shadow-lg">
              <div className="text-xs text-muted-foreground">CGPA</div>
              <div className="font-bold text-primary">8.59 / 10</div>
            </div>
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-card border border-border shadow-lg">
              <div className="text-xs text-muted-foreground">Projects</div>
              <div className="font-bold text-primary">10+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
