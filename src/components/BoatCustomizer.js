import { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import BoatModel3D from './BoatModel3D';
import '../css/components/boatCustomizer.css';

// Preset hull colors
const hullPresets = [
    { name: 'Deep Ocean', color: '#0a4d68' },
    { name: 'Racing Purple', color: '#4a0e6b' },
    { name: 'Midnight Black', color: '#111111' },
    { name: 'Arctic White', color: '#f0f0f0' },
    { name: 'Candy Red', color: '#8b0000' },
    { name: 'Electric Blue', color: '#0047ab' },
    { name: 'Lime Green', color: '#32cd32' },
    { name: 'Sunset Orange', color: '#ff4500' },
    { name: 'Champagne Gold', color: '#c5a853' },
    { name: 'Gunmetal', color: '#2c3539' },
];

// Preset deck foam colors/styles
const deckFoamPresets = [
    { name: 'Classic Teak', color: '#8B6914', pattern: 'teak' },
    { name: 'Storm Grey', color: '#5a5a5a', pattern: 'solid' },
    { name: 'Snow White', color: '#f5f5f5', pattern: 'solid' },
    { name: 'Carbon Fiber', color: '#333', pattern: 'carbon' },
    { name: 'Ocean Blue', color: '#1a5276', pattern: 'solid' },
    { name: 'Black Diamond', color: '#1a1a1a', pattern: 'diamond' },
    { name: 'Sand Beige', color: '#c2b280', pattern: 'solid' },
    { name: 'Custom Two-Tone', color: '#0a4d68', pattern: 'twotone' },
];

// Design album images (from PaintsGel folder)
const designAlbum = [
    { src: '2023+380+PE+13.webp', label: '380 Pearl Edition' },
    { src: '36-cat-banner.webp', label: '360 Cat Design' },
    { src: '380-options-lead-slide.webp', label: '380 Options' },
    { src: 'A7304379.webp', label: 'Custom Paint 1' },
    { src: 'DSC04615.webp', label: 'Custom Paint 2' },
    { src: 'DSC05001.webp', label: 'Custom Paint 3' },
    { src: 'image0-1500.webp', label: 'Statement Design' },
    { src: 'IMG_0091.webp', label: 'Gel Coat Special' },
    { src: 'IMG_0316-1500.webp', label: 'Custom Hull' },
    { src: 'IMG_3828-1500.webp', label: 'Twin Tone' },
    { src: 'IMG_4852-1500.webp', label: 'Sport Edition' },
    { src: 'IMG_7377.webp', label: 'Racing Stripe' },
    { src: 'models-gallery-430 (1).webp', label: '430 Tigress' },
    { src: 'Statement-430-Tigress-&-38-Purple-A7403788.webp', label: 'Purple Duo' },
    { src: 'SUV+209-1.webp', label: 'SUV Design 1' },
    { src: 'SUV+209-2.webp', label: 'SUV Design 2' },
    { src: 'untitled-104.webp', label: 'Concept A' },
    { src: 'untitled-204.webp', label: 'Concept B' },
];

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 0, g: 0, b: 0 };
};

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');

function RGBChart({ color, onChange, label }) {
    const rgb = hexToRgb(color);
    const setChannel = (channel, value) => {
        const updated = { ...rgb, [channel]: parseInt(value) };
        onChange(rgbToHex(updated.r, updated.g, updated.b));
    };

    return (
        <div className="rgb-chart">
            <p className="panel-label">{label}</p>
            <div className="rgb-preview" style={{ background: color }} />
            <div className="rgb-sliders">
                <div className="rgb-row">
                    <span className="rgb-label" style={{ color: '#ff4444' }}>R</span>
                    <input type="range" min="0" max="255" value={rgb.r} className="rgb-slider slider-r" onChange={(e) => setChannel('r', e.target.value)} />
                    <input type="number" min="0" max="255" value={rgb.r} className="rgb-input" onChange={(e) => setChannel('r', e.target.value)} />
                </div>
                <div className="rgb-row">
                    <span className="rgb-label" style={{ color: '#44ff44' }}>G</span>
                    <input type="range" min="0" max="255" value={rgb.g} className="rgb-slider slider-g" onChange={(e) => setChannel('g', e.target.value)} />
                    <input type="number" min="0" max="255" value={rgb.g} className="rgb-input" onChange={(e) => setChannel('g', e.target.value)} />
                </div>
                <div className="rgb-row">
                    <span className="rgb-label" style={{ color: '#4488ff' }}>B</span>
                    <input type="range" min="0" max="255" value={rgb.b} className="rgb-slider slider-b" onChange={(e) => setChannel('b', e.target.value)} />
                    <input type="number" min="0" max="255" value={rgb.b} className="rgb-input" onChange={(e) => setChannel('b', e.target.value)} />
                </div>
            </div>
            <span className="color-hex">{color.toUpperCase()}</span>
        </div>
    );
}

