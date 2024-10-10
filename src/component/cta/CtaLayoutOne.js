import React from 'react';

const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        {/* <span className="subtitle">Contact Us</span> */}
                        <h2 className="title">Join Us</h2>
                    </div>
                    <div className="footer-top">
                        <div className="footer-social-link">
                            <ul className="list-unstyled">
                                <li><a target={'_blank'} href="https://twitter.com/CTimelines_io"><img src={process.env.PUBLIC_URL + "/images/icon/twitter-dark.svg"} alt="twitter"/></a></li>
                                <li><a target={'_blank'} href="https://t.me/ctimelines"><img src={process.env.PUBLIC_URL + "/images/icon/telegram-dark.svg"} alt="telegram"/></a></li>
                                <li><a target={'_blank'} href="https://www.youtube.com/channel/UCp4RuX6EgQQ8MsVVM0PLJDw"><img src={process.env.PUBLIC_URL + "/images/icon/youtube-dark.svg"} alt="youtube"/></a></li>
                                <li><a target={'_blank'} href="https://doc.ctimelines.io/"><img src={process.env.PUBLIC_URL + "/images/icon/gitbook-dark.svg"} alt="gitbook"/></a></li>
                                <li><a target={'_blank'} href="https://www.jpg.store/collection/ctimelines-cardanotimeline2022"><img src={process.env.PUBLIC_URL + "/images/icon/jpgstore-dark.svg"} alt="jpg-store"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img className="paralax-image" src={process.env.PUBLIC_URL + "/images/others/chat-group.png"} alt="Chat" />
                        </div>
                        <ul className="list-unstyled small-thumb">
                            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                                <img className="paralax-image" src={process.env.PUBLIC_URL + "/images/others/laptop-poses.png"} alt="Laptop" />
                            </li>
                            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                                <img className="paralax-image" src={process.env.PUBLIC_URL + "/images/others/bill-pay.png"} alt="Bill" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"} alt="Comments" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"} alt="Comments" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Comments" /></li>
                <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Comments" /></li>
                <li className="shape shape-7"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;