import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import NftDataCardanoTimeline2023 from "../../data/nft/NftDataCardanoTimeline2023.json";
// import { slugify } from '../../utils';
import Lightbox from 'react-image-lightbox';

const allData = NftDataCardanoTimeline2023;

const SectionCardanoTimeline2023 = () => {

    const [ state, setState ] = useState({
        photoSelect: 0,
        isOpen: false,
    });

    return (
        <div className="section  pb--70 pb_lg--20 pb_md--0">
            <div className="container">                
                <div className="row">
                    {allData.filter(data => data.id <= 0).map((data) => (
                        <> 
                        <div className="nft-timeline-config-alone">
                            <div className="nft-timeline-grid">
                                <div className="thumbnail">
                                    {state.isOpen && (
                                        <Lightbox
                                        mainSrc={process.env.PUBLIC_URL + state.photoSelect }                                
                                        onCloseRequest={() => setState({ photoSelect: 0, isOpen: false })}                                
                                        />
                                    )}
                                    
                                    <img
                                    className="cursor-pointer border-radius"
                                    onClick={() => setState({ photoSelect: 'images/nft/cardano-timeline-2023/cover_0B.png', isOpen: true, })}
                                    src={process.env.PUBLIC_URL + data.timelinePhase.phaseThumb} alt={data.title2}
                                    />
                                   
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a
                                        className="cursor-pointer"
                                        onClick={() => setState({ photoSelect: 'images/nft/cardano-timeline-2023/cover_0B.png', isOpen: true, })}
                                        >
                                            {data.title2}
                                        </a>
                                    </h4>
                                    <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                                </div>
                            </div>
                        </div> 
                        </>                                                 
                    ))}
                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>                
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-6.png"} alt="Circle" /></li>
            </ul>
        </div>

    )
}

export default SectionCardanoTimeline2023;