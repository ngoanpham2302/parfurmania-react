// Section Services

export default function Services() {
  return (
    <section className="section section-services container">
      <h2 className="section__title section-services__title">
        TẠI SAO CHỌN LA&nbsp;PARFUMANIA
      </h2>
      <div className="services row row-cols-4">
        <div className="service col-12 col-sm-6 col-xl-3">
          <img
            className="service__icon"
            src="https://ngoanpham2302.github.io/la-parfumania/images/icons/authentic-products.svg"
            alt="authentic-products"
          />
          <h4 className="service__title">Sản phẩm chính&nbsp;hãng</h4>
          <p className="service__content">
            Sản phẩm nước hoa được mua trực tiếp tại Sephora và store chính hãng
            ở Pháp và&nbsp;Ý
          </p>
        </div>
        <div className="service col-12 col-sm-6 col-xl-3">
          <img
            className="service__icon"
            src="https://ngoanpham2302.github.io/la-parfumania/images/icons/gift-box.svg"
            alt="gift-box"
          />
          <h4 className="service__title">Miễn phí bọc&nbsp;quà</h4>
          <p className="service__content">
            Miễn phí hộp quà và thiệp với đơn hàng trên 800,000VND cho tất cả
            các khách&nbsp;hàng
          </p>
        </div>
        <div className="service col-12 col-sm-6 col-xl-3">
          <img
            className="service__icon"
            src="https://ngoanpham2302.github.io/la-parfumania/images/icons/free-sample.svg"
            alt="free-sample"
          />
          <h4 className="service__title">Free sample</h4>
          <p className="service__content">
            Tặng kèm một sample chính hãng với các đơn hàng có giá trị từ
            2,000,000VND trở&nbsp;lên
          </p>
        </div>
        <div className="service col-12 col-sm-6 col-xl-3">
          <img
            className="service__icon"
            src="https://ngoanpham2302.github.io/la-parfumania/images/icons/gift-card.svg"
            alt="gift-card"
          />
          <h4 className="service__title">Ưu đãi thành&nbsp;viên</h4>
          <p className="service__content">
            Thành viên vàng được giảm 5%, thành viên bạc được giảm 3% cho tất cả
            các đơn&nbsp;hàng
          </p>
        </div>
      </div>
    </section>
  );
}
