import { Icon } from "@iconify/react";

export default function Newsletters() {
  return (
    <section className="section section-newsletters container-fluid">
      <div className="newsletter__content container">
        <div className="newsletters__voucher">
          <span className="voucher">NHẬN</span>
          <span className="voucher-rate">10%</span>
          <span className="voucher">VOUCHER</span>
        </div>
        <div className="newsletters__email">
          <h4 className="newsletters__intro">
            Đăng ký nhận tin khuyến&nbsp;mãi
          </h4>
          <div className="newsletters__email-holder">
            <form method="GET">
              <input
                type="email"
                required
                className="newsletters__input"
                name="subscribe-email"
                placeholder="Nhập địa chỉ email..."
              />
              <button type="submit" className="newsletters__btn">
                <span className="iconify send-icon">
                  <Icon icon="carbon:send-alt-filled" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
