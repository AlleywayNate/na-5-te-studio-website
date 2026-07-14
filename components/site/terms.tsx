'use client'

import { ShieldCheck } from 'lucide-react'
import { TERMS } from './data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Terms() {
  return (
    <section id="terms" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading label="Terms" title="Terms of Service" />

        <Reveal>
          <div className="glass rounded-2xl border border-border p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <ShieldCheck size={20} />
              </div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Please read before ordering
              </p>
            </div>
            <ul className="space-y-4">
              {TERMS.map((term, i) => (
                <li key={term} className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {term}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
