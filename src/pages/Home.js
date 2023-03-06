import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BannerHome from '../component/banner/BannerHome';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import CardanoTimelineEras from '../component/timelines/CardanoTimelineEras';
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
            <HeaderOne />
            <BannerHome />
            <div className=" bg-color-light">
                <div className="container">
                    <CardanoTimelineEras />
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

