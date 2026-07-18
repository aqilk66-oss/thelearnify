import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiClock, FiTag, FiArrowRight, FiSearch } from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const posts = [
  {
    id:1, featured:true, category:'Technology',
    title:'Top 10 Programming Languages to Learn in 2025',
    excerpt:'The tech landscape is evolving rapidly. Here are the languages that will keep you employable and ahead of the curve in 2025 and beyond.',
    author:'Ali Hassan', date:'July 15, 2025', readTime:'6 min read',
    image:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    tags:['Programming','Career'],
  },
  {
    id:2, featured:true, category:'Career',
    title:'How to Get Your First IT Job With No Experience',
    excerpt:'Breaking into tech without experience is challenging but absolutely possible. This guide walks you through the exact steps our graduates used to land their first roles.',
    author:'Sara Ahmed', date:'July 10, 2025', readTime:'8 min read',
    image:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    tags:['Career','Jobs'],
  },
  {
    id:3, featured:false, category:'AI & ML',
    title:'Understanding ChatGPT: How Large Language Models Actually Work',
    excerpt:'A beginner-friendly deep dive into the technology behind ChatGPT, GPT-4, and the AI revolution that\'s changing every industry.',
    author:'Dr. Ayesha Siddiqui', date:'July 5, 2025', readTime:'10 min read',
    image:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    tags:['AI','Machine Learning'],
  },
  {
    id:4, featured:false, category:'Cybersecurity',
    title:'5 Cybersecurity Threats Every Pakistani Business Needs to Know',
    excerpt:'Local businesses face unique challenges. We break down the most common attacks targeting Pakistani companies and how to defend against them.',
    author:'Dr. Kamran Raza', date:'June 28, 2025', readTime:'7 min read',
    image:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags:['Security','Business'],
  },
  {
    id:5, featured:false, category:'Web Dev',
    title:'React vs Vue vs Angular in 2025: Which Should You Learn?',
    excerpt:'The framework wars continue. We compare the big three JavaScript frameworks based on job market demand, learning curve, and performance.',
    author:'Ali Hassan', date:'June 20, 2025', readTime:'9 min read',
    image:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    tags:['React','JavaScript'],
  },
  {
    id:6, featured:false, category:'Institute',
    title:'The Learnify Wins Best IT Training Institute Award 2024',
    excerpt:'We are proud and humbled to share that The Learnify has been recognized as Pakistan\'s Best IT Training Institute at the National Tech Awards.',
    author:'Admin', date:'June 15, 2025', readTime:'3 min read',
    image:'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
    tags:['News','Award'],
  },
]

const cats = ['All', 'Technology', 'Career', 'AI & ML', 'Cybersecurity', 'Web Dev', 'Institute']
const tagColor = cat => ({
  Technology: 'bg-primary/20 text-primary', Career: 'bg-accent-blue/20 text-accent-blue',
  'AI & ML': 'bg-accent-yellow/20 text-accent-yellow', Cybersecurity: 'bg-accent-red/20 text-accent-red',
  'Web Dev': 'bg-primary/20 text-primary', Institute: 'bg-accent-blue/20 text-accent-blue',
}[cat] || 'bg-white/10 text-white/60')

const Blog = () => {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = filter === 'All' || p.category === filter
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })
  const featured = posts.filter(p => p.featured)
  const rest = filtered.filter(p => !p.featured || filter !== 'All' || search)

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Insights & Updates
            </div>
            <h1 className="text-display font-black text-white mb-4">
              The Learnify <span className="gradient-text-green">Blog</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Tech tutorials, career advice, industry insights, and institute news.
            </p>
            <div className="relative max-w-md mx-auto">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search articles..." className="input-field pl-11 py-3.5 text-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {!search && filter === 'All' && (
        <section className="bg-dark-100 pb-0">
          <div className="section-container py-12">
            <div className="section-label inline-flex mb-6"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Featured Articles</div>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <ScrollReveal key={post.id} animation={i===0?'fadeLeft':'fadeRight'}>
                  <motion.article whileHover={{ y:-5 }}
                    className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                      <span className={`absolute top-4 left-4 badge ${tagColor(post.category)} text-xs`}>{post.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-white/40">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><FiUser size={10} />{post.author}</span>
                          <span className="flex items-center gap-1"><FiCalendar size={10} />{post.date}</span>
                          <span className="flex items-center gap-1"><FiClock size={10} />{post.readTime}</span>
                        </div>
                        <span className="text-primary flex items-center gap-1 font-semibold">Read <FiArrowRight size={11} /></span>
                      </div>
                    </div>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter===cat ? 'bg-primary text-white' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                }`}>{cat}</button>
            ))}
          </div>

          {(search || filter !== 'All' ? filtered : rest).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(search || filter !== 'All' ? filtered : rest).map((post, i) => (
                <ScrollReveal key={post.id} animation="fadeUp" delay={i*0.07}>
                  <motion.article whileHover={{ y:-5 }}
                    className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                      <span className={`absolute top-3 left-3 badge ${tagColor(post.category)} text-xs`}>{post.category}</span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-white font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-white/40 mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><FiUser size={10} />{post.author}</span>
                          <span className="flex items-center gap-1"><FiClock size={10} />{post.readTime}</span>
                        </div>
                        <span className="text-primary flex items-center gap-1 font-semibold">Read <FiArrowRight size={11} /></span>
                      </div>
                    </div>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-white font-bold text-xl mb-2">No articles found</h3>
              <p className="text-white/40">Try a different search or category.</p>
              <button onClick={() => { setSearch(''); setFilter('All') }} className="btn-outline mt-6">Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Blog
