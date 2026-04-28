import '../../css/footer.css';
import images from '../../utils/images';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-divider">
                <img className="footer-dragon" src={images['Statement Marine Dragon.svg']} alt="Statement Marine Dragon" />
                </div>
                <div className="footer-divider">
            <p className="footer-brand">STATEMENT MARINE LLC</p>
                <p className="footer-contact">
                    <a href="tel:+17275255235">727.525.5235</a>
                    <span className="divider">|</span>
                    <a href="mailto:statementmarine@gmail.com">statementmarine@gmail.com</a>
                </p>
                <p className="footer-address">1979 Wild Acres Road, Largo, Florida 33771</p>
                </div>
            </div>
            <div className="footer-copyright">
      <p className="footer-copy-p">&copy; 2026 Statement Marine LLC - 
         Website Created by <a className="footer-face" href="https://www.material-worx.com/portfolio" target="_blank" rel="noopener noreferrer">MX Systems</a> - All Rights Reserved.</p>
    </div>
        </footer>
    );
};

export default Footer;
