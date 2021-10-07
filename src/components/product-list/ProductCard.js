import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  convertCurrency,
  abbreviateWords,
} from "components/common/commonFunctions";

export default function ProductCard({
  id,
  imgSrc,
  brand,
  name,
  price,
  slug,
  concentration,
  addToCart,
  status,
}) {
  let fullName = `${name} ${abbreviateWords(concentration)}`;

  return (
    <div className="col-12 col-sm-6 col-xl-4">
      <div className="card product-card">
        <div className="product-card__img">
          <Link to={`/product-list/${slug}/${id}`}>
            <img
              className="card-img-top"
              src={imgSrc}
              alt={`${brand} ${name}`}
            />
          </Link>
        </div>

        <div className="card-body">
          <Link to={`/product-list/${slug}/${id}`}>
            <h5 className="card-title product-card__brand">{brand}</h5>
            <p className="card-text product-card__name">{fullName}</p>
            <p className="card-text product-card__price">
              {convertCurrency(price)}
            </p>
          </Link>

          {status ? (
            <button
              className="btn-addtocart product-card__btn"
              onClick={() => addToCart(id, imgSrc, fullName)}
            >
              <span className="cart-icon">
                <Icon icon="clarity:shopping-cart-line" />
              </span>
              <span>Thêm vào giỏ hàng</span>
            </button>
          ) : (
            <p className="unavailable-label">Hết hàng</p>
          )}
        </div>
      </div>
    </div>
  );
}
