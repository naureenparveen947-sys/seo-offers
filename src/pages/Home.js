import { Link } from 'react-router-dom'

export default function Home() {
  const services = [
    { icon: '◈', title: 'On-Page SEO', desc: 'Optimize every element of your website for maximum search visibility and user experience.' },
    { icon: '◉', title: 'Local SEO', desc: 'Dominate local search results and bring more customers from your city to your business.' },
    { icon: '◎', title: 'Link Building', desc: 'Build high-authority backlinks that boost your domain rating and search rankings.' },
    { icon: '◐', title: 'Technical SEO', desc: 'Fix crawl errors, speed issues and site structure to make Google love your website.' },
    { icon: '◑', title: 'Content Strategy', desc: 'Data-driven content that ranks on page one and converts visitors into paying customers.' },
    { icon: '◒', title: 'SEO Audit', desc: 'Deep analysis of your website to uncover hidden opportunities and fix critical issues.' },
  ]

  const testimonials = [
    { name: 'Ahmed R.', role: 'E-commerce Owner', text: 'Our organic traffic tripled in just 4 months. SEO Offers delivered beyond expectations.', stars: 5 },
    { name: 'Sara K.', role: 'Restaurant Owner', text: 'We now rank #1 for all local searches. Bookings have increased by 200% since we started.', stars: 5 },
    { name: 'Bilal M.', role: 'SaaS Founder', text: 'Professional, transparent, and results-driven. Best SEO investment we have ever made.', stars: 5 },
  ]

  const blogs = [
    { id: 1, category: 'SEO TIPS', title: 'Top 10 SEO Strategies for 2025', date: 'May 10, 2025', read: '5 min' },
    { id: 2, category: 'LOCAL SEO', title: 'Why Local SEO is Important for Small Businesses', date: 'May 5, 2025', read: '4 min' },
    { id: 3, category: 'LINK BUILDING', title: 'How Backlinks Can Boost Your Rankings', date: 'April 28, 2025', read: '6 min' },
  ]

  return (
    <div style={{ background: '#0a0a0a', color: '#f0f0f0', fontFamily: "'Georgia', serif", paddingTop: 0 }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '120px 8% 80px', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 60%, #0f1a0f 100%)'
      }}>
        {/* subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none'
        }} />
        {/* glow blob */}
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,255,150,0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px',
            border: '1px solid rgba(100,255,150,0.3)', borderRadius: '20px',
            color: 'rgba(100,255,150,0.8)', fontSize: '0.7rem', letterSpacing: '3px',
            marginBottom: '30px'
          }}>SEO AGENCY · EST. 2015</div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 400,
            lineHeight: 1.15, marginBottom: '30px', letterSpacing: '-1px'
          }}>
            Rank Higher.<br />
            <em style={{ color: 'rgba(100,255,150,0.9)', fontStyle: 'italic' }}>Grow Faster.</em><br />
            Stay Ahead.
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.4)', fontSize: '1.05rem',
            lineHeight: 1.8, marginBottom: '45px', maxWidth: '480px', fontFamily: 'Arial, sans-serif'
          }}>
            We help businesses dominate Google with proven SEO strategies that drive real traffic, real leads, and real revenue.
          </p>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              padding: '15px 40px', background: 'rgba(100,255,150,0.9)',
              color: '#0a0a0a', textDecoration: 'none', fontFamily: 'Arial',
              fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px',
              borderRadius: '3px', transition: 'all 0.3s'
            }}>GET FREE AUDIT</Link>
            <Link to="/services" style={{
              padding: '15px 40px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none', fontFamily: 'Arial',
              fontSize: '0.85rem', letterSpacing: '2px', borderRadius: '3px'
            }}>OUR SERVICES →</Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '50px', marginTop: '70px',
            paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap'
          }}>
            {[['50+', 'Happy Clients'], ['98%', 'Success Rate'], ['10+', 'Years Exp.'], ['500+', 'Keywords Ranked']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: '2rem', fontWeight: 300, color: 'rgba(100,255,150,0.9)', letterSpacing: '-1px' }}>{num}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '2px', fontFamily: 'Arial', marginTop: '4px' }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '100px 8%', background: '#0d0d0d' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.7rem', letterSpacing: '4px', fontFamily: 'Arial', marginBottom: '15px' }}>WHAT WE DO</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.5px' }}>
            Our Services
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              padding: '45px 40px', background: '#0d0d0d',
              transition: 'background 0.3s',
              cursor: 'default'
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#111'}
              onMouseLeave={e => e.currentTarget.style.background = '#0d0d0d'}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'rgba(100,255,150,0.7)' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '12px', letterSpacing: '0.5px' }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', lineHeight: 1.8, margin: 0, fontFamily: 'Arial' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: '100px 8%', background: '#0a0a0a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', maxWidth: '1100px' }}>
          <div>
            <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.7rem', letterSpacing: '4px', fontFamily: 'Arial', marginBottom: '15px' }}>ABOUT US</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, marginBottom: '25px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              We Are SEO<br />Specialists
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: 'Arial', marginBottom: '20px' }}>
              With over 10 years of experience in search engine optimization, we have helped 50+ businesses across Pakistan and beyond achieve first-page rankings on Google.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: 'Arial', marginBottom: '35px' }}>
              Our approach is data-driven, transparent, and results-focused. We do not believe in shortcuts — only proven strategies that deliver lasting growth.
            </p>
            <Link to="/about" style={{
              color: 'rgba(100,255,150,0.8)', textDecoration: 'none',
              fontFamily: 'Arial', fontSize: '0.85rem', letterSpacing: '2px',
              borderBottom: '1px solid rgba(100,255,150,0.3)', paddingBottom: '3px'
            }}>READ OUR STORY →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              ['Google Partner', 'Certified experts'],
              ['White Hat Only', 'Safe & long-term'],
              ['Monthly Reports', 'Full transparency'],
              ['24/7 Support', 'Always available'],
            ].map(([title, sub]) => (
              <div key={title} style={{
                padding: '30px 25px',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '4px'
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 400, marginBottom: '8px' }}>{title}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Arial' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 8%', background: '#0d0d0d' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.7rem', letterSpacing: '4px', fontFamily: 'Arial', marginBottom: '15px' }}>TESTIMONIALS</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.5px' }}>
            What Clients Say
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '40px 35px',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px', background: '#0a0a0a'
            }}>
              <div style={{ color: 'rgba(100,255,150,0.7)', fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '3px' }}>
                {'★'.repeat(t.stars)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '25px', fontSize: '0.95rem', fontFamily: 'Arial' }}>
                "{t.text}"
              </p>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 400 }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'Arial', marginTop: '4px' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ padding: '100px 8%', background: '#0a0a0a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.7rem', letterSpacing: '4px', fontFamily: 'Arial', marginBottom: '15px' }}>LATEST</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.5px' }}>
              From The Blog
            </h2>
          </div>
          <Link to="/blog" style={{
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
            fontFamily: 'Arial', fontSize: '0.8rem', letterSpacing: '2px'
          }}>VIEW ALL →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {blogs.map((b) => (
            <Link key={b.id} to="/blog" style={{
              padding: '40px 35px', background: '#0a0a0a',
              textDecoration: 'none', color: 'inherit', display: 'block',
              transition: 'background 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f0f0f'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
            >
              <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.65rem', letterSpacing: '3px', fontFamily: 'Arial', marginBottom: '15px' }}>{b.category}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, marginBottom: '20px' }}>{b.title}</h3>
              <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', fontFamily: 'Arial' }}>{b.date} · {b.read} read</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: '100px 8%', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'rgba(100,255,150,0.6)', fontSize: '0.7rem', letterSpacing: '4px', fontFamily: 'Arial', marginBottom: '15px' }}>GET IN TOUCH</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '15px', letterSpacing: '-0.5px' }}>
            Ready to Rank?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Arial', marginBottom: '50px', lineHeight: 1.8 }}>
            Get a free SEO audit and find out exactly what is holding your website back from page one.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
            <input placeholder="Your Name" style={{
              padding: '16px 20px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px',
              color: 'white', fontSize: '0.9rem', fontFamily: 'Arial', outline: 'none'
            }} />
            <input placeholder="Email Address" style={{
              padding: '16px 20px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px',
              color: 'white', fontSize: '0.9rem', fontFamily: 'Arial', outline: 'none'
            }} />
            <input placeholder="Website URL" style={{
              padding: '16px 20px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px',
              color: 'white', fontSize: '0.9rem', fontFamily: 'Arial', outline: 'none'
            }} />
            <textarea placeholder="Tell us about your business..." rows={4} style={{
              padding: '16px 20px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px',
              color: 'white', fontSize: '0.9rem', fontFamily: 'Arial', outline: 'none', resize: 'none'
            }} />
            <button style={{
              padding: '17px', background: 'rgba(100,255,150,0.9)',
              border: 'none', borderRadius: '3px', color: '#0a0a0a',
              fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px',
              fontFamily: 'Arial', cursor: 'pointer'
            }}>SEND MESSAGE →</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '40px 8%', borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px'
      }}>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontFamily: 'Arial' }}>© 2025 SEO OFFERS — seooffers.info</span>
        <div style={{ display: 'flex', gap: '30px' }}>
          {[['Home', '/'], ['Services', '/services'], ['Blog', '/blog'], ['Contact', '/contact']].map(([name, path]) => (
            <Link key={name} to={path} style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'Arial', letterSpacing: '1px' }}>{name}</Link>
          ))}
        </div>
      </footer>

    </div>
  )
}