import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderPos from '../common/header/HeaderPos';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import TeamData from "../data/team/TeamData.json";
import { slugify } from '../utils';
import Tilty from 'react-tilty';
import ReactGA from 'react-ga';

const allData = TeamData;

const TeamDetails = () => {

    useEffect(() => {
        ReactGA.pageview('/team-details');
    }, []);

    const params = useParams();
    const teamSlug = params.slug;

    const getTeamData = allData.filter(data => slugify(data.title) === teamSlug);
    const detailsTeam = getTeamData[0];

    return (
        <>
        <SEO title="Team" />
        {/* <ColorSwitcher /> */}
            <main className="main-wrapper">
                <HeaderPos />
                <BreadCrumbOne 
                //  title={detailsTeam.title}
                 page="Team Details"

                />
                <div className="section-padding-equal team-details-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-details-content">
                            <h2 className="title">{detailsTeam.title}</h2>
                            <span className="subtitle" dangerouslySetInnerHTML={{__html: detailsTeam.designation}}></span>
                            <ul className="social-share list-unstyled"> 
                                { detailsTeam.social.linkedin && <li><a target={'_blank'} href={detailsTeam.social.linkedin}><img alt={'linkedin'} src={process.env.PUBLIC_URL + '/images/icon/linkedin-light.svg'}></img></a></li> }
                                { detailsTeam.social.twitter && <li><a target={'_blank'} href={detailsTeam.social.twitter}><img alt={'twitter'} src={process.env.PUBLIC_URL + '/images/icon/twitter-light.svg'}></img></a></li> }
                                { detailsTeam.social.instagram && <li><a target={'_blank'} href={detailsTeam.social.instagram}><img alt={'instagram'} src={process.env.PUBLIC_URL + '/images/icon/instagram-light.svg'}></img></a></li> }
                                { detailsTeam.social.telegram && <li><a target={'_blank'} href={detailsTeam.social.telegram}><img alt={'telegram'} src={process.env.PUBLIC_URL + '/images/icon/telegram-light.svg'}></img></a></li> }
                                { detailsTeam.social.behance && <li><a target={'_blank'} href={detailsTeam.social.behance}><img alt={'behance'} src={process.env.PUBLIC_URL + '/images/icon/behance-light.svg'}></img></a></li> }                             
                            </ul> 
                            <p dangerouslySetInnerHTML={{__html: detailsTeam.description }}></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details-thumb">
                            <Tilty perspective={3000} reset={false}>
                                <img className="paralax-image" src={process.env.PUBLIC_URL + detailsTeam.thumb} alt="Thumbnail" />
                            </Tilty>
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

export default TeamDetails;