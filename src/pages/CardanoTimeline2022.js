import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderNegJpgStore from '../common/header/HeaderNegJpgStore';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColecctionCardanoTimeline2022 from '../component/timelines/ColecctionCardanoTimeline2022';
import SectionCardanoTimeline2022 from '../component/timelines/SectionCardanoTimeline2022';
import TokenomicsOne from '../component/tokenomics/TokenomicsOne';
import TokenomicsTwo from '../component/tokenomics/TokenomicsTwo';
import TokenomicsThree from '../component/tokenomics/TokenomicsThree';
import BannerYouTube2022 from '../component/banner/BannerYouTube2022';
import BannerCardanoTimeline2022 from '../component/banner/BannerCardanoTimeline2022';
import RoadMapCTimelines2023 from '../component/roadmap/RoadMapTimelines';
import ReactGA from 'react-ga';

const CardanoTimeline2022 = () => {

    useEffect(() => {
        ReactGA.pageview('/cardano-timeline');
    }, []);

    return (
        <>
        <SEO title="Cardano Timeline 2022" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderNegJpgStore />
            <BannerCardanoTimeline2022 />
            <div className="youtube-content bg-color-light">   
                <BannerYouTube2022 /> 
            </div>  
            <ColecctionCardanoTimeline2022 />
            <SectionCardanoTimeline2022 />
            <TokenomicsOne/>
            <TokenomicsTwo/>
            <TokenomicsThree/> 
            <RoadMapCTimelines2023/>                

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

export default CardanoTimeline2022;