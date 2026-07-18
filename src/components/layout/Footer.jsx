import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiArrowRight
} from 'react-icons/fi'

const footerLinks = {
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
  ],
  courses: [
    { name: 'Web Development', path: '/courses' },
    { name: 'Full Stack Dev', path: '/courses' },
    { name: 'Graphic Design', path: '/courses' },
    { name: 'Cyber Security', path: '/courses' },
    { name: 'AI & Machine Learning', path: '/courses' },
    { name: 'Digital Marketing', path: '/courses' },
  ],
  support: [
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Portal', path: '/portal' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/contact#faq' },
    { name: 'Scholarship', path: '/admissions#scholarship' },
  ],
}

const socialLinks = [
  { icon: <FiFacebook />, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: <FiInstagram />, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: <FiYoutube />, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-white/5">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/20 via-dark-200 to-accent-blue/20 border-b border-white/5">
        <div className="section-container py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Start Your IT Career?
              </h3>
              <p className="text-white/60">Join 5000+ students who transformed their future with The Learnify.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="btn-primary text-center">
                Enroll Now <FiArrowRight />
              </Link>
              <a
                href="#"
                download
                className="btn-ghost text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="The Learnify"
                className="h-14 w-auto object-contain"
                onError={(e) => { e.target.src = '/logo-fallback.svg' }}
              />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Premier IT Training Institute empowering students with cutting-edge technology skills.
              <span className="block mt-2 text-primary font-semibold italic">"My Mission, Your Success"</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: <FiMapPin size={14} />, text: '123 Tech Park, F-7, Islamabad, Pakistan' },
                { icon: <FiPhone size={14} />, text: '+92 300 1234567' },
                { icon: <FiMail size={14} />, text: 'info@thelearnify.pk' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  aria-label={social.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 
                             border border-white/10 text-white/50 ${social.color} 
                             transition-all duration-200`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-primary text-sm flex items-center gap-2 
                               transition-colors duration-200 group"
                  >
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-primary text-sm flex items-center gap-2 
                               transition-colors duration-200 group"
                  >
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Stay updated with courses, events & career opportunities.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field text-sm"
              />
              <button
                type="submit"
                className="btn-primary w-full justify-center text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/30 text-xs mt-3">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
            <p>© {currentYear} The Learnify. All rights reserved. Made with ❤️ in Pakistan.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
