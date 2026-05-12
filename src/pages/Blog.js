import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialBlogs = [
  {
    id: 1,
    title: 'Top 10 SEO Strategies for 2025',
    category: 'SEO TIPS',
    date: 'May 10, 2025',
    read: '5 min read',
    color: '#00ffff',
    excerpt: 'Discover the most powerful SEO strategies that will help your website rank higher on Google in 2025.',
    content: 'Full article content here...'
  },
  {
    id: 2,
    title: 'Why Local SEO is Important for Small Businesses',
    category: 'LOCAL SEO',
    date: 'May 5, 2025',
    read: '4 min read',
    color: '#ff00ff',
    excerpt: 'Local SEO helps small businesses reach customers in their area. Learn how GMB optimization can boost your visibility.',
    content: 'Full article content here...'
  },
  {
    id: 3,
    title: 'How Backlinks Can Boost Your Rankings',
    category: 'LINK BUILDING',
    date: 'April 28, 2025',
    read: '6 min read',
    color: '#00ff88',
    excerpt: 'Quality backlinks are one of the most important ranking factors. Learn how to build them the right way.',
    content: 'Full article content here...'
  },
]

export default function Blog() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [showForm, setShowForm] = useState(false)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [newBlog, setNewBlog] = useState({ title: '', category: '', excerpt: '', content: '', color: '#00ffff' })
  const [selected, setSelected] = useState(null)

  const ADMIN_PASSWORD = 'seooffers2025'

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
    } else {
      alert('Wrong password!')
    }
  }

  const handlePublish = () => {
    if (newBlog.title && newBlog.excerpt && newBlog.content) {
      const blog = {
        id: blogs.length + 1,
        ...newBlog,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        read: '3 min read'
      }
      setBlogs([blog, ...blogs])
      setNewBlog({ title: '', category: '', excerpt: '', content: '', color: '#00ffff' })
      setShowForm(false)
      setAuthenticated(false)
      alert('Blog published successfully! ✅')
    } else {
      alert('Please fill all fields!')
    }
  }

  if (selected) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#000510', padding: '120px 60px 60px' }}>
        <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <button onClick={() => setSelected(null)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', marginBottom: '40px', fontSize: '0.85rem' }}>← BACK</button>
          <div style={{ color: selected.color, fontSize: '0.75rem', letterSpacing: '3px', marginBottom: '15px' }}>{selected.category}</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px', lineHeight: 1.2 }}>{selected.title}</h1>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginBottom: '40px' }}>{selected.date} · {selected.read}</div>
          <div style={{ width: '60px', height: '2px', background: `linear-gradient(90deg, ${selected.color}, transparent)`, marginBottom: '40px' }} />
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '1rem', whiteSpace: 'pre-wrap' }}>{selected.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#000510' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px' }}>
          <div>
            <div style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '10px' }}>▶ LATEST ARTICLES</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: 0 }}>
              SEO <span style={{ color: '#00ffff', textShadow: '0 0 20px #00ffff' }}>BLOG</span>
            </h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '12px 25px', background: 'linear-gradient(90deg, #00ffff, #00ff88)',
              border: 'none', borderRadius: '5px', color: '#000510',
              cursor: 'pointer', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px'
            }}>+ PUBLISH BLOG</button>
        </div>

        {/* Admin Form */}
        {showForm && (
          <div style={{
            padding: '40px', background: 'rgba(0,255,255,0.03)',
            border: '1px solid rgba(0,255,255,0.2)', borderRadius: '12px', marginBottom: '60px'
          }}>
            <h3 style={{ color: '#00ffff', letterSpacing: '2px', marginBottom: '25px' }}>▶ PUBLISH NEW BLOG</h3>

            {!authenticated ? (
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <input
                  type="password"
                  placeholder="Enter admin password..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{
                    padding: '12px', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                    color: 'white', fontSize: '0.9rem', outline: 'none', width: '300px'
                  }}
                />
                <button onClick={handleLogin} style={{
                  padding: '12px 25px', background: 'linear-gradient(90deg, #00ffff, #00ff88)',
                  border: 'none', borderRadius: '5px', color: '#000510',
                  cursor: 'pointer', fontWeight: 900, fontSize: '0.8rem'
                }}>UNLOCK ⚡</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'BLOG TITLE', key: 'title', placeholder: 'Enter blog title...' },
                  { label: 'CATEGORY', key: 'category', placeholder: 'e.g. SEO TIPS, LOCAL SEO...' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                    <input
                      placeholder={field.placeholder}
                      value={newBlog[field.key]}
                      onChange={e => setNewBlog({ ...newBlog, [field.key]: e.target.value })}
                      style={{
                        width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                        color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>SHORT DESCRIPTION</label>
                  <textarea
                    placeholder="Short description of the blog..."
                    value={newBlog.excerpt}
                    onChange={e => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                    rows={3}
                    style={{
                      width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                      color: 'white', fontSize: '0.9rem', outline: 'none', resize: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>FULL CONTENT</label>
                  <textarea
                    placeholder="Write your full blog content here..."
                    value={newBlog.content}
                    onChange={e => setNewBlog({ ...newBlog, content: e.target.value })}
                    rows={8}
                    style={{
                      width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,255,255,0.2)', borderRadius: '5px',
                      color: 'white', fontSize: '0.9rem', outline: 'none', resize: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00ffff', fontSize: '0.7rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>ACCENT COLOR</label>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {['#00ffff', '#ff00ff', '#00ff88', '#ffaa00', '#ff6688'].map(c => (
                      <div key={c} onClick={() => setNewBlog({ ...newBlog, color: c })} style={{
                        width: '35px', height: '35px', borderRadius: '50%', background: c, cursor: 'pointer',
                        border: newBlog.color === c ? '3px solid white' : '3px solid transparent',
                        boxShadow: `0 0 10px ${c}`
                      }} />
                    ))}
                  </div>
                </div>
                <button onClick={handlePublish} style={{
                  padding: '14px', background: 'linear-gradient(90deg, #00ffff, #00ff88)',
                  border: 'none', borderRadius: '5px', color: '#000510',
                  cursor: 'pointer', fontWeight: 900, fontSize: '0.9rem', letterSpacing: '2px'
                }}>PUBLISH NOW ⚡</button>
              </div>
            )}
          </div>
        )}

        {/* Blog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1100px' }}>
          {blogs.map((blog) => (
            <div key={blog.id}
              onClick={() => setSelected(blog)}
              style={{
                padding: '35px 25px', background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(255,255,255,0.07)`, borderRadius: '12px',
                cursor: 'pointer', transition: 'all 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${blog.color}`; e.currentTarget.style.transform = 'translateY(-5px)' }}
              onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ color: blog.color, fontSize: '0.7rem', letterSpacing: '2px' }}>{blog.category}</span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>{blog.read}</span>
              </div>
              <div style={{ width: '30px', height: '2px', background: blog.color, marginBottom: '15px', boxShadow: `0 0 8px ${blog.color}` }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>{blog.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.83rem', lineHeight: 1.7, margin: '0 0 20px 0' }}>{blog.excerpt}</p>
              <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>{blog.date}</div>
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