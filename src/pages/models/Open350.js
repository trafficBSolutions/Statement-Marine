import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/headers/homeHeader';
import Footer from '../../components/footers/homeFooter';
import images from '../../utils/images';
import '../../css/pages/models/shared.css';
import '../../css/pages/models/open350.css';

gsap.registerPlugin(ScrollTrigger);

const paintSchemes = [
    { name: 'Royal Purple', img: 'PaintsGel/Statement-430-Tigress-&-38-Purple-A7403788.webp', accent: '#6b21a8' },
    { name: 'Midnight Carbon', img: 'PaintsGel/models-gallery-430 (1).webp', accent: '#1e293b' },
    { name: 'Ocean Teal', img: 'PaintsGel/DSC04615.webp', accent: '#0d9488' },
    { name: 'Deep Navy', img: 'PaintsGel/DSC05001.webp', accent: '#1e3a5f' },
    { name: 'Glacier White', img: 'PaintsGel/image0-1500.webp', accent: '#e2e8f0' },
    { name: 'Stealth Black', img: 'PaintsGel/IMG_0091.webp', accent: '#0f172a' },
    { name: 'Sunset Bronze', img: 'PaintsGel/IMG_0316-1500.webp', accent: '#92400e' },
    { name: 'Champagne Gold', img: 'PaintsGel/IMG_3828-1500.webp', accent: '#a16207' },
    { name: 'Electric Blue', img: 'PaintsGel/IMG_4852-1500.webp', accent: '#1d4ed8' },
    { name: 'Gunmetal Grey', img: 'PaintsGel/IMG_7377.webp', accent: '#475569' },
    { name: 'Crimson Red', img: 'PaintsGel/A7304379.webp', accent: '#b91c1c' },
    { name: 'Pearl White', img: 'PaintsGel/2023+380+PE+13.webp', accent: '#f8fafc' },
    { name: 'Seafoam Green', img: 'PaintsGel/36-cat-banner.webp', accent: '#34d399' },
    { name: 'Titanium Silver', img: 'PaintsGel/380-options-lead-slide.webp', accent: '#94a3b8' },
    { name: 'Cobalt Blue', img: 'PaintsGel/SUV+209-1.webp', accent: '#2563eb' },
    { name: 'Cobalt Blue Alt', img: 'PaintsGel/SUV+209-2.webp', accent: '#1e40af' },
    { name: 'Storm Grey', img: 'PaintsGel/untitled-104.webp', accent: '#374151' },
    { name: 'Charcoal Matte', img: 'PaintsGel/untitled-204.webp', accent: '#1f2937' },
];

