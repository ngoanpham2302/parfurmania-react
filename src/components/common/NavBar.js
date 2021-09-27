import { useRef, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "images/logo.png";

export default function NavBar({
  isOpenMobileMenu,
  closeMobileMenu,
  setIsOpenMobileMenu,
}) {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar
        isOpenMobileMenu={isOpenMobileMenu}
        closeMobileMenu={closeMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
      />
    </>
  );
}

function DesktopNavBar() {
  let matchProductList = useRouteMatch("/product-list"),
    matchHomePage = useRouteMatch({ path: "/", exact: true });

  return (
    <nav className="nav-bar container-fluid desktop-navbar">
      <ul className="menu desktop-menu">
        <li
          className={`menu__item menu__item--nochild ${
            matchHomePage && "active"
          }`}
        >
          <Link to="/" className="menu__entry">
            Trang chủ
          </Link>
        </li>
        <li
          className={`menu__item menu__item--haschild ${
            matchProductList && "active"
          }`}
        >
          <div className="menu__entry">
            <Link to="/product-list" className="menu__text">
              Sản phẩm
            </Link>
            <span className="iconify caret-down">
              <Icon icon="bi:caret-down-fill" />
            </span>
          </div>
          <ul className="submenu products-submenu">
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Nước hoa nam
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Nước hoa nữ
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Nước hoa unisex
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu__item menu__item--haschild">
          <div className="menu__entry">
            <span className="menu__text">Nhóm hương</span>
            <span className="iconify caret-down">
              <Icon icon="bi:caret-down-fill" />
            </span>
          </div>
          <ul className="submenu scents-submenu">
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương hổ phách - Amber
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương Síp - Chypre
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương cam quýt - Citrus
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương da thuộc - Leather
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương hoa - Floral
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương gỗ - Woody
              </Link>
            </li>
            <li className="submenu__item">
              <Link to="/product-list" className="submenu__link">
                Hương thơm ngát - Aromatic
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu__item menu__item--nochild">
          <Link to="/" className="menu__entry">
            Thương hiệu
          </Link>
        </li>
        <li className="menu__item menu__item--nochild menu__item--about">
          <Link to="/" className="menu__entry">
            Về La Parfumania
          </Link>
        </li>
        <li className="menu__item menu__item--nochild">
          <Link to="/" className="menu__entry">
            Blogs
          </Link>
        </li>
        <li className="menu__item menu__item--nochild">
          <Link to="/" className="menu__entry">
            Liên hệ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileNavBar({
  isOpenMobileMenu,
  closeMobileMenu,
  setIsOpenMobileMenu,
}) {
  // Close mobile menu when click outside
  const menuRef = useRef(null);

  useEffect(() => {
    function checkIfClickedOutside(event) {
      if (
        isOpenMobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpenMobileMenu(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpenMobileMenu, setIsOpenMobileMenu]);

  return (
    <div className={`backdrop-bg ${isOpenMobileMenu && "open-menu"} `}>
      <div className="mobile-nav-bar" ref={menuRef}>
        <div className="btn-close-menu" onClick={closeMobileMenu}>
          <span className="iconify">
            <Icon icon="clarity:window-close-line" />
          </span>
        </div>
        <div className="mobile-menu__logo">
          <Link to="/">
            <img className="logo" src={logo} alt="la-parfumania-logo" />
          </Link>
        </div>
        <ul className="menu mobile-menu">
          <li className="mobile-menu__item mobile-menu__item--nochild">
            <Link to="/" className="mobile-menu__entry">
              Trang chủ
            </Link>
          </li>
          <div className="accordion accordion-flush" id="menuItemHasChild">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <Link to="/product-list">SẢN PHẨM</Link>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#menuItemHasChild"
              >
                <div className="accordion-body">
                  <ul className="mobile-submenu products-mobile-submenu">
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Nước hoa nam
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Nước hoa nữ
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Nước hoa unisex
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  NHÓM HƯƠNG
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#menuItemHasChild"
              >
                <div className="accordion-body">
                  <ul className="mobile-submenu scents-mobile-submenu">
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương hổ phách - Amber
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương Síp - Chypre
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương cam quýt - Citrus
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương da thuộc - Leather
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương hoa - Floral
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương gỗ - Woody
                      </Link>
                    </li>
                    <li className="mobile-submenu__item">
                      <Link to="/product-list" className="mobile-submenu__link">
                        Hương thơm ngát - Aromatic
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <li className="mobile-menu__item mobile-menu__item--nochild">
            <Link to="/" className="mobile-menu__entry">
              Thương hiệu
            </Link>
          </li>
          <li className="mobile-menu__item mobile-menu__item--nochild">
            <Link to="/" className="mobile-menu__entry">
              Về La Parfumania
            </Link>
          </li>
          <li className="mobile-menu__item mobile-menu__item--nochild">
            <Link to="/" className="mobile-menu__entry">
              Blogs
            </Link>
          </li>
          <li className="mobile-menu__item mobile-menu__item--nochild">
            <Link to="/" className="mobile-menu__entry">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
