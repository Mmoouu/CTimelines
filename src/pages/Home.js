import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BannerHome from '../component/banner/BannerHome';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import CardanoTimelineEras from '../component/timelines/CardanoTimelineEras';
import RoadMap from '../component/roadmap/RoadMap';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import WhyChooseOne from '../component/whychoose/WhyChooseOne';
import Testimonial from '../component/testimonial/Testimonial';
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from '../utils';
import ReactGA from 'react-ga';

const allData = TestimonialData;

const Home = () => {

    useEffect(() => {
        ReactGA.pageview('/home');
    }, []);

    const ctimelinesData = allData.filter(data => slugify(data.fromtext) === "ctimelines");

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerHome />
            {/* section*/}
            <div className=" bg-color-light">
                <div className="container">
                    <CardanoTimelineEras />
                </div>
            </div>
            {/* section */}            
            {/* <ProjectOne colSize="col-xl-4 col-md-6" columnGap="row-15"/> */}
            {/* <WhyChooseOne /> */}
            <RoadMap />
            <CtaLayoutOne /> 
        <FooterSimple />
        </main>
        </>
    )
}

export default Home;

