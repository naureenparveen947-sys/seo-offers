import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'

function FloatingCube({ position, color, speed, rotSpeed }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    mesh.current.rotation.x += rotSpeed
    mesh.current.rotation.y += rotSpeed
  })
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial', background: '#080010', color: 'white', margin: 0, padding: 0 }}>

      {/* HERO SECTION */}
      <div style={{ width: '100vw', height: '100vh', position: 'relative', background: 'linear-gradient(135deg, #080010 0%, #1a0030 50%, #080010 100%)' }}>
        
        {/* Grid Background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(128,0,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128,0,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Navbar */}
        <nav style={{
          position: 'absolute', top: 0, width: '100%', zIndex: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '25px 50px', boxSizing: 'border-box'
        }}>
          <h2 style={{ margin: 0, color: 'white', fontSize: '1.2rem', letterSpacing: '2px' }}>©SEO OFFERS</h2>
          <div style={{ display: 'flex', gap: '40px' }}>
            {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map(item => (
              <a key={item} href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>{item}</a>
            ))}
          </div>
          <button style={{ padding: '10px 25px', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '25px', cursor: 'pointer', fontSize: '0.85rem' }}>
            GET IN TOUCH
          </button>
        </nav>

        {/* Hero Text */}
        <div style={{
          position: 'absolute', zIndex: 10, top: '50%', left: '5%',
          transform: 'translateY(-50%)', maxWidth: '600px'
        }}>
          <p style={{ color: 'rgba(200,150,255,0.8)', margin: '0 0 10px 0', fontSize: '0.9rem', letterSpacing: '3px' }}>[ WELCOME TO SEO OFFERS ]</p>
          <h1 style={{ fontSize: '4rem', margin: '0 0 20px 0', lineHeight: 1.1, fontWeight: 900 }}>
            RANK HIGHER.<br />
            <span style={{ color: 'rgba(200,150,255,0.6)' }}>GROW FASTER.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '400px', lineHeight: 1.6 }}>
            We help your website rank on top of Google and grow your online business with proven SEO strategies.
          </p>
          <button style={{
            marginTop: '30px', padding: '15px 35px',
            background: 'white', border: 'none', borderRadius: '30px',
            fontSize: '0.9rem', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '1px'
          }}>
            BOOK A CONSULTATION ↗
          </button>
        </div>

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#8800ff" />
          <pointLight position={[-5, -5, 5]} intensity={1} color="#4400ff" />
          <Stars radius={100} depth={50} count={3000} factor={4} />
          <FloatingCube position={[1, 1, 0]} color="#6600cc" speed={0.8} rotSpeed={0.01} />
          <FloatingCube position={[-1, -0.5, -1]} color="#4400aa" speed={1.2} rotSpeed={0.008} />
          <FloatingCube position={[0, -1.5, 1]} color="#8800dd" speed={1} rotSpeed={0.012} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* SERVICES SECTION */}
      <div style={{ padding: '80px 50px', background: '#080010', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(128,0,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(128,0,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <p style={{ color: 'rgba(200,150,255,0.8)', letterSpacing: '3px', fontSize: '0.85rem', margin: '0 0 20px 0' }}>[ OUR SERVICES ]</p>
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 50px 0', fontWeight: 900 }}>WE DELIVER RESULTS<br /><span style={{ color: 'rgba(255,255,255,0.4)' }}>THAT MATTER</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', position: 'relative', zIndex: 1 }}>
          {[
            { title: 'SEO OPTIMIZATION', desc: 'SEARCH FRIENDLY STRATEGIES TO IMPROVE YOUR RANKINGS' },
            { title: 'CONTENT MARKETING', desc: 'HIGH QUALITY CONTENT THAT DRIVES TRAFFIC AND CONVERSIONS' },
            { title: 'KEYWORD RESEARCH', desc: 'TARGETED KEYWORDS TO REACH YOUR IDEAL CUSTOMERS' },
            { title: 'LINK BUILDING', desc: 'AUTHORITY BACKLINKS TO BOOST YOUR DOMAIN RANKING' },
            { title: 'LOCAL SEO', desc: 'DOMINATE LOCAL SEARCH RESULTS IN YOUR AREA' },
            { title: 'SEO AUDIT', desc: 'COMPLETE WEBSITE ANALYSIS TO IDENTIFY AND FIX ISSUES' },
          ].map((service, i) => (
            <div key={i} style={{
              padding: '40px 30px',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(128,0,255,0.08)',
              border: '1px solid rgba(128,0,255,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', letterSpacing: '1px' }}>{service.title}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div style={{ padding: '80px 50px', background: 'linear-gradient(135deg, #0d0020, #1a0030)', textAlign: 'center' }}>
        <p style={{ color: 'rgba(200,150,255,0.8)', letterSpacing: '3px', fontSize: '0.85rem' }}>[ GET STARTED ]</p>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '20px 0' }}>READY TO RANK<br /><span style={{ color: 'rgba(255,255,255,0.4)' }}>ON PAGE ONE?</span></h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>Contact us today and get a free SEO audit for your website.</p>
        <button style={{
          padding: '18px 50px', background: 'white', border: 'none',
          borderRadius: '35px', fontSize: '1rem', cursor: 'pointer',
          fontWeight: 'bold', letterSpacing: '2px'
        }}>
          CONTACT US ↗
        </button>
        <p style={{ marginTop: '60px', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>© 2025 SEO OFFERS — seooffers.info</p>
      </div>

    </div>
  )
}

export default App