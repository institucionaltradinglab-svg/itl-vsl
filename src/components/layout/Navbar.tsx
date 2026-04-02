import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedNavLink from '../ui/AnimatedNavLink'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Program', href: '#program' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#solution' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
          borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/src/assets/logo-itl.png"
              alt="ITL"
              className="h-8 w-auto"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <AnimatePresence>
              {!scrolled && (
                <motion.img
                  src="/src/assets/text-logo.png"
                  alt="Institucional Trading Lab"
                  className="h-6 w-auto"
                  initial={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              )}
            </AnimatePresence>
            {/* Fallback text logo when images aren't available */}
            <span className="text-white font-semibold text-sm tracking-wide">
              {scrolled ? 'ITL' : 'Institucional Trading Lab'}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <AnimatedNavLink key={link.label} href={link.href}>
                {link.label}
              </AnimatedNavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="small" href="#">
              Student Login
            </Button>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-px bg-white/70" />
              <span className="block w-5 h-px bg-white/70" />
              <span className="block w-5 h-px bg-white/70" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white text-2xl font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" href="#">
              Student Login
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
