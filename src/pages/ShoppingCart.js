import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "App";

import "pages/shopping-cart.css";

import ProductRow from "components/shopping-cart/ProductRow";
import CartHeader from "components/shopping-cart/CartHeader";
import OrderSubtotal from "components/shopping-cart/OrderSubtotal";
import OrderDiscount from "components/shopping-cart/OrderDiscount";
import RemoveAllModal from "components/shopping-cart/RemoveAllModal";
import PageBanner from "components/common/PageBanner";
import emptyCartImg from "images/empty-cart.png";

// Shopping Cart Page
export default function ShoppingCart() {
  const initialData = localStorage.getItem("cart");
  const [shoppingList, setShoppingList] = useState(() => {
    return JSON.parse(initialData) || [];
  });

  const [tempTotal, setTempTotal] = useState(() => {
    let totalMoney = 0;
    if (!initialData) return 0;
    let productArr = JSON.parse(initialData);
    productArr.forEach((product) => {
      totalMoney += product.quantity * product.price;
    });
    return totalMoney;
  });

  const [vat, setVat] = useState(0.1 * tempTotal);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(tempTotal + vat - discount);
  const [, setCartQuantity] = useContext(CartContext);

  // Discount codes
  const [inputDiscount, setInputDiscount] = useState("");
  const [discountFb, setDiscountFb] = useState(false);
  const [isValidDiscount, setIsValidDiscount] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const discountCodes = {
    D10: 10,
    D20: 20,
    D30: 30,
  };

  const orderPayment = {
    tempAmount: tempTotal,
    vatAmount: vat,
    discountAmount: discount,
    finalAmount: finalTotal,
    shipfeeAmount: 30000,
    finalWithShip: finalTotal + 30000,
    shipMethod: "standard",
    paymentMethod: "visa",
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingList));
    localStorage.setItem("orderTotal", JSON.stringify(orderPayment));

    let totalQuantity = 0;
    [...shoppingList].forEach((product) => {
      totalQuantity += product.quantity;
    });
    setCartQuantity(totalQuantity);
  });

  function removeProduct(productId) {
    let newShoppingList = [...shoppingList].filter(
      (product) => product.id !== productId
    );
    setShoppingList(newShoppingList);
    updateTotalMoney(newShoppingList);
    if (!newShoppingList.length) {
      setInputDiscount("");
      setDiscountPercent(0);
      setDiscountFb(false);
      setIsValidDiscount(false);
    }
  }

  function removeAllProducts() {
    updateTotalMoney([]);
    setInputDiscount("");
    setDiscountPercent(0);
    setDiscountFb(false);
    setIsValidDiscount(false);
    setShoppingList([]);
  }

  function increaseQuantity(productId) {
    let cloneShoppingList = shoppingList.map((obj) => ({ ...obj }));
    cloneShoppingList.forEach((product) => {
      if (product.id === productId) {
        product.quantity += 1;
      }
    });
    setShoppingList(cloneShoppingList);
    updateTotalMoney(cloneShoppingList);
  }

  function decreaseQuantity(productId) {
    let cloneShoppingList = shoppingList.map((obj) => ({ ...obj }));
    cloneShoppingList.forEach((product) => {
      if (product.id === productId) {
        product.quantity <= 1
          ? (product.quantity = 1)
          : (product.quantity -= 1);
      }
    });
    setShoppingList(cloneShoppingList);
    updateTotalMoney(cloneShoppingList);
  }

  function changeQuantity(event, productId) {
    let newQuantity = Number(event.target.value);
    let cloneShoppingList = shoppingList.map((obj) => ({ ...obj }));

    cloneShoppingList.forEach((product) => {
      if (product.id === productId) {
        newQuantity > 1
          ? (product.quantity = newQuantity)
          : (product.quantity = 1);
      }
    });
    setShoppingList(cloneShoppingList);
    updateTotalMoney(cloneShoppingList);
  }

  function updateTotalMoney(productArr) {
    let totalMoney = 0;
    productArr.forEach((product) => {
      totalMoney += product.quantity * product.price;
    });
    let updatedVat = totalMoney * 0.1;
    let updatedDiscount = (totalMoney * discountPercent) / 100;
    let updatedFinalTotal = totalMoney + updatedVat - updatedDiscount;

    setTempTotal(totalMoney);
    setVat(updatedVat);
    setDiscount(updatedDiscount);
    setFinalTotal(updatedFinalTotal);
  }

  function getDiscountValue(event) {
    setInputDiscount(event.target.value.trim());
    setDiscountFb(false);
    setIsValidDiscount(false);
  }

  function checkDiscountCode() {
    if (discountCodes[inputDiscount]) {
      return discountCodes[inputDiscount];
    }
    return 0;
  }

  function applyDiscount() {
    let updatedDisPercent = checkDiscountCode();
    let newDiscount = (updatedDisPercent * tempTotal) / 100;

    if (updatedDisPercent) {
      setIsValidDiscount(true);
      setDiscountFb(false);
    } else {
      setIsValidDiscount(false);
      setDiscountFb(true);
    }

    setDiscountPercent(updatedDisPercent);
    setDiscount(newDiscount);
    setFinalTotal(tempTotal + vat - newDiscount);
  }

  return (
    <>
      <PageBanner
        pageTitle="Giỏ hàng"
        addedHtml={null}
        bannerName="cart-banner"
      />

      <section className="section section-cart container-fluid">
        <div className="section-cart-inner container">
          <div className="cart-container">
            <div className="cart-table">
              <CartHeader />

              <div className="cart-body">
                {shoppingList.length > 0 ? (
                  shoppingList.map((product) => (
                    <ProductRow
                      key={product.id}
                      id={product.id}
                      slug={product.slug}
                      imgSrc={product.images[0]}
                      name={product.name}
                      brand={product.brand}
                      volume={product.volume}
                      price={product.price}
                      quantity={product.quantity}
                      concentration={product.concentration}
                      removeProduct={removeProduct}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      changeQuantity={changeQuantity}
                    />
                  ))
                ) : (
                  <>
                    <img
                      className="empty-cart-img"
                      src={emptyCartImg}
                      alt="empty-cart"
                    />
                    <p className="empty-cart-message text-center">
                      Chưa có sản phẩm nào trong giỏ hàng!
                    </p>
                  </>
                )}
              </div>
            </div>

            <div
              className={`cart-btns ${
                shoppingList.length > 0 ? "" : "justify-content-center"
              }`}
            >
              <button className="section__btn btn-continue-shopping">
                <Link to="/product-list">TIẾP TỤC MUA HÀNG</Link>
              </button>

              <button
                className={`section__btn btn-remove-all ${
                  shoppingList.length > 0 ? "" : "hide"
                }`}
                data-bs-toggle="modal"
                data-bs-target="#removeAllModal"
              >
                XÓA TOÀN BỘ
              </button>
            </div>
          </div>

          {shoppingList.length > 0 && (
            <div className="order-container">
              <OrderDiscount
                isValidDiscount={isValidDiscount}
                discountFb={discountFb}
                inputDiscount={inputDiscount}
                getDiscountValue={getDiscountValue}
                applyDiscount={applyDiscount}
              />

              <OrderSubtotal
                tempTotal={tempTotal}
                vat={vat}
                discount={discount}
                finalTotal={finalTotal}
              />
            </div>
          )}
        </div>
      </section>

      <RemoveAllModal removeAllProducts={removeAllProducts} />
    </>
  );
}
