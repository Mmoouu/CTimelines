import React from 'react';
import { Link } from 'react-router-dom';
import NftData from "../../data/nft/NftData.json";
import { slugify } from '../../utils';

const allData = NftData;

const CardanoTimeline = () => {
    return (
        <div className="section  pb--70 pb_lg--20 pb_md--0">
            <div className="container">                
                <div className="row">
                    {allData.filter(data => data.id <= 0).map((data) => (
                        <>
                        <div className="nft-timeline-config">
                            <div className="nft-timeline-grid">
                                <div className="thumbnail">
                                    <Link to={process.env.PUBLIC_URL + `/nft-details/${slugify(data.title2)}`}>
                                        <img src={process.env.PUBLIC_URL + data.thumb.md} alt={data.title2} />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link to={process.env.PUBLIC_URL + `/nft-details/${slugify(data.title2)}`}>
                                            {data.title2} NFT
                                        </Link>
                                    </h4>
                                    {/* <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span> */}
                                </div>
                            </div>
                        </div> 
                        <div className="nft-timeline-config">
                            <div className="nft-timeline-grid">
                                <div className="thumbnail">
                                    <Link to={process.env.PUBLIC_URL + `/nft-details/${slugify(data.title2)}`}>
                                        <img src={process.env.PUBLIC_URL + data.timelinePhase.phaseThumb} alt={data.title2} />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link to={process.env.PUBLIC_URL + `/nft-details/${slugify(data.title2)}`}>
                                            {data.title2}
                                        </Link>
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

export default CardanoTimeline;