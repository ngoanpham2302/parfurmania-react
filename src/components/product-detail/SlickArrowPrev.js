import { Icon } from "@iconify/react";

export default function SlickArrowPrev({
  currentSlide,
  slideCount,
  ...arrowProps
}) {
  return (
    <button
      {...arrowProps}
      className="prev-arrow"
      aria-label="Previous"
      type="button"
    >
      <span className="prev-arrow">
        <Icon icon="fluent:chevron-left-28-regular" />
      </span>
    </button>
  );
}
