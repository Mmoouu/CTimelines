import React from 'react';
// import { Link } from 'react-router-dom';
// import NftDataCardanoTimeline2023 from "../../data/nft/NftDataCardanoTimeline2023.json";
// import { slugify } from '../../utils';

// const allData = NftDataCardanoTimeline2023;

const ColecctionCardanoTimeline2023 = () => {
    return (
        <div className="section section-padding pb--70 pb_lg--20 pb_md--0">
            <div className="container">
                <div className="section-heading heading-dark">
                    <span className="subtitle">Collection</span>
                    <h2 className="title mb--50">Cardano Timeline 2023</h2>
                    {/* <a target={'_blank'} href="https://cardanoscan.io/tokenPolicy/981f0f1026cfa151e4f07b46ff5763a9a1e881094764b21dcd15c5f9">Policy ID: 981f0f1026cfa151e4f07b46ff5763a9a1e881094764b21dcd15c5f9</a> */}
                    {/* <br></br><br></br>
                    <p>Collect in your wallet the 6 NFTs fragments that represent each Era of Cardano.
                    For those who meet this condition when the snapshot is taken,
                    will be rewarded with a Cardano Timeline 2022 NFT.
                    Delivery will be made vía airdrop.
                    </p> */}
                </div>
                {/* <div className="row">
                    {allData.filter(data => data.id >= 1).map((data) => (
                        <div className="col-xl-2 col-sm-6" key={data.id}>
                            <div className="nft-grid">
                                <div className="thumbnail">
                                    <Link to={process.env.PUBLIC_URL + `/nft-details/${slugify(data.title2)}`}>
                                        <img src={process.env.PUBLIC_URL + data.thumb.sm} alt={data.title2} />
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
                    ))}
                </div> */}
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>

    )
}

export default ColecctionCardanoTimeline2023;