export default function BoatCustomizer({ defaultSpecs = {} }) {
    const [activeTab, setActiveTab] = useState('hull');
    const [config, setConfig] = useState({
        hullColor: defaultSpecs.hullColor || '#0a4d68',
        deckFoamColor: defaultSpecs.deckFoamColor || '#5a5a5a',
        deckFoamPattern: 'solid',
        deckFoamImage: null,
        selectedDesign: null,
        fontColor: '#ffffff',
        length: defaultSpecs.length || 38,
        engines: defaultSpecs.engines || 3,
    });
    const fileInputRef = useRef(null);

    const update = (key, value) => setConfig((prev) => ({ ...prev, [key]: value }));

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        update('deckFoamImage', url);
    };

    const selectDesign = (src) => {
        update('selectedDesign', src);
    };

    // Import all PaintsGel images
    const paintImages = require.context('../assets/PaintsGel', false, /\.(webp|jpg|png)$/);
    const getDesignImg = (filename) => {
        try { return paintImages(`./${filename}`); } catch { return null; }
    };

    const tabs = [
        { id: 'hull', label: 'Hull Color' },
        { id: 'foam', label: 'Deck Foam' },
        { id: 'album', label: 'Design Album' },
        { id: 'summary', label: 'Summary' },
    ];

    return (
        <section className="customizer-section">
            <h2>Build Your Statement</h2>
            <div className="customizer-layout">
                {/* 3D Preview */}
                <div className="customizer-canvas">
                    <Canvas camera={{ position: [6, 4, 6], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
                        <Suspense fallback={null}>
                            <BoatModel3D color={config.hullColor} length={config.length} deckColor={config.deckFoamColor} />
                            <Environment preset="sunset" />
                            <ContactShadows position={[0, -0.9, 0]} opacity={0.4} blur={2} />
                        </Suspense>
                        <OrbitControls enablePan={false} minDistance={4} maxDistance={14} />
                    </Canvas>
                </div>

                {/* Customization Panel */}
                <div className="customizer-panel">
                    <div className="panel-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`panel-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="panel-content">
                        {/* HULL COLOR TAB */}
                        {activeTab === 'hull' && (
                            <div className="tab-hull">
                                <h4>Choose Your Hull Color</h4>
                                <RGBChart color={config.hullColor} onChange={(c) => update('hullColor', c)} label="Hull RGB" />
                                <p className="panel-label">Or pick a preset:</p>
                                <div className="swatch-grid">
                                    {hullPresets.map((p) => (
                                        <button
                                            key={p.name}
                                            className={`swatch ${config.hullColor === p.color ? 'active' : ''}`}
                                            style={{ background: p.color }}
                                            onClick={() => update('hullColor', p.color)}
                                            title={p.name}
                                        />
                                    ))}
                                </div>
                                <RGBChart color={config.fontColor} onChange={(c) => update('fontColor', c)} label="Font / Lettering Color" />
                                <div className="font-preview" style={{ color: config.fontColor, background: config.hullColor }}>
                                    STATEMENT
                                </div>
                            </div>
                        )}

                        {/* DECK FOAM TAB */}
                        {activeTab === 'foam' && (
                            <div className="tab-foam">
                                <h4>Deck Foam Style</h4>
                                <RGBChart color={config.deckFoamColor} onChange={(c) => update('deckFoamColor', c)} label="Deck Foam RGB" />
                                <p className="panel-label">Preset foam styles:</p>
                                <div className="foam-preset-grid">
                                    {deckFoamPresets.map((f) => (
                                        <button
                                            key={f.name}
                                            className={`foam-preset ${config.deckFoamColor === f.color && config.deckFoamPattern === f.pattern ? 'active' : ''}`}
                                            onClick={() => { update('deckFoamColor', f.color); update('deckFoamPattern', f.pattern); }}
                                        >
                                            <span className="foam-swatch" style={{ background: f.color }} />
                                            <span className="foam-name">{f.name}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="upload-section">
                                    <p className="panel-label">Upload your own deck foam image:</p>
                                    <button className="upload-btn" onClick={() => fileInputRef.current.click()}>
                                        Choose Image
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleImageUpload}
                                    />
                                    {config.deckFoamImage && (
                                        <div className="upload-preview">
                                            <img src={config.deckFoamImage} alt="Custom deck foam" />
                                            <button className="remove-btn" onClick={() => update('deckFoamImage', null)}>✕</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* DESIGN ALBUM TAB */}
                        {activeTab === 'album' && (
                            <div className="tab-album">
                                <h4>Statement Design Album</h4>
                                <p className="panel-label">Browse our paint & gel coat designs for inspiration:</p>
                                <div className="album-grid">
                                    {designAlbum.map((d) => {
                                        const img = getDesignImg(d.src);
                                        if (!img) return null;
                                        return (
                                            <button
                                                key={d.src}
                                                className={`album-item ${config.selectedDesign === d.src ? 'active' : ''}`}
                                                onClick={() => selectDesign(d.src)}
                                            >
                                                <img src={img} alt={d.label} />
                                                <span>{d.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* SUMMARY TAB */}
                        {activeTab === 'summary' && (
                            <div className="tab-summary">
                                <h4>Your Build Summary</h4>
                                <div className="summary-row">
                                    <span>Hull Color:</span>
                                    <span className="summary-swatch" style={{ background: config.hullColor }} />
                                    <span>{config.hullColor}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Deck Foam:</span>
                                    <span className="summary-swatch" style={{ background: config.deckFoamColor }} />
                                    <span>{config.deckFoamPattern}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Font Color:</span>
                                    <span className="summary-swatch" style={{ background: config.fontColor }} />
                                    <span>{config.fontColor}</span>
                                </div>
                                {config.deckFoamImage && (
                                    <div className="summary-row">
                                        <span>Custom Foam Image:</span>
                                        <img src={config.deckFoamImage} alt="custom" className="summary-thumb" />
                                    </div>
                                )}
                                {config.selectedDesign && (
                                    <div className="summary-row">
                                        <span>Design Inspiration:</span>
                                        <img src={getDesignImg(config.selectedDesign)} alt="design" className="summary-thumb" />
                                    </div>
                                )}
                                <a href="/contact" className="submit-build-btn">Submit Your Build →</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
