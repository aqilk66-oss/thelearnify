import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const announcements = [
  {
    id: 1,
    title: 'New AI & Machine Learning Batch Starting August 2025',
    excerpt: 'Enroll in our flagship AI/ML course with Dr. Ayesha Siddiqui. Limited seats available. Early bird discount of 20% for first 20 applicants.',
    category: 'Admissions',
    date: 'July 15, 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    tag: 'New Batch',
    tagColor: 'bg-primary/20 text-primary',
  },
  {
    id: 2,
    title: 'The Learnify Awarded "Best IT Training Institute 2024"',
    excerpt: 'We are proud to announce that The Learnify has been recognized as the Best IT Training Institute at the Pakistan Tech Awards 2024.',
    category: 'Achievement',
    date: 'July 10, 2025',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80',
    tag: 'Achievement',
    tagColor: 'bg-accent-yellow/20 text-accent-yellow',
  },
  {
    id: 3,
    title: 'Free Cybersecurity Workshop This Weekend',
    excerpt: 'Join us for a hands-on ethical hacking workshop — completely free for all students and IT professionals. Register now to secure your spot.',
    category: 'Events',
    date: 'July 5, 2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    tag: 'Free Event',
    tagColor: 'bg-accent-blue/20 text-accent-blue',
  },
]

const Announcements = () => {
  return (
    <section className="section-padding bg-mesh">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="section-label inline-flex mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Latest News
            </div>
            <h2 className="text-section font-bold text-white">
              Announcements &{' '}
              <span className="gradient-text-green">Updates</span>
            </h2>
          </div>
          <Link to="/blog" className="btn-outline inline-flex items-center gap-2 flex-shrink-0">
            View All News <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((item, i) => (
            <ScrollReveal key={item.id} animation="fadeUp" delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group cursor-pointer h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  <div className={`absolute top-3 left-3 badge ${item.tagColor} text-xs`}>
                    <FiTag size={10} /> {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`badge text-xs ${item.tagColor}`}>{item.category}</span>
                    <span className="text-white/30 text-xs flex items-center gap-1">
                      <FiCalendar size={10} /> {item.date}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <Link
                    to="/blog"
                    className="text-primary font-semibold text-sm flex items-center gap-1.5 group/link mt-auto"
                  >
                    Read More
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Announcements
