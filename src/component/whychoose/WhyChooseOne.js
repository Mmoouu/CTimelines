import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const WhyChooseOne = () => {
    return (
      <div className="section-padding bg-color-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="why-choose-us">
                <SectionTitle 
                    
                    title="Collect Them"
                    description="Put them together and you will become the owner of an NFT that will prove you are a Guardian of Cardano's history."
                    textAlignment="heading-left"
                    textColor=""
                />
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Size</Accordion.Header>
                            <Accordion.Body>
                            Description data description data description data description data.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Design</Accordion.Header>
                            <Accordion.Body>
                            Description data description data description data description data.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                            <Accordion.Body>
                            Description data description data description data description data.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="why-choose-us mb--30">
                <div className="why-choose-thumb">
                    <img src={process.env.PUBLIC_URL + "/images/nft/nft.gif"} alt="Office" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default WhyChooseOne;