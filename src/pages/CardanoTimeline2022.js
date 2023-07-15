import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderTwo from '../common/header/HeaderTwo';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColecctionTimelineEras from '../component/timelines/CollectionTimelineEras';
import CardanoTimeline from '../component/timelines/CardanoTimeline';
import TokenomicsOne from '../component/tokenomics/TokenomicsOne';
import TokenomicsTwo from '../component/tokenomics/TokenomicsTwo';
import TokenomicsThree from '../component/tokenomics/TokenomicsThree';
import BannerCardanoTimeline from '../component/banner/BannerCardanoTimeline';
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
            <HeaderTwo />
            <BannerCardanoTimeline />

            <ColecctionTimelineEras />
            <CardanoTimeline />
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