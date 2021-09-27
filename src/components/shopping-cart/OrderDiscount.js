export default function OrderDiscount({
  isValidDiscount,
  discountFb,
  inputDiscount,
  getDiscountValue,
  applyDiscount,
}) {
  return (
    <div className="order-discount">
      <h4 className="order__title">MÃ GIẢM GIÁ</h4>
      <div className="discount-wrapper">
        <input
          className={`form-control form-control-lg discount-input ${
            isValidDiscount ? "is-valid" : ""
          } ${discountFb ? "is-invalid" : ""}`}
          type="text"
          placeholder="Nhập mã giảm giá (D10, D20, D30)"
          value={inputDiscount}
          onChange={getDiscountValue}
        />
        <div className={`feedback-noti discount-feedback ${discountFb ? "" : "d-none"}`}>
          Mã giảm giá không hợp lệ
        </div>
      </div>
      <button
        className="section__btn btn-apply-discount"
        onClick={applyDiscount}
      >
        ÁP DỤNG MÃ GIẢM GIÁ
      </button>
    </div>
  );
}
