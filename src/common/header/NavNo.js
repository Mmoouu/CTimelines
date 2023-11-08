import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown, FaTwitter } from "react-icons/fa";



const NavNo = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><NavLink className={"isActive"} to={process.env.PUBLIC_URL + "/"}>Home</NavLink></li>
                {/* <li className="menu-item-has-children">
                    <Link to="#">Home <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/service-one"}>Service</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/service-two"}>Service Two</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/service-details/design"}>Service Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Two Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-two"}>Three Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-three"}>Four Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-one"}>Three Column Width</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-two"}>Four Column Width</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-details/plan-management"}>Portfolio Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-office"}>Our Office</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-study"}>Case Study</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Clients</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/testimonials"}>Testimonial</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pricing-table"}>Pricing Table</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/1"}>Standard Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/2"}>Gallery Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/3"}>Video Post</Link></li>
                    </ul>
                </li> */}
                <li className="menu-item-has-children">
                    <Link to="#">Collections<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/cardano-timeline-2022"}>Cardano Timeline 2022</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/cardano-timeline-2023"}>Cardano Timeline 2023</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/coming-soon"}>Research Timeline 2023</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to={process.env.PUBLIC_URL + "/about-us"}>About Us</NavLink></li>
                <li><a target={'_blank'} href="https://doc.ctimelines.io/">Docs</a></li>
                {/* <li><a target={'_blank'} href="https://www.jpg.store/collection/ctimelines-cardanotimeline2022">Buy on <img alt={'jpgstore'} src={process.env.PUBLIC_URL + '/images/icon/jpgstore-light.svg'}></img></a></li> */}
                {/* <li className="menu-item-has-children button_buy">
                    <a target={'_blank'} href="https://www.jpg.store/collection/ctimelines-cardanotimeline2022">Get on jpg.store </a>
                </li> */}
                                                   
                <a className="twitter-icon" target={'_blank'} href="https://twitter.com/CTimelines_io"><FaTwitter /></a>
                
                {/* <li className="menu-item-has-children button_buy">on
                    <Link to="#">Mint<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><a target={'_blank'} href="https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncWpzdmIzdHo3bWVzNGY2djZlYWc3azciLCJwaGFzZV9pZCI6IjAxZ3RhZHJwOTZzYmg4Z2dhbWQ3MDJteG1lIiwicHJpY2VfaWQiOiIwMWd0YWRycDkzNDc1end6dmJmaDJ5djd4MiIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrZWUveVVLOS9BMzFJbVRhaTE3UFFqNXVVTGdmYS9HeGc0T0lsQml4cmFxdlFKUVBHekhVVXZvQXRHT21NbTdGRGNuV1JQa0N3aGtGcmJ4VDQ2Slh5QnBFcDJlaEtsU3dpbGt2UUIxVFZBZz09In0">1xNFT 30 ADA</a></li>
                        <li><a target={'_blank'} href="https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncWpzdmIzdHo3bWVzNGY2djZlYWc3azciLCJwaGFzZV9pZCI6IjAxZ3RhZHJwOTZzYmg4Z2dhbWQ3MDJteG1lIiwicHJpY2VfaWQiOiIwMWd0YWRycDkzODRjZDRidjZ2MzlwYjB4MiIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrZWUveVVLOS9BMzFJbVRhaTE3UFFqNXVVTGdmYS9HeGc0T0lsQml4cmFxdlFKUVBHekhVVXZvQXRHT21NbTdGRGNuV1JQa0N3aGtGcmJ4VDQ2Slh5QnBFcDJlaEtsU3dpbGt2UUIxVFZBZz09In0">3xNFT 75 ADA</a></li>
                    </ul>
                </li> */}
                                
            </ul>
        </nav>
    )
}

export default NavNo;