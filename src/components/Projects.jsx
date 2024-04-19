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
                    <img src="../images/fantasy-art.png"/>
                </div>
                <div>
                    <img src="../images/witch.png"/>
                </div>
                <div>
                    <img src="../images/witch.png"/>
                </div>
                <div>
                    <img src="../images/witch.png"/>
                </div>
            </Slider>
        </div>
    </section>
  );
}

export default Projects;