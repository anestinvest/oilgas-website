// app/page.tsx
"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Lubricants",
    desc: "Production and sales of high-performance lubricants for automotive, industrial, and heavy-duty applications.",
    tag: "Production • Sales",
  },
  {
    title: "Base Oils & Raw Materials",
    desc: "Group I/II/III base oils, additives, and supply solutions for blenders, traders, and manufacturers.",
    tag: "Supply • Trading",
  },
  {
    title: "Chartering & Energy Logistics",
    desc: "Support for vessel chartering and energy logistics across oil & gas supply chains.",
    tag: "Shipping • Chartering",
  },
];

const metrics = [
  { k: "3", v: "Core business lines" },
  { k: "EU", v: "Operations focus" },
  { k: "B2B", v: "Industry-first approach" },
  { k: "24/7", v: "Response discipline" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md border border-cyan-400/30 bg-gradient-to-b from-cyan-400/15 to-transparent" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-widest">OILGAS</div>
              <div className="text-xs text-white/60">Hellenic Hub</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#activities">Activities</a>
            <a className="hover:text-white" href="#solutions">Solutions</a>
            <a className="hover:text-white" href="#logistics">Logistics</a>
            <a className="hover:text-white" href="#contacts">Contacts</a>
          </nav>

          <div className="flex gap-2">
            <a
              href="#contacts"
              className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-white hover:bg-cyan-400/15"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* animated grid */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.10),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
              Lubricants • Base Oils • Energy Logistics
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              OILGAS
              <span className="block text-white/70">industrial-grade supply solutions</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              We build reliable, disciplined supply across lubricants, raw materials, and logistics —
              with a strict corporate approach and fast execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#activities"
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#0b0f14] hover:bg-white/90"
              >
                Explore Activities
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Solutions
              </a>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.v}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-2xl font-semibold">{m.k}</div>
                <div className="mt-1 text-xs text-white/60">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Activities</h2>
            <p className="mt-2 text-sm text-white/60">
              Three operational lines under one disciplined execution model.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/25 hover:bg-white/7"
            >
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-white/70">
                {c.tag}
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{c.desc}</p>

              <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                <span className="h-[1px] w-6 bg-cyan-400/60 transition-all group-hover:w-10" />
                Learn more
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Solutions</h2>
          <p className="mt-2 text-sm text-white/60">
            Placeholder categories — we will replace with your real product lines.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Heavy Duty Diesel Oils",
              "Passenger Car Oils",
              "Industrial Lubricants",
              "Marine Lubricants",
              "Base Oils (Group I/II/III)",
              "Additives & Components",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-1 text-xs text-white/60">
                  Technical positioning and specs will be added.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Execution Process</h2>
        <p className="mt-2 text-sm text-white/60">
          Straightforward workflow designed for speed and reliability.
        </p>

        <div className="mt-7 grid gap-3 md:grid-cols-4">
          {["Request", "Specs", "Offer", "Delivery"].map((s, idx) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-white/55">Step {idx + 1}</div>
              <div className="mt-1 text-base font-semibold">{s}</div>
              <div className="mt-2 text-sm text-white/65">
                Clear inputs, fast response, documented checkpoints.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Contacts</h2>
          <p className="mt-2 text-sm text-white/60">
            Leave a message — this form is UI-only for now (no backend connected yet).
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">OILGAS HELLENIC HUB</div>
              <div className="mt-2 text-sm text-white/65">
                Lubricants • Base Oils • Energy Logistics
              </div>
              <div className="mt-6 space-y-2 text-sm text-white/65">
                <div>📍 Athens, Greece</div>
                <div>✉️ sales@oilgas (add real email)</div>
                <div>☎️ +30 (add real phone)</div>
              </div>
            </div>

            <form className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="grid gap-3">
                <input className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm outline-none focus:border-cyan-400/40"
                  placeholder="Name" />
                <input className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm outline-none focus:border-cyan-400/40"
                  placeholder="Email" />
                <textarea className="min-h-[120px] rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm outline-none focus:border-cyan-400/40"
                  placeholder="Message" />
                <button type="button"
                  className="rounded-md bg-cyan-400/15 px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/20">
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 text-xs text-white/45">
            © {new Date().getFullYear()} OILGAS. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

