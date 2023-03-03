import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import PricingOne from '../component/pricing/PricingOne';
import ProjectOne from '../component/project/ProjectOne';
import CaseStudyProp from '../component/casestudy/CaseStudyProp';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import Testimonial from '../component/testimonial/Testimonial';
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from '../utils';

const allData = TestimonialData;

const Index = () => {

    const ctimelinesData = allData.filter(data => slugify(data.fromtext) === "ctimelines");

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
            {/* section*/}
            <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area bg-color-light">
                <div className="container">
                    <CaseStudyProp />
                </div>
            </div>
            {/* section */}
            <div className="section section-padding customer-review-area bg-color-dark overflow-hidden">
                <div className="container">                   
                    <Testimonial colSize="col-lg-12" itemShow="1" layoutStyle="testimonial-light" testimonialData={ctimelinesData} />
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                </ul>
            </div>
            {/* section */}            
            <ProjectOne colSize="col-xl-4 col-md-6" columnGap="row-15"/>
            <CounterUpOne />
            <TestimonialOne />
            <div className="section bg-color-light section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Pricing Plan"
                        title="We’ve built solutions for..."
                        description="Flexible pricing options for freelancers
                        and design teams."
                        textAlignment=""
                        textColor=""
                    />
                    <PricingOne />
                </div>
                <ul className="list-unstyled shape-group-3">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="shape" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
                </ul>
            </div>
            <BrandOne />
            <BlogOne />
            <CtaLayoutOne /> 
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default Index;

