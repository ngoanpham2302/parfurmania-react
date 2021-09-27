import React, { useState } from "react";

import SlickArrowNext from "components/product-detail/SlickArrowNext";
import SlickArrowPrev from "components/product-detail/SlickArrowPrev";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "pages/product-detail.css";

export default function ProductImages({ images, name, brand }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settingArrows = {
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
  };

  return (
    <div className="product-detail__img col-12 col-lg-6">
      <div className="product-detail__slider">
        <div className="product-detail__slider-for">
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            slidesToShow={1}
            slidesToScroll={1}
            speed={700}
            arrows={false}
            fade={true}
          >
            {images.map((img, index) => (
              <div key={index.toString()} className="product-detail__slide">
                <img src={img} alt={`${brand} ${name}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="product-detail__slider-nav">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={4}
            slidesToScroll={1}
            speed={700}
            arrows={true}
            focusOnSelect={true}
            {...settingArrows}
          >
            {images.map((img, index) => (
              <div key={index.toString()} className="product-detail__slide">
                <img src={img} alt={`${brand} ${name}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
