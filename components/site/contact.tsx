'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Gamepad2, AtSign, Mail, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const CONTACTS = [
  {
    label: 'Discord',
    handle: '@na5te',
    icon: MessageCircle,
    href: '#',
    accent: 'primary' as const,
  },
  {
    label: 'Email',
    handle: 'hello@na5te.studio',
    icon: Mail,
    href: 'mailto:hello@na5te.studio',
    accent: 'cyan' as const,
  },
  {
    label: 'VRChat',
    handle: 'NA5TE',
    icon: Gamepad2,
    href: '#',
    accent: 'primary' as const,
  },
  {
    label: 'X (Twitter)',
    handle: '@na5te',
    icon: AtSign,
    href: '#',
    accent: 'cyan' as const,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Contact"
          title="Request a Commission"
          description="Reach out on any platform below and let's make your avatar stand out."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon
            const isPink = c.accent === 'primary'
            return (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`glass group flex flex-col items-start rounded-2xl border border-border p-6 transition-colors ${
                  isPink ? 'hover:border-primary/50' : 'hover:border-accent/50'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                    isPink
                      ? 'border-primary/30 bg-primary/10 text-primary group-hover:shadow-[0_0_20px_rgba(255,60,172,0.4)]'
                      : 'border-accent/30 bg-accent/10 text-accent group-hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 flex items-center gap-1 font-mono text-lg font-semibold">
                  {c.label}
                  <ArrowUpRight
                    size={15}
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.handle}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
