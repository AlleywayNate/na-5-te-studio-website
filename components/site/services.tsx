'use client'

import { motion } from 'framer-motion'
import { Brush, Palette, Gauge, Package, Check, Star } from 'lucide-react'
import { SERVICES } from './data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const ICONS = [Brush, Palette, Gauge, Package]

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Services"
          title="Commission Rates"
          description="Starting prices for the most common project types — everything tuned for VRChat."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col rounded-2xl border p-6 transition-colors ${
                  service.featured
                    ? 'border-primary/60 bg-card shadow-[0_0_40px_rgba(255,60,172,0.2)]'
                    : 'glass border-border hover:border-accent/40'
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground shadow-[0_0_20px_rgba(255,60,172,0.6)]">
                    <Star size={11} /> Popular
                  </span>
                )}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                    service.featured
                      ? 'border-primary/40 bg-primary/15 text-primary group-hover:shadow-[0_0_20px_rgba(255,60,172,0.5)]'
                      : 'border-accent/30 bg-accent/10 text-accent group-hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-mono text-lg font-semibold">
                  {service.title}
                </h3>
                <p
                  className={`mt-2 font-mono text-xl font-bold ${
                    service.featured
                      ? 'text-glow-pink text-primary'
                      : 'text-accent'
                  }`}
                >
                  {service.price}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          service.featured ? 'text-primary' : 'text-accent'
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 block rounded-xl px-5 py-3 text-center text-sm font-medium transition-all sm:mt-auto sm:pt-3 ${
                    service.featured
                      ? 'bg-primary text-primary-foreground shadow-[0_0_25px_rgba(255,60,172,0.45)] hover:shadow-[0_0_40px_rgba(255,60,172,0.7)]'
                      : 'border border-border text-foreground hover:border-accent/50'
                  }`}
                >
                  Request
                </a>
              </motion.div>
            )
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Final quote depends on project scope.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
