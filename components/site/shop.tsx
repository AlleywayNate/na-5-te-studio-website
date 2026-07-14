'use client'

import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import { SHOP_PRODUCTS } from './data'
import { SectionHeading } from './section-heading'

export function Shop() {
  return (
    <section id="shop" className="relative py-24">
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Digital Shop"
          title="Coming Soon"
          description="A storefront for avatar assets, textures, materials, and Unity tools is on the way."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOP_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass group overflow-hidden rounded-2xl border border-border transition-colors hover:border-accent/40"
            >
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-secondary">
                <div className="cyber-grid absolute inset-0 opacity-30" />
                <Package
                  size={40}
                  className="relative text-muted-foreground transition-colors group-hover:text-accent"
                />
                <span className="absolute right-3 top-3 rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                  Coming Soon
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-mono text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
