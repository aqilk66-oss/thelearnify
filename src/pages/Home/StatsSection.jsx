import { motion } from 'framer-motion'
import AnimatedCounter from '../../components/ui/AnimatedCounter'
import ScrollReveal from '../../components/ui/ScrollReveal'
import { FiUsers, FiBookOpen, FiBriefcase, FiStar } from 'react-icons/fi'

const stats = [
  {
    icon: <FiUsers />,
    value: 5000,
    suffix: '+',
    label: 'Students Enrolled',
    desc: 'Across all courses',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: <FiBookOpen />,
    value: 50,
    suffix: '+',
    label: 'Courses Available',
    desc: 'Industry-relevant programs',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
  {
    icon: <FiBriefcase />,
    value: 100,
    suffix: '+',
    label: 'Industry Partners',
    desc: 'Hiring our graduates',
    color: 'text-accent-yellow',
    bg: 'bg-accent-yellow/10',
    border: 'border-accent-yellow/20',
  },
  {
    icon: <FiStar />,
    value: 95,
    suffix: '%',
    label: 'Placement Rate',
    desc: 'Graduates placed within 6 months',
    color: 'text-accent-red',
    bg: 'bg-accent-red/10',
    border: 'border-accent-red/20',
  },
]

const StatsSection = () => {
  return (
    <section className="section-padding bg-dark-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="section-container">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <div className="section-label inline-flex">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our Impact in Numbers
            </div>
            <h2 className="text-section font-bold text-white mt-2">
              Trusted by Thousands of{' '}
              <span className="gradient-text-green">Tech Learners</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} animation="zoomIn" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card p-6 md:p-8 text-center border ${stat.border} group relative overflow-hidden`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.bg} rounded-2xl`} />

                <div className={`relative w-12 h-12 ${stat.bg} ${stat.border} border rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.color} text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                <div className={`relative text-3xl md:text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="relative text-white font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="relative text-white/40 text-xs">{stat.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
