import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/others/case-study-4.png"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Who we are</span>
                            <h2 className="title">Community members,<br></br> just like you!</h2>
                            <p>We are a team aligned with the principles and values ​​of Cardano.<br></br><br></br>We seek to facilitate the onboarding of new users to our ecosystem. Helping them to understand and have a macro (and comprenhensive) vision of Cardano.<br></br><br></br>We compile and consolidate the most important milestones. Then we disseminate them as educational content, in the form of infographics and NFT collections.</p>
                            {/* <p>Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p> */}
                            {/* <Link to="#" className="axil-btn btn-fill-primary btn-large">Read More</Link> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;