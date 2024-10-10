import React from 'react';

const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/others/jp-lars.png"} alt="JP-lars" />
                        <p className='pie_de_foto'><span>"Photograph with Lars Brünjes (Education Director at IOG) at the Cardano Plutus Hackathon 2022 in Buenos Aires, Argentina"</span></p>
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
                <div className="row">
                    <img src={process.env.PUBLIC_URL + "/images/others/cardano-summit.png"} alt="Cardano Summit" /> 
                    <div className="col-xl-12 col-lg-12"> 
                        <p className='pie_de_foto'><span>"Cardano Summit 2022 in Buenos Aires, Argentina"</span></p> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;