import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import heroImage from "../assets/it-hero.jpg";
import caseStudiesImage from "../assets/case-studies.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astra Tech | Enterprise IT Solutions" },
      { name: "description", content: "Cloud, cybersecurity, data and custom software solutions built to move modern businesses forward." },
      { property: "og:title", content: "Astra Tech | Enterprise IT Solutions" },
      { property: "og:description", content: "Practical technology expertise for secure, scalable business growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Cloud, title: "Cloud Computing", text: "Secure, scalable infrastructure designed around your workloads." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Proactive protection for systems, people and critical data." },
  { icon: BarChart3, title: "Data Analytics", text: "Turn complex information into decisions your team can act on." },
  { icon: Code2, title: "Custom Development", text: "Purpose-built applications that fit the way your business works." },
];

const cases = [
  { title: "Finance", tag: "Fintech", text: "A unified analytics platform that made risk visible in real time.", position: "left" },
  { title: "Healthcare", tag: "Healthtech", text: "A secure care portal connecting practitioners with patient insights.", position: "center" },
  { title: "CloudScale", tag: "Infrastructure", text: "A resilient cloud migration that cut operating costs by 32%.", position: "right" },
];

const posts = [
  { title: "Tech Leadership: The Edge Era", category: "Strategy", position: "left" },
  { title: "Rebuilding Care Through Data", category: "Healthcare", position: "center" },
  { title: "Containers: A Practical Guide", category: "Cloud", position: "right" },
];

const plans = [
  { name: "Essential", price: "$2.4k", note: "For growing teams", features: ["Cloud assessment", "Security baseline", "Monthly reporting"] },
  { name: "Growth", price: "$5.8k", note: "For scaling operations", featured: true, features: ["Managed infrastructure", "24/7 monitoring", "Data dashboards", "Priority support"] },
  { name: "Enterprise", price: "Custom", note: "For complex environments", features: ["Dedicated team", "Custom architecture", "Compliance support", "Executive reporting"] },
];

