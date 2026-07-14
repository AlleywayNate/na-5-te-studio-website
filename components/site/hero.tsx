'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const PARTICLES = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: `${(i * 53) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 6 + (i % 5) * 1.5,
  delay: (i % 6) * 0.6,
  cyan: i % 2 === 0,
}))

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Cyber grid background */}
      <div className="cyber-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* Floating geometric accents */}
      <motion.div
        aria-hidden
        className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[110px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Particles */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute h-1 w-1 rounded-full ${
              p.cyan ? 'bg-accent' : 'bg-primary'
            }`}
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <Sparkles size={13} />
            NA5TE Studio
          </span>

          <h1 className="mt-6 text-balance font-mono text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-glow-pink text-primary">NA5TE</span>{' '}
            <span className="text-muted-foreground">//</span>{' '}
            <span className="text-glow-cyan text-accent">DIGITAL STUDIO</span>
          </h1>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-base">
            VRChat Customization • Unity Systems • Digital Assets
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            NA5TE Studio specializes in custom VRChat avatar work across Booth,
            furry, and original character projects. Services include texturing,
            asset integration, Unity systems, optimization, Blender workflows,
            and digital asset creation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-[0_0_30px_rgba(255,60,172,0.45)] transition-all hover:shadow-[0_0_45px_rgba(255,60,172,0.7)]"
            >
              Submit Commission Request
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/5 px-7 py-3.5 font-medium text-accent transition-all hover:bg-accent/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.35)]"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
