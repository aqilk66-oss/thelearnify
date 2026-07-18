import { motion } from 'framer-motion'
import { FiLinkedin, FiStar, FiBriefcase, FiBook, FiAward } from 'react-icons/fi'
import { faculty } from '../../data/faculty'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const Faculty = () => {
  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #2196F3, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Expert Educators
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Meet Our{' '}
              <span className="gradient-text-green">World-Class Faculty</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Industry veterans and academic experts who bring real-world experience to every classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          <SectionTitle
            label="Our Instructors"
            title="The People Behind"
            highlight="Your Success"
            subtitle="Each of our instructors brings deep industry experience and a passion for teaching that makes the difference."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, i) => (
              <ScrollReveal key={member.id} animation="fadeUp" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Card Top - Photo */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-xl border border-accent-yellow/30">
                      <FiStar className="text-accent-yellow fill-current" size={13} />
                      <span className="text-white font-bold text-sm">{member.rating}</span>
                    </div>

                    {/* LinkedIn */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 left-4 w-9 h-9 glass-card rounded-xl flex items-center justify-center 
                                 text-white hover:text-blue-400 border border-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiLinkedin size={16} />
                    </motion.a>

                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
                      <p className="text-primary text-sm font-medium">{member.role}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <FiAward className="text-primary" size={12} />
                        {member.qualification}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <FiBriefcase className="text-accent-blue" size={12} />
                        {member.experience}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{member.bio}</p>

                    {/* Courses */}
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
                        <FiBook size={11} /> Teaches:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.courses.map((course) => (
                          <span key={course} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20 font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="text-xs text-white/40 mb-2">Skills:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.slice(0, 4).map((skill) => (
                          <span key={skill} className="px-2.5 py-1 bg-white/5 text-white/60 text-xs rounded-lg border border-white/10">
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 4 && (
                          <span className="px-2.5 py-1 bg-white/5 text-white/40 text-xs rounded-lg border border-white/5">
                            +{member.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Faculty CTA */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <ScrollReveal animation="zoomIn">
            <div className="glass-card p-12 rounded-3xl border border-primary/20 text-center max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5" />
              <div className="relative">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Are You an Industry Expert?
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Join The Learnify's growing faculty team. We're always looking for experienced professionals 
                  who are passionate about teaching and mentoring the next generation of tech talent.
                </p>
                <a href="mailto:faculty@thelearnify.pk" className="btn-primary inline-flex">
                  Apply to Teach
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

export default Faculty
