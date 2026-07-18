import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiHome, FiCalendar, FiFileText, FiAward,
  FiTrendingUp, FiBell, FiBook, FiUser, FiLogIn
} from 'react-icons/fi'
import ScrollReveal from '../../components/ui/ScrollReveal'

const sidebarLinks = [
  { icon: <FiHome />,      label: 'Dashboard' },
  { icon: <FiCalendar />,  label: 'Attendance' },
  { icon: <FiFileText />,  label: 'Assignments' },
  { icon: <FiTrendingUp />,label: 'Results' },
  { icon: <FiBook />,      label: 'Progress' },
  { icon: <FiAward />,     label: 'Certificates' },
  { icon: <FiBell />,      label: 'Notifications' },
]

const stats = [
  { label: 'Attendance',   value: '87%',  icon: <FiCalendar />,   color: 'text-primary',       bg: 'bg-primary/10',       border: 'border-primary/20' },
  { label: 'Assignments',  value: '12/15',icon: <FiFileText />,    color: 'text-accent-blue',   bg: 'bg-accent-blue/10',   border: 'border-accent-blue/20' },
  { label: 'Grade',        value: 'A+',   icon: <FiTrendingUp />, color: 'text-accent-yellow',  bg: 'bg-accent-yellow/10', border: 'border-accent-yellow/20' },
  { label: 'Certificates', value: '2',    icon: <FiAward />,       color: 'text-accent-red',    bg: 'bg-accent-red/10',    border: 'border-accent-red/20' },
]

const courses = [
  { name: 'Full Stack Development', progress: 68, instructor: 'Sara Ahmed',    color: 'bg-primary' },
  { name: 'React Advanced',         progress: 45, instructor: 'Ali Hassan',    color: 'bg-accent-blue' },
  { name: 'Node.js & APIs',         progress: 30, instructor: 'Sara Ahmed',    color: 'bg-accent-yellow' },
]

const notifications = [
  { text: 'Assignment #4 due tomorrow at 11:59 PM', time: '1h ago', dot: 'bg-accent-red' },
  { text: 'New lecture uploaded: React Context API', time: '3h ago', dot: 'bg-primary' },
  { text: 'Your certificate is ready to download!',  time: '1d ago', dot: 'bg-accent-yellow' },
  { text: 'Batch attendance marked for today',       time: '2d ago', dot: 'bg-accent-blue' },
]

const Portal = () => {
  const [active, setActive] = useState('Dashboard')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  if (!loggedIn) {
    return (
      <main className="bg-mesh min-h-screen flex items-center justify-center py-20">
        <ScrollReveal animation="zoomIn">
          <div className="glass-card p-10 rounded-3xl border border-white/10 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                <FiUser />
              </div>
              <h2 className="text-white font-bold text-2xl">Student Portal</h2>
              <p className="text-white/50 text-sm mt-1">Login to access your dashboard</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Student Email</label>
                <input type="email" value={loginForm.email}
                  onChange={e => setLoginForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="student@thelearnify.pk" className="input-field" />
              </div>
              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Password</label>
                <input type="password" value={loginForm.password}
                  onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••" className="input-field" />
              </div>
              <motion.button whileTap={{ scale: 0.97 }} onClick={() => setLoggedIn(true)}
                className="btn-primary w-full justify-center py-3.5 mt-2">
                <FiLogIn /> Login to Portal
              </motion.button>
              <p className="text-white/30 text-xs text-center">Demo: click Login to preview dashboard</p>
            </div>
          </div>
        </ScrollReveal>
      </main>
    )
  }

  return (
    <main className="bg-mesh min-h-screen">
      <div className="section-container py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="glass-card rounded-2xl border border-white/10 p-4 sticky top-24">
              <div className="text-center mb-6 pb-4 border-b border-white/5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">A</div>
                <p className="text-white font-semibold text-sm">Ahmad Ali</p>
                <p className="text-white/40 text-xs">Full Stack Development</p>
              </div>
              <nav className="space-y-1">
                {sidebarLinks.map(link => (
                  <button key={link.label} onClick={() => setActive(link.label)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active === link.label
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}>
                    <span className="text-base">{link.icon}</span>{link.label}
                  </button>
                ))}
                <button onClick={() => setLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-accent-red/70 hover:bg-accent-red/10 hover:text-accent-red transition-all mt-4">
                  <FiLogIn className="rotate-180" /> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-xl">Good Morning, Ahmad 👋</h2>
                <p className="text-white/40 text-sm">Batch: Full Stack — July 2025</p>
              </div>
              <button onClick={() => setLoggedIn(false)} className="btn-ghost text-sm py-2 px-4">
                <FiLogIn className="rotate-180 mr-1" /> Logout
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} whileHover={{ y: -3 }}
                  className={`glass-card p-4 rounded-xl border ${s.border} text-center`}>
                  <div className={`w-10 h-10 ${s.bg} ${s.border} border rounded-xl flex items-center justify-center ${s.color} mx-auto mb-2 text-lg`}>{s.icon}</div>
                  <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-white/50 text-xs">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Progress */}
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold mb-5">Course Progress</h3>
              <div className="space-y-5">
                {courses.map((c, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-white text-sm font-medium">{c.name}</p>
                        <p className="text-white/40 text-xs">{c.instructor}</p>
                      </div>
                      <span className="text-white font-bold text-sm">{c.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${c.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
                        className={`h-full ${c.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold mb-5">Recent Notifications</h3>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <motion.div key={i} whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className={`w-2 h-2 ${n.dot} rounded-full mt-2 flex-shrink-0`} />
                    <div className="flex-1">
                      <p className="text-white/80 text-sm">{n.text}</p>
                      <p className="text-white/30 text-xs mt-0.5">{n.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Portal
