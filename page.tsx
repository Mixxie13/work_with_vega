import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustedTechnologies } from '@/components/trusted-technologies'
import { Services } from '@/components/services'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { WhyHireMe } from '@/components/why-hire-me'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedTechnologies />
      <Services />
      <Experience />
      <Projects />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  )
}
