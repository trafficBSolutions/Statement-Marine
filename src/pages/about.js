import Header from '../components/headers/homeHeader';
import Footer from '../components/footers/homeFooter';
import '../css/pages/about.css';

const About = () => {
    return (
        <div>
            <Header />
            <main className="about-main">
                <section className="about-hero">
                    <h1>Why Statement</h1>
                    <p className="tagline">We don't just make boats, we make Statements.</p>
                </section>

                <section className="about-intro">
                    <p>
                        We don't just make boats, we make Statements — each of them a singular piece of
                        high performance art that eloquently expresses its owner's unique vision.
                    </p>
                    <p>
                        But we like to think they also communicate much more than that.
                    </p>
                    <p>
                        We believe every Statement we make says something about what happens when technology,
                        design, and craftsmanship intersect perfectly. Something about the value of individuality,
                        of boldness, of a healthy disrespect for boundaries. Something about prioritizing personal
                        relationships, especially at a time when so much work is going into making them obsolete.
                        Something about always pushing, innovating tirelessly, never resting on your laurels.
                        Something about keeping the throttles down.
                    </p>
                    <p className="cta-text">What will you say with your Statement?</p>
                </section>

                <section className="about-differentiators">
                    <h2>The Low-Production, High-Quality Alternative</h2>
                    <p className="diff-intro">
                        The fact is that if you're in the market for a performance-oriented, outboard-powered
                        center console or cat you've got lots of great options to choose from. So what sets
                        Statement apart?
                    </p>

                    <div className="diff-grid">
                        <div className="diff-card">
                            <h3>+ Personalized Experience</h3>
                            <p>
                                When you buy a Statement, you become a partner in the design/build process,
                                working closely with us directly or through your dealer to spec every detail.
                                Our goal is to build every customer exactly the boat they want. Our business
                                model allows us to offer an experience that larger builders simply can't.
                            </p>
                        </div>
                        <div className="diff-card">
                            <h3>+ Emphasis on Craftsmanship</h3>
                            <p>
                                Boat building is more craftsmanship than manufacturing, and we put a high
                                priority on finding and keeping the best craftsmen in the business. In a
                                business notorious for high turnover, our rigging and lamination teams have
                                an average of 10 years with Statement.
                            </p>
                        </div>
                        <div className="diff-card">
                            <h3>+ Exceptional Value in Class</h3>
                            <p>
                                Performance boats aren't cheap — not ours or anybody else's. Our goal at
                                Statement is simply to make sure our customers get maximum bang for their buck.
                                We invite you to compare a Statement apples-to-apples against any boat in its
                                class and decide for yourself where the best value is.
                            </p>
                        </div>
                        <div className="diff-card">
                            <h3>+ Hands-on Leadership</h3>
                            <p>
                                Statement is a small, family-owned, independent boat builder. Our hands-on
                                owners and managers are in the shop every day, working on boats, communicating
                                with customers, and guiding operations like purchasing. If you want to talk to
                                the owner, just call the shop anytime during business hours.
                            </p>
                        </div>
                        <div className="diff-card">
                            <h3>+ Distinctive Aesthetics</h3>
                            <p>
                                At the end of the day, one of the biggest factors in your boat buying decision
                                is personal taste. All the quality and value in the world don't mean much if
                                you don't love the way a boat looks and performs. We work hard to design boats
                                that turn heads. Do they turn yours?
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
