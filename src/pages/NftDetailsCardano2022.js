import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import FooterSimple from '../common/footer/FooterSimple';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbNftCardano2022 from '../elements/breadcrumb/BreadCrumbNftCardano2022';
// import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import NftDataCardanoTimeline2022 from "../data/nft/NftDataCardanoTimeline2022.json";
import { slugify } from '../utils';
import Tilty from 'react-tilty';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ReactGA from 'react-ga';
import HeaderPosJpgStore from '../common/header/HeaderPosJpgStore';

const allData = NftDataCardanoTimeline2022;

const NftDetailsCardano2022 = () => {

    useEffect(() => {
        ReactGA.pageview('/nft-details-2022');
    }, []);

    const params = useParams();
    const nftSlug = params.slug;

    const getNftData = allData.filter(data => slugify(data.title2) === nftSlug);
    const detailsNft = getNftData[0];
    
    const [ state, setState ] = useState({
        photoSelect: 0,
        isOpen: false,
    });
    

    return (
        <>
        <SEO title="Team" />
        {/* <ColorSwitcher /> */}
            <main className="main-wrapper">
                <HeaderPosJpgStore />
                <BreadCrumbNftCardano2022 
                //  title={detailsTeam.title}
                 page="Nft Details"

                />
                <div className="section-padding-equal">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="nft-details-content">
                                <h4 className="title-to">{detailsNft.title1}</h4>
                                <h3 className="title">{detailsNft.title2}</h3>
                                <span className="subtitle" dangerouslySetInnerHTML={{__html: detailsNft.designation}}></span>
                                <ul className="social-share list-unstyled">
                                    <li><a target={'_blank'} href={detailsNft.social.poolPm}><img alt={'poolpm'} src={process.env.PUBLIC_URL + '/images/icon/poolpm-light.svg'}></img></a></li>
                                    <li><a target={'_blank'} href={detailsNft.social.jpgStore}><img alt={'jpgstore'} src={process.env.PUBLIC_URL + '/images/icon/jpgstore-light.svg'}></img></a></li>
                                </ul>
                                {state.isOpen && (
                                <Lightbox
                                    mainSrc={process.env.PUBLIC_URL + state.photoSelect }                                
                                    onCloseRequest={() => setState({ photoSelect: 0, isOpen: false })}                                
                                />
                                )}
                                <p dangerouslySetInnerHTML={{__html: detailsNft.dataOne }}></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="nft-details-thumb">
                                <Tilty perspective={3000} reset={false}>
                                    <img
                                    className="paralax-image"
                                    src={process.env.PUBLIC_URL + detailsNft.thumb.md}
                                    alt="Thumbnail"
                                    onClick={() => setState({ photoSelect: detailsNft.file1, isOpen: true, })}
                                    />
                                </Tilty>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div className="section-padding-equal nft-details-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="nft-details-timeline">                                    
                                    <h3 className="title">Cardano Timeline 2022</h3> 
                                    <span className="subtitle"></span>                                    
                                    <img
                                    className="paralax-image"
                                    src={process.env.PUBLIC_URL + detailsNft.timelinePhase.phase}
                                    alt="Thumbnail"
                                    onClick={() => setState({ photoSelect: detailsNft.file1, isOpen: true, })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
                <FooterSimple />
            </main>
        </>
    )
}

export default NftDetailsCardano2022;