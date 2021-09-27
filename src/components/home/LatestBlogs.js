import { Link } from "react-router-dom";

// Section Latest Blogs
export default function LatestBlogs() {
  return (
    <section className="section section-latest-blogs">
      <h2 className="section__title section-latest-blogs__title">
        BLOG MỚI NHẤT
      </h2>
      <div className="blogs container">
        <div
          className="blog first-blog row"
          data-aos="fade-up"
          data-aos-duration={1300}
        >
          <div className="blog__content col-12 col-lg-5 col-xl-4">
            <h3 className="blog__title">
              Giorgio Armani Light di Gioia - Ngày rực&nbsp;sáng
            </h3>
            <p className="blog__intro">
              Thời tiết mùa đông có thể ảm đạm, u sầu như địa ngục nhưng với
              chút hương phảng phất của hoa nhài và hoa dành dành sẽ đem đến cho
              bạn sự ấm áp, rực rỡ như đang tận hưởng hoàng hôn rạng ngời ngay
              tại Địa Trung&nbsp;Hải[...]
            </p>
            <p className="blog__date">20 July, 2021</p>
            <button className="section__btn readmore__btn">
              <Link to="/">ĐỌC THÊM</Link>
            </button>
          </div>

          <div className="blog__img col-12 col-lg-7 col-xl-8">
            <img
              src="https://ngoanpham2302.github.io/la-parfumania/images/banners/blog-armani-light-di-gioia.webp"
              alt="blog-armani-light-di-gioia"
            />
          </div>
        </div>
        <div
          className="blog second-blog row"
          data-aos="fade-up"
          data-aos-duration={1300}
        >
          <div className="blog__img col-12 col-lg-7 col-xl-8">
            <img
              src="https://ngoanpham2302.github.io/la-parfumania/images/banners/blog-armani-si-fiori.webp"
              alt="blog-armani-si-fiori"
            />
          </div>

          <div className="blog__content col-12 col-lg-5 col-xl-4">
            <h3 className="blog__title">
              Armani Sì Fiori - Đam mê và đầy nhiệt&nbsp;huyết
            </h3>
            <p className="blog__intro">
              Sì Fiori gây chú ý bởi sự trẻ trung, nữ tính với hương nho đen
              cùng quýt. Dường như tôi nghĩ mình đã ngửi thấy mùi hương của hoa
              cam, cái thứ hương quyến luyến khó cưỡng ấy, nâng đỡ đầy nhịp
              nhàng với hoa hồng miên&nbsp;man[...]
            </p>
            <p className="blog__date">18 July, 2021</p>
            <button className="section__btn readmore__btn">
              <Link to="/">ĐỌC THÊM</Link>
            </button>
          </div>
        </div>
      </div>
      <button className="section__btn readmore__btn">
        <Link to="/">XEM TẤT CẢ BLOGS</Link>
      </button>
    </section>
  );
}
