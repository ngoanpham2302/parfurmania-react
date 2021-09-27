import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HERO_CONTENT_IMAGES } from "data/heroContentImages";
import "animate.css";

export default function HeroContent() {
  const heroContentSettings = {
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1300,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: true,
    swipe: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          fade: false,
          autoplaySpeed: 5000,
          speed: 900,
          draggable: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <div className="container-fluid hero-content">
      <div className="banner-slider desktop-banner">
        <Slider {...heroContentSettings}>
          {HERO_CONTENT_IMAGES.map((image, index) => (
            <div key={image.id} className="banner-slider__slide">
              <img
                className="banner-slider__img"
                src={image.desktopSrc}
                alt="home-banner"
              />
              <img
                className="mobile-slider__img"
                src={image.mobileSrc}
                alt="home-banner"
              />

              <div className="banner-slider__content">
                <p className="banner-slider__title">{image.title}</p>
                <p className="banner-slider__info">{image.info}</p>
                <button
                  className={`banner-slider__btn btn-checkmore ${
                    index === 0 ? "first" : index === 1 ? "second" : "last"
                  }-banner-btn`}
                >
                  <Link to="/product-list">Tìm hiểu thêm</Link>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
