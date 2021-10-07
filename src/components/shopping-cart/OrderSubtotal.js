import { convertCurrency } from "components/common/commonFunctions";
import { Link } from "react-router-dom";

export default function OrderSubtotal({
  tempTotal,
  vat,
  discount,
  finalTotal,
}) {
  return (
    <div className="order-subtotal">
      <h4 className="order__title">TỔNG TIỀN</h4>
      <div className="order__temp-price order-row">
        <p className="order__entry">Tạm tính</p>
        <p>
          <span className="order__temp-value">
            {convertCurrency(tempTotal)}
          </span>
        </p>
      </div>
      <div className="order__temp-price order-row">
        <p className="order__entry">VAT (10%)</p>
        <p>
          <span className="order__temp-value">{convertCurrency(vat)}</span>
        </p>
      </div>
      <div className="order__discount order-row">
        <p className="order__entry">Giảm giá</p>
        <p className="order__discount-value">
          - <span className="discount-amount">{convertCurrency(discount)}</span>
        </p>
      </div>
      <div className="order__subtotal order-row">
        <p className="order__entry">Tổng tiền</p>
        <p className="order__value">
          <span className="order__subtotal-value">
            {convertCurrency(finalTotal)}
          </span>
        </p>
      </div>
      <button className="section__btn btn-checkout">
        <Link to="/payment">TIẾN HÀNH ĐẶT HÀNG</Link>
      </button>
    </div>
  );
}
