// Footer
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__info">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-info__item">
                <h4 className="footer-info__title">THÔNG TIN LIÊN&nbsp;HỆ</h4>

                <ul className="footer-info__list">
                  <li className="footer-info__list-item">
                    <span>
                      <Icon icon="entypo:location-pin" />
                    </span>
                    <span>{" ĐC: 15 Tố Hữu, Hà Đông, HN"}</span>
                  </li>

                  <li className="footer-info__list-item">
                    <span>
                      <Icon icon="icomoon-free:mobile" />
                    </span>
                    <span>{" Hotline: 0123456789"}</span>
                  </li>

                  <li className="footer-info__list-item">
                    <span>
                      <Icon icon="carbon:email" />
                    </span>
                    <span>{" Email: laparfumania@gmail.com"}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-info__item">
                <h4 className="footer-info__title">THỜI GIAN LÀM&nbsp;VIỆC</h4>

                <ul className="footer-info__list">
                  <li className="footer-info__list-item">
                    Thứ 2 - Thứ 6: 8AM - 11PM
                  </li>

                  <li className="footer-info__list-item">
                    Thứ 7, Chủ Nhật: 9AM - 9PM
                  </li>

                  <li className="footer-info__list-item">
                    Nghỉ các ngày lễ, Tết
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-info__item">
                <h4 className="footer-info__title">DỊCH VỤ KHÁCH&nbsp;HÀNG</h4>

                <ul className="footer-info__list">
                  <li className="footer-info__list-item">
                    <Link to="/">Câu hỏi thường gặp</Link>
                  </li>

                  <li className="footer-info__list-item">
                    <Link to="/">Hướng dẫn mua hàng online</Link>
                  </li>

                  <li className="footer-info__list-item">
                    <Link to="/">Chính sách bảo mật</Link>
                  </li>

                  <li className="footer-info__list-item">
                    <Link to="/">Liên hệ & góp ý</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-info__item">
                <h4 className="footer-info__title">CHÍNH SÁCH MUA&nbsp;HÀNG</h4>

                <ul className="footer-info__list">
                  <li className="footer-info__list-item">
                    <Link to="/">Chính sách bảo hành, đổi trả</Link>
                  </li>

                  <li className="footer-info__list-item">
                    <Link to="/">Chính sách giao hàng, hoàn hủy</Link>
                  </li>

                  <li className="footer-info__list-item">
                    <Link to="/">Ưu đãi thẻ thành viên</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="footer__copyright-content">
          <span>{"All rights reserved | "}</span>
          <span className="iconify">
            <Icon icon="la:copyright-solid" />
          </span>
          <span>{" La Parfumania 2021"}</span>
        </p>
      </div>
    </footer>
  );
}
