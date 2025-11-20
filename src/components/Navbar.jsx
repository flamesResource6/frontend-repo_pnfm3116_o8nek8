import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative text-sm md:text-base text-neutral-900 hover:text-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
  >
    <span className="pb-1">{children}</span>
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-0 bg-[#BDAE96] transition-all duration-300 group-hover:w-full" />
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Close on route/hash change for better UX
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70' : 'bg-white/90'} border-b border-[#BDAE96]/30`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        {/* Left: Logo */}
        <a href="#" className="font-[\"Playfair Display\"] italic text-2xl tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded" aria-label="NERA home">
          <span aria-hidden>Logo</span>
          <span className="sr-only">NERA</span>
        </a>

        {/* Center menu (desktop) */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {[
            { label: 'Shop', href: '#collections' },
            { label: 'Fit', href: '#fit' },
            { label: 'About', href: '#promise' },
            { label: 'Collections', href: '#collections' },
          ].map((item) => (
            <li key={item.label} className="group">
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Join button */}
        <div className="hidden md:block">
          <a
            href="#join"
            className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Join
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />} 
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden border-t border-neutral-200`}>
        <div className="px-4 py-4 space-y-3">
          {[
            { label: 'Shop', href: '#collections' },
            { label: 'Fit', href: '#fit' },
            { label: 'About', href: '#promise' },
            { label: 'Collections', href: '#collections' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="block text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BDAE96] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Join
          </a>
        </div>
      </div>
    </header>
  )
}
