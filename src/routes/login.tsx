import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Code2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Aarav Sharma" },
      { name: "description", content: "Login to access portfolio (frontend demo)." },
    ],
  }),
  component: LoginPage,
});

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem(
          "demo_user",
          JSON.stringify({ email: form.email, loggedAt: Date.now(), remember }),
        );
      } catch {}
      toast.success("Login Successful (Frontend Demo Only)");
      setLoading(false);
      navigate({ to: "/" });
    }, 700);
  };

  const input = "w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm";

  return (
    <div className="min-h-screen relative grid place-items-center px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/10" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />

      <Link to="/" className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to portfolio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md rounded-3xl bg-card/90 backdrop-blur border border-border shadow-2xl p-8"
      >
        <div className="flex items-center gap-3 justify-center">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground">
            <Code2 className="w-6 h-6" />
          </span>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-center">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground text-center">Sign in to continue to your dashboard</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={input}
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={show ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`${input} pr-10`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Toggle password"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-border accent-primary"
              />
              Remember me
            </label>
            <button type="button" onClick={() => toast("Password reset link sent (demo).")} className="text-sm font-semibold text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="px-3 bg-card text-xs text-muted-foreground">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => toast("Google login is UI-only in this demo.")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-semibold hover:bg-accent transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.3 14.7 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" /></svg>
              Google
            </button>
            <button type="button" onClick={() => toast("GitHub login is UI-only in this demo.")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-semibold hover:bg-accent transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.21-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" /></svg>
              GitHub
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button onClick={() => toast("Sign up flow is UI-only in this demo.")} className="font-semibold text-primary hover:underline">
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
}
