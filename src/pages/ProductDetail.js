import { useEffect, useState, useRef, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import AOS from "aos";
import { CartContext } from "App";

import "aos/dist/aos.css";
import "pages/product-detail.css";

import ProductContent from "components/product-detail/ProductContent";
import ProductImages from "components/product-detail/ProductImages";
import ProductInfo from "components/product-detail/ProductInfo";
import Loading from "components/common/Loading";
import AddToCartToast from "components/common/AddToCartToast";
import { Toast } from "bootstrap";
import { addProductLocalStorage } from "components/common/commonFunctions";
import { abbreviateWords } from "components/common/commonFunctions";
import PageBanner from "components/common/PageBanner";

// Product Detail Page

export default function ProductDetail() {
  AOS.init();

  const apiUrl = "https://la-parfumania-api.herokuapp.com/products";
  const [productApi, setProductApi] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const addCartToastEl = useRef(null);
  const [, setCartQuantity] = useContext(CartContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${apiUrl}/${id}`);
      const result = await response.json();
      setProductApi(result);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  function increaseProQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function decreaseProQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(1);
    }
  }

  function changeProQuantity(event) {
    let newQuantity = Number(event.target.value);
    if (newQuantity > 1) {
      setProductQuantity(newQuantity);
    } else {
      setProductQuantity(1);
    }
  }

  function showToast() {
    // Show add to cart toast
    let addcartAlert = new Toast(addCartToastEl.current);
    addcartAlert.show();
  }

  function addToCart() {
    let addedProduct = { ...productApi };
    addedProduct.quantity = productQuantity;
    addProductLocalStorage(addedProduct, id);
    setCartQuantity((quan) => quan + productQuantity);
  }

  // Handle add to cart button (product detail page)
  function addProductToCart() {
    addToCart();
    showToast();
  }

  // Handle buy now button
  function handleBuyNow() {
    addToCart();
    history.push("/shopping-cart");
  }

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <>
          <PageBanner
            pageTitle={`${productApi.brand} ${
              productApi.name
            } ${abbreviateWords(productApi.concentration)}`}
            bannerName="productdetail-banner"
            addedHtml={
              <>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/product-list">Sản phẩm</Link>
                </li>
                <li className="breadcrumb-divider">
                  <span className="iconify">
                    <Icon icon="carbon:chevron-right" />
                  </span>
                </li>
              </>
            }
          />

          <section className="section section-product-detail container">
            <div className="product-detail row">
              <ProductImages
                images={productApi.images}
                brand={productApi.brand}
                name={productApi.name}
              />

              <ProductInfo
                brand={productApi.brand}
                name={productApi.name}
                price={productApi.price}
                volume={productApi.volume}
                concentration={productApi.concentration}
                status={productApi.status}
                productQuantity={productQuantity}
                decreaseProQuantity={decreaseProQuantity}
                increaseProQuantity={increaseProQuantity}
                changeProQuantity={changeProQuantity}
                addProductToCart={addProductToCart}
                handleBuyNow={handleBuyNow}
              />
            </div>

            <ProductContent
              brand={productApi.brand}
              name={productApi.name}
              images={productApi.images}
              concentration={productApi.concentration}
            />

            <AddToCartToast
              brand={productApi.brand}
              name={productApi.name}
              imgSrc={productApi.images[0]}
              addCartToastEl={addCartToastEl}
            />
          </section>
        </>
      )}
    </>
  );
}
