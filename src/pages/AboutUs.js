import React, { useEffect } from 'react';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderPos from '../common/header/HeaderPos';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import AboutText from '../component/about/AboutText';
import TeamOne from '../component/team/TeamOne';
import ReactGA from 'react-ga';


const AboutUs = () => {

    useEffect(() => {
        ReactGA.pageview('/about-us');
    }, []);

    return (
        <>
        <SEO title="About Us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderPos />
                <BcrumbBannerOne 
                title="Preserving the</br> history of the<br>Cardano ecosystem"
                paragraph ="We design and develop thematic infographics of the Cardano's history."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <AboutText />
                <TeamOne />
                <CtaLayoutOne />
                <FooterSimple />
            </main>
        </>
    )
}

export default AboutUs;