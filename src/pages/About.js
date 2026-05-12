import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#000510' }}>

      {/* Grid Background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none'
      }} />

      <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '10px' }}>▶ WHO WE ARE</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px' }}>
          ABOUT <span style={{ color: '#00ffff', textShadow: '0 0 20px #00ffff' }}>US</span>
        </h1>
        <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #00ffff, #ff00ff)', marginBottom: '60px' }} />

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1100px', alignItems: 'center' }}>

          {/* Left — Text */}
          <div>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem', marginBottom: '30px',
              boxShadow: '0 0 30px rgba(0,255,255,0.4)'
            }}>👩‍💻</div>

            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '5px' }}>Naureen Parveen</h2>
            <div style={{ color: '#00ffff', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '25px' }}>SEO EXPERT & DIGITAL STRATEGIST</div>

            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem' }}>
              Hi! I'm Naureen Parveen, a passionate SEO expert with over 10 years of experience helping businesses dominate search engines and grow their online presence.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '30px', fontSize: '0.95rem' }}>
              At SEO Offers, we believe every business deserves to be found online. Whether you're a small local business or a growing brand, we provide affordable, result-driven SEO solutions tailored to your needs.
            </p>

            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/contact" style={{
                padding: '12px 30px',
                background: 'linear-gradient(90deg, #00ffff, #00ff88)',
                border: 'none', borderRadius: '5px', color: '#000510',
                textDecoration: 'none', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '2px'
              }}>WORK WITH ME ⚡</Link>
              <Link to="/services" style={{
                padding: '12px 30px', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', color: 'white',
                textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '2px'
              }}>VIEW SERVICES →</Link>
            </div>
          </div>

          {/* Right — Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { number: '500+', label: 'Happy Clients', color: '#00ffff', icon: '😊' },
              { number: '98%', label: 'Success Rate', color: '#ff00ff', icon: '🎯' },
              { number: '10+', label: 'Years Experience', color: '#00ff88', icon: '⚡' },
              { number: '1000+', label: 'Keywords Ranked', color: '#ffaa00', icon: '🚀' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '35px 25px',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${stat.color}33`,
                borderRadius: '12px', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: stat.color, textShadow: `0 0 15px ${stat.color}` }}>{stat.number}</div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '1px', marginTop: '5px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginTop: '100px', maxWidth: '1100px' }}>
          <div style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '10px' }}>▶ WHY CHOOSE US</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '40px' }}>
            WE DELIVER <span style={{ color: '#00ffff' }}>REAL RESULTS</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '⚡', title: 'Fast Results', desc: 'See ranking improvements within 30-60 days with our proven strategies.' },
              { icon: '💰', title: 'Affordable Pricing', desc: 'Premium SEO services at prices that fit every budget.' },
              { icon: '📊', title: 'Transparent Reporting', desc: 'Monthly detailed reports so you always know what we\'re doing.' },
              { icon: '🎯', title: 'Targeted Approach', desc: 'We target keywords that bring real customers to your business.' },
              { icon: '🔒', title: 'White Hat SEO', desc: 'Only safe, Google-approved techniques that last long term.' },
              { icon: '🌍', title: 'Global & Local', desc: 'We help businesses rank locally and globally.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '30px 25px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', color: '#00ffff' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.83rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
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