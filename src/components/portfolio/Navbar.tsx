import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 100) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 font-bold text-lg"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </span>
          <span className="hidden sm:inline">Aarav<span className="text-primary">.</span></span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
                active === s.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/login"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Login
          </Link>
          <button
            className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={cn(
                  "px-3 py-2 text-left text-sm font-medium rounded-md",
                  active === s.id
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-accent",
                )}
              >
                {s.label}
              </button>
            ))}
            <Link
              to="/login"
              className="mt-2 px-3 py-2 text-center text-sm font-semibold rounded-lg bg-primary text-primary-foreground"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