const faqs = [
  ["How quickly can a project begin?", "Most engagements start within two weeks of discovery and scope approval."],
  ["Can you work with our internal team?", "Yes. We can lead delivery or work as an embedded extension of your existing team."],
  ["Do you support existing systems?", "Absolutely. We audit, modernize and maintain established platforms as well as new builds."],
  ["How do you protect our data?", "Security is built into every phase, with access controls, encryption and clear operating policies."],
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text: string }) {
  return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2><p>{text}</p></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--background) 95%, transparent) 0%, color-mix(in oklab, var(--background) 72%, transparent) 50%, color-mix(in oklab, var(--background) 25%, transparent) 100%), url(${heroImage})` }}>
        <header className="site-header shell">
          <a className="brand" href="#home" aria-label="Astra Tech home"><span><Zap size={18} /></span>ASTRA <b>TECH</b></a>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Case studies</a>
            <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch</a>
          </nav>
          <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </header>
        <div className="hero-copy shell">
          <p className="eyebrow"><Sparkles size={14} /> Technology that moves business forward</p>
          <h1>Revolutionizing business with cutting-edge IT services</h1>
          <p>From cloud transformation to custom software, we turn ambitious ideas into secure, scalable systems.</p>
          <div className="hero-actions"><a className="button primary" href="#services">Explore services <ArrowRight size={17} /></a><a className="text-link" href="#work">View our work <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <SectionHeading eyebrow="What we do" title="Expertise for every digital challenge" text="End-to-end technology services, delivered by specialists who understand your goals." />
          <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><span className="icon-box"><Icon /></span><h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowRight size={14} /></a></article>)}</div>
          <div className="why-grid">
            <div><p className="eyebrow">Why Astra</p><h2>Technology with measurable impact.</h2><p>Senior expertise, transparent delivery and a relentless focus on business outcomes.</p></div>
            <div className="stat-panel">{[["20+", "Years of expertise"], ["371", "Projects delivered"], ["97%", "Client retention"], ["30M+", "Users supported"]].map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
            <div className="globe-art" aria-hidden="true"><Globe2 /></div>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="process">
        <div className="shell">
          <SectionHeading eyebrow="How we work" title="Our process" text="A clear path from first conversation to lasting value." />
          <div className="process-line">{[
            ["01", "Discover", "Understand the opportunity, users and constraints."],
            ["02", "Plan", "Shape the roadmap, architecture and success measures."],
            ["03", "Execute", "Build in focused cycles with complete visibility."],
            ["04", "Optimize", "Measure, improve and scale with confidence."],
          ].map(([num, title, text]) => <article key={num}><span>{num}</span><div className="process-icon"><Layers3 /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <SectionHeading eyebrow="Selected work" title="Featured case studies" text="Solutions grounded in real industries, real complexity and real outcomes." />
          <div className="case-grid">{cases.map((item) => <article className="case-card" key={item.title}><div className={`case-image ${item.position}`} style={{ backgroundImage: `url(${caseStudiesImage})` }}><span>{item.tag}</span></div><div className="case-body"><h3>{item.title}</h3><p>{item.text}</p><a href="#contact">View case study <ArrowRight size={14} /></a></div></article>)}</div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="shell">
          <SectionHeading eyebrow="Client stories" title="Trusted by teams that expect more" text="Long-term partnerships built on consistency, clarity and results." />
          <div className="quote-grid">{[
            ["Astra gave us a roadmap we could understand and a platform that our teams love using.", "Dana Brooks", "COO, Northstar"],
            ["The team handled a complex migration without disrupting a single customer workflow.", "Mika Chen", "VP Technology, Helio"],
            ["We finally have reliable data at the speed our decisions require.", "Owen Reed", "Director, Field & Co."],
          ].map(([quote, name, role]) => <figure key={name}><Quote /><blockquote>“{quote}”</blockquote><figcaption><span className="avatar">{name?.charAt(0)}</span><div><strong>{name}</strong><small>{role}</small></div></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="section" id="insights">
        <div className="shell">
          <SectionHeading eyebrow="Fresh thinking" title="Blog & insights" text="Ideas to help technology leaders move with clarity." />
          <div className="post-grid">{posts.map((post) => <article key={post.title}><div className={`post-image ${post.position}`} style={{ backgroundImage: `url(${caseStudiesImage})` }} /><div><span>{post.category}</span><h3>{post.title}</h3><p>Practical perspectives from our specialists on the changes shaping modern business.</p><a href="#contact">Read article <ArrowRight size={14} /></a></div></article>)}</div>
        </div>
      </section>

      <section className="section soft-section" id="pricing">
        <div className="shell">
          <SectionHeading eyebrow="Flexible engagement" title="Pricing tiers" text="Start with a model designed for where your business is today." />
          <div className="pricing-grid">{plans.map((plan) => <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>{plan.featured && <span className="popular">Most popular</span>}<h3>{plan.name}</h3><p>{plan.note}</p><strong>{plan.price}</strong>{plan.price !== "Custom" && <small>/ month</small>}<ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><a className={plan.featured ? "button primary" : "button secondary"} href="#contact">Get started</a></article>)}</div>
          <div className="faq-wrap"><SectionHeading title="Frequently asked questions" text="Everything you need to know before we get started." /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-grid">
          <div><p className="eyebrow">Start a conversation</p><h2>Let’s build what’s next.</h2><p>Tell us what you are working on. Our team will respond within one business day.</p><a className="button primary" href="mailto:hello@astratech.example">hello@astratech.example <ArrowRight size={17} /></a></div>
          <div className="map-panel" aria-label="Global office locations"><Globe2 /><span className="pin pin-one" /><span className="pin pin-two" /><span className="pin pin-three" /></div>
          <address><strong>Global delivery</strong><span>New York · London</span><span>Dubai · Singapore</span><span>Mon–Fri, 9:00–18:00</span></address>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-top"><div><a className="brand" href="#home"><span><Zap size={18} /></span>ASTRA <b>TECH</b></a><p>Practical technology. Lasting progress.</p></div><div><strong>Company</strong><a href="#services">Services</a><a href="#work">Case studies</a><a href="#insights">Insights</a></div><div><strong>Connect</strong><a href="mailto:hello@astratech.example">Email us</a><a href="#contact">Contact</a><a href="#home">LinkedIn</a></div><form onSubmit={subscribe}><strong>Monthly briefing</strong><p>One useful technology perspective, once a month.</p>{submitted ? <p className="success">You’re on the list. Thank you.</p> : <div className="signup"><label className="sr-only" htmlFor="email">Work email</label><input id="email" type="email" required placeholder="Work email" /><button type="submit" aria-label="Subscribe"><ArrowRight /></button></div>}</form></div>
        <div className="shell footer-bottom"><span>© 2026 Astra Tech</span><span>Privacy · Terms</span></div>
      </footer>
    </main>
  );
}