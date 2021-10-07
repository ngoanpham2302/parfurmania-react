export default function OrderPaymentInfo({
  shipMethod,
  handleShipMethods,
  showFeedback,
  name,
  phone,
  city,
  district,
  ward,
  address,
  setName,
  setPhone,
  setCity,
  setDistrict,
  setWard,
  setAddress,
}) {
  return (
    <div className="order__payment-info">
      <h4 className="order__title">Thông tin thanh toán</h4>
      <div className="order__first-info row g-3">
        <div className="order__name">
          <input
            type="text"
            className="form-control name-input"
            placeholder="Họ tên *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {showFeedback && !name && (
            <div className="feedback-noti">Vui lòng nhập họ tên</div>
          )}
        </div>
        <div className="order__phone">
          <input
            type="number"
            className="form-control phone-input"
            placeholder="Số điện thoại *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {showFeedback && !phone && (
            <div className="feedback-noti">Vui lòng nhập số điện thoại</div>
          )}
        </div>
        <div className="order__city">
          <input
            type="text"
            className="form-control city-input"
            placeholder="Tỉnh/Thành phố *"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {showFeedback && !city && (
            <div className="feedback-noti">Vui lòng nhập tỉnh/thành phố</div>
          )}
        </div>
        <div className="order__district">
          <input
            type="text"
            className="form-control district-input"
            placeholder="Quận/Huyện *"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          {showFeedback && !district && (
            <div className="valid-feedback feedback-noti">
              Vui lòng nhập quận/huyện
            </div>
          )}
        </div>
        <div className="order__ward">
          <input
            type="text"
            className="form-control ward-input"
            placeholder="Phường/Xã *"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
          />
          {showFeedback && !ward && (
            <div className="feedback-noti">Vui lòng nhập phường/xã</div>
          )}
        </div>
        <div className="order__address">
          <input
            type="text"
            className="form-control address-input"
            placeholder="Địa chỉ *"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {showFeedback && !address && (
            <div className="feedback-noti">Vui lòng nhập địa chỉ</div>
          )}
        </div>
        <div className="order__ship-method">
          <select
            value={shipMethod}
            className="form-select ship-method-select"
            id="ship-method"
            onChange={handleShipMethods}
          >
            <option disabled value="methods">
              Phương thức vận chuyển *
            </option>
            <option value="save">Tiết kiệm</option>
            <option value="standard">Tiêu chuẩn</option>
            <option value="fast">Nhanh</option>
            <option value="superfast">Hỏa tốc</option>
          </select>
          {showFeedback && shipMethod === "methods" && (
            <div className="feedback-noti">
              Vui lòng chọn phương thức vận chuyển
            </div>
          )}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="order-note"
            rows={3}
            placeholder="Ghi chú đơn hàng"
            defaultValue={""}
          />
        </div>
      </div>

      {/* <div className="form-check order__other-address">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="other-address"
          id="other-address"
        />
        <label className="form-check-label" htmlFor="other-address">
          Giao hàng tới địa chỉ khác?
        </label>
      </div> */}

      {/* <div className="order__receiver-info row g-3">
        <div className="order__name">
          <input
            type="text"
            className="form-control name-input"
            placeholder="Họ tên *"
          />
          <div className="feedback-noti">Vui lòng nhập họ tên</div>
        </div>
        <div className="order__phone">
          <input
            type="text"
            className="form-control phone-input"
            placeholder="Số điện thoại *"
          />
          <div className="feedback-noti">Vui lòng nhập số điện thoại</div>
        </div>
        <div className="order__city">
          <input
            type="text"
            className="form-control city-input"
            placeholder="Tỉnh/Thành phố *"
          />
          <div className="feedback-noti">Vui lòng nhập tỉnh/thành phố</div>
        </div>
        <div className="order__district">
          <input
            type="text"
            className="form-control district-input"
            placeholder="Quận/Huyện *"
          />
          <div className="valid-feedback feedback-noti">
            Vui lòng nhập quận/huyện
          </div>
        </div>
        <div className="order__ward">
          <input
            type="text"
            className="form-control ward-input"
            placeholder="Phường/Xã *"
          />
          <div className="feedback-noti">Vui lòng nhập phường/xã</div>
        </div>
        <div className="order__address">
          <input
            type="text"
            className="form-control address-input"
            placeholder="Địa chỉ *"
          />
          <div className="feedback-noti">Vui lòng nhập địa chỉ</div>
        </div>
      </div> */}
    </div>
  );
}
