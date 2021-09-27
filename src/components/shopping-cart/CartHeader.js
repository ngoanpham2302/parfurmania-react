export default function CartHeader() {
  return (
    <div className="cart-header-entries mobile-hidden">
      <div className="cart-entry img-entry">SẢN&nbsp;PHẨM</div>
      <div className="product-col-entries">
        <div className="cart-entry name-entry">TÊN SẢN PHẨM</div>
        <div className="cart-entry volume-entry medium-col">DUNG TÍCH</div>
        <div className="cart-entry unit-entry medium-col">ĐƠN GIÁ</div>
        <div className="cart-entry quantity-entry medium-col">SỐ LƯỢNG</div>
        <div className="cart-entry total-entry medium-col">THÀNH TIỀN</div>
        <div className="cart-entry remove-entry medium-col" />
      </div>
    </div>
  );
}
