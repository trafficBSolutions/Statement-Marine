import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import images from '../utils/images';
import '../css/home.css';

gsap.registerPlugin(ScrollTrigger);

const models = [
    { name: '350 Open', slug: '350-open', img: 'models-gallery-350.jpg', tagline: 'Fast, Fun, and Up for Anything' },
    { name: '380 Open', slug: '380-open', img: 'models-gallery-380.jpg', tagline: 'The Ultimate in Center Console Performance' },
    { name: '360 Cat', slug: '360-cat', img: 'models-gallery-360.jpg', tagline: 'Pulse-Pounding Performance' },
    { name: '430 Tigress', slug: '430-tigress', img: 'models-gallery-430.jpg', tagline: 'A New Breed of Center Console Catamaran' },
    { name: '42 Ultimate', slug: '42-ultimate', img: null, tagline: 'Highly Custom V-Hull Build' },
    { name: '50 Passion', slug: '50-passion', img: null, tagline: 'Highly Custom Cat Build' },
];

const Home = () => {
    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroBoatRef = useRef(null);
    const introRef = useRef(null);
    const showcaseRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Boat entrance animation
            gsap.fromTo(heroBoatRef.current,
                { opacity: 0, y: 60, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
            );

            // Boat parallax on scroll
            gsap.to(heroBoatRef.current, {
                y: -100,
                scale: 0.95,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(heroContentRef.current, {
                opacity: 0,
                y: -80,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: '20% top',
                    end: '60% top',
                    scrub: true,
                },
            });

            const introElements = introRef.current.querySelectorAll('.reveal');
            gsap.fromTo(introElements,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, stagger: 0.2, duration: 1,
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: 'top 75%',
                        end: 'top 25%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            const scrollContainer = scrollContainerRef.current;
            const scrollWidth = scrollContainer.scrollWidth - scrollContainer.offsetWidth;

            gsap.to(scrollContainer, {
                x: -scrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: showcaseRef.current,
                    start: 'top top',
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            const statNumbers = statsRef.current.querySelectorAll('.stat-number');
            statNumbers.forEach((el) => {
                const target = parseInt(el.dataset.value, 10);
                gsap.fromTo(el, { innerText: 0 }, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                });
            });

            gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'),
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, stagger: 0.15, duration: 0.8,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(ctaRef.current.querySelectorAll('.cta-reveal'),
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="home-page">
            <Header />
            <main className="home-main">
                {/* HERO — Shader Gradient Background */}
                <section className="hero" ref={heroRef}>
                    <div className="hero-gradient">
                        <ShaderGradientCanvas
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            pointerEvents="none"
                        >
                            <ShaderGradient
                                control="query"
                                urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.5&cPolarAngle=80&cameraZoom=1&color1=%230a4d68&color2=%23088395&color3=%2305bfdb&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=4&uDensity=1.5&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false"
                            />
                        </ShaderGradientCanvas>
                    </div>
                    <div className="hero-boat" ref={heroBoatRef}>
                        <img src={images['statement-tigress.jpg']} alt="Statement Boat" />
                    </div>
                    <div className="hero-content" ref={heroContentRef}>
                        <h1 className="hero-title">IT'S A CULTURE</h1>
                        <p className="hero-sub">High performance art on the water</p>
                        <a href="/designs" className="hero-btn">Explore Our Fleet</a>
                    </div>
                </section>

                {/* INTRO */}
                <section className="intro" ref={introRef}>
                    <div className="intro-inner">
                        <h2 className="reveal">STATEMENT MARINE</h2>
                        <p className="reveal">
                            We don't just make boats, we make Statements — each of them a singular piece of
                            high performance art that eloquently expresses its owner's unique vision.
                        </p>
                        <p className="reveal">
                            We believe every Statement we make says something about what happens when technology,
                            design, and craftsmanship intersect perfectly. Something about the value of individuality,
                            of boldness, of a healthy disrespect for boundaries. Something about keeping the throttles down.
                        </p>
                        <p className="reveal cta-line">What will you say with your Statement?</p>
                    </div>
                </section>

                {/* MODELS — Horizontal scroll */}
                <section className="showcase-section" ref={showcaseRef}>
                    <div className="showcase-header">
                        <h2>Our Fleet</h2>
                    </div>
                    <div className="scroll-container" ref={scrollContainerRef}>
                        {models.map((m) => (
                            <a href={`/designs/${m.slug}`} className="showcase-card" key={m.slug}>
                                {m.img ? (
                                    <img src={images[m.img]} alt={m.name} />
                                ) : (
                                    <div className="placeholder-img" />
                                )}
                                <div className="showcase-info">
                                    <h3>{m.name}</h3>
                                    <span>{m.tagline}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* STATS */}
                <section className="stats-section" ref={statsRef}>
                    <div className="stat-item">
                        <span className="stat-number" data-value="6">0</span>
                        <span className="stat-label">Models</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-value="10">0</span>
                        <span className="stat-label">Avg Years Craftsmen Tenure</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-value="2000">0</span>
                        <span className="stat-label">Max Horsepower</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-value="50">0</span>
                        <span className="stat-label">Feet of Pure Passion</span>
                    </div>
                </section>

                {/* CTA */}
                <section className="home-cta" ref={ctaRef}>
                    <h2 className="cta-reveal">Ready to Make Your Statement?</h2>
                    <p className="cta-reveal">Every boat is built to order. Your vision, your boat.</p>
                    <a href="/contact" className="hero-btn cta-reveal">Contact Us</a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
