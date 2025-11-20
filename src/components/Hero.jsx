import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900">
            Find Your Perfect Fit—Beautifully Personalized
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            NERA pairs expert design with intelligent fit to recommend intimates that honor your shape—comfort-first, confidence-always.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#fit" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-[#2B1636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors">
              Start Your Fit
            </a>
            <a href="#collections" className="inline-flex items-center rounded-full border border-neutral-900 text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Explore Collections
            </a>
          </div>
          <p className="mt-4 text-xs text-neutral-500">Zero judgment. Private. Designed for every body.</p>
        </div>
        <div className="relative mt-16 md:mt-20">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="mx-auto max-w-5xl h-64 sm:h-80 md:h-[28rem] rounded-[40rem] bg-gradient-to-b from-[#F7EDEE] via-transparent to-transparent blur-2xl opacity-70" />
          </div>
          <div className="relative mx-auto max-w-5xl aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-neutral-200">
            <Spline aria-label="3D product shape animation" scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
