import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Carousel.css"

const Carousel = ({ mobile_photo, tablet_photo, desktop_photo }) => {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="image_frame">
                    <img className="desktop_image" src={`assets/images/project_images/${desktop_photo}`} alt="" />
                </div>
                <div className="image_frame">
                    <img className="tablet_image" src={`assets/images/project_images/${tablet_photo}`} alt="" />
                </div>
                <div className="image_frame">
                    <img className="mobile_image" src={`assets/images/project_images/${mobile_photo}`} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel
