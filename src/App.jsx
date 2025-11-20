import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import { Collections, Promise, TechPrivacy, Join, Footer } from './components/Sections'
import './index.css'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Skip to content for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-neutral-900 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" aria-label="Main content">
        <Hero />
        {/* Trust strip */}
        <section className="bg-white" aria-label="As featured in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <ul className="flex items-center justify-center gap-10 opacity-60 text-neutral-700 text-sm" role="list">
              {['Vogue','Elle','Harper\'s Bazaar','Refinery29'].map(name => (
                <li key={name} aria-label={`Featured in ${name}`}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <HowItWorks />
        <Collections />
        <Promise />
        <TechPrivacy />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
