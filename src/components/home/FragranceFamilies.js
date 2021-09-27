import { Link } from "react-router-dom";

// Section Fragrance Families

export default function FragranceFamilies() {
  return (
    <section className="section section-frag-families container">
      <h2 className="section__title section-frag-families__title">
        NHÓM HƯƠNG CHỦ&nbsp;ĐẠO
      </h2>
      <div className="frag-families row">
        <div className="frag-family col-12 col-lg-8 amber-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương hổ phách</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-amber.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-sm-6 col-lg-4 chypre-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương Chypre</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-chypre.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-sm-6 col-lg-4 citrus-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương cam quýt</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-citrus.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-lg-4 leather-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương da thuộc</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-leather.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-sm-6 col-lg-4 floral-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương hoa</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-floral.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-sm-6 col-lg-4 woody-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương gỗ</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-woody.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="frag-family col-12 col-lg-8 aromatic-family">
          <Link to="/product-list">
            <div className="frag-family__wrapper">
              <div className="frag-family__info">Hương thơm ngát</div>
              <div className="frag-family__top-bottom" />
              <div className="frag-family__left-right" />
              <div className="frag-family__img">
                <img
                  src="https://ngoanpham2302.github.io/la-parfumania/images/decors/frag-family-aromatic.webp"
                  alt="frag-family-amber"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
