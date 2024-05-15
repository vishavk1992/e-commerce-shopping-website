import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            <section className="subcribe-block space">
                <div className="container">
                    <div className='footer-top'>
                        <div className="subcribe-row">
                            <div className="subcribe-content">
                                <h3>Subscribe Our Newsletter</h3>
                                <p>Subscribe to our newsletter for the latest updates.</p>
                            </div>
                            <div className="subcribe-form">
                                <form>
                                    <input type="Email" name="email" placeholder="Enter Email Address" />
                                    <button type="button">SUBCRIBE <i className="fas fa-arrow-right"></i> </button>
                                </form>
                            </div>
                            <div className='media-icon'>
                                <span className='icons'><a href='https://www.facebook.com/'><FaFacebook /></a></span>
                                <span className='icons'><Link to ="https://twitter.com/i/flow/login"><FaTwitter /></Link></span>
                                <span className='icons'><Link to="https://www.instagram.com/"><FaInstagram /></Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;