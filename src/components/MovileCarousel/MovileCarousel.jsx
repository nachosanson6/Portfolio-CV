import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./MovileCarousel.css"

const MovileCarousel = ({ mobile_photo, mobile_photo2, mobile_photo3 }) => {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="movile_carousel">
            <Slider {...settings}>
                <div className="image_frame">
                    <img className="mobile_image" src={`assets/images/project_images/${mobile_photo}`} alt="" />
                </div>
                <div className="image_frame">
                    <img className="mobile_image" src={`assets/images/project_images/${mobile_photo2}`} alt="" />
                </div>
                <div className="image_frame">
                    <img className="mobile_image" src={`assets/images/project_images/${mobile_photo3}`} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default MovileCarousel