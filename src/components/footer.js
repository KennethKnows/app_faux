import React, { Component } from "react";


class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                <div className="information">
                        <h2>Faux</h2>
                        <span>+63 909 532 7828</span>
                        <span>+63 909 532 7828</span>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                      <ul>
                            <li>Contact Us</li>
                            <li>Store Location</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Products</li>

                     </ul>  
                    </div>
                    <div className="social">
                        <h3>Follow Us</h3>
                        <i className="fa-brands fa-facebook"/>
                        <i className="fa-brands fa-twitter"/>
                        <i className="fa-brands fa-instagram"/>
                        <i className="fa-brands fa-linkedin"/>
                        <i className="fa-brands fa-tiktok"/>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;