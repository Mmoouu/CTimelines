import React from 'react';
import {useParams} from 'react-router-dom';
import FooterSimple from '../common/footer/FooterSimple';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import TeamData from "../data/team/TeamData.json";
import { slugify } from '../utils';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram, FaVimeoV, FaDribbble, FaBehance } from "react-icons/fa";
import Tilty from 'react-tilty';

const allData = TeamData;

const TeamDetails = () => {

    const params = useParams();
    const teamSlug = params.slug;

    const getTeamData = allData.filter(data => slugify(data.title) === teamSlug);
    const detailsTeam = getTeamData[0];

    return (
        <>
        <SEO title="Team" />
        {/* <ColorSwitcher /> */}
            <main className="main-wrapper">
                <HeaderOne />
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
                                { detailsTeam.social.linkedin && <li><a target={'_blank'} href={detailsTeam.social.linkedin}><img src={process.env.PUBLIC_URL + '/images/icon/linkedin-light.svg'}></img></a></li> }
                                { detailsTeam.social.twitter && <li><a target={'_blank'} href={detailsTeam.social.twitter}><img src={process.env.PUBLIC_URL + '/images/icon/twitter-light.svg'}></img></a></li> }
                                { detailsTeam.social.instagram && <li><a target={'_blank'} href={detailsTeam.social.instagram}><img src={process.env.PUBLIC_URL + '/images/icon/instagram-light.svg'}></img></a></li> }
                                { detailsTeam.social.telegram && <li><a target={'_blank'} href={detailsTeam.social.telegram}><img src={process.env.PUBLIC_URL + '/images/icon/telegram-light.svg'}></img></a></li> }
                                { detailsTeam.social.behance && <li><a target={'_blank'} href={detailsTeam.social.behance}><img src={process.env.PUBLIC_URL + '/images/icon/behance-light.svg'}></img></a></li> }                             
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