import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import images from '../utils/images';
import '../css/pages/designs.css';

const models = [
    { name: '350 Open', slug: '350-open', img: 'models-gallery-350.jpg', tagline: 'Fast, Fun, and Up for Anything' },
    { name: '380 Open', slug: '380-open', img: 'models-gallery-380.jpg', tagline: 'The Ultimate in Center Console Performance' },
    { name: '360 Cat', slug: '360-cat', img: 'models-gallery-360.jpg', tagline: 'Pulse-Pounding Performance' },
    { name: '430 Tigress', slug: '430-tigress', img: 'models-gallery-430.jpg', tagline: 'A New Breed of Center Console Catamaran' },
    { name: '42 Ultimate', slug: '42-ultimate', img: null, tagline: 'Highly Custom V-Hull Build' },
    { name: '50 Passion', slug: '50-passion', img: null, tagline: 'Highly Custom Cat Build' },
];

const Designs = () => {
    return (
        <div>
            <Header />
            <main className="designs-main">
                <section className="designs-hero">
                    <h1>Our Designs</h1>
                    <p>Every Statement is a singular piece of high performance art.</p>
                </section>
                <div className="models-grid">
                    {models.map((model) => (
                        <a href={`/designs/${model.slug}`} className="model-card" key={model.slug}>
                            <div className="model-card-img">
                                {model.img ? (
                                    <img src={images[model.img]} alt={model.name} />
                                ) : (
                                    <div className="model-placeholder" />
                                )}
                            </div>
                            <div className="model-card-content">
                                <h2>{model.name}</h2>
                                <p>{model.tagline}</p>
                                <span className="model-link">Explore →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Designs;