const categories = [
    {
        id: 'paint',
        label: 'PAINT & GEL',
        images: [
            '350 Open/A7304185.webp',
            '350 Open/DSC04933.webp',
            '350 Open/DSC04937.webp',
        ],
        hotspots: [
            { x: 30, y: 45, label: 'Custom Painted Hullsides' },
            { x: 70, y: 35, label: 'Color-Matched Engines' },
            { x: 50, y: 70, label: 'Stainless Steel Rubrail Insert' },
        ],
        features: [
            'Painted hullsides, console, hardtop accents, and pin',
            'Custom paint, "mild to wild"',
            'Color-matched engines',
            'Powdercoat package',
            'EVA flooring & EVA top',
            'Alcantara interior',
            'Stainless steel rubrail insert',
        ],
    },
    {
        id: 'interior',
        label: 'INTERIOR',
        images: [
            '350 Open/IMG_0394.webp',
            '350 Open/IMG_0396.webp',
            '350 Open/IMG_0604.webp',
        ],
        hotspots: [
            { x: 45, y: 50, label: 'Full Cockpit Wraparound Bolsters' },
            { x: 25, y: 60, label: 'EVA Flooring' },
            { x: 70, y: 40, label: 'LED Cockpit Lighting' },
        ],
        features: [
            'Self-bailing cockpit with integrated scupper system',
            'Nonskid deck and gunwales',
            'Full cockpit wraparound coaming bolsters',
            'All stainless steel hardware',
            'LED cockpit courtesy lights',
            'Overhead courtesy lights',
        ],
    },
    {
        id: 'helm',
        label: 'HELM SEATING',
        images: [
            '350 Open/IMG_0606.webp',
            '350 Open/IMG_5305.webp',
        ],
        hotspots: [
            { x: 50, y: 45, label: 'Fiberglass Helm Seat Module' },
            { x: 30, y: 65, label: 'Integrated Cooler Storage' },
            { x: 70, y: 55, label: 'Helm Bolster Seats Option' },
        ],
        features: [
            'Sport bench seat w/ integrated backrest aft',
            'Wraparound bow seating with storage beneath',
            'Forward console seating with backrest',
            'Fiberglass helm seat module with integrated cooler storage beneath aft-facing seat',
            'Helm cooler seat w/ livewell (option)',
            'Helm seat w/ rear-facing lounge (option)',
        ],
    },
    {
        id: 'console',
        label: 'CONSOLE & TOP',
        images: [
            '350 Open/IMG_5915.webp',
            '350 Open/A7304185.webp',
        ],
        hotspots: [
            { x: 50, y: 30, label: 'Fiberglass Hard Top' },
            { x: 35, y: 55, label: 'Acrylic Wraparound Windshield' },
            { x: 65, y: 50, label: 'Full Digital Instrumentation' },
        ],
        features: [
            'Leather-wrapped stainless steel steering wheel',
            '1/2" acrylic wraparound windshield',
            'Full digital switching and instrumentation',
            'Large electronics mounting area',
            'In-dash latching storage compartment',
            'Heavy-duty welded aluminum hard top with oversized tubing',
            'Fully-finished fiberglass top w/ radio box',
        ],
    },
    {
        id: 'bow',
        label: 'BOW & STERN LAYOUT',
        images: [
            '350 Open/DSC04933.webp',
            '350 Open/DSC04937.webp',
            '350 Open/IMG_0394.webp',
        ],
        hotspots: [
            { x: 40, y: 40, label: 'Wraparound Bow Seating' },
            { x: 60, y: 65, label: 'Walking Transom Swim Platform' },
            { x: 25, y: 55, label: 'Recessed Bow Anchor Locker' },
        ],
        features: [
            'Obstruction-free "walking transom" swim platform',
            'Wraparound bow seating with storage beneath',
            'Overboard-draining, recessed bow anchor locker',
            'Port and starboard recessed dock line lockers',
            'Twin insulated 202-quart fish boxes with macerator pumps aft',
            '642-quart insulated forward fish box',
            '(5) pull-up cleats — 1 forward, 2 midships, 2 aft',
        ],
    },
];

