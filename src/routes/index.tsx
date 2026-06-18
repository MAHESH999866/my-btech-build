import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav Sharma — B.Tech CSE Student Portfolio" },
      { name: "description", content: "Final-year B.Tech Computer Science student portfolio. Web developer, problem solver, and lifelong learner." },
      { property: "og:title", content: "Aarav Sharma — Portfolio" },
      { property: "og:description", content: "Skills, projects, certifications, and contact." },
    ],
  }),
  component: Index,
});

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-muted border-t-primary animate-spin" />
        <div className="text-sm text-muted-foreground font-medium">Loading portfolio...</div>
      </div>
    </div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
