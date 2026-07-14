'use client'

import { Check } from 'lucide-react'
import { REQUIREMENTS } from './data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Requirements() {
  return (
    <section id="requirements" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          label="Requirements"
          title="What I Need From You"
          description="Have these ready so we can start your commission without delays."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl border border-primary/30 p-7">
              <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
                Required
              </h3>
              <ul className="mt-5 space-y-3">
                {REQUIREMENTS.required.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Check size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl border border-accent/30 p-7">
              <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
                Optional
              </h3>
              <ul className="mt-5 space-y-3">
                {REQUIREMENTS.optional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                      <Check size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
