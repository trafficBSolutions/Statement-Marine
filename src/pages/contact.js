import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import '../css/pages/contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <main className="contact-main">
                <section className="contact-hero">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you.</p>
                </section>
                <section className="contact-content">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Whether you're ready to build your Statement or just want to learn more, reach out anytime.</p>
                        <div className="contact-details">
                            <p><strong>Phone:</strong> <a href="tel:+17275255235">727.525.5235</a></p>
                            <p><strong>Email:</strong> <a href="mailto:statementmarine@gmail.com">statementmarine@gmail.com</a></p>
                            <p><strong>Address:</strong> 1979 Wild Acres Road, Largo, Florida 33771</p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone" />
                        <select defaultValue="">
                            <option value="" disabled>Interested Model</option>
                            <option>350 Open</option>
                            <option>380 Open</option>
                            <option>360 Cat</option>
                            <option>430 Tigress</option>
                            <option>42 Ultimate</option>
                            <option>50 Passion</option>
                        </select>
                        <textarea placeholder="Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
