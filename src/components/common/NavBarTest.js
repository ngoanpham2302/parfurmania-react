import { Link, useRouteMatch } from "react-router-dom";

// Navbar
export default function NavBarTest() {
  let match1 = useRouteMatch("/product-list");
  let match2 = useRouteMatch("/shopping-cart");
  let match3 = useRouteMatch({ path: "/", exact: true });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          La Parfumania
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${match3 && "active"}`}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product-list"
                className={`nav-link ${match1 && "active"}`}
              >
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping-cart"
                className={`nav-link ${match2 && "active"}`}
              >
                Giỏ hàng
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
