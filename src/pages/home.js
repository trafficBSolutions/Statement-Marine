import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import images from '../utils/images';
import '../css/home.css';

const models = [
    { name: '350 Open', slug: '350-open', img: 'models-gallery-350.jpg', tagline: 'Fast, Fun, and Up for Anything' },
    { name: '380 Open', slug: '380-open', img: 'models-gallery-380.jpg', tagline: 'The Ultimate in Center Console Performance' },
    { name: '360 Cat', slug: '360-cat', img: 'models-gallery-360.jpg', tagline: 'Pulse-Pounding Performance' },
    { name: '430 Tigress', slug: '430-tigress', img: 'models-gallery-430.jpg', tagline: 'A New Breed of Center Console Catamaran' },
    { name: '42 Ultimate', slug: '42-ultimate', img: null, tagline: 'Highly Custom V-Hull Build' },
    { name: '50 Passion', slug: '50-passion', img: null, tagline: 'Highly Custom Cat Build' },
];

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main className="home-main">
                <section className="hero">
                    <div className="hero-bg">
                        <img src={images['statement-tigress.jpg']} alt="Statement Tigress" />
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title">IT'S A CULTURE</h1>
                        <p className="hero-sub">High performance art on the water</p>
                        <a href="/designs" className="hero-btn">Explore Our Fleet</a>
                    </div>
                </section>

                <section className="intro">
                    <div className="intro-inner">
                        <h2>STATEMENT MARINE</h2>
                        <p>
                            We don't just make boats, we make Statements — each of them a singular piece of
                            high performance art that eloquently expresses its owner's unique vision.
                        </p>
                        <p>
                            We believe every Statement we make says something about what happens when technology,
                            design, and craftsmanship intersect perfectly. Something about the value of individuality,
                            of boldness, of a healthy disrespect for boundaries. Something about keeping the throttles down.
                        </p>
                        <p className="cta-line">What will you say with your Statement?</p>
                    </div>
                </section>

                <section className="models-showcase">
                    <h2>Our Fleet</h2>
                    <div className="models-row">
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

                <section className="home-cta">
                    <h2>Ready to Make Your Statement?</h2>
                    <p>Every boat is built to order. Your vision, your boat.</p>
                    <a href="/contact" className="hero-btn">Contact Us</a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
