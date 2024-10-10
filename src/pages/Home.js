import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderPos from '../common/header/HeaderPos';
import SEO from '../common/SEO';
import BannerHome from '../component/banner/BannerHome';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import CardanoTimelineArea2022 from '../component/timelines/CardanoTimelineArea2022';
import CardanoTimelineArea2023 from '../component/timelines/CardanoTimelineArea2023';
import RoadMap from '../component/roadmap/RoadMap';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ReactGA from 'react-ga';

const Home = () => {

    useEffect(() => {
        ReactGA.pageview('/home');
    }, []);

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderPos />            
            <BannerHome />
            <div className="bg-color-light-two">        
            <div className="container">                
                <CardanoTimelineArea2023 />
            </div>  
            </div>  
            <div className=" bg-color-light">                               
                <div className="container">                
                    <CardanoTimelineArea2022 />
                </div>
            </div>
            <RoadMap />
            <CtaLayoutOne /> 
            <FooterSimple />
        </main>
        </>
    )
}

export default Home;

