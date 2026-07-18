import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiUser, FiMail, FiPhone, FiBookOpen, FiMessageSquare,
  FiCheckCircle, FiDollarSign, FiAward, FiAlertCircle
} from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const steps = [
  { num: '01', title: 'Choose Your Course', desc: 'Browse our catalog and pick the program that aligns with your career goals.' },
  { num: '02', title: 'Fill Application Form', desc: 'Complete the online form below with your basic details and course selection.' },
  { num: '03', title: 'Eligibility Interview', desc: 'A short 15-minute call with our team to assess your background and readiness.' },
  { num: '04', title: 'Fee Payment', desc: 'Secure your seat with the admission fee. Easy installment plans available.' },
  { num: '05', title: 'Orientation & Start', desc: 'Attend orientation, get your study materials, and begin your journey!' },
]

const fees = [
  { course: 'Web Development',      duration: '6 Months',  fee: 'PKR 25,000', installment: 'PKR 5,000/month',  badge: 'Most Popular', color: 'border-primary/30 bg-primary/5' },
  { course: 'Full Stack Dev',       duration: '12 Months', fee: 'PKR 45,000', installment: 'PKR 4,500/month',  badge: 'In Demand',    color: 'border-accent-blue/30 bg-accent-blue/5' },
  { course: 'Graphic Design',       duration: '4 Months',  fee: 'PKR 18,000', installment: 'PKR 5,000/month',  badge: 'Creative',     color: 'border-accent-yellow/30 bg-accent-yellow/5' },
  { course: 'Digital Marketing',    duration: '3 Months',  fee: 'PKR 15,000', installment: 'PKR 5,500/month',  badge: 'High ROI',     color: 'border-primary/30 bg-primary/5' },
  { course: 'Cyber Security',       duration: '8 Months',  fee: 'PKR 35,000', installment: 'PKR 5,000/month',  badge: 'High Demand',  color: 'border-accent-red/30 bg-accent-red/5' },
  { course: 'AI & Machine Learning',duration: '10 Months', fee: 'PKR 50,000', installment: 'PKR 5,500/month',  badge: 'Future Tech',  color: 'border-accent-blue/30 bg-accent-blue/5' },
]

const scholarships = [
  { title: 'Merit Scholarship',    desc: 'Top 10% of applicants receive a 25% fee waiver based on entrance test scores.', icon: '🏆', color: 'text-accent-yellow' },
  { title: 'Need-Based Grant',     desc: 'Students demonstrating financial need can apply for up to 40% fee reduction.', icon: '💚', color: 'text-primary' },
  { title: 'Women in Tech',        desc: 'Female applicants receive a 20% discount on all technology courses.', icon: '👩‍💻', color: 'text-accent-blue' },
  { title: 'Referral Discount',    desc: 'Refer a friend and both of you get 10% off your course fees.', icon: '🤝', color: 'text-accent-red' },
]

const courseOptions = ['Web Development','Full Stack Development','Graphic Design','Digital Marketing','Cyber Security','AI & Machine Learning']

