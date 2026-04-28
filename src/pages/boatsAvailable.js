import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import '../css/pages/boats-available.css';

const BoatsAvailable = () => {
    return (
        <div>
            <Header />
            <main className="boats-main">
                <section className="boats-hero">
                    <h1>Boats Available</h1>
                    <p>Find your next Statement.</p>
                </section>
                <section className="boats-content">
                    <p className="boats-cta">
                        Contact us to learn about current inventory and build slots.
                        Every Statement is built to order — your vision, your boat.
                    </p>
                    <a href="/contact" className="btn-contact">Contact Us for Availability</a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BoatsAvailable;
