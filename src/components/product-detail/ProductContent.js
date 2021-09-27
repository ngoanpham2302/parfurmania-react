export default function ProductContent({ brand, name, images, concentration }) {
  return (
    <div className="product-content">
      <div className="product-content__nav">
        <ul
          className="nav nav-pills justify-content-start"
          id="productContentTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              MÔ TẢ
            </button>
          </li>
          <div className="vertical-line" />
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="info-tab"
              data-bs-toggle="tab"
              data-bs-target="#info"
              type="button"
              role="tab"
              aria-controls="info"
              aria-selected="false"
            >
              THÔNG TIN
            </button>
          </li>
          <div className="vertical-line" />
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="comment-tab"
              data-bs-toggle="tab"
              data-bs-target="#comment"
              type="button"
              role="tab"
              aria-controls="comment"
              aria-selected="false"
            >
              ĐÁNH GIÁ
            </button>
          </li>
        </ul>
        <div className="nav-pill-hr-line divider-line" />
        <div className="tab-content" id="productContentTabContent">
          <div
            className="tab-pane fade show active container"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div
              className="product-des-wrapper row"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="product-des col-12 col-lg-6">
                <h5 className="product-des__title">
                  Sự gợi cảm tinh tế, thanh lịch và tươi&nbsp;mới
                </h5>
                <p className="product-des__content">
                  {`${brand} ${name} ${concentration} là dòng nước hoa nữ được ra mắt
                  vào năm 2019 bởi sự hợp tác giữa chai chuyên gia nước hoa Anne
                  Flipo và Carlos Benaim. Thiết kế của ${name} gây ấn tượng mạnh
                  mẽ về tính độc đáo, sang trọng và tinh tế mà hãng ${brand} vẫn thường ưu ái dành cho các bộ sưu tập thời trang
                  danh tiếng của mình.`}
                </p>
                <p className="product-des__content">
                  {`${name} mang một mùi hương hoa phương Đông, nổi bật với nhóm
                  hương chính như hoa lavender quyến rũ kết hợp cùng hoa cam
                  tươi mát và thảo mộc. Sự góp mặt của hương vani giúp cô nàng
                  ${name} trở nên ngọt ngào và quyến rũ hơn, nhưng vẫn giữ được sự
                  thanh lịch và tươi mới khi note hương cam vẫn hiện hữu.`}
                </p>
                <p className="product-des__content">
                  {`Sự sang trọng, gợi cảm và cá tính là điều hãng ${brand} muốn gửi gắm đến cô nàng kiêu kỳ này.`}
                </p>
              </div>
              <div className="product-des__img col-12 col-lg-6">
                <img src={images[images.length - 1]} alt={`${brand} ${name}`} />
              </div>
            </div>
            <h5
              className="product-des__title note-title"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              {`Hương thơm của sự tự do - ${brand} ${name}`}
            </h5>
            <div
              className="product-notes row"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="product-note col-12 col-md-6 col-xl-4">
                <div className="product-note__img">
                  <img
                    src="https://ngoanpham2302.github.io/la-parfumania/images/decors/libre-lavender.webp"
                    alt="libre-lavender"
                  />
                </div>
                <h4 className="product-note__title">DIVA LAVENDER</h4>
                <p className="product-note__detail">
                  {`Tầng hương đầu của ${name} bao gồm hoa oải hương diva và hoa
                  lavandin hoang dã, mát mẻ. Sự pha trộn đặc biệt này mang đến
                  cho ${name} một nốt hương đầu có chút nam tính.`}
                </p>
              </div>
              <div className="product-note col-12 col-md-6 col-xl-4">
                <div className="product-note__img">
                  <img
                    src="https://ngoanpham2302.github.io/la-parfumania/images/decors/libre-orange.webp"
                    alt="libre-orange"
                  />
                </div>
                <h4 className="product-note__title">ORANGE BLOSSOM</h4>
                <p className="product-note__detail">
                  {`${name} ${concentration} gây ấn tượng với tầng hương giữa ngập tràn
                  hoa cam. Hương thơm ấm áp, nữ tính khiến Libre mang một thứ
                  hương hoa gần như gây nghiện cho mọi phụ nữ.`}
                </p>
              </div>
              <div className="product-note col-12 col-md-6 col-xl-4">
                <div className="product-note__img">
                  <img
                    src="https://ngoanpham2302.github.io/la-parfumania/images/decors/libre-vanilla.webp"
                    alt="libre-lavender"
                  />
                </div>
                <h4 className="product-note__title">BOURBON VANILLA</h4>
                <p className="product-note__detail">
                  {`Hương thơm ngọt ngào của vani tạo nên tầng hương cuối của nước
                  hoa. Chiết xuất vani phong phú kết hợp với hương hổ phách mang
                  đến cho ${name} hương thơm cuốn hút, nữ tính.`}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade container"
            id="info"
            role="tabpanel"
            aria-labelledby="info-tab"
          >
            <ul className="scent-list feature-list">
              <li className="scent-item">
                <p className="scent-item__name">Năm phát hành</p>
                <p className="scent-item__detail">2019</p>
              </li>
              <li className="scent-item">
                <p className="scent-item__name">Nhà điều chế</p>
                <p className="scent-item__detail">Anne Flipo, Carlos Benaim</p>
              </li>
              <li className="scent-item">
                <p className="scent-item__name">Nước sản xuất</p>
                <p className="scent-item__detail">Pháp</p>
              </li>
              <li className="scent-item">
                <p className="scent-item__name">Dung tích</p>
                <p className="scent-item__detail">30ml, 50ml, 90ml</p>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade container"
            id="comment"
            role="tabpanel"
            aria-labelledby="comment-tab"
          >
            <p className="write-comment">ĐÁNH GIÁ SẢN PHẨM</p>
            <div className="row mb-4">
              <div className="col me-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ tên *"
                  aria-label="name"
                />
              </div>
              <div className="col ms-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email *"
                  aria-label="Email"
                />
              </div>
            </div>
            <div className="mb-5">
              <textarea
                className="form-control"
                id="commentTextarea"
                rows={4}
                placeholder="Đánh giá"
                defaultValue={""}
              />
            </div>
            <button className="section__btn btn-send-comment">
              GỬI ĐÁNH GIÁ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
