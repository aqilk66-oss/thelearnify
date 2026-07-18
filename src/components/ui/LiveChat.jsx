import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

const LiveChat = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 Welcome to The Learnify. How can I help you today?' },
  ])

  const send = () => {
    if (!message.trim()) return
    const userMsg = { from: 'user', text: message }
    const botMsg = { from: 'bot', text: 'Thanks for reaching out! Our team will respond shortly. You can also call us at +92 300 1234567.' }
    setMessages(prev => [...prev, userMsg, botMsg])
    setMessage('')
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-5 z-50 w-80 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-card-hover"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold">L</div>
                <div>
                  <p className="text-white font-semibold text-sm">Learnify Support</p>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-56 overflow-y-auto p-4 space-y-3 bg-dark-200/80">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-white/10 text-white/80 rounded-bl-sm border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-dark-300/80 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={send}
                className="w-9 h-9 bg-primary hover:bg-primary-600 rounded-xl flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <FiSend size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full shadow-glow-green flex items-center justify-center transition-colors"
        aria-label="Open live chat"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  )
}

export default LiveChat
