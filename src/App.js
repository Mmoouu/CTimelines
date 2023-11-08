import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Page Import
import Home from './pages/Home';

// Pages 
import CardanoTimeline2022 from './pages/CardanoTimeline2022';
import CardanoTimeline2023 from './pages/CardanoTimeline2023';
import AboutUs from './pages/AboutUs';
import TeamDetails from './pages/TeamDetails';
import NftDetailsCardano2022 from './pages/NftDetailsCardano2022';
import NftDetailsCardano2023 from './pages/NftDetailsCardano2023';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Css Import
import './assets/scss/app.scss';


const App = () => {
	document.querySelector('body').classList.add("active-light-mode");
	
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<Home />}/>
				<Route path={process.env.PUBLIC_URL + "/cardano-timeline-2022"} element={<CardanoTimeline2022 />}/>	
				<Route path={process.env.PUBLIC_URL + "/cardano-timeline-2023"} element={<CardanoTimeline2023 />}/>				
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/team-details/:slug"} element={<TeamDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/nft-details-2022/:slug"} element={<NftDetailsCardano2022 />}/>
				<Route path={process.env.PUBLIC_URL + "/nft-details-2023/:slug"} element={<NftDetailsCardano2023 />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
				<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>
			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
