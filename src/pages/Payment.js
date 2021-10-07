import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useHistory } from "react-router-dom";

import "pages/payment.css";

import PageBanner from "components/common/PageBanner";
import OrderDetails from "components/payment/OrderDetails";
import OrderPaymentInfo from "components/payment/OrderPaymentInfo";

export default function Payment() {
  const [shipMethod, setShipMethod] = useState("methods");
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [showFeedback, setShowFeedback] = useState(false);
  const [showVisaFb, setShowVisaFb] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  const [visaName, setVisaName] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [visaDate, setVisaDate] = useState("");
  const [visaCvv, setVisaCvv] = useState("");

  const cartList = useState(() => {
    const cartData = localStorage.getItem("cart");
    return JSON.parse(cartData) || [];
  })[0];
  const pageHistory = useHistory();

  const orderPayment = localStorage.getItem("orderTotal");
  let initialOrderTotal = orderPayment ? JSON.parse(orderPayment) : {};
  const orderTotal = useState(initialOrderTotal)[0];

  const SHIP_FEE = {
    save: 20000,
    standard: 30000,
    fast: 40000,
    superfast: 50000,
  };

  const [finalPaymentWithShip, setFinalPaymentWithShip] = useState(
    orderTotal.finalAmount
  );
  const [shippingFee, setShippingFee] = useState(0);

  function handleShipMethods(event) {
    setShipMethod(event.target.value);
    let currentShipFee = SHIP_FEE[event.target.value],
      currentFinalWithShip = orderTotal.finalAmount + currentShipFee;
    setShippingFee(currentShipFee);
    setFinalPaymentWithShip(currentFinalWithShip);

    // Update local storage
    let newOrderTotal = { ...initialOrderTotal };
    newOrderTotal.shipMethod = event.target.value;
    newOrderTotal.shipfeeAmount = currentShipFee;
    newOrderTotal.finalWithShip = currentFinalWithShip;
    localStorage.setItem("orderTotal", JSON.stringify(newOrderTotal));
  }

  function handlePaymentMethod(method) {
    setPaymentMethod(method);
    let newOrderTotal = { ...initialOrderTotal };
    newOrderTotal.paymentMethod = method;
    localStorage.setItem("orderTotal", JSON.stringify(newOrderTotal));
  }

  function placeOrder() {
    let isValidPaymentInfo =
      name &&
      phone &&
      city &&
      district &&
      ward &&
      address &&
      shipMethod !== "methods";
    setShowFeedback(true);
    let isValidVisaInfo = visaName && visaNumber && visaDate && visaCvv;

    if (paymentMethod === "visa") {
      setShowVisaFb(true);
      if (isValidPaymentInfo && isValidVisaInfo) {
        pageHistory.push("/order-complete");
      }
    } else {
      setShowVisaFb(false);
      if (isValidPaymentInfo) {
        pageHistory.push("/order-complete");
      }
    }
  }

  return (
    <>
      <PageBanner
        pageTitle="Thanh toán"
        addedHtml={
          <>
            <li className="breadcrumb-item">
              <Link to="/shopping-cart">Giỏ hàng</Link>
            </li>
            <li className="breadcrumb-divider">
              <span className="iconify">
                <Icon icon="carbon:chevron-right" />
              </span>
            </li>
          </>
        }
        bannerName="payment-banner"
      />

      <section className="section-order__container container-fluid">
        <div className="order container">
          {cartList && orderTotal && (
            <form className="order-form needs-validation">
              <OrderPaymentInfo
                shipMethod={shipMethod}
                handleShipMethods={handleShipMethods}
                showFeedback={showFeedback}
                name={name}
                phone={phone}
                city={city}
                district={district}
                ward={ward}
                address={address}
                setName={setName}
                setPhone={setPhone}
                setCity={setCity}
                setDistrict={setDistrict}
                setWard={setWard}
                setAddress={setAddress}
              />

              <OrderDetails
                paymentMethod={paymentMethod}
                cartList={cartList}
                orderTotal={orderTotal}
                finalPaymentWithShip={finalPaymentWithShip}
                shippingFee={shippingFee}
                placeOrder={placeOrder}
                handlePaymentMethod={handlePaymentMethod}
                showVisaFb={showVisaFb}
                visaName={visaName}
                visaNumber={visaNumber}
                visaDate={visaDate}
                visaCvv={visaCvv}
                setVisaName={setVisaName}
                setVisaNumber={setVisaNumber}
                setVisaDate={setVisaDate}
                setVisaCvv={setVisaCvv}
              />
            </form>
          )}
        </div>
      </section>
    </>
  );
}
