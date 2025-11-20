import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ children }) => (
  <a href="#" className="relative text-sm md:text-base text-neutral-900 hover:text-neutral-700 transition-colors">
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

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70' : 'bg-white/90'} border-b border-[#BDAE96]/30`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Handwritten-style placeholder logo */}
        <div className="font-[\"Playfair Display\"] italic text-2xl tracking-tight select-none">
          Logo
        </div>

        {/* Center menu (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {['Shop','Fit','About','Collections'].map((item) => (
            <div key={item} className="group">
              <NavLink>{item}</NavLink>
            </div>
          ))}
        </div>

        {/* Right: Join button */}
        <div className="hidden md:block">
          <a href="#join" className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">
            Join
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="px-4 py-4 space-y-3">
            {['Shop','Fit','About','Collections'].map((item) => (
              <a key={item} href="#" className="block text-neutral-900">{item}</a>
            ))}
            <a href="#join" className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">
              Join
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
