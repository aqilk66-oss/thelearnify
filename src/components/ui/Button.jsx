import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-600 text-white shadow-glow-green hover:shadow-glow-green',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20',
    danger: 'bg-accent-red hover:bg-red-600 text-white',
    blue: 'bg-accent-blue hover:bg-blue-600 text-white shadow-glow-blue',
    yellow: 'bg-accent-yellow hover:bg-yellow-500 text-dark font-bold',
    dark: 'bg-dark-300 hover:bg-dark-400 text-white border border-white/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl',
    xl: 'px-10 py-5 text-lg rounded-2xl',
  }

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300
    hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  )

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
