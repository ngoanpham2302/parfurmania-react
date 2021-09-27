export default function RemoveAllModal({ removeAllProducts }) {
  return (
    <div
      className="modal fade"
      id="removeAllModal"
      tabIndex={-1}
      aria-labelledby="removeAllModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="removeAllModalLabel">
              Xác nhận
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            Bạn có chắc chắn muốn xóa toàn bộ sản phẩm trong giỏ hàng?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success btn-confirm-remove-all"
              data-bs-dismiss="modal"
              onClick={removeAllProducts}
            >
              Chắc chắn
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
