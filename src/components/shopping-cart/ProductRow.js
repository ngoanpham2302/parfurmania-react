import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  convertCurrency,
  abbreviateWords,
} from "components/common/commonFunctions";

export default function ProductRow({
  id,
  imgSrc,
  name,
  brand,
  volume,
  quantity,
  price,
  slug,
  concentration,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
}) {
  return (
    <div className="product-row">
      <div className="pro-img">
        <Link to={`/product-list/${slug}/${id}`}>
          <img src={imgSrc} alt={name} />
        </Link>
      </div>
      <div className="product-cols">
        <div className="pro-name mobile-flex">
          <Link
            to={`/product-list/${slug}/${id}`}
          >{`${brand} ${name} ${abbreviateWords(concentration)}`}</Link>
          <button
            className="btn-remove-product btn-remove-mobile"
            onClick={() => removeProduct(id)}
          >
            <span className="remove-icon">
              <Icon icon="icomoon-free:bin" />
            </span>
          </button>
        </div>
        <div className="pro-volume medium-col">{volume}</div>
        <div className="unit-price medium-col mobile-flex">
          <span className="col-name">Đơn giá</span>
          <span className="col-value">{convertCurrency(price)}</span>
        </div>
        <div className="pro-quantity medium-col mobile-flex">
          <span className="col-name">Số lượng</span>
          <div className="cart__quantity">
            <button
              className="quantity-btn quantity-decrease-btn"
              onClick={() => decreaseQuantity(id)}
            >
              -
            </button>
            <input
              type="text"
              className="quantity-input"
              value={quantity}
              onChange={(e) => changeQuantity(e, id)}
            />
            <button
              className="quantity-btn quantity-increase-btn"
              onClick={() => increaseQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="total-price medium-col mobile-flex">
          <span className="col-name">Thành tiền</span>
          <span className="col-value">{convertCurrency(quantity * price)}</span>
        </div>
        <div className="pro-remove text-center mobile-hidden">
          <button
            className="btn-remove-product"
            onClick={() => removeProduct(id)}
          >
            <span className="remove-icon">
              <Icon icon="icomoon-free:bin" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
