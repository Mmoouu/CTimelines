import React, { useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import { FaAngleDown } from "react-icons/fa";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const BannerCardanoTimeline2022 = () => {

    useEffect(() => {
        window.scrollTo(0, 2000);
    });

    const [ state, setState ] = useState({
        photoSelect: 0,
        isOpen: false,
    });

    return (
        <div className="banner banner-style-1">
            {state.isOpen && (
            <Lightbox
                mainSrc={process.env.PUBLIC_URL + state.photoSelect }                                
                onCloseRequest={() => setState({ photoSelect: 0, isOpen: false })}                                
            />
            )}
            <div className="container">
                {/* <div className="row align-items-center"> */}
                <div className="row align-items-end align-items-xl-start"> 
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={100}>
                                <span className="subtitle">COLLECTION</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                                <h1 className="title">Cardano<br></br>Timeline 2022</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <div className="btn-group">                                
                                <a className="axil-btn btn-fill-primary btn-large" onClick={() => setState({ photoSelect: 'images/nft/cardano-timeline-2022/cover_0B.png', isOpen: true, })}>
                                    View Infographic   
                                </a>
                                <a className="axil-btn btn-fill-buy btn-large" target={'_blank'} href="https://www.jpg.store/collection/ctimelines-cardanotimeline2022">
                                    Get on jpg.store   
                                </a>
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

export default BannerCardanoTimeline2022;
