import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from "react-icons/fa";

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Generate text generate text generate text generate text generate text.</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Site Map</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {/* {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))} */}
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Home</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>About Us</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Roadmap</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Cardano Timeline 2022</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Research Timeline 2022</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>GitBook</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>GitHub</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Telegram</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Collections</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Cardano</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Aldea</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>RatsDao</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. <a href="https://ctimelines.io/">CTimelines</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;