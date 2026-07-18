import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiBookOpen, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'
import AnimatedCounter from '../../components/ui/AnimatedCounter'

const timeline = [
  { year: '2018', title: 'The Learnify Founded', desc: 'Started with 3 courses and 50 students in a single classroom in Islamabad.' },
  { year: '2019', title: 'First 500 Graduates', desc: 'Celebrated our 500th graduate and launched our industry placement program.' },
  { year: '2020', title: 'Online Learning Launch', desc: 'Pivoted to online learning platform and expanded to serve students nationwide.' },
  { year: '2021', title: 'Expanded to 20+ Courses', desc: 'Added AI/ML, Cybersecurity and advanced programs. Opened Lahore campus.' },
  { year: '2022', title: '2000+ Students Milestone', desc: 'Surpassed 2000 enrolled students and partnered with 50+ hiring companies.' },
  { year: '2023', title: 'International Partnerships', desc: 'Signed MoUs with UK and UAE tech firms for global placement support.' },
  { year: '2024', title: 'Best IT Institute Award', desc: 'Recognized as Pakistan\'s Best IT Training Institute at National Tech Awards.' },
  { year: '2025', title: '5000+ Students Strong', desc: 'Now serving 5000+ students with 50+ courses and 100+ placement partners.' },
]

const coreValues = [
  { icon: <FiTarget />, title: 'Excellence', desc: 'We pursue the highest standards in teaching, content, and student outcomes.', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: <FiHeart />, title: 'Student First', desc: 'Every decision we make is guided by what is best for our students\' futures.', color: 'text-accent-red', bg: 'bg-accent-red/10', border: 'border-accent-red/20' },
  { icon: <FiUsers />, title: 'Community', desc: 'We foster an inclusive, supportive environment where every learner thrives.', color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20' },
  { icon: <FiTrendingUp />, title: 'Innovation', desc: 'We continuously evolve our curriculum to stay ahead of industry trends.', color: 'text-accent-yellow', bg: 'bg-accent-yellow/10', border: 'border-accent-yellow/20' },
  { icon: <FiAward />, title: 'Integrity', desc: 'We operate with full transparency and deliver on every promise we make.', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: <FiBookOpen />, title: 'Lifelong Learning', desc: 'We believe learning never stops — we support our alumni throughout their careers.', color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20' },
]

const achievements = [
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 50, suffix: '+', label: 'Courses Offered' },
  { value: 100, suffix: '+', label: 'Hiring Partners' },
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 7, suffix: '+', label: 'Years of Excellence' },
  { value: 30, suffix: '+', label: 'Expert Faculty' },
]

const About = () => {
  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #4CAF50, transparent)' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-8"
            style={{ background: 'radial-gradient(circle, #2196F3, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About The Learnify
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Shaping the Future of{' '}
              <span className="gradient-text-green">Tech Education</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Since 2018, The Learnify has been Pakistan's most trusted IT training institute,
              combining world-class curriculum with hands-on learning to produce industry-ready professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fadeLeft">
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="The Learnify Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 glass-card px-5 py-3 rounded-xl border border-primary/30">
                  <div className="text-primary font-black text-2xl">2018</div>
                  <div className="text-white text-sm">Year Founded</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight">
              <div className="section-label inline-flex mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Our Story
              </div>
              <h2 className="text-section font-bold text-white mb-6">
                From a Small Classroom to a{' '}
                <span className="gradient-text-green">National Movement</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  The Learnify was born from a simple belief: every talented Pakistani student deserves access to
                  world-class technology education. Founded in 2018 by a group of industry veterans, we started
                  with three courses and a passion for changing lives.
                </p>
                <p>
                  Today, we are proud to be Pakistan's leading IT training institute with over 5,000 graduates
                  working at top tech companies locally and globally. Our slogan —{' '}
                  <span className="text-primary font-semibold italic">"My Mission, Your Success"</span> —
                  isn't just words. It is our daily commitment to every student who walks through our doors.
                </p>
                <p>
                  We combine internationally benchmarked curriculum, hands-on project-based learning, and a
                  dedicated placement cell to ensure our students don't just learn — they thrive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <SectionTitle label="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FiTarget size={28} />,
                title: 'Our Mission',
                text: 'To empower students with cutting-edge IT skills through practical, industry-aligned education, fostering innovation and creating pathways to meaningful careers in technology. We are committed to making quality tech education accessible, affordable, and transformative for every learner.',
                color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30',
                gradient: 'from-primary/5 to-transparent',
              },
              {
                icon: <FiEye size={28} />,
                title: 'Our Vision',
                text: 'To become South Asia\'s most respected IT training institution by 2030 — recognized for producing world-class tech talent, advancing digital literacy, and being the first choice for students seeking career-transforming technology education in Pakistan and beyond.',
                color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30',
                gradient: 'from-accent-blue/5 to-transparent',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation={i === 0 ? 'fadeLeft' : 'fadeRight'}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass-card p-8 rounded-2xl border ${item.border} relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className={`relative w-14 h-14 ${item.bg} ${item.border} border rounded-2xl flex items-center justify-center ${item.color} mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className={`relative text-2xl font-bold ${item.color} mb-4`}>{item.title}</h3>
                  <p className="relative text-white/60 leading-relaxed">{item.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          <SectionTitle label="By the Numbers" title="Our" highlight="Achievements" subtitle="Numbers that tell the story of our impact on Pakistan's tech workforce." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((item, i) => (
              <ScrollReveal key={i} animation="zoomIn" delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-5 text-center border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-black text-primary mb-1">
                    <AnimatedCounter end={item.value} suffix={item.suffix} />
                  </div>
                  <div className="text-white/50 text-xs">{item.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <SectionTitle label="Our Journey" title="Growth" highlight="Timeline" subtitle="Seven years of relentless growth, milestones, and making a difference." />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.06}>
                <div className="timeline-item group">
                  <div className="timeline-dot group-hover:scale-125 transition-transform duration-300" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-lg border border-primary/30">
                        {item.year}
                      </span>
                    </div>
                    <motion.div whileHover={{ x: 4 }} className="glass-card p-4 rounded-xl border border-white/5 hover:border-primary/20 flex-1 transition-all duration-200">
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          <SectionTitle label="What Drives Us" title="Our Core" highlight="Values" subtitle="The principles that shape every course, every interaction, and every success story." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`glass-card p-7 rounded-2xl border ${value.border} group relative overflow-hidden cursor-pointer`}
                >
                  <div className={`absolute inset-0 ${value.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className={`relative w-12 h-12 ${value.bg} ${value.border} border rounded-xl flex items-center justify-center ${value.color} text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h4 className="relative text-white font-bold text-lg mb-2">{value.title}</h4>
                  <p className="relative text-white/50 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
