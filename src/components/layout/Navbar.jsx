import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import {
  FiSun, FiMoon,
  FiUser, FiSearch, FiX
} from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white text-xs md:text-sm py-2 text-center font-medium"
      >
        🎓 New Batch Starting August 2025 &nbsp;|&nbsp; 
        <Link to="/admissions" className="underline hover:no-underline font-bold">Apply Now →</Link>
        &nbsp;|&nbsp; 📞 +92 300 1234567
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
            : 'bg-dark/80 backdrop-blur-md'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                  <img
                    src="/logo.png"
                    alt="The Learnify"
                    className="relative h-10 md:h-12 w-auto object-contain"
                    onError={(e) => { e.target.src = '/logo-fallback.svg' }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                      isActive
                        ? 'text-primary'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 
                           text-white/70 hover:text-white transition-all duration-200 border border-white/10"
              >
                <FiSearch size={16} />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 
                           text-white/70 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Student Portal */}
              <Link
                to="/portal"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-600 
                           text-white text-sm font-semibold rounded-xl transition-all duration-200 
                           hover:-translate-y-0.5 hover:shadow-glow-green"
              >
                <FiUser size={14} />
                <span>Portal</span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 
                           rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="hamburger-line"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="hamburger-line"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="hamburger-line"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/5"
            >
              <div className="section-container py-3">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, topics, instructors..."
                  className="input-field"
                  onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-dark/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src="/logo.png" alt="The Learnify" className="h-10 w-auto"
                    onError={(e) => { e.target.src = '/logo-fallback.svg' }} />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 
                             hover:bg-white/10 text-white border border-white/10"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  to="/portal"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <FiUser size={16} /> Student Portal
                </Link>
                <Link
                  to="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline w-full justify-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
