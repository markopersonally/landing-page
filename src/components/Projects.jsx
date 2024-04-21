import React from "react";
import './Projects.scss';
import Slider from "react-slick";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <section id="projects">
        <h2 className="projects-title">My projects</h2>
        <div className="slider-container">
            <Slider className="slider" {...settings}>
                <div>
                    <div className="slider-img"></div>
                </div>
                <div>
                    <div className="slider-img"></div>
                </div>
                <div>
                    <div className="slider-img"></div>
                </div>
                <div>
                    <div className="slider-img"></div>
                </div>
            </Slider>
        </div>
    </section>
  );
}

export default Projects;