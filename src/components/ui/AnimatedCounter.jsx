import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true
      const start = 0
      const increment = end / (duration / 16)
      let current = start

      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
