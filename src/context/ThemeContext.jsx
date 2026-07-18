import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('learnify-theme')
    if (saved) {
      setIsDark(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.classList.remove('light')
      document.body.style.backgroundColor = '#0B0B0B'
      document.body.style.color = '#ffffff'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      document.body.style.backgroundColor = '#f0f4f8'
      document.body.style.color = '#0f172a'
    }
    localStorage.setItem('learnify-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
