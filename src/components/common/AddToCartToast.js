export default function AddToCartToast({
  brand,
  name,
  imgSrc,
  addCartToastEl,
}) {
  return (
    <div
      className="position-fixed top-0 start-50 translate-middle-x p-5"
      style={{ zIndex: 1020 }}
    >
      <div
        data-bs-delay={1000}
        id="addcartToast"
        ref={addCartToastEl}
        className="toast addcart-toast hide"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">
          <p className="addcart-noti text-success">
            Đã thêm sản phẩm vào giỏ&nbsp;hàng!
          </p>
          <div className="toast-detail">
            <div className="toast-img">
              <img src={imgSrc} alt={`${brand} ${name}`} />
            </div>
            <div className="toast-names">
              <p className="toast-brand-text">{brand}</p>
              <p className="toast-name-text">{name}</p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-top text-center">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              data-bs-dismiss="toast"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
