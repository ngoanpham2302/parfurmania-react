import { Link } from "react-router-dom";
import { NICHE_BRAND_IMAGES, DESIGNER_BRAND_IMAGES } from "data/brandImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedBrands() {
  const brandSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="section section-featured-brands">
      <h2 className="section__title section-featured-brands__title">
        THƯƠNG HIỆU NỔI&nbsp;BẬT
      </h2>

      <div className="featured-brands__nav">
        <ul
          className="nav nav-pills justify-content-center"
          id="brandsTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="niche-tab"
              data-bs-toggle="tab"
              data-bs-target="#niche"
              type="button"
              role="tab"
              aria-controls="niche"
              aria-selected="true"
            >
              Niche
            </button>
          </li>

          <div className="vertical-line" />

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="designer-tab"
              data-bs-toggle="tab"
              data-bs-target="#designer"
              type="button"
              role="tab"
              aria-controls="designer"
              aria-selected="false"
            >
              Designer
            </button>
          </li>
        </ul>

        <div className="tab-content" id="brandsTabContent">
          <div
            className="tab-pane fade show active container"
            id="niche"
            role="tabpanel"
            aria-labelledby="niche-tab"
          >
            <div className="brands-slider brands-slider--niche">
              <Slider {...brandSettings}>
                {NICHE_BRAND_IMAGES.map((brandArr) => (
                  <div
                    key={`${brandArr[0].id}${brandArr[1].id}`}
                    className="brands-slider__slide"
                  >
                    <div className="brands-slider__img">
                      <Link to="/product-list" className="brands-slider__link">
                        <img
                          src={brandArr[0].image}
                          className="brand-img"
                          alt={brandArr[0].name}
                        />
                      </Link>

                      <Link to="/product-list" className="brands-slider__link">
                        <img
                          src={brandArr[1].image}
                          className="brand-img"
                          alt={brandArr[1].name}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div
            className="tab-pane fade container"
            id="designer"
            role="tabpanel"
            aria-labelledby="designer-tab"
          >
            <div className="brands-slider brands-slider--designer">
              <Slider {...brandSettings}>
                {DESIGNER_BRAND_IMAGES.map((brandArr) => (
                  <div
                    key={`${brandArr[0].id}${brandArr[1].id}`}
                    className="brands-slider__slide"
                  >
                    <div className="brands-slider__img">
                      <Link to="/product-list" className="brands-slider__link">
                        <img
                          src={brandArr[0].image}
                          className="brand-img"
                          alt={brandArr[0].name}
                        />
                      </Link>

                      <Link to="/product-list" className="brands-slider__link">
                        <img
                          src={brandArr[1].image}
                          className="brand-img"
                          alt={brandArr[1].name}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <button className="section__btn section-bestsellers__btn">
        <Link to="/">XEM TẤT CẢ THƯƠNG&nbsp;HIỆU</Link>
      </button>
    </section>
  );
}
