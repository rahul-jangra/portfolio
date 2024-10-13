import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import clay1 from "../img/Landing image.jpg";
import fabric1 from "../img/fabric/1.0.jpeg";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <div id="home" className="intro route bg-image background">
            <a href={fabric1}>
                <img src={fabric1} alt="" className="img-fluid"/>
            </a>
            {/*<div className="intro-content display-table">*/}
            {/*    <div className="table-cell">*/}
            {/*        <div className="container">*/}
            {/*            <h1 className="intro-title mb-4">Hello, I am Vidhi</h1>*/}
            {/*            <p className="intro-subtitle">*/}
            {/*                <span className="text-slider-items"></span>*/}
            {/*                <strong className="text-slider">*/}
            {/*                    <Typed*/}
            {/*                        strings={[*/}
            {/*                            "Artist",*/}
            {/*                            "Book Reader",*/}
            {/*                            "Dreamer"*/}
            {/*                        ]}*/}
            {/*                        typeSpeed={80}*/}
            {/*                        backDelay={1100}*/}
            {/*                        backSpeed={30}*/}
            {/*                        loop*/}
            {/*                    />*/}
            {/*                </strong>*/}
            {/*            </p>*/}
            {/*            <p className="pt-3">*/}
            {/*                <a*/}
            {/*                    className="btn btn-primary btn js-scroll px-4"*/}
            {/*                    href="#work"*/}
            {/*                    role="button"*/}
            {/*                >*/}
            {/*                    View My Work*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
  }
}

export default Intro;
