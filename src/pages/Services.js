import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'SEO PACKAGE',
    price: '$119',
    originalPrice: '$150',
    color: '#00ffff',
    popular: true,
    features: [
      'Complete SEO Optimization',
      'On-Page & Off-Page SEO',
      'Monthly Progress Report',
      'Google Analytics Setup',
      'Technical SEO Fix',
      '24/7 Support'
    ]
  },
  {
    name: 'LOCAL SEO (GMB)',
    price: '$24',
    originalPrice: '$35',
    color: '#ff00ff',
    popular: false,
    features: [
      'Google My Business Setup',
      'Local Citations Building',
      'GMB Optimization',
      'Local Keyword Targeting',
      'Map Pack Ranking',
      'Monthly Report'
    ]
  },
  {
    name: 'BACKLINKS',
    price: '$8',
    originalPrice: '$15',
    color: '#00ff88',
    popular: false,
    features: [
      '60 Quality Backlinks/Month',
      'High DA/PA Sites',
      'Dofollow Links',
      'Niche Relevant Links',
      'Detailed Report',
      'Safe & White Hat'
    ]
  },
  {
    name: 'KEYWORD RESEARCH',
    price: '$6',
    originalPrice: '$10',
    color: '#ffaa00',
    popular: false,
    features: [
      '45 Keywords Per Project',
      'Competition Analysis',
      'Search Volume Data',
      'Long Tail Keywords',
      'Excel Report',
      'Profitable Keywords'
    ]
  },
  {
    name: 'WEBSITE CREATION',
    price: '$84',
    originalPrice: '$120',
    color: '#ff6688',
    popular: false,
    features: [
      'Professional Website',
      'Mobile Responsive',
      'SEO Friendly',
      'Fast Loading Speed',
      'Contact Form',
      '1 Month Free Support'
    ]
  }
]

export default function Services() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#000510' }}>

      <style>{`
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(0,255,255,0.3)} 50%{box-shadow:0 0 40px rgba(0,255,255,0.6)} }
      `}</style>

      {/* Grid Background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none'
      }} />

      <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>
        <div style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '10px' }}>▶ OUR PACKAGES</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px' }}>
          SERVICES & <span style={{ color: '#00ffff', textShadow: '0 0 20px #00ffff' }}>PRICING</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '60px', fontFamily: 'monospace' }}>
          &gt; Affordable SEO packages for every business_
        </p>

        {/* Packages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1100px' }}>
          {packages.map((pkg, i) => (
            <div key={i} style={{
              padding: '40px 30px',
              background: pkg.popular ? `rgba(0,255,255,0.05)` : 'rgba(255,255,255,0.02)',
              border: `1px solid ${pkg.popular ? pkg.color : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '12px', position: 'relative',
              animation: pkg.popular ? 'glow 3s ease-in-out infinite' : 'none'
            }}>
              {pkg.popular && (
                <div style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #00ffff, #00ff88)',
                  padding: '4px 20px', borderRadius: '20px', fontSize: '0.7rem',
                  fontWeight: 900, color: '#000510', letterSpacing: '2px'
                }}>⚡ MOST POPULAR</div>
              )}
              <div style={{ color: pkg.color, fontSize: '0.75rem', letterSpacing: '3px', marginBottom: '10px' }}>{pkg.name}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '5px', color: pkg.color, textShadow: `0 0 20px ${pkg.color}` }}>{pkg.price}</div>
              <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem', textDecoration: 'line-through', marginBottom: '25px' }}>{pkg.originalPrice}</div>
              <div style={{ width: '40px', height: '2px', background: pkg.color, marginBottom: '25px' }} />
              {pkg.features.map((feature, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ color: pkg.color, fontSize: '0.8rem' }}>▶</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{feature}</span>
                </div>
              ))}
              <Link to="/contact" style={{
                display: 'block', marginTop: '30px', padding: '12px',
                background: pkg.popular ? `linear-gradient(90deg, #00ffff, #00ff88)` : 'transparent',
                border: `1px solid ${pkg.color}`, borderRadius: '5px',
                color: pkg.popular ? '#000510' : pkg.color,
                textDecoration: 'none', textAlign: 'center',
                fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px'
              }}>GET STARTED ⚡</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '30px 60px', marginTop: '60px', borderTop: '1px solid rgba(0,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>© 2025 SEO OFFERS — seooffers.info</span>
        <span style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '2px' }}>ALL SYSTEMS OPERATIONAL</span>
      </footer>

    </div>
  )
}