import React, { useEffect} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const BannerHome = () => {

    useEffect(() => {
        window.scrollTo(0, 2000);
    });

    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">Cardano's History deserves to be preserved</h1>
                                <span className="subtitle">Our mission is to disseminate, through NFT collection type infographics, the historical development of our vast ecosystem.</span>
                                <a href="https://cardano.ideascale.com/c/idea/102971" className="axil-btn btn-fill-promo btn-large">Fund 10 Proposal</a>
                                <Link to={process.env.PUBLIC_URL + "/cardano-timeline-2023"} className="axil-btn btn-fill-primary btn-large">Cardano Timeline 2023</Link>
                                
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={1} delay={50} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/timeline-banner.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            {/* <AnimationOnScroll animateIn="slideInRight" duration={2} delay={1500} animateOnce={true}> */}
                            <div className="large-thumb-2-absolute">
                                <img src={process.env.PUBLIC_URL + "/images/banner/cardano-banner.png"} alt="Cardano" />
                            </div>
                            {/* </AnimationOnScroll>                          */}
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={2} delay={700} animateOnce={true}>
                                        <img src={process.env.PUBLIC_URL + "/images/banner/torta-banner.png"} alt="chat" />
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14-2.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14-3.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerHome;