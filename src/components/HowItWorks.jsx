import React from 'react'

const Step = ({ number, title, desc }) => (
  <div className="group rounded-3xl border border-neutral-200 p-6 sm:p-8 transition-colors hover:bg-[#F7EDEE]">
    <div className="text-sm text-neutral-500">Step {number}</div>
    <h3 className="mt-2 font-serif text-2xl text-neutral-900">{title}</h3>
    <p className="mt-3 text-neutral-700 leading-relaxed">{desc}</p>
  </div>
)

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">How it works</h2>
          <p className="mt-3 text-neutral-700">A private, thoughtful journey to a better fit.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Step number={1} title="Tell us about your fit" desc="A fast, private questionnaire built with empathy—no judgments, just understanding." />
          <Step number={2} title="AI refines your profile" desc="We analyze across hundreds of cuts and fabrics to learn what supports you best." />
          <Step number={3} title="Receive curated picks" desc="Feel-good recommendations that fit beautifully from day one." />
        </div>
      </div>
    </section>
  )
}
