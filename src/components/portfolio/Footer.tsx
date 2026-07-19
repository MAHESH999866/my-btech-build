import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Code2 className="w-5 h-5" />
            </span>
            Durga<span className="text-primary">.</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            4th-year B.Tech CSE student passionate about web development and learning new tech.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Get in touch</h4>
          <a href="mailto:dmsraop@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            dmsraop@gmail.com
          </a>
          <div className="mt-4 flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/MAHESH999866", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/durga-maheswararao-pulicharla-681058342/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:dmsraop@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="w-9 h-9 grid place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-sm text-muted-foreground">
        © 2026 All Rights Reserved. Designed and Developed by <span className="text-foreground font-semibold">Durga MaheswaraRao</span>.
      </div>
    </footer>
  );
}
