import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const images = [
  { id:1,  src:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',  cat:'Campus',    title:'Main Campus',        h:'h-64' },
  { id:2,  src:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',  cat:'Labs',      title:'Computer Lab',       h:'h-40' },
  { id:3,  src:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',  cat:'Students',  title:'Students in Class',  h:'h-52' },
  { id:4,  src:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',  cat:'Events',    title:'Hackathon 2024',     h:'h-44' },
  { id:5,  src:'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',  cat:'Labs',      title:'Dev Workstation',    h:'h-60' },
  { id:6,  src:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',  cat:'Workshop',  title:'Team Workshop',      h:'h-36' },
  { id:7,  src:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',  cat:'Labs',      title:'Coding Session',     h:'h-48' },
  { id:8,  src:'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',  cat:'Students',  title:'Study Group',        h:'h-56' },
  { id:9,  src:'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',     cat:'Events',    title:'Award Ceremony',     h:'h-40' },
  { id:10, src:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',  cat:'Faculty',   title:'Faculty Meet',       h:'h-52' },
  { id:11, src:'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',     cat:'Events',    title:'Seminar Night',      h:'h-44' },
  { id:12, src:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',  cat:'Campus',    title:'Lecture Hall',       h:'h-36' },
]
const cats = ['All', 'Campus', 'Labs', 'Students', 'Events', 'Workshop', 'Faculty']

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? images : images.filter(i => i.cat === filter)

  const navigate = dir => {
    const idx = filtered.findIndex(i => i.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Life at Learnify
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Our <span className="gradient-text-green">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              A glimpse of campus life, labs, events, and the vibrant learning community at The Learnify.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === cat ? 'bg-primary text-white shadow-glow-green' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                }`}>{cat}</button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.id} animation="zoomIn" delay={i * 0.04} className="break-inside-avoid mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(img)}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.h}`}
                >
                  <img src={img.src} alt={img.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">{img.title}</p>
                      <p className="text-white/60 text-xs">{img.cat}</p>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <FiMaximize2 size={14} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white hover:text-accent-red border border-white/20">
              <FiX size={18} />
            </button>
            <button onClick={e => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white hover:text-primary border border-white/20">
              <FiChevronLeft size={20} />
            </button>
            <motion.div
              initial={{ scale:0.85 }} animate={{ scale:1 }} exit={{ scale:0.85 }}
              transition={{ type:'spring', damping:25 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="text-center mt-3">
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-white/50 text-sm">{lightbox.cat}</p>
              </div>
            </motion.div>
            <button onClick={e => { e.stopPropagation(); navigate(1) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white hover:text-primary border border-white/20">
              <FiChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Gallery
