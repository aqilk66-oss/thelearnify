import { motion } from 'framer-motion'
import SectionTitle from '../../components/ui/SectionTitle'
import ScrollReveal from '../../components/ui/ScrollReveal'

const partners = [
  { name: 'Systems Ltd', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.png/200px-Logo_TV_2015.png', color: '#0066CC' },
  { name: 'Netsol Technologies', logo: 'https://placehold.co/160x60/1a1a2e/4CAF50?text=NetSol', color: '#4CAF50' },
  { name: 'TRG Pakistan', logo: 'https://placehold.co/160x60/1a1a2e/F44336?text=TRG', color: '#F44336' },
  { name: 'Arbisoft', logo: 'https://placehold.co/160x60/1a1a2e/2196F3?text=Arbisoft', color: '#2196F3' },
  { name: 'Tkxel', logo: 'https://placehold.co/160x60/1a1a2e/FFC107?text=Tkxel', color: '#FFC107' },
  { name: 'Teradata', logo: 'https://placehold.co/160x60/1a1a2e/4CAF50?text=Teradata', color: '#4CAF50' },
  { name: 'PTC', logo: 'https://placehold.co/160x60/1a1a2e/2196F3?text=PTCL', color: '#2196F3' },
  { name: 'Telenor', logo: 'https://placehold.co/160x60/1a1a2e/FFC107?text=Telenor', color: '#FFC107' },
  { name: 'Jazz', logo: 'https://placehold.co/160x60/1a1a2e/F44336?text=Jazz', color: '#F44336' },
  { name: 'Amazon', logo: 'https://placehold.co/160x60/1a1a2e/FF9900?text=Amazon', color: '#FF9900' },
  { name: 'Microsoft', logo: 'https://placehold.co/160x60/1a1a2e/00A4EF?text=Microsoft', color: '#00A4EF' },
  { name: 'Google', logo: 'https://placehold.co/160x60/1a1a2e/4285F4?text=Google', color: '#4285F4' },
]

const PlacementPartners = () => {
  return (
    <section className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="section-container">
        <SectionTitle
          label="Placement Network"
          title="Our Industry"
          highlight="Partners"
          subtitle="100+ top companies actively hire from The Learnify, giving you direct access to the best opportunities."
        />

        {/* Partner Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <ScrollReveal key={i} animation="zoomIn" delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                className="glass-card p-4 rounded-xl border border-white/5 flex items-center justify-center 
                           group cursor-pointer hover:border-primary/30 transition-all duration-300"
                style={{ minHeight: '70px' }}
              >
                <span className="text-white/30 group-hover:text-white/80 font-bold text-sm text-center transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fadeUp" delay={0.3} className="text-center mt-14">
          <div className="glass-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <div className="text-4xl font-black text-primary mb-2">100+</div>
            <p className="text-white font-semibold text-lg mb-2">Companies Actively Hiring Our Graduates</p>
            <p className="text-white/50 text-sm">Our placement cell maintains active relationships with top employers to ensure fast job placements.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PlacementPartners
