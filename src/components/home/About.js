// Section About

export default function About() {
  return (
    <section
      className="section section-about"
      data-aos="fade-up"
      data-aos-duration={1200}
    >
      <div className="container justify-content-between">
        <div className="section-about__content">
          <h2 className="section__title section-about__title">
            VỀ LA&nbsp;PARFUMANIA
          </h2>
          <div className="section-about__detail">
            <p>
              La Parfumania cung cấp đa dạng các thương hiệu nước hoa, từ
              designer cho đến niche. Cho dù bạn đang tìm kiếm một mùi hương
              tươi mới, mát mẻ, tràn đầy năng lượng hay dịu dàng, ấm áp, ngọt
              ngào, từ hương trái cây, hương hoa cho đến hương gỗ, hương da
              thuộc, La&nbsp;Parfumania đều có một mùi hương phù hợp
              với&nbsp;bạn.
            </p>
            <p className="mb-0">
              Tại La Parfumania, chúng tôi luôn tin rằng, mỗi mùi hương là một
              cuộc hành trình. Chúng lặn sâu vào quá khứ, dạo chơi trong kí ức.
              Chúng khám phá những chân trời đầy cảm hứng và chưa được biết tới,
              và sẵn sàng cho những cuộc phiêu lưu&nbsp;mới.
            </p>
          </div>
        </div>
        <div className="section-about__img">
          <img
            src="https://ngoanpham2302.github.io/la-parfumania/images/decors/about-us.webp"
            alt="about-us"
          />
        </div>
      </div>
    </section>
  );
}
