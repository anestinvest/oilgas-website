"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Lubricants",
    tag: "Precision formulations",
    description:
      "High-performance lubricants engineered for extreme thermal stability and long-cycle protection in industrial and marine environments.",
    className: "activity-lubricants"
  },
  {
    title: "Base Oils",
    tag: "Feedstock integrity",
    description:
      "Base oils sourced through compliant supply corridors, ensuring viscosity consistency, traceability, and quality assurance.",
    className: "activity-baseoils"
  },
  {
    title: "Chartering",
    tag: "Energy logistics",
    description:
      "Chartering and vessel operations optimized for route efficiency, risk-managed cargo handling, and continuous tracking.",
    className: "activity-chartering"
  }
];

const processSteps = [
  {
    title: "Request",
    detail: "Scope definition, cargo profile, routing constraints."
  },
  {
    title: "Specification",
    detail: "Technical validation, compliance review, risk alignment."
  },
  {
    title: "Offer",
    detail: "Commercial terms, schedule confirmation, approvals."
  },
  {
    title: "Delivery",
    detail: "Execution, monitoring, documentation, reporting."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export default function Home() {
  return (
    <div className="bg-graphite text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-[0.5em] text-white">
            OILGAS
          </span>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-300 md:flex">
            <a href="#activities" className="transition hover:text-cyan-300">
              Activities
            </a>
            <a href="#process" className="transition hover:text-cyan-300">
              Process
            </a>
            <a href="#contacts" className="transition hover:text-cyan-300">
              Contacts
            </a>
          </div>
          <a
            href="#contacts"
            className="rounded-full border border-cyan-400/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            Request
          </a>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-24">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="hero-glow pointer-events-none absolute inset-0" />
          <div className="hero-scanner pointer-events-none absolute inset-x-0 top-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-graphite" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.9 }}
              className="max-w-xl"
            >
              <p className="text-xs uppercase tracking-[0.6em] text-cyan-300">
                Corporate energy platform
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-[0.25em] text-white sm:text-6xl">
                OILGAS
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                Lubricants • Base Oils • Energy Logistics
              </p>
              <p className="mt-6 text-sm text-slate-300">
                Strict technical governance, controlled supply corridors, and
                precision logistics built for industrial continuity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#activities"
                  className="cta-button relative overflow-hidden rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  Explore Activities
                </a>
                <a
                  href="#contacts"
                  className="cta-button relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.1 }}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
                  Operational brief
                </p>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  2024
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Supply integrity</span>
                  <span className="text-cyan-300">24/7</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Regulatory compliance</span>
                  <span className="text-cyan-300">ISO 9001</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Coverage</span>
                  <span className="text-cyan-300">EMEA + APAC</span>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                Dedicated control room, real-time vessel monitoring, and strict
                documentation pipelines.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="activities" className="mx-auto w-full max-w-6xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.6em] text-cyan-300">
              Activities
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Core operational divisions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`activity-panel group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur ${activity.className}`}
              >
                <div className="relative z-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
                      {activity.tag}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {activity.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm text-slate-200">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    0{index + 1}
                  </div>
                </div>
                <span className="activity-accent" />
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.6em] text-cyan-300">
                Logistics Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Structured delivery workflow
              </h2>
            </motion.div>

            <div className="relative grid gap-6 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" />
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-2xl border border-white/10 bg-graphite/80 p-6"
                >
                  <span className="absolute -top-4 left-6 rounded-full border border-cyan-400/40 bg-graphite px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-200">{step.detail}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    <span>Operational control</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="border-t border-white/10 bg-graphite/95">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">
              OILGAS
            </p>
            <p className="mt-4 text-sm text-slate-300">
              info@oilgas.energy · +7 (000) 000-0000
            </p>
            <p className="mt-2 text-sm text-slate-400">
              18 Petrovsky Prospect, Global Energy District
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
              Compliance note
            </p>
            <p className="text-sm text-slate-300">
              Operations are executed under strict compliance protocols, with
              continuous audit readiness, vessel vetting, and documentation
              control.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
