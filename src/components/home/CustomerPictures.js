import Fancybox from "components/common/Fancybox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CUSTOMER_PICTURES } from "data/customerPicturesData";

export default function CustomerPictures() {
  const slideSettings = {
    autoplay: false,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="section section-customer-pictures">
      <h2 className="section__title section-customer-pictures__title">
        HÌNH ẢNH TỪ KHÁCH&nbsp;HÀNG
      </h2>

      <div className="customer-pictures container-fluid">
        <div className="picture-gallery">
          <Fancybox options={{ infinite: true }}>
            <Slider {...slideSettings}>
              {CUSTOMER_PICTURES.map((pic) => (
                <div
                  key={pic.id}
                  data-fancybox="customer-pictures"
                  data-src={pic.src}
                  data-caption={pic.caption}
                  className="customer-picture"
                >
                  <img src={pic.src} alt="customer gallery" />
                </div>
              ))}
            </Slider>
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
