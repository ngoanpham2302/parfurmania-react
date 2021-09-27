import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// Product List Page Banner
export default function PageBanner({ pageTitle, addedHtml, bannerName }) {
  return (
    <div className={`page-banner container-fluid ${bannerName}`}>
      <div className="page-banner__content">
        <h2 className="page-banner__title">{pageTitle}</h2>

        <div className="page-banner__hr-line"></div>

        <div className="page-banner__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>

              <li className="breadcrumb-divider">
                <span className="iconify">
                  <Icon icon="carbon:chevron-right" />
                </span>
              </li>

              {addedHtml}

              <li className="breadcrumb-item active" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
