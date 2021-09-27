import { Icon } from "@iconify/react";
import { convertCurrency } from "components/common/commonFunctions";

export default function ProductInfo({
  brand,
  name,
  price,
  volume,
  concentration,
  status,
  addProductToCart,
  handleBuyNow,
  productQuantity,
  increaseProQuantity,
  decreaseProQuantity,
  changeProQuantity,
}) {
  return (
    <div className="product-detail__info col-12 col-lg-6">
      <div className="product__brand-container row">
        <p className="product__brand col-9 col-sm-6">{brand}</p>
        <div className="product__stars col-3 col-sm-6 d-sm-flex">
          <div className="stars">
            <span className="iconify">
              <Icon icon="clarity:star-solid" />
            </span>
            <span className="iconify">
              <Icon icon="clarity:star-solid" />
            </span>
            <span className="iconify">
              <Icon icon="clarity:star-solid" />
            </span>
            <span className="iconify">
              <Icon icon="clarity:star-solid" />
            </span>
            <span className="iconify">
              <Icon icon="clarity:star-line" />
            </span>
          </div>
          <span className="comment-quantity">(25)</span>
        </div>
      </div>
      <p className="product-detail__name">
        {name + " "}
        <span className="product__volume">{volume}</span>
      </p>
      <p className="product-detail__types">{concentration}</p>
      <p className="product-detail__price">{convertCurrency(price)}</p>
      <div className="product-detail__volume-btns">
        <button className="btn-volume selected">{volume}</button>
        <button className="btn-volume">75ml</button>
        <button className="btn-volume">90ml</button>
      </div>
      <div className="divider-line product-detail__hr-line" />
      <div className="product-detail-status">
        Tình trạng:{" "}
        <span className={status ? "available" : "unavailable"}>
          {status ? "Còn hàng" : "Hết hàng"}
        </span>
      </div>
      <div className="product-detail__buy">
        <div className="product-detail__quantity">
          <button
            className={`quantity-btn quantity-decrease-btn  ${
              productQuantity <= 1 && "disabled"
            }`}
            onClick={decreaseProQuantity}
          >
            -
          </button>
          <input
            type="text"
            className="quantity-input"
            value={productQuantity}
            onChange={(e) => changeProQuantity(e)}
          />
          <button
            className="quantity-btn quantity-increase-btn"
            onClick={increaseProQuantity}
          >
            +
          </button>
        </div>
        <button
          className={`addtocart-btn section__btn ${status ? "" : "disabled"}`}
          onClick={addProductToCart}
        >
          <span
            className="iconify cart-icon"
            data-icon="clarity:shopping-cart-line"
            data-inline="false"
          />
          <span className="text-long">THÊM VÀO GIỎ HÀNG</span>
          <span className="text-short">THÊM VÀO GIỎ</span>
        </button>
        <div className="btn-wishlist-container">
          <button className="addtowishlist-btn">
            <span className="wishlist-icon--empty">
              <Icon icon="clarity:heart-line" />
            </span>
            <span className="wishlist-icon--filled">
              <Icon icon="clarity:heart-solid" />
            </span>
          </button>
        </div>
      </div>
      <div className="btn-buynow-container">
        <div className="btn-wishlist-container">
          <button className="addtowishlist-btn">
            <span className="wishlist-icon--empty">
              <Icon icon="clarity:heart-line" />
            </span>
            <span className="wishlist-icon--filled">
              <Icon icon="clarity:heart-solid" />
            </span>
          </button>
        </div>
        <button
          className={`product-card__btn btn-buynow ${status ? "" : "disabled"}`}
          onClick={handleBuyNow}
        >
          MUA NGAY
        </button>
      </div>
      <div className="scents-info">
        <div className="scents-info__nav">
          <ul
            className="nav nav-pills justify-content-start"
            id="scentsInfoTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="scent-tab"
                data-bs-toggle="tab"
                data-bs-target="#scent"
                type="button"
                role="tab"
                aria-controls="scent"
                aria-selected="true"
              >
                <span className="scent-group">Nhóm hương</span>
                <span className="scent">Hương</span>
              </button>
            </li>
            <div className="vertical-line" />
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="feature-tab"
                data-bs-toggle="tab"
                data-bs-target="#feature"
                type="button"
                role="tab"
                aria-controls="feature"
                aria-selected="false"
              >
                Đặc điểm
              </button>
            </li>
            <div className="vertical-line" />
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="advice-tab"
                data-bs-toggle="tab"
                data-bs-target="#advice"
                type="button"
                role="tab"
                aria-controls="advice"
                aria-selected="false"
              >
                Khuyên dùng
              </button>
            </li>
          </ul>
          <div className="tab-content" id="scentsInfoTabContent">
            <div
              className="tab-pane fade show active container"
              id="scent"
              role="tabpanel"
              aria-labelledby="scent-tab"
            >
              <ul className="scent-list">
                <li className="scent-item">
                  <p className="scent-item__name">Tone hương</p>
                  <p className="scent-item__detail">
                    Hương hoa, hoa&nbsp;trắng
                  </p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Hương đầu</p>
                  <p className="scent-item__detail">
                    Hoa oải hương, quýt, quả lý chua&nbsp;đen
                  </p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Hương giữa</p>
                  <p className="scent-item__detail">
                    Hoa oải hương, hoa cam, hoa&nbsp;nhài
                  </p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Hương cuối</p>
                  <p className="scent-item__detail">
                    Vani Madagascar, xạ hương, gỗ tuyết&nbsp;tùng
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade container"
              id="feature"
              role="tabpanel"
              aria-labelledby="feature-tab"
            >
              <ul className="scent-list feature-list">
                <li className="scent-item">
                  <p className="scent-item__name">Giới tính</p>
                  <p className="scent-item__detail">Nữ</p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Độ tuổi</p>
                  <p className="scent-item__detail">18 - 30</p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Độ lưu hương</p>
                  <p className="scent-item__detail">
                    Lâu – 7 giờ đến 12&nbsp;giờ
                  </p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Độ tỏa hương</p>
                  <p className="scent-item__detail">
                    Xa – Toả hương trong bán kính 3&nbsp;mét
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade container"
              id="advice"
              role="tabpanel"
              aria-labelledby="advice-tab"
            >
              <ul className="scent-list advice-list">
                <li className="scent-item">
                  <p className="scent-item__name">Mùa</p>
                  <p className="scent-item__detail">Mùa xuân, mùa thu</p>
                </li>
                <li className="scent-item">
                  <p className="scent-item__name">Thời gian</p>
                  <p className="scent-item__detail">Ban ngày</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
