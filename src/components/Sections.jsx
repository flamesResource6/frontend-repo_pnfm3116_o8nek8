import React from 'react'

export function Collections() {
  const items = [
    { title: 'Everyday Second Skin', desc: 'Breathable comfort for all-day ease.', imgAlt: 'Soft neutral-toned intimates on fabric backdrop' },
    { title: 'Sculpt & Support', desc: 'Smooth control with zero compromise.', imgAlt: 'Supportive sculpting set on minimal set' },
    { title: 'Luxe Lace', desc: 'Delicate, resilient, timeless.', imgAlt: 'Lace details close-up in warm light' },
  ]
  return (
    <section id="collections" className="bg-white" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 id="collections-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900">Collections</h2>
            <p className="mt-3 text-neutral-700 max-w-xl">Editorial pieces designed for comfort and confidence.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white">Shop all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-3xl border border-neutral-200 aspect-[4/5] bg-[linear-gradient(145deg,#EFE7E2,transparent)]" aria-label={c.title}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform" role="img" aria-label={c.imgAlt} />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-2xl text-neutral-900">{c.title}</h3>
                <p className="text-neutral-700">{c.desc}</p>
                <a href="#" className="mt-2 text-sm underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900">Shop collection</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Promise() {
  const pillars = [
    'Comfort-first design',
    'Inclusive fit spectrum',
    'Respect for privacy',
  ]
  return (
    <section id="promise" className="bg-white" aria-labelledby="promise-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 id="promise-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900">Designed for Every Body</h2>
        <p className="mt-4 text-neutral-700">We center comfort, celebrate individuality, and build recommendations without bias.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {pillars.map((p) => (
            <div key={p} className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-800">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TechPrivacy() {
  const bullets = [
    'Private fit profile stored securely',
    'You control your data—edit or delete anytime',
    'Transparent recommendations—no opaque sizing games',
  ]
  return (
    <section className="bg-white" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="tech-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900">Intelligence that respects intimacy</h2>
          <ul className="mt-6 space-y-3 text-neutral-700">
            {bullets.map((b) => (
              <li key={b} className="pl-5 relative">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#BDAE96]" />
                {b}
              </li>
            ))}
          </ul>
          <a href="#" className="mt-6 inline-block text-sm underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900">Learn how our fit model works</a>
        </div>
        <div className="rounded-3xl border border-neutral-200 aspect-[4/3] bg-[radial-gradient(circle_at_center,#F7EDEE,transparent_60%)]" aria-label="Abstract visualization of privacy-first technology" />
      </div>
    </section>
  )
}

export function Join() {
  return (
    <section id="join" className="bg-[#F7EDEE]" aria-labelledby="join-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 id="join-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900">Join NERA</h2>
        <p className="mt-3 text-neutral-700">Early access, fit tips, and private drops. Gentle updates only.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 flex flex-col sm:flex-row items-center gap-3" aria-label="Join mailing list">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" type="email" required placeholder="you@example.com" className="w-full sm:flex-1 rounded-full border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#BDAE96]" />
          <button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-[#2B1636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7EDEE]">Join</button>
        </form>
        <p className="mt-3 text-xs text-neutral-600">Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export function Footer() {
  const col = (title, links) => (
    <div>
      <div className="font-medium text-neutral-900">{title}</div>
      <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
        {links.map((l) => (<li key={l}><a href="#" className="hover:underline underline-offset-4">{l}</a></li>))}
      </ul>
    </div>
  )
  return (
    <footer className="bg-white border-t border-neutral-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {col('Shop', ['New In','Bras','Briefs','Sets'])}
        {col('Fit', ['Start Fit','Sizing','Care'])}
        {col('About', ['Story','Sustainability','Careers'])}
        {col('Social', ['Instagram','Pinterest','TikTok'])}
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} NERA • Privacy • Terms</div>
          <div>Region: Global</div>
        </div>
      </div>
    </footer>
  )
}
