import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Tilty from 'react-tilty';
import { FaAngleDown } from "react-icons/fa";
import { slugify } from '../../utils';


const BannerCardanoTimeline = () => {

    useEffect(() => {
        window.scrollTo(0, 2000);
    });

    return (
        <div className="banner banner-style-1">
            <div className="container">
                {/* <div className="row align-items-center"> */}
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={100}>
                                <span className="subtitle">NFT COLLECTION</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                                <h1 className="title">Cardano<br></br>Timeline 2022</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <div className="btn-group">
                                <Link className="axil-btn btn-fill-primary btn-large" to={process.env.PUBLIC_URL + `/nft-timeline-details/cardano-timeline-2022-nft`}>
                                    View Infographic   
                                </Link>
                                <ul className="mainmenu">
                                    <li className="menu-item-has-children button_mint_banner">
                                        <Link to="#">Mint<FaAngleDown /></Link>
                                        <ul className="axil-submenu">
                                            <li><a target={'_blank'} href="https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncWpzdmIzdHo3bWVzNGY2djZlYWc3azciLCJwaGFzZV9pZCI6IjAxZ3RhZHJwOTZzYmg4Z2dhbWQ3MDJteG1lIiwicHJpY2VfaWQiOiIwMWd0YWRycDkzNDc1end6dmJmaDJ5djd4MiIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrZWUveVVLOS9BMzFJbVRhaTE3UFFqNXVVTGdmYS9HeGc0T0lsQml4cmFxdlFKUVBHekhVVXZvQXRHT21NbTdGRGNuV1JQa0N3aGtGcmJ4VDQ2Slh5QnBFcDJlaEtsU3dpbGt2UUIxVFZBZz09In0">1xNFT 30 ADA</a></li>
                                            <li><a target={'_blank'} href="https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncWpzdmIzdHo3bWVzNGY2djZlYWc3azciLCJwaGFzZV9pZCI6IjAxZ3RhZHJwOTZzYmg4Z2dhbWQ3MDJteG1lIiwicHJpY2VfaWQiOiIwMWd0YWRycDkzODRjZDRidjZ2MzlwYjB4MiIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrZWUveVVLOS9BMzFJbVRhaTE3UFFqNXVVTGdmYS9HeGc0T0lsQml4cmFxdlFKUVBHekhVVXZvQXRHT21NbTdGRGNuV1JQa0N3aGtGcmJ4VDQ2Slh5QnBFcDJlaEtsU3dpbGt2UUIxVFZBZz09In0">3xNFT 75 ADA</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/timelines-banner-two.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            {/* <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}> */}
                            <div className="large-thumb-2-absolute">
                                <img src={process.env.PUBLIC_URL + "/images/banner/timelines-banner-one.png"} alt="Laptop" />
                            </div>
                            {/* </AnimationOnScroll> */}
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}>
                                        <img src={process.env.PUBLIC_URL + "/images/banner/timelines-banner-three.png"} alt="chat" />
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-20">
                <li className="shape shape-1">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-32.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
                </li>
                <li className="shape shape-8 marque-images" />
            </ul>
        </div>

    )
}

export default BannerCardanoTimeline;
