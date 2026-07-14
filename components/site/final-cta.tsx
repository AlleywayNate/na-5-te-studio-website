'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="cyber-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <Reveal className="relative mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-balance font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to bring your avatar to life?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Let&apos;s build something awesome together.
        </p>

        <a
          href="#contact"
          className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-medium text-primary-foreground shadow-[0_0_35px_rgba(255,60,172,0.5)] transition-all hover:shadow-[0_0_55px_rgba(255,60,172,0.8)]"
        >
          Submit Commission Request
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </Reveal>
    </section>
  )
}
