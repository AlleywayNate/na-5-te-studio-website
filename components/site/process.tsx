'use client'

import { motion } from 'framer-motion'
import { PROCESS } from './data'
import { SectionHeading } from './section-heading'

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Process"
          title="Commission Process"
          description="A clear six-step flow from first message to secure delivery."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS.map((item, i) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-sm font-bold text-accent shadow-[0_0_20px_rgba(0,245,255,0.25)]">
                  {item.step}
                </div>
                <h3 className="mt-4 font-mono text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
