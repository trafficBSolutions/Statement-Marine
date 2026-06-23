import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Placeholder boat shape — replace with useGLTF('/models/your-boat.glb') when ready
export default function BoatModel3D({ color = '#0a4d68', length = 38, deckColor = '#f5f5f0' }) {
    const groupRef = useRef();
    const scale = length / 38; // normalize around 38ft

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
        }
    });

    const hullShape = new THREE.Shape();
    hullShape.moveTo(0, 0);
    hullShape.quadraticCurveTo(1.5, 0.3, 3, 0);
    hullShape.lineTo(3, -0.6);
    hullShape.quadraticCurveTo(1.5, -0.9, 0, -0.6);
    hullShape.closePath();

    const extrudeSettings = { depth: 2.5 * scale, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 };

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}>
            {/* Hull */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1.5, 0, -1.25 * scale]}>
                <extrudeGeometry args={[hullShape, extrudeSettings]} />
                <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Deck */}
            <mesh position={[0, 0.15, 0]}>
                <boxGeometry args={[2.6, 0.1, 2.2 * scale]} />
                <meshStandardMaterial color={deckColor} roughness={0.6} />
            </mesh>
            {/* Console */}
            <mesh position={[0, 0.55, -0.3 * scale]}>
                <boxGeometry args={[0.8, 0.7, 0.6]} />
                <meshStandardMaterial color="#222" roughness={0.5} />
            </mesh>
            {/* T-Top posts */}
            {[-0.35, 0.35].map((x, i) => (
                <mesh key={i} position={[x, 1.1, -0.3 * scale]}>
                    <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
                    <meshStandardMaterial color="#aaa" metalness={0.8} />
                </mesh>
            ))}
            {/* T-Top */}
            <mesh position={[0, 1.7, -0.3 * scale]}>
                <boxGeometry args={[1.2, 0.05, 1.0]} />
                <meshStandardMaterial color="#fff" roughness={0.3} />
            </mesh>
            {/* Engines */}
            {[-0.4, 0, 0.4].map((x, i) => (
                <mesh key={i} position={[x, -0.1, 1.2 * scale]}>
                    <boxGeometry args={[0.25, 0.5, 0.4]} />
                    <meshStandardMaterial color="#111" metalness={0.5} />
                </mesh>
            ))}
        </group>
    );
}
