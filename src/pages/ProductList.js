import React, { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "App";

import "pages/product-list.css";

import ProductCard from "components/product-list/ProductCard";
import ProductFilters from "components/product-list/ProductFilters";
import Loading from "components/common/Loading";
import { abbreviateWords } from "components/common/commonFunctions";
import AddToCartToast from "components/common/AddToCartToast";
import { Toast } from "bootstrap";
import { addProductLocalStorage } from "components/common/commonFunctions";
import PageBanner from "components/common/PageBanner";

// Product List Page
export default function ProductList() {
  const apiUrl = "https://la-parfumania-api.herokuapp.com/products";
  const [inputValue, setInputValue] = useState("");
  const [sortValue, setSortvalue] = useState("default");
  const [productsApi, setProductsApi] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productToCart, setProductToCart] = useState([]);
  const [imgToCart, setImgToCart] = useState("");
  const [nameToCart, setNameToCart] = useState("");
  const addCartToastEl = useRef(null);
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterId, setFilterId] = useState("");
  const [, setCartQuantity] = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
      const products = await response.json();
      setIsLoading(false);
      setProductsApi(products);
      setFilterResults(products);
    }
    fetchData();
  }, []);

  // Get search input
  function getInputValue(event) {
    setInputValue(event.target.value.toLowerCase().trim());
  }

  // Get sort value
  function getSortValue(event) {
    setSortvalue(event.target.value);
  }

  // Search products by name or brand, sort products by price
  useEffect(() => {
    let filteredList = [...productsApi];

    filteredList = productsApi.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue) ||
        product.brand.toLowerCase().includes(inputValue) ||
        abbreviateWords(product.concentration)
          .toLowerCase()
          .includes(inputValue)
    );

    if (sortValue === "ascending") {
      filteredList = filteredList.sort((a, b) => a.price - b.price);
    } else if (sortValue === "descending") {
      filteredList = filteredList.sort((a, b) => b.price - a.price);
    }

    setFilterResults(filteredList);
  }, [inputValue, sortValue, productsApi]);

  // Handle add to cart button
  function addToCart(productId, productImg, productName) {
    let addedProductArr = productsApi.filter(
      (product) => product.id === productId
    );
    let addedProduct = { ...addedProductArr[0] };
    addedProduct.quantity = 1;
    setCartQuantity((quan) => quan + 1);

    addProductLocalStorage(addedProduct, productId);

    setProductToCart(addedProduct);
    setImgToCart(productImg);
    setNameToCart(productName);

    // Show add to cart toast
    let addcartAlert = new Toast(addCartToastEl.current);
    addcartAlert.show();
  }

  // Filter
  function brandFilter(brandName, brandId) {
    let filteredList = productsApi.filter(
      (product) => product.brand === brandName
    );
    setFilterResults(filteredList);
    setActiveFilter(true);
    setFilterId(brandId);
    setInputValue("");
  }

  function clearAllFilters() {
    setFilterResults(productsApi);
    setActiveFilter(false);
    setFilterId("");
  }

  return (
    <>
      <PageBanner
        pageTitle="S???n ph???m"
        addedHtml={null}
        bannerName="productlist-banner"
      />

      <section className="section section-products-list container-fluid">
        <div
          className={`products__container container ${isLoading && "disabled"}`}
        >
          <ProductFilters
            activeFilter={activeFilter}
            brandFilter={brandFilter}
            clearAllFilters={clearAllFilters}
            filterId={filterId}
          />

          <div className="products__wrapper">
            <div className="products-list">
              <div className="row form-container">
                <div className="col-12 col-md-6">
                  <form className="d-flex search-form">
                    <span
                      className="iconify search-icon"
                      data-icon="carbon:search"
                      data-inline="false"
                    ></span>
                    <input
                      className="search-input"
                      value={inputValue}
                      onChange={getInputValue}
                      type="search"
                      placeholder="T??m ki???m s???n ph???m"
                    />
                  </form>
                </div>

                <div className="col-12 col-md-6">
                  <select
                    className="form-select sort-select"
                    value={sortValue}
                    onChange={getSortValue}
                  >
                    <option value="default">S???p x???p m???c ?????nh</option>
                    <option value="ascending">Theo gi?? t??? th???p ?????n cao</option>
                    <option value="descending">Theo gi?? t??? cao ?????n th???p</option>
                  </select>
                </div>
              </div>

              <div className="row products-list__inner">
                {isLoading ? (
                  <Loading />
                ) : filterResults.length === 0 ? (
                  <p className="search-feedback">
                    Kh??ng t??m th???y s???n ph???m ph?? h???p!
                  </p>
                ) : (
                  filterResults.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      imgSrc={product.images[0]}
                      name={product.name}
                      brand={product.brand}
                      price={product.price}
                      slug={product.slug}
                      concentration={product.concentration}
                      addToCart={addToCart}
                      status={product.status}
                    />
                  ))
                )}
              </div>
            </div>

            <AddToCartToast
              brand={productToCart.brand}
              name={nameToCart}
              imgSrc={imgToCart}
              addCartToastEl={addCartToastEl}
            />
          </div>
        </div>
      </section>
    </>
  );
}
