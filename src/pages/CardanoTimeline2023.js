import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderNeg from '../common/header/HeaderNeg';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColecctionCardanoTimeline2023 from '../component/timelines/ColecctionCardanoTimeline2023';
import SectionCardanoTimeline2023 from '../component/timelines/SectionCardanoTimeline2023';
import BannerCardanoTimeline2023 from '../component/banner/BannerCardanoTimeline2023';
import BannerYouTube2023 from '../component/banner/BannerYouTube2023';
import ReactGA from 'react-ga';

const CardanoTimeline2023 = () => {

    useEffect(() => {
        ReactGA.pageview('/cardano-timeline');
    }, []);

    return (
        <>
        <SEO title="Cardano Timeline 2022" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderNeg />
            <BannerCardanoTimeline2023 />
            <div className="youtube-content bg-color-light">   
                <BannerYouTube2023 /> 
            </div>  
            <ColecctionCardanoTimeline2023 />
            <SectionCardanoTimeline2023 />             

            <div className="section section-padding" id="section1">
                <div className="container">
                </div>
            </div>
                 
            <CtaLayoutOne />
            <FooterSimple />
        </main>
        </>
    )
}

export default CardanoTimeline2023;