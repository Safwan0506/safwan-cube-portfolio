"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense, useRef, useMemo, useState, useCallback, useEffect } from "react";
import * as THREE from "three";
import type { PageId } from "@/app/page";
import { motion, AnimatePresence } from "framer-motion";

interface FaceInfo {
  id: PageId;
  label: string;
  sublabel: string;
  buttonText: string;
  icon: string;
  normal: [number, number, number];
  textPos: [number, number, number];
  textRot: [number, number, number];
}

const FACES: FaceInfo[] = [
  { id: "accueil", label: "ACCUEIL", sublabel: "Safwan Djazouli\nDeveloppeur Full-Stack & IA", buttonText: "OUVRIR L'ACCUEIL", icon: "SD", normal: [0, 0, 1], textPos: [0, 0, 1.52], textRot: [0, 0, 0] },
  { id: "apropos", label: "A PROPOS & CV", sublabel: "Parcours & Competences", buttonText: "A PROPOS & CV", icon: "CV", normal: [1, 0, 0], textPos: [1.52, 0, 0], textRot: [0, Math.PI / 2, 0] },
  { id: "projets", label: "PROJETS", sublabel: "Scensora · Trading · Djazz", buttonText: "VOIR LES PROJETS", icon: "PJ", normal: [-1, 0, 0], textPos: [-1.52, 0, 0], textRot: [0, -Math.PI / 2, 0] },
  { id: "contact", label: "CONTACT", sublabel: "Transmission Directe\nsafwandjazouli@yahoo.com", buttonText: "ECRIRE UN MESSAGE", icon: "CT", normal: [0, 0, -1], textPos: [0, 0, -1.52], textRot: [0, Math.PI, 0] },
];

function CubeMesh() {
  const edgesRef = useRef<THREE.LineSegments>(null);
  const boxGeo = useMemo(() => new THREE.BoxGeometry(3, 3, 3), []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(boxGeo), [boxGeo]);

  return (
    <group>
      <mesh geometry={boxGeo}>
        <meshStandardMaterial color="#7c6aff" transparent opacity={0.03} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgesGeo}>
        <lineBasicMaterial color="#7c6aff" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

function FaceContent({ face }: { face: FaceInfo }) {
  return (
    <group position={face.textPos} rotation={face.textRot}>
      {/* Label dot + text */}
      <mesh position={[-0.9, 0.95, 0.01]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#7c6aff" />
      </mesh>
      <Text position={[-0.65, 0.95, 0.01]} fontSize={0.09} color="#7c6aff" anchorX="left" anchorY="middle" font={undefined}>
        {face.label}
      </Text>

      {/* Icon circle */}
      {face.id === "accueil" ? (
        <group position={[0, 0.2, 0.01]}>
          <mesh>
            <circleGeometry args={[0.35, 32]} />
            <meshBasicMaterial color="#7c6aff" transparent opacity={0.15} />
          </mesh>
          <Text position={[0, 0, 0.01]} fontSize={0.22} color="#ffffff" anchorX="center" anchorY="middle" font={undefined} fontWeight={700}>
            SD
          </Text>
        </group>
      ) : (
        <Text position={[0.7, 0.95, 0.01]} fontSize={0.12} color="#ffffff" anchorX="center" anchorY="middle" font={undefined}>
          {face.icon === "CV" ? "📋" : face.icon === "PJ" ? "💻" : "✉️"}
        </Text>
      )}

      {/* Main title */}
      <Text position={[0, face.id === "accueil" ? -0.25 : 0.25, 0.01]} fontSize={0.17} color="#ffffff" anchorX="center" anchorY="middle" font={undefined} fontWeight={700}>
        {face.id === "accueil" ? "Safwan Djazouli" : face.id === "contact" ? "Transmission Directe" : face.sublabel.split("\n")[0]}
      </Text>

      {/* Subtitle */}
      <Text position={[0, face.id === "accueil" ? -0.48 : 0, 0.01]} fontSize={0.07} color="#7c6aff" anchorX="center" anchorY="middle" font={undefined}>
        {face.id === "accueil" ? "Developpeur Full-Stack & IA" : face.id === "contact" ? "Douala, Cameroun" : ""}
      </Text>

      {face.id === "apropos" && (
        <group position={[0, -0.05, 0.01]}>
          {[{ v: "5+", l: "Projets", x: -0.5 }, { v: "IA", l: "KEYCE", x: 0 }, { v: "3", l: "Bacs", x: 0.5 }].map((s) => (
            <group key={s.l} position={[s.x, 0, 0]}>
              <Text position={[0, 0.08, 0]} fontSize={0.13} color="#7c6aff" anchorX="center" anchorY="middle" font={undefined} fontWeight={700}>{s.v}</Text>
              <Text position={[0, -0.06, 0]} fontSize={0.05} color="#7a7a8e" anchorX="center" anchorY="middle" font={undefined}>{s.l}</Text>
            </group>
          ))}
        </group>
      )}

      {face.id === "apropos" && (
        <group position={[0, -0.4, 0.01]}>
          {["Java", "Spring", "Next.js", "React"].map((t, i) => (
            <Text key={t} position={[(i - 1.5) * 0.35, 0, 0]} fontSize={0.06} color="#7a7a8e" anchorX="center" anchorY="middle" font={undefined}>{t}</Text>
          ))}
        </group>
      )}

      {face.id === "contact" && (
        <Text position={[0, -0.2, 0.01]} fontSize={0.06} color="#7a7a8e" anchorX="center" anchorY="middle" font={undefined}>
          safwandjazouli@yahoo.com
        </Text>
      )}

      {/* Bottom button area */}
      <mesh position={[0, -0.85, 0.01]}>
        <planeGeometry args={[1.8, 0.28]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.04} />
      </mesh>
      <Text position={[0, -0.85, 0.02]} fontSize={0.07} color="#ffffff" anchorX="center" anchorY="middle" font={undefined} fontWeight={600}>
        {face.buttonText}  ↗
      </Text>
    </group>
  );
}

function OrbitalRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.1; });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.3, 0, 0]} position={[0, -2.2, 0]}>
      <torusGeometry args={[3, 0.008, 16, 128]} />
      <meshStandardMaterial color="#7c6aff" emissive="#7c6aff" emissiveIntensity={0.6} transparent opacity={0.25} />
    </mesh>
  );
}

function OrbitalParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const r = 3 + (Math.random() - 0.5) * 0.3;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = -2.2 + (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.08; });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#7c6aff" size={0.025} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function BackgroundDots() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(60 * 3);
    for (let i = 0; i < 60; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.008; });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#7c6aff" size={0.008} transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}

function Scene({ onFaceClick }: { onFaceClick: (id: PageId) => void }) {
  const cubeRef = useRef<THREE.Group>(null);
  const { gl, camera, raycaster, scene } = useThree();
  const [autoRotate, setAutoRotate] = useState(true);

  useFrame(({ clock }) => {
    if (cubeRef.current && autoRotate) {
      cubeRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  const handleClick = useCallback((e: THREE.Event) => {
    if (!cubeRef.current) return;
    const intersects = raycaster.intersectObjects(cubeRef.current.children, true);
    if (intersects.length > 0) {
      const point = intersects[0].point;
      const local = cubeRef.current.worldToLocal(point.clone());

      let closestFace: PageId = "accueil";
      let maxDot = -Infinity;
      for (const face of FACES) {
        const dot = local.x * face.normal[0] + local.y * face.normal[1] + local.z * face.normal[2];
        if (dot > maxDot) { maxDot = dot; closestFace = face.id; }
      }
      onFaceClick(closestFace);
    }
  }, [raycaster, onFaceClick]);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[8, 8, 8]} intensity={0.6} color="#7c6aff" />
      <pointLight position={[-8, -4, -6]} intensity={0.3} color="#e040fb" />
      <pointLight position={[0, 6, -8]} intensity={0.2} color="#00e5ff" />

      <group ref={cubeRef} onClick={handleClick} onPointerDown={() => setAutoRotate(false)} onPointerUp={() => setAutoRotate(true)}>
        <CubeMesh />
        {FACES.map((face) => <FaceContent key={face.id} face={face} />)}
      </group>

      <OrbitalRing />
      <OrbitalParticles />
      <BackgroundDots />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
        rotateSpeed={0.5}
      />
    </>
  );
}

export default function CubeView({ onNavigate, lang }: { onNavigate: (p: PageId) => void; activeFace: PageId; lang: "fr" | "en" }) {
  const [hoveredFace, setHoveredFace] = useState<PageId | null>(null);

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0.5, 7], fov: 45 }} gl={{ alpha: true, antialias: true }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <Scene onFaceClick={onNavigate} />
        </Suspense>
      </Canvas>

      {/* Bottom hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 glass rounded-full px-5 py-2.5 pointer-events-none z-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-50" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          {lang === "fr" ? "Faites tourner le cube · Cliquez une face pour explorer" : "Rotate the cube · Click a face to explore"}
        </span>
      </div>
    </div>
  );
}
