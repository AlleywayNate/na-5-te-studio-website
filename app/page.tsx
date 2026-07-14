import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Shop } from '@/components/site/shop'
import { Portfolio } from '@/components/site/portfolio'
import { Services } from '@/components/site/services'
import { Process } from '@/components/site/process'
import { Requirements } from '@/components/site/requirements'
import { Faq } from '@/components/site/faq'
import { Terms } from '@/components/site/terms'
import { Contact } from '@/components/site/contact'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Shop />
      <Portfolio />
      <Services />
      <Process />
      <Requirements />
      <Faq />
      <Terms />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  )
}
