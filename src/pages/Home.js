import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function NeonRing({ radius, color, speed, tilt }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = tilt + Math.sin(state.clock.elapsedTime * speed) * 0.2
    mesh.current.rotation.y += 0.005
  })
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.03, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  )
}

function FloatingSphere({ position, color, speed }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
  })
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} roughness={0} metalness={1} />
    </mesh>
  )
}

export default function Home() {
  return (
    <div style={{ paddingTop: 0 }}>

      {/* HERO */}
      <section style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#000510' }}>
        
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,0,255,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{
          position: 'absolute', zIndex: 10, top: '50%', left: '6%',
          transform: 'translateY(-50%)', maxWidth: '580px'
        }}>
          <div style={{ color: '#00ff88', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '15px' }}>
            ▶ INITIALIZING SEO SYSTEM...
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px' }}>
            DOMINATE<br />GOOGLE WITH<br />
            <span style={{ color: '#00ffff', textShadow: '0 0 20px #00ffff' }}>SEO OFFERS</span>
          </h1>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #00ffff, #ff00ff)', marginBottom: '25px' }} />
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '35px', fontSize: '0.95rem', fontFamily: 'monospace' }}>
            &gt; Boost rankings with proven SEO strategies<br />
            &gt; Drive organic traffic 24/7<br />
            &gt; Get measurable results fast
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/contact" style={{
              padding: '14px 35px',
              background: 'linear-gradient(90deg, #00ffff, #00ff88)',
              border: 'none', borderRadius: '5px', color: '#000510',
              textDecoration: 'none', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '2px',
              boxShadow: '0 0 20px rgba(0,255,255,0.4)'
            }}>FREE AUDIT ⚡</Link>
            <Link to="/services" style={{
              padding: '14px 35px', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', color: 'white',
              textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '2px'
            }}>VIEW SERVICES →</Link>
          </div>
          <div style={{ display: 'flex', gap: '35px', marginTop: '45px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[['500+', 'CLIENTS'], ['98%', 'SUCCESS'], ['10+', 'YEARS'], ['1000+', 'KEYWORDS']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>{num}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', right: '-5%', top: 0, width: '55%', height: '100%' }}>
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 3]} intensity={2} color="#00ffff" />
            <pointLight position={[3, 3, 3]} intensity={2} color="#ff00ff" />
            <Stars radius={100} depth={50} count={8000} factor={4} fade />
            <NeonRing radius={1.5} color="#00ffff" speed={0.5} tilt={0.3} />
            <NeonRing radius={2} color="#ff00ff" speed={0.3} tilt={0.8} />
            <NeonRing radius={2.5} color="#00ff88" speed={0.4} tilt={1.2} />
            <FloatingSphere position={[0, 0, 0]} color="#ffffff" speed={1} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '30px 60px', borderTop: '1px solid rgba(0,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>© 2025 SEO OFFERS — seooffers.info</span>
        <span style={{ color: '#00ffff', fontSize: '0.75rem', letterSpacing: '2px' }}>ALL SYSTEMS OPERATIONAL</span>
      </footer>

    </div>
  )
}