import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import BoatModel3D from './BoatModel3D';
import '../css/components/boatViewer.css';

export default function BoatViewer({ defaultSpecs = {} }) {
    const [specs, setSpecs] = useState({
        hullColor: defaultSpecs.hullColor || '#0a4d68',
        length: defaultSpecs.length || 38,
        engines: defaultSpecs.engines || 3,
        beam: defaultSpecs.beam || 10,
    });

    const update = (key, value) => setSpecs((prev) => ({ ...prev, [key]: value }));

    return (
        <section className="boat-viewer-section">
            <h2>3D Explorer</h2>
            <div className="boat-viewer-container">
                <div className="boat-canvas-wrapper">
                    <Canvas camera={{ position: [6, 4, 6], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
                        <Suspense fallback={null}>
                            <BoatModel3D color={specs.hullColor} length={specs.length} />
                            <Environment preset="sunset" />
                            <ContactShadows position={[0, -0.9, 0]} opacity={0.4} blur={2} />
                        </Suspense>
                        <OrbitControls enablePan={false} minDistance={4} maxDistance={14} />
                    </Canvas>
                </div>
                <div className="spec-panel">
                    <h3>Customize Specs</h3>
                    <div className="spec-control">
                        <label>Hull Color</label>
                        <input type="color" value={specs.hullColor} onChange={(e) => update('hullColor', e.target.value)} />
                    </div>
                    <div className="spec-control">
                        <label>Length: {specs.length} ft</label>
                        <input type="range" min="30" max="50" step="1" value={specs.length} onChange={(e) => update('length', +e.target.value)} />
                    </div>
                    <div className="spec-control">
                        <label>Engines</label>
                        <select value={specs.engines} onChange={(e) => update('engines', +e.target.value)}>
                            <option value={2}>Twin</option>
                            <option value={3}>Triple</option>
                            <option value={4}>Quad</option>
                        </select>
                    </div>
                    <div className="spec-control">
                        <label>Beam: {specs.beam} ft</label>
                        <input type="range" min="8" max="14" step="0.5" value={specs.beam} onChange={(e) => update('beam', +e.target.value)} />
                    </div>
                    <div className="spec-summary">
                        <p><strong>Current Config:</strong></p>
                        <ul>
                            <li>Length: {specs.length}'</li>
                            <li>Beam: {specs.beam}'</li>
                            <li>Engines: {specs.engines === 2 ? 'Twin' : specs.engines === 3 ? 'Triple' : 'Quad'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
