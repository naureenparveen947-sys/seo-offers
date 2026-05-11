import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'

function FloatingBall({ position, color, speed }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
  })
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050510', position: 'relative' }}>
      <nav style={{
        position: 'absolute', top: 0, width: '100%', zIndex: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px', boxSizing: 'border-box',
        color: 'white', fontFamily: 'Arial'
      }}>
        <h2 style={{ margin: 0, color: '#00ff88' }}>SEO Offers</h2>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>
      <div style={{
        position: 'absolute', zIndex: 10, top: '50%', left: '5%',
        transform: 'translateY(-50%)', color: 'white', fontFamily: 'Arial'
      }}>
        <p style={{ color: '#00ff88', margin: 0 }}>Welcome to</p>
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>SEO Offers<br />Grow Your Business</h1>
        <p style={{ color: '#aaa', maxWidth: '400px' }}>We help your website rank higher on Google and grow your online presence.</p>
        <button style={{
          marginTop: '20px', padding: '12px 30px',
          background: '#00ff88', border: 'none', borderRadius: '25px',
          fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold'
        }}>Get Started</button>
      </div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <FloatingBall position={[2, 0, 0]} color="#00ff88" speed={1} />
        <FloatingBall position={[3, 1, -1]} color="#6c63ff" speed={1.5} />
        <FloatingBall position={[2.5, -1, 0]} color="#ff6584" speed={0.8} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default App