import React from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderOne from '../common/header/HeaderOne';
import HeaderTwo from '../common/header/HeaderTwo';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServiceProp from '../component/service/ServiceProp';
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from '../utils';
import ColecctionTimelineEras from '../component/timelines/CollectionTimelineEras';
import CardanoTimeline from '../component/timelines/CardanoTimeline';
import TokenomicsOne from '../component/tokenomics/TokenomicsOne';
import TokenomicsTwo from '../component/tokenomics/TokenomicsTwo';
import TokenomicsThree from '../component/tokenomics/TokenomicsThree';
import BannerCardanoTimeline from '../component/banner/BannerCardanoTimeline';

const allData = ServiceData;


const CardanoTimeline2022 = () => {

    // const designData = allData.filter(data => slugify(data.cate ? data.cate : "") === "design");
    // const developmentData = allData.filter(data => slugify(data.cate ? data.cate : "") === "development");
    // const marketingData = allData.filter(data => slugify(data.cate ? data.cate : "") === "online-marketing");
    // const businessData = allData.filter(data => slugify(data.cate ? data.cate : "") === "business");
    // const technologyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "technology");
    // const strategyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "content-strategy");



    return (
        <>
        <SEO title="Cardano Timeline 2022" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderTwo />
            <BannerCardanoTimeline />
            
            {/* <div className="service-scroll-navigation-area"> */}

                {/* Service Nav */}
                
                {/* <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
                    <div className="container">
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#section1">Design</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2">Development</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section3">Online Marketing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section4">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section5">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section6">Content Strategy</a>
                        </li>
                        </ul>
                    </div>
                </nav> */}

                <ColecctionTimelineEras />
                <CardanoTimeline />
                <TokenomicsOne/>
                <TokenomicsTwo/>
                <TokenomicsThree/>                

                <div className="section section-padding" id="section1">
                    <div className="container">
                    </div>
                </div>
                 
            {/* </div> */}
            <CtaLayoutOne />
            <FooterSimple />
        </main>
        </>
    )
}

export default CardanoTimeline2022;