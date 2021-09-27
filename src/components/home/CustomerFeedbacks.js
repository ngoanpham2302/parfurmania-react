// Section Customer Feedbacks
import { Icon } from "@iconify/react";

export default function CustomerFeedbacks() {
  return (
    <section className="section section-feedbacks container-fluid">
      <h2 className="section__title section-feedbacks__title">
        CẢM NHẬN KHÁCH&nbsp;HÀNG
      </h2>
      <div
        className="feedbacks container"
        data-aos="fade-up"
        data-aos-duration={1300}
      >
        <div
          id="carouselCustomerFeebacks"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-indicators">
            <img
              type="button"
              data-bs-target="#carouselCustomerFeebacks"
              data-bs-slide-to={0}
              aria-label="Slide 1"
              src="https://ngoanpham2302.github.io/la-parfumania/images/customers/customer-01.webp"
              alt="customer-avatar"
            />
            <img
              type="button"
              data-bs-target="#carouselCustomerFeebacks"
              data-bs-slide-to={1}
              className="active"
              aria-current="true"
              aria-label="Slide 2"
              src="https://ngoanpham2302.github.io/la-parfumania/images/customers/customer-02.webp"
              alt="customer-avatar"
            />
            <img
              type="button"
              data-bs-target="#carouselCustomerFeebacks"
              data-bs-slide-to={2}
              aria-label="Slide 3"
              src="https://ngoanpham2302.github.io/la-parfumania/images/customers/customer-03.webp"
              alt="customer-avatar"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item feedback">
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-left" />
                </span>
              </div>
              <p className="feedback__content">
                Cảm ơn La Parfumania đã giúp mình chọn các món quà ý nghĩa dành
                tặng cho bạn bè và đối tác. Showroom sang trọng, dịch vụ chuyên
                nghiệp, ship hàng nhanh, nhân viên siêu dễ thương, tư vấn nhiệt
                tình, mình thấy rất hài lòng. Từ bây giờ, mình đã có thể sở hữu
                được sản phẩm nước hoa ưng ý với giá cả tốt mà không phải lo
                lắng về chất&nbsp;lượng.
              </p>
              <p className="feedback__name">
                Hoàng Nhật Minh,
                <span className="feedback__job-title">
                  Sale Manager Halgitech
                </span>
              </p>
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-right" />
                </span>
              </div>
            </div>
            <div className="carousel-item feedback active">
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-left" />
                </span>
              </div>
              <p className="feedback__content">
                Hành trình đi tìm mùi hương hợp với phong cách của mình thật
                không hề dễ dàng. Mình đã từng thử qua khá nhiều mùi hương nhưng
                có vẻ như vẫn chưa thực sự ưng ý. Thế rồi tình cờ đến với La
                Parfumania, mình đã gặp Rose Of No Man’s Land của Byredo, một
                mùi hương hoa hồng sớm mai dịu dàng, đầy tinh tế, đúng như ý
                mình&nbsp;muốn.
              </p>
              <p className="feedback__name">
                Phạm Hoài An,
                <span className="feedback__job-title">
                  Giám đốc Marketing Liant
                </span>
              </p>
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-right" />
                </span>
              </div>
            </div>
            <div className="carousel-item feedback">
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-left" />
                </span>
              </div>
              <p className="feedback__content">
                Khi mua hàng ở đây là feeling like a queen! Các bạn bán hàng và
                tư vấn hết sức nhiệt tình chiều khách! Dù biết mũi mình có hạn
                mà thật sự mê đắm khám phá tất cả những mùi hương. Nếu bạn muốn
                tìm mùi hương phù hợp với tính cách của mình, hãy đến với La
                Parfumania nhé. Highly recommend! Chắc chắn mình sẽ quay lại
                thật&nbsp;nhiều.
              </p>
              <p className="feedback__name">
                Trịnh Hương Giang,
                <span className="feedback__job-title">
                  Nhà thiết kế Lascent
                </span>
              </p>
              <div className="feedback__quote-icon">
                <span className="iconify">
                  <Icon icon="bx:bxs-quote-alt-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
