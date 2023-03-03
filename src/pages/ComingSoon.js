import React, { useEffect } from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { Link } from 'react-router-dom';
import HeaderOne from '../common/header/HeaderOne';
import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from 'react-countdown';
import ReactGA from 'react-ga';


const ComingSoon = () => {

    useEffect(() => {
        ReactGA.pageview('/timeline-research');
    }, []);

    const Completionist = () => <span>Our Site is Ready to Go!</span>;

    const SetCountdownTime = "2023-01-10T17:00:00";

    const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />; 
        } else {
          return (
              <div className="countdown">
                  <div className="countdown-section">
                    <span className="countdown-number">{days}</span>
                    <span className="countdown-unit">Days</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{hours}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{minutes}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{seconds}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
              </div>
          )
        }
      }


    return (
        <>
        <SEO title="Coming Soon" />
        <ColorSwitcher />
            <main className="main-wrapper">
            <HeaderOne />
                <div className="coming-soon-area onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="content">
                            <h2 className="title">Cardano Research Timeline 2022</h2>
                            <h4>Our new collection is on the way</h4><br></br>                           
                            <Link to={process.env.PUBLIC_URL + "/"} className="axil-btn btn-fill-primary btn-large">Go Back</Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/others/coming-soon-2.png"} alt="Coming Soon" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-1">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ComingSoon;