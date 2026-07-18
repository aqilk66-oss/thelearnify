import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi'

const floatingIcons = [
  { icon: '⚛️', x: '8%', y: '15%', delay: 0, size: 'text-3xl' },
  { icon: '🐍', x: '88%', y: '20%', delay: 0.5, size: 'text-2xl' },
  { icon: '🔒', x: '5%', y: '65%', delay: 1, size: 'text-2xl' },
  { icon: '🤖', x: '92%', y: '60%', delay: 1.5, size: 'text-3xl' },
  { icon: '☁️', x: '15%', y: '80%', delay: 0.8, size: 'text-2xl' },
  { icon: '📊', x: '80%', y: '80%', delay: 1.2, size: 'text-2xl' },
  { icon: '🎨', x: '50%', y: '8%', delay: 0.3, size: 'text-2xl' },
  { icon: '🌐', x: '75%', y: '35%', delay: 0.7, size: 'text-xl' },
]

const HeroSection = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [180, 0, 180] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(33,150,243,0.12) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,193,7,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(76,175,80,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none pointer-events-none hidden lg:block`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="glass-card p-2 md:p-3 rounded-xl opacity-40 hover:opacity-80 transition-opacity">
            {item.icon}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="section-container relative z-10 py-20 md:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label inline-flex mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Pakistan's #1 IT Training Institute
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-hero font-black text-white mb-2 leading-none">
                The{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #4CAF50, #8BC34A, #4CAF50)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% auto',
                    animation: 'gradient-text 3s linear infinite',
                  }}
                >
                  Learnify
                </span>
              </h1>
              <h1 className="text-hero font-black text-white leading-none">
                Institute
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-2xl text-white/60 font-light mt-4 mb-6 italic"
            >
              "My Mission,{' '}
              <span className="text-primary font-semibold not-italic">Your Success</span>"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transform your career with industry-relevant IT skills. 
              Expert trainers, hands-on projects, and 95% placement support — 
              everything you need to thrive in the digital economy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link
                to="/admissions"
                className="group btn-primary text-base px-8 py-4"
              >
                Enroll Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/courses"
                className="group btn-ghost text-base px-8 py-4"
              >
                <FiPlay className="group-hover:scale-110 transition-transform" />
                Explore Courses
              </Link>
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {[
                { icon: <FiUsers className="text-primary" />, value: '5000+', label: 'Students' },
                { icon: <FiBookOpen className="text-accent-blue" />, value: '50+', label: 'Courses' },
                { icon: <FiAward className="text-accent-yellow" />, value: '95%', label: 'Placement' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-lg">{stat.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Central Logo Display */}
            <div className="relative">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-primary/10"
                style={{ width: '450px', height: '450px', margin: '-75px' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-accent-blue/10"
                style={{ width: '550px', height: '550px', margin: '-125px' }}
              />

              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative glass-card p-10 rounded-3xl text-center"
                style={{ width: '300px' }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(76,175,80,0.1) 0%, transparent 70%)',
                  }}
                />
                <img
                  src="/logo.png"
                  alt="The Learnify"
                  className="w-full h-auto object-contain mb-4"
                  onError={(e) => { e.target.src = '/logo-fallback.svg' }}
                />
                <p className="text-primary font-semibold text-sm italic mt-2">"My Mission, Your Success"</p>
              </motion.div>

              {/* Floating Stat Cards */}
              {[
                { label: 'Students Enrolled', value: '5000+', icon: '🎓', color: 'border-primary/30', x: '-140px', y: '-60px' },
                { label: 'Placement Rate', value: '95%', icon: '💼', color: 'border-accent-blue/30', x: '120px', y: '160px' },
                { label: 'Expert Trainers', value: '30+', icon: '👨‍🏫', color: 'border-accent-yellow/30', x: '-130px', y: '180px' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className={`absolute glass-card p-3 rounded-xl border ${card.color} text-center min-w-[110px]`}
                  style={{ left: card.x, top: card.y }}
                >
                  <div className="text-xl mb-1">{card.icon}</div>
                  <div className="text-white font-bold text-sm">{card.value}</div>
                  <div className="text-white/50 text-xs">{card.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-white/30 text-xs tracking-widest uppercase">Scroll</div>
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
