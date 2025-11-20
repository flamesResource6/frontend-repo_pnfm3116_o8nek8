import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import { Collections, Promise, TechPrivacy, Join, Footer } from './components/Sections'
import './index.css'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        {/* Trust strip */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-center gap-10 opacity-60 text-neutral-700 text-sm">
              <span>Vogue</span>
              <span>Elle</span>
              <span>Harper's Bazaar</span>
              <span>Refinery29</span>
            </div>
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
