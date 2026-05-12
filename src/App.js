import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 60px', boxSizing: 'border-box',
      borderBottom: '1px solid rgba(0,255,255,0.1)',
      backdropFilter: 'blur(20px)', background: 'rgba(0,5,16,0.9)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ffff', boxShadow: '0 0 10px #00ffff' }} />
        <Link to="/" style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '3px', color: '#00ffff', textDecoration: 'none' }}>SEO OFFERS</Link>
      </div>
      <div style={{ display: 'flex', gap: '35px' }}>
        {[['HOME', '/'], ['SERVICES', '/services'], ['ABOUT', '/about'], ['BLOG', '/blog'], ['CONTACT', '/contact']].map(([name, path]) => (
          <Link key={name} to={path} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '2px' }}
            onMouseEnter={e => e.target.style.color = '#00ffff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
          >{name}</Link>
        ))}
      </div>
      <Link to="/contact" style={{
        padding: '10px 25px', background: 'transparent',
        border: '1px solid #00ffff', borderRadius: '5px', color: '#00ffff',
        textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px',
        boxShadow: '0 0 10px rgba(0,255,255,0.3)'
      }}>[ CONTACT ]</Link>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div style={{ background: '#000510', minHeight: '100vh', color: 'white', fontFamily: 'Arial' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}