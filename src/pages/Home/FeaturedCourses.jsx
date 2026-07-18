import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi'
import { courses } from '../../data/courses'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const FeaturedCourses = () => {
  const featured = courses.slice(0, 6)

  return (
    <section className="section-padding bg-mesh">
      <div className="section-container">
        <SectionTitle
          label="What We Offer"
          title="Featured"
          highlight="Courses"
          subtitle="Explore our most popular technology programs designed with industry experts to ensure job-ready skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <ScrollReveal key={course.id} animation="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="course-card group h-full flex flex-col"
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

                  {/* Badge */}
                  <div className={`absolute top-3 left-3 badge ${course.badgeColor} text-xs font-bold`}>
                    {course.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-xl">
                    {course.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-accent-yellow">
                      <FiStar size={12} className="fill-current" />
                      <span className="text-xs font-semibold text-white/70">{course.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  {/* Overview */}
                  <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                    {course.overview}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4 pb-4 border-b border-white/5">
                    <span className="flex items-center gap-1">
                      <FiClock size={12} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUsers size={12} /> {course.students.toLocaleString()} enrolled
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white/30">Course Fee</div>
                      <div className="text-primary font-bold text-sm">{course.fees}</div>
                    </div>
                    <Link
                      to={`/courses`}
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary 
                                 hover:gap-2.5 transition-all duration-200 group/btn"
                    >
                      Learn More
                      <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal animation="fadeUp" delay={0.4} className="text-center mt-12">
          <Link to="/courses" className="btn-outline inline-flex items-center gap-2">
            View All Courses
            <FiArrowRight />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturedCourses
