import { motion } from 'framer-motion'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'
import { FiAward, FiBriefcase, FiCode, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiUsers />,
    title: 'Expert Trainers',
    description: 'Learn from industry professionals with 8+ years of real-world experience at top tech companies.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: <FiBriefcase />,
    title: 'Industry Curriculum',
    description: 'Our programs are designed in collaboration with leading employers to ensure job-market relevance.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
  {
    icon: <FiCode />,
    title: 'Hands-On Learning',
    description: '70% practical training. Build real projects, work in labs, and create a professional portfolio.',
    color: 'text-accent-yellow',
    bg: 'bg-accent-yellow/10',
    border: 'border-accent-yellow/20',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Placement Support',
    description: '95% placement rate. Dedicated career counseling, mock interviews, and employer connections.',
    color: 'text-accent-red',
    bg: 'bg-accent-red/10',
    border: 'border-accent-red/20',
  },
  {
    icon: <FiAward />,
    title: 'Recognized Certifications',
    description: 'Our certificates are recognized by 100+ partner companies and align with international standards.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: <FiShield />,
    title: 'Flexible Learning',
    description: 'Morning, evening, and weekend batches available. Online & physical classes to suit your schedule.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-dark-100 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
        <div className="w-full h-full rounded-full border-[40px] border-primary" />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal animation="fadeLeft">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
                  alt="IT Training at The Learnify"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl border border-primary/30"
              >
                <div className="text-3xl font-black text-primary">95%</div>
                <div className="text-white text-sm font-medium">Placement Rate</div>
                <div className="text-white/40 text-xs">Industry Average: 60%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl border border-accent-blue/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-blue/20 rounded-xl flex items-center justify-center text-accent-blue">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Award Winning</div>
                    <div className="text-white/40 text-xs">Best IT Institute 2024</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal animation="fadeRight">
              <div className="section-label inline-flex mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Why Choose Us
              </div>
              <h2 className="text-section font-bold text-white mb-4">
                What Makes{' '}
                <span className="gradient-text-green">Learnify Different?</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We don't just teach — we mentor, guide, and connect you to the industry. 
                Our approach combines world-class content with real-world application.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} animation="fadeUp" delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`glass-card p-5 rounded-xl border ${reason.border} group cursor-pointer`}
                  >
                    <div className={`w-10 h-10 ${reason.bg} ${reason.border} border rounded-xl flex items-center justify-center ${reason.color} text-lg mb-3 group-hover:scale-110 transition-transform duration-200`}>
                      {reason.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">{reason.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
