import { Link, useRouteMatch } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "images/logo.png";
import userAvatar from "images/user-avatar.webp";
import { useContext } from "react";
import { CartContext } from "App";

export default function HeaderComponents({ openMobileMenu }) {
  return (
    <>
      <DeskTopHeaderComponents openMobileMenu={openMobileMenu} />
      <MobileHeaderComponents />
      <MobileLogoBar openMobileMenu={openMobileMenu} />
    </>
  );
}

function DeskTopHeaderComponents({ openMobileMenu }) {
  const [cartQuantity] = useContext(CartContext);

  return (
    <div className="header-component-outer container-fluid">
      <div className="header-component container">
        <div className="header-component__wrapper row">
          <div className="header-component__search-box col-4">
            <div className="header-component__inner-search d-flex">
              <span className="iconify search-icon">
                <Icon icon="carbon:search" />
              </span>
              <input
                type="search"
                className="header-component__search-input"
                placeholder="Tìm kiếm"
              />
            </div>
          </div>

          <div className="tablet-components col-4">
            <button
              className="btn-mobile mobile-menu-icon"
              onClick={openMobileMenu}
            >
              <span className="iconify">
                <Icon icon="clarity:menu-line" />
              </span>
            </button>

            <button className="btn-mobile mobile-search-icon">
              <span className="iconify search-icon mobile-search-trigger">
                <Icon icon="carbon:search" />
              </span>

              <div className="mobile-search-bar">
                <div className="btn-close-search">
                  <span className="iconify">
                    <Icon icon="clarity:window-close-line" />
                  </span>
                </div>

                <div className="search-box">
                  <div className="header-component__inner-search d-flex">
                    <input
                      type="text"
                      className="header-component__search-input"
                      placeholder="Tìm kiếm"
                    />

                    <span className="iconify search-icon">
                      <Icon icon="carbon:search" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="header-component__logo col-4 text-center">
            <Link to="/">
              <img className="logo" src={logo} alt="la-parfumania-logo" />
            </Link>
          </div>

          <div className="header-component__user-items col-4">
            <button
              className="header-component__btn header-component__btn-account"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              <span className="iconify account-icon">
                <Icon icon="clarity:user-line" />
              </span>
            </button>

            <button className="user-login d-none">
              <span className="user-avatar">
                <img src={userAvatar} alt="user-avatar" />
              </span>

              <div className="user-dropdown">
                <div>Thông tin cá nhân</div>
                <div>Đơn hàng</div>
                <div className="user-logout">Đăng xuất</div>
              </div>
            </button>

            <button className="header-component__btn header-component__btn-wishlist">
              <Link to="/wishlist">
                <span className="iconify wishlist-icon">
                  <Icon icon="clarity:heart-line" />
                </span>
              </Link>
            </button>

            <button className="header-component__btn header-component__btn-cart">
              <Link to="/shopping-cart">
                <span className="iconify cart-icon">
                  <Icon icon="clarity:shopping-cart-line" />
                </span>
                <span className="header-component__cart-badge cart-badge">
                  {cartQuantity}
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeaderComponents() {
  const [cartQuantity] = useContext(CartContext);

  let matchHome = useRouteMatch({ path: "/", exact: true }),
    matchWishlist = useRouteMatch("/wishlist"),
    matchCart = useRouteMatch("/shopping-cart");

  return (
    <div className="mobile-header-components">
      <div className="component-wrapper">
        <div
          className={`mobile-component mobile-home ${matchHome && "active"}`}
        >
          <Link to="/">
            <span className="iconify">
              <Icon icon="fa-solid:home" />
            </span>
            <span>Home</span>
          </Link>
        </div>

        <div
          className={`mobile-component mobile-wishlist ${
            matchWishlist && "active"
          }`}
        >
          <Link to="/wishlist">
            <span className="iconify">
              <Icon icon="clarity:heart-solid" />
            </span>
            <span>Wishlist</span>
          </Link>
        </div>

        <div
          className={`mobile-component mobile-cart ${matchCart && "active"}`}
        >
          <Link to="/shopping-cart">
            <span className="mobile-cart-icon">
              <span className="iconify">
                <Icon icon="clarity:shopping-cart-solid" />
              </span>
              <span className="mobile-component__cart-badge cart-badge">
                {cartQuantity}
              </span>
            </span>
            <span>Cart</span>
          </Link>
        </div>

        <div
          className="mobile-component mobile-account"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          <div>
            <span className="iconify">
              <Icon icon="clarity:user-solid" />
            </span>
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileLogoBar({ openMobileMenu }) {
  return (
    <div className="mobile-logo-bar">
      <button className="btn-mobile mobile-menu-icon" onClick={openMobileMenu}>
        <span className="iconify">
          <Icon icon="clarity:menu-line" />
        </span>
      </button>
      <div className="mobile-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="la-parfumania-logo" />
        </Link>
      </div>
      <button className="btn-mobile mobile-search-icon">
        <span className="iconify search-icon mobile-search-trigger">
          <Icon icon="carbon:search" />
        </span>
        <div className="mobile-search-bar">
          <div className="btn-close-search">
            <span className="iconify">
              <Icon icon="clarity:window-close-line" />
            </span>
          </div>
          <div className="search-box">
            <div className="header-component__inner-search d-flex">
              <input
                type="search"
                className="header-component__search-input"
                placeholder="Tìm kiếm"
              />

              <span className="iconify search-icon">
                <Icon icon="carbon:search" />
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
