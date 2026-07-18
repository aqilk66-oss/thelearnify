import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Courses from './pages/Courses/index'
import Faculty from './pages/Faculty/index'
import Admissions from './pages/Admissions/index'
import Portal from './pages/Portal/index'
import Events from './pages/Events/index'
import Gallery from './pages/Gallery/index'
import Blog from './pages/Blog/index'
import Contact from './pages/Contact/index'
import LiveChat from './components/ui/LiveChat'
import ScrollToTop from './components/ui/ScrollToTop'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.2 } },
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/courses"    element={<Courses />} />
          <Route path="/faculty"    element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/portal"     element={<Portal />} />
          <Route path="/events"     element={<Events />} />
          <Route path="/gallery"    element={<Gallery />} />
          <Route path="/blog"       element={<Blog />} />
          <Route path="/contact"    element={<Contact />} />
          {/* Catch-all → Home */}
          <Route path="*"           element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

const App = () => (
  <ThemeProvider>
    <BrowserRouter basename="/thelearnify">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-dark text-white font-poppins">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
        <LiveChat />
      </div>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
