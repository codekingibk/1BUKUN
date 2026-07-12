import React, { useRef, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { error: boolean }> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    if (this.state.error) return this.props.fallback ?? null;
    return this.props.children;
  }
}
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ScamExposed } from "@/components/sections/ScamExposed";
import { Contact, Footer } from "@/components/sections/Contact";

function ParticleField({ count = 2500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return arr;
  }, [count]);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.018;
    ref.current.rotation.x = state.clock.elapsedTime * 0.008;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color="#00ff88" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function CyanParticles({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, [count]);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = -state.clock.elapsedTime * 0.012;
    ref.current.rotation.z = state.clock.elapsedTime * 0.006;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00ccff" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function HorizonGrid() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = -10 + Math.sin(state.clock.elapsedTime * 0.25) * 0.4;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[150, 150, 50, 50]} />
      <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.05} />
    </mesh>
  );
}

function OrbitalRing({ radius, speed, tilt, color, opacity }: { radius: number; speed: number; tilt: number; color: string; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} position={[14, 3, -25]} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.025, 8, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function FloatingCube({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.4} />
    </mesh>
  );
}

function CameraRig({ scrollY }: { scrollY: number }) {
  useFrame((state) => {
    const targetY = -scrollY * 0.002;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.06);
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      Math.sin(state.clock.elapsedTime * 0.07) * 0.6,
      0.04
    );
    state.camera.rotation.z = THREE.MathUtils.lerp(
      state.camera.rotation.z,
      Math.sin(state.clock.elapsedTime * 0.05) * 0.01,
      0.03
    );
  });
  return null;
}

function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary selection:text-black">
      {/* Fixed 3D Canvas background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {!webglSupported && <div className="w-full h-full bg-[#080c12]" />}
        {webglSupported && <WebGLErrorBoundary fallback={<div className="w-full h-full bg-[#080c12]" />}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 55 }}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false }}
          dpr={[1, 1.5]}
          onCreated={() => {}}
        >
          <color attach="background" args={["#080c12"]} />
          <fog attach="fog" args={["#080c12", 40, 100]} />
          <ambientLight intensity={0.05} />
          <pointLight position={[10, 10, 10]} color="#00ff88" intensity={0.6} decay={2} />
          <pointLight position={[-15, -5, -10]} color="#00ccff" intensity={0.4} decay={2} />

          <Stars radius={90} depth={60} count={4000} factor={3} saturation={0} fade speed={0.4} />
          <ParticleField />
          <CyanParticles />
          <HorizonGrid />

          <OrbitalRing radius={5} speed={0.2} tilt={0.5} color="#00ff88" opacity={0.25} />
          <OrbitalRing radius={7.5} speed={0.12} tilt={1.1} color="#00ccff" opacity={0.18} />
          <OrbitalRing radius={10} speed={0.08} tilt={0.8} color="#00ff88" opacity={0.1} />

          <FloatingCube position={[-18, 4, -15]} speed={0.3} />
          <FloatingCube position={[20, -3, -20]} speed={0.2} />
          <FloatingCube position={[-12, -6, -10]} speed={0.4} />
          <FloatingCube position={[8, 8, -18]} speed={0.25} />

          <CameraRig scrollY={scrollY} />
        </Canvas>
        </WebGLErrorBoundary>}
      </div>

      {/* DOM content above canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ScamExposed />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