const Admissions = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', course:'', message:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim() || !/^[0-9+\s-]{10,}$/.test(form.phone)) e.phone = 'Valid phone required'
    if (!form.course)          e.course  = 'Please select a course'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const change = field => ev => {
    setForm(p => ({ ...p, [field]: ev.target.value }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }))
  }

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #4CAF50, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Join The Learnify
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Start Your <span className="gradient-text-green">Journey Today</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Simple 5-step admissions process. No entrance exam for most courses. Limited seats per batch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="section-padding bg-dark-100">
        <div className="section-container">
          <SectionTitle label="How to Apply" title="Admission" highlight="Process" subtitle="Getting started is simple. Follow these five easy steps." />
          <div className="flex flex-col md:flex-row gap-0 md:gap-2 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1} className="flex-1">
                <div className="relative flex flex-col items-center text-center p-6 group">
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-primary/10 z-0" />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 bg-primary/20 border-2 border-primary/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:border-primary transition-all duration-300"
                  >
                    <span className="text-primary font-black text-lg">{step.num}</span>
                  </motion.div>
                  <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-mesh" id="fees">
        <div className="section-container">
          <SectionTitle label="Pricing" title="Fee" highlight="Structure" subtitle="Transparent pricing with flexible installment plans. No hidden charges." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fees.map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`glass-card p-6 rounded-2xl border ${item.color} relative overflow-hidden`}
                >
                  <span className="absolute top-4 right-4 badge bg-primary/20 text-primary text-xs">{item.badge}</span>
                  <h3 className="text-white font-bold text-lg mb-1 pr-20">{item.course}</h3>
                  <p className="text-white/40 text-sm mb-4">{item.duration}</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-black text-primary">{item.fee}</span>
                  </div>
                  <p className="text-white/50 text-sm flex items-center gap-1">
                    <FiDollarSign size={12} className="text-accent-yellow" /> Or {item.installment}
                  </p>
                  <a href="#apply" className="btn-primary w-full justify-center mt-5 text-sm">
                    Apply Now
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-dark-100" id="scholarship">
        <div className="section-container">
          <SectionTitle label="Financial Aid" title="Scholarship" highlight="Programs" subtitle="We believe talent should never be limited by finances. Apply for our scholarship programs." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((s, i) => (
              <ScrollReveal key={i} animation="zoomIn" delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 text-center transition-all duration-300">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h4 className={`font-bold text-base mb-2 ${s.color}`}>{s.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-mesh" id="apply">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <SectionTitle label="Apply Now" title="Online" highlight="Application" subtitle="Fill in your details and we'll get back to you within 24 hours." />

            {submitted ? (
              <ScrollReveal animation="zoomIn">
                <div className="glass-card p-12 rounded-3xl border border-primary/30 text-center">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} className="text-6xl mb-4">✅</motion.div>
                  <h3 className="text-white font-bold text-2xl mb-3">Application Submitted!</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Thank you, <span className="text-primary font-semibold">{form.name}</span>! 
                    We've received your application for <span className="text-primary font-semibold">{form.course}</span>. 
                    Our admissions team will contact you on <span className="text-primary font-semibold">{form.phone}</span> within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', course:'', message:'' }) }}
                    className="btn-outline">Submit Another Application</button>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal animation="fadeUp">
                <form onSubmit={handleSubmit} noValidate className="glass-card p-8 rounded-3xl border border-white/10 space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Full Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                      <input type="text" value={form.name} onChange={change('name')} placeholder="Muhammad Ali"
                        className={`input-field pl-9 ${errors.name ? 'border-accent-red/50' : ''}`} />
                    </div>
                    {errors.name && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} />{errors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Email *</label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                        <input type="email" value={form.email} onChange={change('email')} placeholder="you@email.com"
                          className={`input-field pl-9 ${errors.email ? 'border-accent-red/50' : ''}`} />
                      </div>
                      {errors.email && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} />{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Phone *</label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                        <input type="tel" value={form.phone} onChange={change('phone')} placeholder="+92 300 0000000"
                          className={`input-field pl-9 ${errors.phone ? 'border-accent-red/50' : ''}`} />
                      </div>
                      {errors.phone && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} />{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Course */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Course *</label>
                    <div className="relative">
                      <FiBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                      <select value={form.course} onChange={change('course')}
                        className={`input-field pl-9 appearance-none ${errors.course ? 'border-accent-red/50' : ''}`}>
                        <option value="">Select a course...</option>
                        {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    {errors.course && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} />{errors.course}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Message (Optional)</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3.5 text-white/30" size={15} />
                      <textarea value={form.message} onChange={change('message')} rows={4} placeholder="Any questions or special requirements..."
                        className="input-field pl-9 resize-none" />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FiCheckCircle size={16} /> Submit Application
                      </span>
                    )}
                  </motion.button>
                  <p className="text-white/30 text-xs text-center">
                    By submitting, you agree to our privacy policy. We'll never share your data.
                  </p>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admissions