const Open350 = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePaint, setActivePaint] = useState(0);
    const [activeImages, setActiveImages] = useState({});
    const sectionRefs = useRef([]);
    const containerRef = useRef(null);

    const setActiveImage = (catId, imgIndex) => {
        setActiveImages((prev) => ({ ...prev, [catId]: imgIndex }));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionRefs.current.forEach((section, i) => {
                if (!section) return;

                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 40%',
                    end: 'bottom 40%',
                    onEnter: () => setActiveCategory(i),
                    onEnterBack: () => setActiveCategory(i),
                });

                const img = section.querySelector('.section-image img');
                if (img) {
                    gsap.fromTo(img,
                        { scale: 1.1, yPercent: -5 },
                        {
                            scale: 1, yPercent: 5,
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                            },
                        }
                    );
                }

                const hotspots = section.querySelectorAll('.hotspot');
                gsap.fromTo(hotspots,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1, scale: 1, stagger: 0.2, duration: 0.6,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                const features = section.querySelectorAll('.feature-item');
                gsap.fromTo(features,
                    { opacity: 0, x: 40 },
                    {
                        opacity: 1, x: 0, stagger: 0.1, duration: 0.5,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 60%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                const thumbs = section.querySelectorAll('.gallery-thumb');
                gsap.fromTo(thumbs,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0, stagger: 0.08, duration: 0.4,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="open350-page" ref={containerRef}>
            <Header />

            <section className="open350-hero">
                <img src={images['models-gallery-350.jpg']} alt="350 Open" />
                <div className="open350-hero-overlay">
                    <h1>350 OPEN</h1>
                    <p>Fast, Fun, and Up for Anything</p>
                </div>
            </section>

            <nav className="category-tabs">
                {categories.map((cat, i) => (
                    <button
                        key={cat.id}
                        className={`tab-btn ${activeCategory === i ? 'active' : ''}`}
                        onClick={() => scrollToSection(i)}
                    >
                        {cat.label}
                    </button>
                ))}
            </nav>

            <main className="open350-main">
                {categories.map((cat, i) => (
                    <section
                        key={cat.id}
                        className="category-section"
                        ref={(el) => (sectionRefs.current[i] = el)}
                        id={cat.id}
                    >
                        {cat.id === 'paint' && (
                            <div className="paint-selector">
                                <h2 className="paint-title">SELECT YOUR COLOR</h2>
                                <p className="paint-subtitle">
                                    Choose from our curated palette or go fully custom — "mild to wild"
                                </p>

                                <div className="paint-viewer">
                                    <img
                                        src={images[paintSchemes[activePaint].img]}
                                        alt={paintSchemes[activePaint].name}
                                        key={activePaint}
                                    />
                                    <div className="paint-viewer-label">
                                        <span className="paint-name">{paintSchemes[activePaint].name}</span>
                                    </div>
                                </div>

                                <div className="paint-swatches">
                                    {paintSchemes.map((scheme, j) => (
                                        <button
                                            key={j}
                                            className={`swatch ${activePaint === j ? 'swatch-active' : ''}`}
                                            onClick={() => setActivePaint(j)}
                                            title={scheme.name}
                                        >
                                            <span className="swatch-color" style={{ background: scheme.accent }} />
                                            <span className="swatch-name">{scheme.name}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="paint-gallery">
                                    {paintSchemes.map((scheme, j) => (
                                        <div
                                            key={j}
                                            className={`paint-thumb ${activePaint === j ? 'paint-thumb-active' : ''}`}
                                            onClick={() => setActivePaint(j)}
                                        >
                                            <img src={images[scheme.img]} alt={scheme.name} />
                                            <span>{scheme.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="section-content">
                            <div className="section-image">
                                <img
                                    src={images[cat.images[activeImages[cat.id] || 0]]}
                                    alt={cat.label}
                                    key={activeImages[cat.id] || 0}
                                />
                                {cat.hotspots.map((spot, j) => (
                                    <div
                                        key={j}
                                        className="hotspot"
                                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                                    >
                                        <span className="hotspot-dot" />
                                        <span className="hotspot-label">{spot.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="section-features">
                                <h2>{cat.label}</h2>
                                <ul>
                                    {cat.features.map((f, j) => (
                                        <li key={j} className="feature-item">{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="section-gallery">
                            {cat.images.map((img, j) => (
                                <div
                                    key={j}
                                    className={`gallery-thumb ${(activeImages[cat.id] || 0) === j ? 'gallery-thumb-active' : ''}`}
                                    onClick={() => setActiveImage(cat.id, j)}
                                >
                                    <img src={images[img]} alt={`${cat.label} ${j + 1}`} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <section className="open350-cta">
                <h2>Build Your 350 Open</h2>
                <p>Every detail tailored to your exact specifications.</p>
                <a href="/contact" className="cta-btn">Inquire Now</a>
            </section>

            <Footer />
        </div>
    );
};

export default Open350;
