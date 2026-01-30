"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Activities", href: "#activities" },
  { label: "Solutions", href: "#solutions" },
  { label: "Logistics", href: "#logistics" },
  { label: "Contacts", href: "#contacts" }
];

const activities = [
  {
    title: "Lubricants",
    description:
      "High-performance lubricants engineered for industrial and marine applications.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-cyan-300">
        <path
          d="M24 6c6.6 6.9 11 13.4 11 19.5C35 33.6 30.1 38 24 38s-11-4.4-11-12.5C13 19.4 17.4 12.9 24 6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19 28c1.7 2 4 3 6.5 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  },
  {
    title: "Raw Materials",
    description:
      "Base oils and feedstocks sourced with rigorous quality and compliance control.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-cyan-300">
        <rect
          x="10"
          y="14"
          width="28"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 22h16M16 26h16"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  },
  {
    title: "Chartering",
    description:
      "Chartering solutions and energy logistics with precise routing and scheduling.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-cyan-300">
        <path
          d="M6 30h36l-4 6H10l-4-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 26h20l-3-8H17l-3 8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  }
];

const metrics = [
  { label: "Years in operations", value: "18+" },
  { label: "Global ports covered", value: "120" },
  { label: "Annual cargo volume", value: "4.2M t" },
  { label: "On-time delivery", value: "98%" }
];

const solutions = [
  "Marine Lubricants",
  "Industrial Oils",
  "Base Oils",
  "Additives",
  "Tank Storage",
  "Supply Chain Advisory"
];

const timeline = [
  { step: "Request", detail: "Client intake and routing overview." },
  { step: "Specs", detail: "Technical validation and compliance checks." },
  { step: "Offer", detail: "Commercial terms and shipping plan." },
  { step: "Delivery", detail: "Execution, tracking, and reporting." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="bg-graphite text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-[0.4em] text-white">
            OILGAS
          </span>
          <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacts"
            className="rounded-full border border-cyan-400/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-cyan-400/10"
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden pb-24 pt-24">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="hero-glow pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-graphite" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
                Corporate energy partner
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-[0.2em] text-white sm:text-6xl">
                OILGAS
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                Lubricants • Base Oils • Energy Logistics
              </p>
              <p className="mt-6 text-sm text-slate-300">
                A Gazprom-inspired corporate platform designed for strict
                reliability, compliance, and engineered supply continuity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#solutions"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  View Products
                </a>
                <a
                  href="#contacts"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Hero brief
                </p>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  2024
                </span>
              </div>
              <p className="text-slate-200">
                Integrated trading, storage, and chartering solutions delivering
                consistent supply with transparent reporting and risk-managed
                execution.
              </p>
              <div className="grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Supply integrity</span>
                  <span className="text-cyan-300">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Compliance readiness</span>
                  <span className="text-cyan-300">ISO 9001</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Global coverage</span>
                  <span className="text-cyan-300">EMEA + APAC</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="activities" className="mx-auto w-full max-w-6xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
              Activities
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Integrated energy services
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  {activity.icon}
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200">
                  {activity.description}
                </p>
                <a
                  href="#contacts"
                  className="mt-6 inline-flex text-xs uppercase tracking-[0.3em] text-cyan-300 transition group-hover:text-cyan-200"
                >
                  Learn more
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto w-full max-w-6xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
              Solutions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Product and service portfolio
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-graphite/80 p-6 transition hover:border-cyan-400/60"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  {solution}
                </p>
                <p className="mt-4 text-sm text-slate-200">
                  Technical support, supply chain assurance, and responsive
                  fulfillment across global markets.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="logistics" className="bg-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
                Logistics
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Structured delivery workflow
              </h2>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-graphite/80 p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-2xl font-semibold text-white">
                      {item.step}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200">{item.detail}</p>
                  {index < timeline.length - 1 && (
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/60 via-white/10 to-transparent lg:mt-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto w-full max-w-6xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
              Contacts
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Request commercial support
            </h2>
          </motion.div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-slate-200">
                Provide project details and our team will respond with a tailored
                commercial proposal.
              </p>
              <form className="mt-8 space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-graphite/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-graphite/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your scope and timelines."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-graphite/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  Send Request
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-graphite/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Headquarters
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  18 Petrovsky Prospect, Global Energy District
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-graphite/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Operations
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  24/7 logistics desk with live vessel tracking and reporting.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-graphite/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Contact
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  info@oilgas.energy · +7 (000) 000-0000
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-graphite/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            OILGAS
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
