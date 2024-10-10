import React from 'react';
import { Link } from 'react-router-dom';
// import CounterUp from '../counterup/CounterUp';
import NftDataCardanoTimeline2022 from "../../data/nft/NftDataCardanoTimeline2022.json";
import { slugify } from '../../utils';

const allData = NftDataCardanoTimeline2022;

const CardanoTimelineArea2022 = () => {
    return (
        <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="heading-left">
                            <span className="subtitle">Collection</span>
                            <h2 className="title">Cardano Timeline 2022</h2>
                            <p className="mb--50">The history of our ecosystem has been fragmented.<br></br>Put the 6 NFT era pieces together and become a Guardian of Cardano´s history.</p>
                            <div className="nfts-eras">
                                <ul>
                                {allData.filter(data => data.id >= 1).map((data) => (
                                    <li><Link to={process.env.PUBLIC_URL + `/nft-details-2022/${slugify(data.title2)}`}><img src={process.env.PUBLIC_URL + data.thumb.sm} alt="ctimelines"/></Link></li>                  
                                ))}
                                </ul>
                            </div>
                            <br></br>
                            <Link to={process.env.PUBLIC_URL + "/cardano-timeline-2022"} className="axil-btn btn-large btn-fill-primary">View Collection</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="nft-full">
                            <a href={process.env.PUBLIC_URL + "/nft-details-2022/cardano-timeline-2022"}><img src={process.env.PUBLIC_URL + "/images/nft/cardano-timeline-2022/cover_0A_600px.gif"} alt="ctimelines"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardanoTimelineArea2022;