import footerImage from "../assets/foot.webp";
function Footer() {
    return (
       <footer
    className="footer"
    style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
>
            <div className="container">
                <div className="row gy-5">

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h4>Quick Links</h4>

                        <ul className="footer-links">
                            <li><a href="/">HOME</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#">BOOK A SESSION</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-4 col-md-6">

                        <h4>Contact Info</h4>

                        <div className="contact-box">

                            <div className="icon-circle">
                                <i className="bi bi-headset"></i>
                            </div>

                            <div>
                                <span className="small-text">
                                    Need Any Help?
                                </span>

                                <h3>(+234) 706 242 8236</h3>
                            </div>

                        </div>

                        <p>Plot 7 Block 95, Omorinre Johnson Street</p>
                        <p>Lekki Phase 1, Lekki, Lagos.</p>
                        <p><strong>E-mail:</strong> info@atafo.africa</p>

                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-5">

                        <h4>Newsletter</h4>

                        <p>
                            Join our mailing list for access to brand experience and updates
                        </p>

                        <div className="newsletter">

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                            <button>
                                SUBSCRIBE
                            </button>

                        </div>

                        <div className="socials">

                            <a
                                href="https://www.facebook.com/maiatafo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="https://x.com/atafo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                            <a
                                href="https://www.pinterest.com/maiatafo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-pinterest"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/atafo__/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;