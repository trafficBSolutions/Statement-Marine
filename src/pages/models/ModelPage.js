import Header from '../../components/headers/homeHeader';
import Footer from '../../components/footers/homeFooter';
import images from '../../utils/images';
import '../../css/pages/model.css';

const ModelPage = ({ name, subtitle, heroImg, description, highlights, specs, features, options }) => {
    return (
        <div>
            <Header />
            <main className="model-main">
                <section className="model-hero">
                    {heroImg && images[heroImg] && (
                        <img className="model-hero-img" src={images[heroImg]} alt={name} />
                    )}
                    <div className="model-hero-overlay">
                        <h1>{name}</h1>
                        <p className="model-subtitle">{subtitle}</p>
                    </div>
                </section>

                <section className="model-intro">
                    <p className="model-description">{description}</p>
                    {highlights && highlights.map((h, i) => (
                        <div className="model-highlight" key={i}>
                            <h3>{h.title}</h3>
                            <p>{h.text}</p>
                        </div>
                    ))}
                </section>

                {specs && (
                    <section className="model-specs-section">
                        <h2>Specifications</h2>
                        <div className="specs-grid">
                            {Object.entries(specs).map(([key, value]) => (
                                <div className="spec-item" key={key}>
                                    <span className="spec-value">{value}</span>
                                    <span className="spec-label">{key}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {features && (
                    <section className="model-features">
                        <h2>Standard Features</h2>
                        <div className="features-grid">
                            {Object.entries(features).map(([category, items]) => (
                                <div className="feature-group" key={category}>
                                    <h3>{category}</h3>
                                    <ul>
                                        {items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {options && (
                    <section className="model-options">
                        <h2>Options &amp; Customization</h2>
                        <div className="options-grid">
                            {Object.entries(options).map(([category, items]) => (
                                <div className="option-group" key={category}>
                                    <h3>{category}</h3>
                                    <ul>
                                        {items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="model-cta">
                    <h2>Make It Yours</h2>
                    <p>Every Statement is built to your exact specifications.</p>
                    <a href="/contact" className="cta-btn">Inquire About the {name}</a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ModelPage;
