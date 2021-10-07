import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

import Loading from "components/common/Loading";
import SlickArrowNext from "components/product-detail/SlickArrowNext";
import SlickArrowPrev from "components/product-detail/SlickArrowPrev";
import {
  convertCurrency,
  abbreviateWords,
} from "components/common/commonFunctions";

export default function BestSellers() {
  const apiUrl = "https://la-parfumania-api.herokuapp.com/products";
  const [femaleList, setFemaleList] = useState([]);
  const [maleList, setMaleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,

    responsive: [
      {
        breakpoint: 1430,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1390,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const femaleResponse = await fetch(`${apiUrl}?gender=female`);
      const femaleProducts = await femaleResponse.json();
      const maleResponse = await fetch(`${apiUrl}?gender=male`);
      const maleProducts = await maleResponse.json();
      setIsLoading(false);
      setFemaleList(femaleProducts);
      setMaleList(maleProducts);
      console.log(maleProducts);
      console.log(femaleProducts);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <section className="section section-bestsellers container-fluid">
          <h2 className="section__title section-bestsellers__title">
            SẢN PHẨM BÁN&nbsp;CHẠY
          </h2>

          <div className="section-bestsellers__nav">
            <ul
              className="nav nav-pills justify-content-center"
              id="bestSellersTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="male-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#male"
                  type="button"
                  role="tab"
                  aria-controls="male"
                  aria-selected="true"
                >
                  Nam
                </button>
              </li>

              <div className="vertical-line" />

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="female-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#female"
                  type="button"
                  role="tab"
                  aria-controls="female"
                  aria-selected="false"
                >
                  Nữ
                </button>
              </li>

              {/* <div className="vertical-line" />
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="unisex-tab"
              data-bs-toggle="tab"
              data-bs-target="#unisex"
              type="button"
              role="tab"
              aria-controls="unisex"
              aria-selected="false"
            >
              Unisex
            </button>
          </li> */}
            </ul>

            <div className="tab-content" id="bestSellersTabContent">
              <div
                className="tab-pane fade show active container"
                id="male"
                role="tabpanel"
                aria-labelledby="male-tab"
              >
                <div className="products-slider products-slider--male">
                  <Slider {...productSettings}>
                    {maleList.map((product) => (
                      <div key={product.id} className="products-slider__slide">
                        <div className="card product-card">
                          <Link
                            to={`/product-list/${product.slug}/${product.id}`}
                          >
                            <div className="product-card__img">
                              <img
                                src={product.images[0]}
                                className="card-img-top"
                                alt={`${product.brand} ${product.name}`}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title product-card__brand">
                                {product.brand}
                              </h5>
                              <p className="card-text product-card__name">
                                {`${product.name} ${abbreviateWords(
                                  product.concentration
                                )}`}
                              </p>
                              <p className="card-text product-card__price mb-2">
                                {convertCurrency(product.price)}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <button className="section__btn section-bestsellers__btn">
                  <Link to="/product-list">XEM THÊM SẢN PHẨM</Link>
                </button>
              </div>

              <div
                className="tab-pane fade container"
                id="female"
                role="tabpanel"
                aria-labelledby="female-tab"
              >
                <div className="products-slider products-slider--female">
                  <div className="products-slider products-slider--male">
                    <Slider {...productSettings}>
                      {femaleList.map((product) => (
                        <div
                          key={product.id}
                          className="products-slider__slide"
                        >
                          <div className="card product-card">
                            <Link
                              to={`/product-list/${product.slug}/${product.id}`}
                            >
                              <div className="product-card__img">
                                <img
                                  src={product.images[0]}
                                  className="card-img-top"
                                  alt={`${product.brand} ${product.name}`}
                                />
                              </div>
                              <div className="card-body">
                                <h5 className="card-title product-card__brand">
                                  {product.brand}
                                </h5>
                                <p className="card-text product-card__name">
                                  {`${product.name} ${abbreviateWords(
                                    product.concentration
                                  )}`}
                                </p>
                                <p className="card-text product-card__price">
                                  {convertCurrency(product.price)}
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <button className="section__btn section-bestsellers__btn">
                  <Link to="/product-list">XEM THÊM SẢN PHẨM</Link>
                </button>
              </div>

              {/* <div
            className="tab-pane fade container"
            id="unisex"
            role="tabpanel"
            aria-labelledby="unisex-tab"
          >
            <div className="products-slider products-slider--unisex"></div>
            <button className="section__btn section-bestsellers__btn">
              <a href="./female-products.html">XEM THÊM SẢN PHẨM</a>
            </button>
          </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
