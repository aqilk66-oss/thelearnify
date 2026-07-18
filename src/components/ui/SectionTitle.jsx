import { motion } from 'framer-motion'

const SectionTitle = ({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }[align]

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-section font-bold mb-4 ${light ? 'text-white' : 'text-white'}`}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text-green">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/60 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
