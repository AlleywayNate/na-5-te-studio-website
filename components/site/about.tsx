'use client'

import { TECH_BADGES } from './data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading label="About" title="The Studio" />

        <Reveal>
          <div className="glass rounded-2xl border border-border p-8 sm:p-10">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              NA5TE Studio creates high-quality VRChat avatar customization for
              both anime and furry communities while also developing advanced
              Unity systems, optimization solutions, and digital assets. Every
              project is handled with a focus on clean results, solid
              performance, and a look that feels uniquely yours.
            </p>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Tools & Tech
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
