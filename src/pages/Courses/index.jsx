import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiClock, FiUsers, FiStar, FiBook, FiChevronDown, FiX, FiArrowRight } from 'react-icons/fi'
import { courses, categories } from '../../data/courses'
import ScrollReveal from '../../components/ui/ScrollReveal'

const CourseModal = ({ course, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = ['overview', 'curriculum', 'outcomes', 'instructor']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="glass-card rounded-3xl border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 glass-card rounded-xl flex items-center justify-center text-white hover:text-accent-red transition-colors border border-white/20"
          >
            <FiX />
          </button>
          <div className="absolute bottom-4 left-6">
            <div className={`badge ${course.badgeColor} mb-2`}>{course.badge}</div>
            <h2 className="text-white text-2xl font-bold">{course.title}</h2>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="flex flex-wrap gap-4 px-6 py-4 border-b border-white/5">
          {[
            { label: 'Duration', value: course.duration, icon: <FiClock /> },
            { label: 'Fee', value: course.fees, icon: <FiBook /> },
            { label: 'Students', value: `${course.students.toLocaleString()}+`, icon: <FiUsers /> },
            { label: 'Rating', value: `${course.rating}/5`, icon: <FiStar /> },
          ].map((meta) => (
            <div key={meta.label} className="flex items-center gap-2 text-sm">
              <span className="text-primary">{meta.icon}</span>
              <span className="text-white/40">{meta.label}:</span>
              <span className="text-white font-semibold">{meta.value}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-6 pt-5 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-8 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">{course.overview}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Prerequisites</h4>
                    <ul className="space-y-1">
                      {course.prerequisites.map((pre) => (
                        <li key={pre} className="flex items-center gap-2 text-white/60 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {pre}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-primary/20 mt-4">
                    <div className="text-white/50 text-sm">Instructor</div>
                    <div className="text-white font-semibold">{course.instructor}</div>
                  </div>
                </div>
              )}
              {activeTab === 'curriculum' && (
                <div className="space-y-2">
                  {course.curriculum.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 glass-card p-3 rounded-xl border border-white/5">
                      <div className="w-7 h-7 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'outcomes' && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 glass-card p-3 rounded-xl border border-white/5">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'instructor' && (
                <div className="glass-card p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">👨‍🏫</div>
                  <div className="text-white font-bold text-lg">{course.instructor}</div>
                  <div className="text-primary text-sm mt-1">Lead Instructor — {course.title}</div>
                  <p className="text-white/50 text-sm mt-3">Expert trainer with 8+ years of industry experience and a proven track record of student success.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/admissions" className="btn-primary flex-1 justify-center">
              Enroll Now <FiArrowRight />
            </a>
            <button onClick={onClose} className="btn-ghost flex-1 justify-center">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Courses = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let result = courses.filter((c) => {
      const matchesCategory = activeCategory === 'All' || c.category === activeCategory
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.overview.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    if (sortBy === 'students') result = [...result].sort((a, b) => b.students - a.students)
    if (sortBy === 'duration') result = [...result].sort((a, b) => a.duration.localeCompare(b.duration))
    return result
  }, [search, activeCategory, sortBy])

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #4CAF50, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Explore Learning
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Find Your Perfect{' '}
              <span className="gradient-text-green">IT Course</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Industry-aligned programs designed by experts to give you the skills employers actually want.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-dark/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="input-field pl-9 text-sm py-2.5"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                  <FiX size={14} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-glow-green'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field text-sm py-2.5 pr-8 appearance-none min-w-[140px] cursor-pointer"
              >
                <option value="default">Sort: Default</option>
                <option value="rating">Highest Rated</option>
                <option value="students">Most Popular</option>
                <option value="duration">Duration</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="section-container">
          {/* Result Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/40 text-sm">
              Showing <span className="text-white font-semibold">{filtered.length}</span> of{' '}
              <span className="text-white font-semibold">{courses.length}</span> courses
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}-${sortBy}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="course-card group h-full flex flex-col cursor-pointer"
                    onClick={() => setSelectedCourse(course)}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-44">
                      <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className={`absolute top-3 left-3 badge ${course.badgeColor}`}>{course.badge}</div>
                      <div className="absolute bottom-3 right-3 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-xl">
                        {course.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/40 uppercase tracking-wider">{course.category}</span>
                        <div className="flex items-center gap-1 text-accent-yellow">
                          <FiStar size={11} className="fill-current" />
                          <span className="text-xs font-semibold text-white/70">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {course.overview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/40 mb-4 pb-4 border-b border-white/5">
                        <span className="flex items-center gap-1"><FiClock size={11} /> {course.duration}</span>
                        <span className="flex items-center gap-1"><FiUsers size={11} /> {course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-white/30">Course Fee</div>
                          <div className="text-primary font-bold text-sm">{course.fees}</div>
                        </div>
                        <button className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200">
                          Details <FiArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-white font-bold text-xl mb-2">No courses found</h3>
                <p className="text-white/40">Try adjusting your search or category filter.</p>
                <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="btn-outline mt-6">
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}

export default Courses
