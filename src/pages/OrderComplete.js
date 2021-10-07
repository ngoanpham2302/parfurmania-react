import { useState } from "react";
import { Link } from "react-router-dom";
import {
  convertCurrency,
  abbreviateWords,
} from "components/common/commonFunctions";

import "pages/payment.css";
import "pages/order-complete.css";

export default function OrderComplete() {
  const orderPayment = localStorage.getItem("orderTotal");
  let initialOrderTotal = orderPayment ? JSON.parse(orderPayment) : {};
  const orderTotal = useState(initialOrderTotal)[0];

  const cartList = useState(() => {
    const cartData = localStorage.getItem("cart");
    return JSON.parse(cartData) || [];
  })[0];

  function getRandomNumber() {
    return Math.floor(Math.random() * 900001 + 100000);
  }

  let currentDate = new Date();

  function formatDate(date) {
    let formatedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formatedDate;
  }

  const shipMethods = {
    save: "Tiết kiệm",
    standard: "Tiêu chuẩn",
    fast: "Nhanh",
    superfast: "Hỏa tốc",
  };

  const paymentMethods = {
    bank: "Chuyển khoản ngân hàng",
    visa: "Visa/MasterCard",
    cod: "COD",
  };

  function addDays(shipForm) {
    let days =
      shipForm === "superfast"
        ? 0
        : shipForm === "standard"
        ? 4
        : shipForm === "fast"
        ? 2
        : 5;
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  return (
    <section className="section order--complete container-fluid">
      {cartList && orderTotal && (
        <div className="order-summary container">
          <div className="order-thank">
            <h4 className="order-complete-noti mb-2">ĐẶT HÀNG THÀNH CÔNG!</h4>
            <h4 className="thank-you">
              Cảm ơn quý khách đã lựa chọn La&nbsp;Parfumania.
            </h4>
            <div className="order-result">
              <div className="order-number">
                <p>Mã đơn hàng</p>
                <p className="text-bold">{getRandomNumber()}</p>
              </div>
              <div className="vertical-line" />
              <div className="order-date">
                <p>Ngày nhận đơn</p>
                <p className="text-bold">{formatDate(currentDate)}</p>
              </div>
            </div>
          </div>

          <div className="order__details">
            <h4 className="order__title">Chi tiết đơn hàng</h4>
            <div className="order__list">
              <div className="order-header order-row">
                <div className="col-left">SẢN PHẨM</div>
                <div className="col-right">THÀNH TIỀN</div>
              </div>

              {cartList.map((product) => (
                <div key={product.id} className="order-item order-row">
                  <div className="col-left">
                    {`${product.brand} ${product.name} ${abbreviateWords(
                      product.concentration
                    )} ${product.volume} x`}
                    <span className="order-item__quantity">
                      &nbsp;{product.quantity}
                    </span>
                  </div>
                  <div className="col-right order-item__temp-amount ">
                    {convertCurrency(product.price * product.quantity)}
                  </div>
                </div>
              ))}

              <div className="order-price order-row-small">
                <div className="col-left">Tạm tính</div>
                <div className="col-right">
                  {convertCurrency(orderTotal.tempAmount)}
                </div>
              </div>
              <div className="order-vat order-row-small">
                <div className="col-left">VAT (10%)</div>
                <div className="col-right">
                  {convertCurrency(orderTotal.vatAmount)}
                </div>
              </div>
              <div className="order-discount order-row-small">
                <div className="col-left">Giảm giá</div>
                <div className="col-right">
                  -{" "}
                  <span className="discount-amount">
                    {convertCurrency(orderTotal.discountAmount)}
                  </span>
                </div>
              </div>
              <div className="order-ship-fee order-row-small">
                <div className="col-left">Phí giao hàng</div>
                <div className="col-right">
                  {convertCurrency(orderTotal.shipfeeAmount)}
                </div>
              </div>
              <div className="order-payment order-row-small">
                <div className="col-left">Phương thức thanh&nbsp;toán</div>
                <div className="col-right">
                  {paymentMethods[orderTotal.paymentMethod]}
                </div>
              </div>
              <div className="order-expect order-row-small">
                <div className="col-left">Giao hàng dự&nbsp;kiến</div>
                <div className="col-right">
                  {formatDate(addDays(orderTotal.shipMethod))}
                </div>
              </div>
              <div className="order-ship order-row-small">
                <div className="col-left">Phương thức vận&nbsp;chuyển</div>
                <div className="col-right">
                  {shipMethods[orderTotal.shipMethod]}
                </div>
              </div>
              <div className="order-subtotal order-row">
                <div className="col-left">TỔNG CỘNG</div>
                <div className="col-right">
                  {convertCurrency(
                    orderTotal.finalAmount + orderTotal.shipfeeAmount
                  )}
                </div>
              </div>
            </div>
            <p className="support-info">
              Tổng đài hỗ trợ: <span className="text-info">0123456789</span>
            </p>
            <div className="col-12">
              <button className="section__btn" type="submit">
                <Link to="/">QUAY VỀ TRANG CHỦ</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
