import { Link } from "react-router-dom";
import {
  convertCurrency,
  abbreviateWords,
} from "components/common/commonFunctions";

export default function OrderDetails({
  cartList,
  orderTotal,
  finalPaymentWithShip,
  shippingFee,
  placeOrder,
  paymentMethod,
  handlePaymentMethod,
  showVisaFb,
  visaName,
  visaNumber,
  visaDate,
  visaCvv,
  setVisaName,
  setVisaNumber,
  setVisaDate,
  setVisaCvv,
}) {
  return (
    <div className="order__details">
      <h4 className="order__title">Thông tin đơn hàng</h4>
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
            <div className="col-right order-item__unit-price">
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
        <div className="order-row-small order-vat">
          <div className="col-left">VAT (10%)</div>
          <div className="col-right vat-amount">
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
          <div className="col-right">{convertCurrency(shippingFee)}</div>
        </div>
        <div className="order-subtotal order-row">
          <div className="col-left">TỔNG TIỀN</div>
          <div className="col-right">
            {convertCurrency(finalPaymentWithShip)}
          </div>
        </div>
      </div>

      <div className="order__payment-method">
        <h4 className="order__title">Phương thức thanh&nbsp;toán</h4>
        <div className="accordion" id="payment-methods">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingVisa">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#visa"
                aria-expanded="false"
                aria-controls="visa"
              >
                <div className="form-check">
                  <input
                    className="form-check-input pay-radio"
                    type="radio"
                    name="pay-methods"
                    id="visa-pay"
                    value="visa"
                    defaultChecked={paymentMethod === "visa"}
                    onClick={() => handlePaymentMethod("visa")}
                  />
                  <label className="form-check-label" htmlFor="visa-pay">
                    Thanh toán trực tuyến bằng thẻ Visa/MasterCard
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="visa"
              className="accordion-collapse collapse show"
              aria-labelledby="headingVisa"
              data-bs-parent="#payment-methods"
            >
              <div className="accordion-body">
                <div className="row g-2">
                  <div className="col-12">
                    <input
                      className="form-control visa-card-number"
                      type="text"
                      placeholder="Số thẻ *"
                      aria-label="Card number"
                      value={visaNumber}
                      onChange={(e) => setVisaNumber(e.target.value)}
                    />
                    {showVisaFb && !visaNumber && (
                      <div className="feedback-noti">Vui lòng nhập số thẻ</div>
                    )}
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control visa-card-name"
                      placeholder="Tên chủ thẻ *"
                      aria-label="Card name"
                      value={visaName}
                      onChange={(e) => setVisaName(e.target.value)}
                    />
                    {showVisaFb && !visaName && (
                      <div className="feedback-noti">
                        Vui lòng nhập tên chủ thẻ
                      </div>
                    )}
                  </div>
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control visa-card-date"
                      name="datepicker"
                      id="datepicker"
                      placeholder="MM/YY *"
                      value={visaDate}
                      onChange={(e) => setVisaDate(e.target.value)}
                    />
                    {showVisaFb && !visaDate && (
                      <div className="feedback-noti">
                        Vui lòng nhập ngày hết hạn
                      </div>
                    )}
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control visa-card-cvv"
                      placeholder="CVV/CVC *"
                      aria-label="CVV-CVC"
                      value={visaCvv}
                      onChange={(e) => setVisaCvv(e.target.value)}
                    />
                    {showVisaFb && !visaCvv && (
                      <div className="feedback-noti">
                        Vui lòng nhập số CVV/CVC
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBankTransfer">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bankTransfer"
                aria-expanded="true"
                aria-controls="bankTransfer"
              >
                <div className="form-check">
                  <input
                    className="form-check-input pay-radio"
                    type="radio"
                    name="pay-methods"
                    id="bank-pay"
                    value="bank"
                    defaultChecked={paymentMethod === "bank"}
                    onClick={() => handlePaymentMethod("bank")}
                  />
                  <label className="form-check-label" htmlFor="bank-pay">
                    Chuyển khoản ngân hàng
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="bankTransfer"
              className="accordion-collapse collapse"
              aria-labelledby="headingBankTransfer"
              data-bs-parent="#payment-methods"
            >
              <div className="accordion-body">
                Thực hiện chuyển khoản vào tài khoản ngân hàng của
                La&nbsp;Parfumania. <br />
                {`Xem thông tin chi tiết tài khoản tại `}
                <Link to="/payment" className="text-info">
                  đây
                </Link>
                . <br />
                Nội dung chuyển khoản:
                <span className="text-bold text-danger">
                  “SĐT của bạn - Mã đơn hàng”
                </span>
                .
                <br />
                (Ví dụ:
                <span className="text-bold">“0123456789 - 005250”</span>)
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCod">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cod"
                aria-expanded="false"
                aria-controls="cod"
              >
                <div className="form-check">
                  <input
                    className="form-check-input pay-radio"
                    type="radio"
                    name="pay-methods"
                    id="cod-pay"
                    value="cod"
                    defaultChecked={paymentMethod === "cod"}
                    onClick={() => handlePaymentMethod("cod")}
                  />
                  <label className="form-check-label" htmlFor="cod-pay">
                    Thanh toán tiền mặt khi nhận hàng (COD)
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="cod"
              className="accordion-collapse collapse"
              aria-labelledby="headingCod"
              data-bs-parent="#payment-methods"
            >
              <div className="accordion-body">
                Quý khách sẽ thanh toán tiền mặt trực tiếp cho nhân viên giao
                hàng ngay sau khi nhận hàng.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <button
          className="section__btn w-100 btn-place-order"
          type="button"
          onClick={placeOrder}
        >
          ĐẶT HÀNG
        </button>
      </div>
    </div>
  );
}
