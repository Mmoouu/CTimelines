import React from 'react';
import { Link } from 'react-router-dom';
// import CounterUp from '../counterup/CounterUp';
import { slugify } from '../../utils';



const CardanoTimelineArea2023 = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="heading">
                            <span className="subtitle">Collection</span>
                            <h2 className="title">Cardano Timeline 2023</h2>   
                            <div className="nft-full-center">
                            <a href={process.env.PUBLIC_URL + "/cardano-timeline-2023"}><img className="nft-full-center" src={process.env.PUBLIC_URL + "/images/nft/cardano-timeline-2023/CT2023_preview_wide.png"} alt="ctimelines"/></a>
                            </div>                        
                            <br></br><br></br>
                            <Link to={process.env.PUBLIC_URL + "/cardano-timeline-2023"} className="axil-btn btn-large btn-fill-primary">View Collection</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}


export default CardanoTimelineArea2023;