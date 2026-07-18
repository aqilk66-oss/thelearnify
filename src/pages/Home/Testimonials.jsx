import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../../components/ui/SectionTitle'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const navigate = (dir) => {
    setDirection(dir)
    setAutoplay(false)
    setCurrent((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length
      return (prev - 1 + testimonials.length) % testimonials.length
    })
  }

  const variants = {
    enter: (dir) => ({
      x: dir === 1 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir === 1 ? -100 : 100,
      opacity: 0,
    }),
  }

  const t = testimonials[current]

  return (
    <section className="section-padding bg-mesh relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          label="Student Stories"
          title="What Our"
          highlight="Graduates Say"
          subtitle="Real stories from students who transformed their careers with The Learnify."
        />

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative">
                  {/* Quote Mark */}
                  <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif leading-none select-none">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <FiStar key={i} className="text-accent-yellow fill-current" size={18} />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-white/80 text-base md:text-xl leading-relaxed mb-8 italic">
                    "{t.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold">{t.name}</div>
                      <div className="text-white/50 text-sm">{t.role}</div>
                      <div className="text-primary text-xs mt-0.5">Course: {t.course}</div>
                    </div>
                    <div className="ml-auto hidden md:block">
                      <div className="glass-card px-4 py-2 rounded-xl border border-primary/20 text-center">
                        <div className="text-primary font-bold text-sm">{t.company}</div>
                        <div className="text-white/40 text-xs">Now working at</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-12 h-12 glass-card rounded-xl border border-white/10 flex items-center justify-center 
                         text-white hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setAutoplay(false) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="w-12 h-12 glass-card rounded-xl border border-white/10 flex items-center justify-center 
                         text-white hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          {/* All Avatars */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((t, i) => (
              <motion.img
                key={i}
                src={t.image}
                alt={t.name}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setAutoplay(false) }}
                whileHover={{ scale: 1.15 }}
                className={`rounded-full object-cover cursor-pointer transition-all duration-300 ${
                  i === current
                    ? 'w-12 h-12 ring-2 ring-primary ring-offset-2 ring-offset-dark'
                    : 'w-9 h-9 opacity-50 hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
