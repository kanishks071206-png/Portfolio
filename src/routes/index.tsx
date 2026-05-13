import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_dw1u0nh";
const EMAILJS_TEMPLATE_ID = "template_u37iphb";
const EMAILJS_PUBLIC_KEY = "u3QvI8HinEt57bz2w";
import {
  Brain, Code2, BarChart3, Sparkles, Lightbulb, Cpu,
  Github, Linkedin, Instagram, Mail, ArrowRight, GraduationCap,
  Rocket, Target, Heart, Send, MapPin
} from "lucide-react";
import portrait from "@/assets/kanishk-portrait.jpg";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanishk S — Aspiring Data Scientist | B.Tech IT Student" },
      { name: "description", content: "Portfolio of Kanishk S, B.Tech Information Technology student from Ambur passionate about Data Science, AI and modern technology." },
      { property: "og:title", content: "Kanishk S — Aspiring Data Scientist" },
      { property: "og:description", content: "Passionate IT student exploring the world of Data Science, technology, and innovation." },
    ],
  }),
  component: Index,
});

const TYPED_WORDS = ["Data Scientist", "IT Student", "AI Enthusiast", "Problem Solver"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[i];
    const speed = del ? 60 : 110;
    const t = setTimeout(() => {
      if (!del && text === word) { setTimeout(() => setDel(true), 1400); return; }
      if (del && text === "") { setDel(false); setI((i + 1) % TYPED_WORDS.length); return; }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return <span className="gradient-text">{text}<span className="caret h-[1em] align-middle" /></span>;
}

function NavBar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#goals", label: "Goals" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto max-w-6xl rounded-full px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg gradient-text">KANISHK.S</a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-glow rounded-full px-4 py-2 text-sm font-semibold">Hire Me</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="stars" />
      <div className="relative z-10 mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for collaboration
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text glow-text">Kanishk S</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-display font-semibold text-foreground/90">
            Aspiring <Typer />
          </h2>
          <p className="mt-2 text-muted-foreground text-base md:text-lg">
            B.Tech IT Student · Ambur, India
          </p>
          <p className="mt-6 max-w-xl text-foreground/70 text-base md:text-lg leading-relaxed">
            Passionate IT student exploring the world of Data Science, technology, and innovation — building tomorrow, one curious experiment at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="btn-glow rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2">
              About Me <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="btn-ghost-glow rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2">
              Contact <Send className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl pulse-glow" />
            <div className="absolute inset-0 rounded-full border border-primary/30 spin-slow" style={{ width: 360, height: 360, top: 'calc(50% - 180px)', left: 'calc(50% - 180px)' }} />
            <div className="relative size-72 md:size-80 rounded-full overflow-hidden glow-border float">
              <img
                src={portrait}
                alt="Kanishk S portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <div className="mt-4 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A Curious Mind from Ambur">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-2xl p-8">
          <p className="text-foreground/80 text-lg leading-relaxed">
            I'm <span className="text-primary font-semibold">Kanishk S</span>, a motivated and enthusiastic IT student from <span className="inline-flex items-center gap-1"><MapPin className="size-4 inline text-accent" /> Ambur, Tamil Nadu</span>, currently in my <span className="text-accent font-semibold">2nd year</span> of B.Tech in Information Technology, graduating in <span className="text-accent font-semibold">2028</span>.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            I'm actively learning technical skills and exploring opportunities in <span className="text-primary">Data Science</span>, AI, and modern technologies. I love asking "why" and "what if" — turning curiosity into code and ideas into impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Curious", "Always Learning", "Problem Solver", "Tech Enthusiast"].map(t => (
              <span key={t} className="glass rounded-full px-4 py-1.5 text-sm text-primary">{t}</span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {[
            { icon: GraduationCap, label: "Year", value: "2nd / 4" },
            { icon: Rocket, label: "Graduation", value: "2028" },
            { icon: Heart, label: "Passion", value: "Data Science" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="size-12 rounded-xl grid place-items-center bg-primary/10 border border-primary/30">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="font-display font-semibold text-lg">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { year: "2024 — 2028", title: "B.Tech in Information Technology", place: "Currently Pursuing · 2nd Year", desc: "Building strong foundations in algorithms, databases, AI, and software engineering." },
    { year: "2022 — 2024", title: "Higher Secondary — Computer Science", place: "Completed", desc: "Discovered programming and the spark for data-driven thinking." },
  ];
  return (
    <Section id="education" eyebrow="Journey" title="Education Timeline">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        {items.map((it, i) => (
          <div key={i} className={`relative mb-10 md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "" : ""}`}>
            <div className={`md:${i % 2 ? "col-start-2" : "col-start-1 text-right"}`}>
              <div className="glass rounded-2xl p-6 ml-12 md:ml-0">
                <p className="text-xs text-accent font-semibold tracking-wider">{it.year}</p>
                <h3 className="font-display text-xl mt-1">{it.title}</h3>
                <p className="text-primary text-sm mt-1">{it.place}</p>
                <p className="text-muted-foreground text-sm mt-3">{it.desc}</p>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 size-4 rounded-full bg-primary glow-border" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const skills = [
    { name: "Data Science", level: 45, icon: BarChart3 },
    { name: "Python Programming", level: 65, icon: Code2 },
    { name: "Data Analysis", level: 50, icon: Brain },
    { name: "Machine Learning Basics", level: 35, icon: Cpu },
    { name: "Problem Solving", level: 75, icon: Lightbulb },
    { name: "IT Fundamentals", level: 80, icon: Sparkles },
  ];
  return (
    <Section id="skills" eyebrow="Learning Journey" title="Skills in Progress">
      <p className="text-center text-muted-foreground -mt-8 mb-10 max-w-xl mx-auto">
        Every skill below is a journey, not a destination. Here's where I am right now.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(s => (
          <div key={s.name} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg grid place-items-center bg-primary/10 border border-primary/30">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">{s.name}</h3>
              </div>
              <span className="text-sm text-accent font-mono">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
              <div
                className="h-full rounded-full grow-bar"
                style={{
                  width: `${s.level}%`,
                  background: "linear-gradient(90deg, oklch(0.78 0.18 230), oklch(0.85 0.2 215))",
                  boxShadow: "0 0 20px oklch(0.78 0.18 230 / 0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Goals() {
  const goals = [
    { icon: BarChart3, title: "Aspiring Data Scientist", desc: "Working towards becoming a skilled data scientist who builds insights from data." },
    { icon: Brain, title: "AI & Data Analytics", desc: "Deeply interested in machine learning, neural networks, and analytical thinking." },
    { icon: Rocket, title: "Tech-Driven Solutions", desc: "Passionate about using technology to solve real-world problems with impact." },
    { icon: Target, title: "Open to Opportunities", desc: "Eager to learn from mentors, collaborate on projects, and grow with the community." },
  ];
  return (
    <Section id="goals" eyebrow="Future Focus" title="Career Direction">
      <div className="grid sm:grid-cols-2 gap-6">
        {goals.map(g => (
          <div key={g.title} className="group relative glass rounded-2xl p-6 overflow-hidden">
            <div className="absolute -top-20 -right-20 size-40 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/40 transition" />
            <div className="relative">
              <div className="size-12 rounded-xl grid place-items-center bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 mb-4 group-hover:scale-110 transition">
                <g.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Workshop" title="Projects Coming Soon">
      <p className="text-center text-muted-foreground -mt-8 mb-10 max-w-xl mx-auto">
        Currently learning and working on building real-world projects. Watch this space.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="relative aspect-[4/5] rounded-2xl glass overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute inset-0 grid place-items-center text-center p-6">
              <div>
                <div className="mx-auto mb-4 size-16 rounded-full grid place-items-center border border-dashed border-primary/40 text-primary group-hover:border-primary group-hover:rotate-12 transition">
                  <Sparkles className="size-7" />
                </div>
                <p className="font-display text-lg gradient-text">Project 0{i}</p>
                <p className="text-xs text-muted-foreground mt-2">Loading the future...</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20 group-hover:ring-primary/60 transition" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.get("from_name"),
          from_email: data.get("from_email"),
          message: data.get("message"),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent ✨", { description: "Thanks! I'll get back to you soon." });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send", { description: "Please try again or email me directly." });
    } finally {
      setLoading(false);
    }
  };
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/kanishk-s-6a78983", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/kanishks071206-png/kanishk07", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];
  return (
    <Section id="contact" eyebrow="Connect" title="Let's Build Something">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8">
          <h3 className="font-display text-2xl mb-2">Send a message</h3>
          <p className="text-muted-foreground text-sm mb-6">Drop a hello, an idea, or an opportunity.</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <input required type="text" name="from_name" placeholder="Your name"
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
            <input required type="email" name="from_email" placeholder="your@email.com"
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
            <textarea required name="message" placeholder="Your message..." rows={5}
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none" />
            <button type="submit" disabled={loading} className="btn-glow rounded-xl px-6 py-3 font-semibold inline-flex items-center gap-2 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Sending..." : <>Send Message <Send className="size-4" /></>}
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-6">
          <div className="glass rounded-2xl p-8 flex-1">
            <h3 className="font-display text-2xl mb-4 gradient-text">Always learning, growing, and building towards the future.</h3>
            <p className="text-muted-foreground">Whether it's a question, collaboration idea, or just a hello — my inbox is open.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary transition group">
                <div className="size-10 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 group-hover:bg-primary/20">
                  <s.icon className="size-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Kanishk S · Crafted with curiosity from Ambur 🚀</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen">
      <Toaster />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Goals />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
