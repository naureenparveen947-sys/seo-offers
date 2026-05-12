import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#000510' }}>

      {/* Grid Background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none'
      }} />

      <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>

        <div style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '10px' }}>▶ GET IN TOUCH</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px' }}>
          CONTACT <span style={{ color: '#00ffff', textShadow: '0 0 20px #00ffff' }}>US</span>
        </h1>
        <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #00ffff, #ff00ff)', marginBottom: '60px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '1100px' }}>

          {/* Left — Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '30px' }}>LET'S WORK TOGETHER</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, marginBottom: '40px' }}>
              Ready to rank #1 on Google? Get in touch with us today and get a FREE SEO audit for your website!
            </p>

            {[
              { icon: '📧', label: 'EMAIL', value: 'naureenparveen947@gmail.com' },
              { icon: '🌐', label: 'WEBSITE', value: 'seooffers.info' },
              { icon: '📍', label: 'LOCATION', value: 'Pakistan' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '10px',
                  background: 'rgba(0,255,255,0.05)', border: '1px solid rgba(0,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem'
                }}>{item.icon}</div>
                <div>
                  <div style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px' }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              marginTop: '20px', padding: '14px 30px',
              background: 'linear-gradient(90deg, #00c853, #00e676)',
              border: 'none', borderRadius: '5px', color: 'white',
              textDecoration: 'none', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '2px',
              boxShadow: '0 0 20px rgba(0,200,83,0.4)'
            }}>💬 WHATSAPP US</a>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div style={{
                padding: '60px', textAlign: 'center',
                background: 'rgba(0,255,255,0.05)', border: '1px solid #00ffff',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '10px' }}>MESSAGE SENT!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'YOUR NAME', key: 'name', type: 'text', placeholder: 'Enter your name' },
                  { label: 'EMAIL ADDRESS', key: 'email', type: 'email', placeholder: 'Enter your email' },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: '100%', padding: '14px', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                        color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>SELECT SERVICE</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{
                      width: '100%', padding: '14px', background: '#000510',
                      border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                      color: 'white', fontSize: '0.9rem', outline: 'none'
                    }}>
                    <option value="">Choose a service...</option>
                    <option>SEO Package — $119</option>
                    <option>Local SEO (GMB) — $24</option>
                    <option>Backlinks — $8</option>
                    <option>Keyword Research — $6</option>
                    <option>Website Creation — $84</option>
                  </select>
                </div>

                <div>
                  <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%', padding: '14px', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                      color: 'white', fontSize: '0.9rem', outline: 'none',
                      resize: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '16px', background: 'linear-gradient(90deg, #00ffff, #00ff88)',
                    border: 'none', borderRadius: '5px', color: '#000510',
                    cursor: 'pointer', fontWeight: 900, fontSize: '0.9rem', letterSpacing: '2px',
                    boxShadow: '0 0 20px rgba(0,255,255,0.4)'
                  }}>SEND MESSAGE ⚡</button>
              </div>
            )}
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