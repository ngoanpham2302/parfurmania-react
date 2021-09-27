import { Icon } from "@iconify/react";

export default function SlickArrowNext({
  currentSlide,
  slideCount,
  ...arrowProps
}) {
  return (
    <button
      {...arrowProps}
      className="next-arrow"
      aria-label="Next"
      type="button"
    >
      <span className="next-arrow">
        <Icon icon="fluent:chevron-right-28-regular" />
      </span>
    </button>
  );
}
