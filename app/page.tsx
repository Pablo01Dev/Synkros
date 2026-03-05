import React from 'react'
import Hero from '../src/components/Hero'
import ServicesGrid from '../src/components/ServicesGrid'
import AboutSection from '../src/components/AboutSection'
import ClientsMarquee from '../src/components/ClientsMarquee'
import LatestPosts from '../src/components/LatestPosts'
import Newsletter from '../src/components/Newsletter'
import { site } from '../src/content/site'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Hero />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Nossos Serviços</h2>
        <ServicesGrid services={site.services} />
      </section>

      <AboutSection />

      <ClientsMarquee />

    </div>
  )
}

