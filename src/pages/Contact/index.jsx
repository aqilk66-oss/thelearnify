import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiUser, FiMail, FiPhone, FiMessageSquare,
  FiMapPin, FiClock, FiCheckCircle, FiAlertCircle,
  FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube
} from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const contactInfo = [
  { icon: <FiMapPin size={20}/>, label:'Address', value:'123 Tech Park, F-7 Markaz, Islamabad, Pakistan', color:'text-primary', bg:'bg-primary/10', border:'border-primary/20' },
  { icon: <FiPhone size={20}/>,  label:'Phone',   value:'+92 300 1234567 | +92 51 1234567',               color:'text-accent-blue', bg:'bg-accent-blue/10', border:'border-accent-blue/20' },
  { icon: <FiMail size={20}/>,   label:'Email',   value:'info@thelearnify.pk | admissions@thelearnify.pk', color:'text-accent-yellow', bg:'bg-accent-yellow/10', border:'border-accent-yellow/20' },
  { icon: <FiClock size={20}/>,  label:'Hours',   value:'Mon–Sat: 9:00 AM – 8:00 PM | Sun: Closed',       color:'text-accent-red',  bg:'bg-accent-red/10',  border:'border-accent-red/20' },
]

const socials = [
  { icon: <FiFacebook />,  href:'#', label:'Facebook',  color:'hover:bg-blue-600' },
  { icon: <FiInstagram />, href:'#', label:'Instagram', color:'hover:bg-pink-600' },
  { icon: <FiLinkedin />,  href:'#', label:'LinkedIn',  color:'hover:bg-blue-500' },
  { icon: <FiTwitter />,   href:'#', label:'Twitter',   color:'hover:bg-sky-500' },
  { icon: <FiYoutube />,   href:'#', label:'YouTube',   color:'hover:bg-red-600' },
]

const faqs = [
  { q:'What are the batch timings?',           a:'We offer Morning (9 AM), Evening (5 PM), and Weekend batches to suit every schedule.' },
  { q:'Is there an entrance test?',             a:'Most courses have no entrance test. Some advanced programs may require a brief skill assessment.' },
  { q:'Do you offer online classes?',           a:'Yes! All courses are available both in-person and online via our learning platform.' },
  { q:'Are installment plans available?',       a:'Yes, flexible monthly installment plans are available for all courses. Discuss with our admissions team.' },
  { q:'What is your refund policy?',            a:'Full refund within 7 days of joining if unsatisfied. No questions asked.' },
  { q:'Do you provide job placement support?', a:'Yes, our placement cell actively connects graduates with 100+ hiring partner companies.' },
]

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }
  const handleSubmit = e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }
  const change = f => ev => { setForm(p => ({...p,[f]:ev.target.value})); setErrors(p => ({...p,[f]:''})) }

  return (
    <main className="bg-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full opacity-10" style={{ background:'radial-gradient(circle, #4CAF50, transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="section-label inline-flex mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Get In Touch
            </div>
            <h1 className="text-display font-black text-white mb-4">
              Contact <span className="gradient-text-green">Us</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-dark-100 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i*0.1}>
                <motion.div whileHover={{ y:-4 }}
                  className={`glass-card p-5 rounded-2xl border ${info.border} text-center group hover:${info.bg} transition-all duration-300`}>
                  <div className={`w-12 h-12 ${info.bg} ${info.border} border rounded-xl flex items-center justify-center ${info.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <p className="text-white/40 text-xs mb-1">{info.label}</p>
                  <p className="text-white text-sm font-medium leading-relaxed">{info.value}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-mesh">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <ScrollReveal animation="fadeLeft">
              <div className="section-label inline-flex mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Send a Message
              </div>
              <h2 className="text-section font-bold text-white mb-6">
                We'd Love to <span className="gradient-text-green">Hear From You</span>
              </h2>

              {submitted ? (
                <div className="glass-card p-10 rounded-3xl border border-primary/30 text-center">
                  <motion.div animate={{ scale:[1,1.2,1] }} transition={{ duration:0.5 }} className="text-5xl mb-4">✅</motion.div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Thanks <span className="text-primary font-semibold">{form.name}</span>! We'll reply to <span className="text-primary font-semibold">{form.email}</span> within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',message:'' }) }}
                    className="btn-outline mt-6">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="glass-card p-8 rounded-3xl border border-white/10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Full Name *</label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                        <input type="text" value={form.name} onChange={change('name')} placeholder="Your name"
                          className={`input-field pl-9 ${errors.name?'border-accent-red/50':''}`} />
                      </div>
                      {errors.name && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11}/>{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Phone</label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                        <input type="tel" value={form.phone} onChange={change('phone')} placeholder="+92 300 0000000"
                          className="input-field pl-9" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Email *</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                      <input type="email" value={form.email} onChange={change('email')} placeholder="you@email.com"
                        className={`input-field pl-9 ${errors.email?'border-accent-red/50':''}`} />
                    </div>
                    {errors.email && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11}/>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Message *</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3.5 text-white/30" size={14} />
                      <textarea value={form.message} onChange={change('message')} rows={5} placeholder="How can we help you?"
                        className={`input-field pl-9 resize-none ${errors.message?'border-accent-red/50':''}`} />
                    </div>
                    {errors.message && <p className="text-accent-red text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11}/>{errors.message}</p>}
                  </div>
                  <motion.button type="submit" disabled={loading} whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-60">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>Sending...
                      </span>
                    ) : <span className="flex items-center gap-2"><FiCheckCircle size={16}/>Send Message</span>}
                  </motion.button>
                </form>
              )}

              {/* Socials */}
              <div className="flex items-center gap-3 mt-6">
                {socials.map(s => (
                  <motion.a key={s.label} href={s.href} whileHover={{ scale:1.15, y:-2 }} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/50 hover:text-white border border-white/10 ${s.color} transition-all duration-200`}>
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal animation="fadeRight">
              <div className="space-y-6">
                <div className="glass-card rounded-2xl overflow-hidden border border-white/10 h-72">
                  <iframe
                    title="The Learnify Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8437736736!2d73.05980931521116!3d33.71720748070448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef1b2c32d47%3A0xa04e63c90052b2f3!2sF-7%20Markaz%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2spk!4v1625000000000!5m2!1sen!2spk"
                    width="100%" height="100%" style={{ border:0, filter:'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold mb-4">Campus Location</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">
                    123 Tech Park, F-7 Markaz, Islamabad. Easily accessible via Metro Bus and located near major landmarks.
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-100" id="faq">
        <div className="section-container">
          <SectionTitle label="FAQ" title="Frequently Asked" highlight="Questions" subtitle="Everything you need to know before enrolling." />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i*0.06}>
                <motion.div className="glass-card rounded-xl border border-white/5 hover:border-primary/20 overflow-hidden transition-all duration-300">
                  <button onClick={() => setOpenFaq(openFaq===i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left">
                    <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq===i ? 45 : 0 }} transition={{ duration:0.2 }}
                      className="text-primary text-2xl leading-none flex-shrink-0">+</motion.span>
                  </button>
                  <motion.div
                    initial={false} animate={{ height: openFaq===i ? 'auto' : 0, opacity: openFaq===i ? 1 : 0 }}
                    transition={{ duration:0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
