import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiTag, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const allEvents = [
  {
    id: 1, category: 'Workshop',
    title: 'Ethical Hacking Bootcamp',
    desc: 'A 2-day intensive bootcamp covering penetration testing, vulnerability assessment, and real-world CTF challenges.',
    date: 'Aug 10–11, 2025', time: '9:00 AM – 6:00 PM', location: 'Learnify Lab, Islamabad',
    seats: 30, registered: 24, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    tag: 'Upcoming', tagColor: 'bg-primary/20 text-primary', featured: true,
  },
  {
    id: 2, category: 'Seminar',
    title: 'AI & The Future of Work',
    desc: 'Industry leaders discuss how artificial intelligence is reshaping careers and what skills you need to stay relevant.',
    date: 'Aug 15, 2025', time: '3:00 PM – 6:00 PM', location: 'Online (Zoom)',
    seats: 200, registered: 145, image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    tag: 'Free', tagColor: 'bg-accent-yellow/20 text-accent-yellow', featured: false,
  },
  {
    id: 3, category: 'Hackathon',
    title: 'Build-a-Thon 2025',
    desc: '24-hour hackathon for students to build innovative solutions. PKR 100,000 in prizes. Team size: 2–4 members.',
    date: 'Aug 22–23, 2025', time: 'Starts 10:00 AM', location: 'Learnify Campus',
    seats: 80, registered: 52, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    tag: 'Prizes', tagColor: 'bg-accent-red/20 text-accent-red', featured: true,
  },
  {
    id: 4, category: 'Workshop',
    title: 'UI/UX Design Masterclass',
    desc: 'Learn the complete design process — wireframing, prototyping, user research, and creating stunning Figma designs.',
    date: 'Sep 5, 2025', time: '10:00 AM – 4:00 PM', location: 'Design Studio, Learnify',
    seats: 25, registered: 18, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    tag: 'Upcoming', tagColor: 'bg-primary/20 text-primary', featured: false,
  },
  {
    id: 5, category: 'Seminar',
    title: 'Digital Marketing for Startups',
    desc: 'Usman Malik shares growth hacking strategies used by Pakistan\'s fastest-growing startups.',
    date: 'Sep 12, 2025', time: '5:00 PM – 8:00 PM', location: 'Online (Zoom)',
    seats: 150, registered: 67, image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efbc07?w=600&q=80',
    tag: 'Free', tagColor: 'bg-accent-yellow/20 text-accent-yellow', featured: false,
  },
  {
    id: 6, category: 'Workshop',
    title: 'Python for Beginners',
    desc: 'Zero to hero Python workshop. Build your first ML model by the end of the day. No prior experience needed.',
    date: 'Sep 20, 2025', time: '10:00 AM – 5:00 PM', location: 'Learnify Lab, Islamabad',
    seats: 35, registered: 20, image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&q=80',
    tag: 'Beginner', tagColor: 'bg-accent-blue/20 text-accent-blue', featured: false,
  },
]

const categories = ['All', 'Workshop', 'Seminar', 'Hackathon']

const Events = () => {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? allEvents : allEvents.filter(e => e.category === filter)
  const featured = allEvents.filter(e => e.featured)

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #2196F3, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Learn Beyond Classrooms
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Events & <span className="gradient-text-green">Workshops</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Bootcamps, seminars, hackathons and workshops to supercharge your learning outside the curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-4 bg-dark-100">
        <div className="section-container py-12">
          <div className="section-label inline-flex mb-6"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Featured Events</div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((ev, i) => (
              <ScrollReveal key={ev.id} animation={i === 0 ? 'fadeLeft' : 'fadeRight'}>
                <motion.div whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                    <span className={`absolute top-4 left-4 badge ${ev.tagColor}`}><FiTag size={10} />{ev.tag}</span>
                    <span className="absolute top-4 right-4 badge bg-dark/70 text-white/70 border border-white/20 text-xs">{ev.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors">{ev.title}</h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">{ev.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-5 text-xs text-white/50">
                      <span className="flex items-center gap-1.5"><FiCalendar size={11} className="text-primary" />{ev.date}</span>
                      <span className="flex items-center gap-1.5"><FiClock size={11} className="text-accent-blue" />{ev.time}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={11} className="text-accent-yellow" />{ev.location}</span>
                      <span className="flex items-center gap-1.5"><FiUsers size={11} className="text-accent-red" />{ev.registered}/{ev.seats} seats</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden mr-4">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${(ev.registered/ev.seats)*100}%` }} />
                      </div>
                      <button className="btn-primary text-sm py-2 px-5">Register <FiArrowRight size={13} /></button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <SectionTitle label="All Events" title="Upcoming" highlight="Events" align="left" />
            <div className="flex gap-2 flex-shrink-0">
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    filter === cat ? 'bg-primary text-white' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                  }`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev, i) => (
              <ScrollReveal key={ev.id} animation="fadeUp" delay={i * 0.07}>
                <motion.div whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img src={ev.image} alt={ev.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <span className={`absolute top-3 left-3 badge ${ev.tagColor} text-xs`}>{ev.tag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-2">{ev.category}</span>
                    <h3 className="text-white font-bold mb-2 group-hover:text-primary transition-colors">{ev.title}</h3>
                    <p className="text-white/50 text-sm mb-4 flex-1 line-clamp-2">{ev.desc}</p>
                    <div className="space-y-1.5 text-xs text-white/40 mb-4">
                      <span className="flex items-center gap-1.5"><FiCalendar size={11} className="text-primary" />{ev.date}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={11} className="text-accent-yellow" />{ev.location}</span>
                    </div>
                    <button className="btn-outline w-full justify-center text-sm py-2">Register Now</button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Events
