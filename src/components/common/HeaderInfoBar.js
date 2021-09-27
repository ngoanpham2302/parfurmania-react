import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SOCIAL_ICONS = [
  {
    name: "youtube-icon",
    icon: "carbon:logo-youtube",
  },
  {
    name: "facebook-icon",
    icon: "bx:bxl-facebook",
  },
  {
    name: "email-icon",
    icon: "carbon:email",
  },
  {
    name: "instagram-icon",
    icon: "carbon:logo-instagram",
  },
  {
    name: "pinterest-icon",
    icon: "bx:bxl-pinterest-alt",
  },
  {
    name: "twitter-icon",
    icon: "bx:bxl-twitter",
  },
];

export default function HeaderInfoBar() {
  return (
    <div className="info-bar container-fluid">
      <div className="info-bar__wrapper">
        <div className="info-bar__phone">
          <a href="tel:0123456789" rel="noreferrer noopener" target="_blank">
            <span className="iconify phone-icon">
              <Icon icon="carbon:phone-filled" />
            </span>
            <span className="info-bar__phone-number">0123456789</span>
          </a>
        </div>

        <div className="info-bar__social-icons">
          {SOCIAL_ICONS.map((item) => (
            <Link to="/" key={item.icon}>
              <span className={`iconify ${item.name}`}>
                <Icon icon={item.icon} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
