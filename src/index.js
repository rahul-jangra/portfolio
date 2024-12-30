import React from 'react';
import ReactDOM from 'react-dom/client';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';
import {Provider} from "react-redux";
import store from "./store/store";
import {fetchGalleryNames} from "./store/galleryNamesAction";
import {BrowserRouter, Outlet, Route, Routes} from "react-router";
import GalleryTab from "./components/Gallery/GalleryTab";
import GalleryDetails from "./components/Gallery/GalleryDetails";


store.dispatch(fetchGalleryNames)

const root = ReactDOM.createRoot(document.getElementById('root'));

export const HOME_PAGE_ROUTE = "/portfolio";
export const GALLERY_PAGE_ROUTE = "/portfolio/gallery/:id";

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Contact />
            <BackToTop />
            <Preloader />
        </React.Fragment>
    )
}

const GalleryDetailsPages = () => {
    return (
        <React.Fragment>
            <GalleryDetails />
            <GalleryTab />
        </React.Fragment>
    )
}



root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={GALLERY_PAGE_ROUTE} element={<GalleryDetailsPages />} />
                <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </Provider>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
