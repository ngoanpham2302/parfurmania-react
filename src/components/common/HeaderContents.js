import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import HeaderComponents from "./HeaderComponents";
import HeaderInfoBar from "./HeaderInfoBar";
import LoginSignupModal from "./LoginSignupModal";
import NavBar from "./NavBar";

export default function HeaderContents() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  function openMobileMenu() {
    setIsOpenMobileMenu(true);
  }

  function closeMobileMenu() {
    setIsOpenMobileMenu(false);
  }

  // Handle scroll to top button
  useEffect(() => {
    function showButton() {
      if (window.pageYOffset > 300) {
        setShowToTopBtn(true);
      } else {
        setShowToTopBtn(false);
      }
    }
    window.addEventListener("scroll", showButton);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <HeaderInfoBar />
      <HeaderComponents openMobileMenu={openMobileMenu} />

      <NavBar
        isOpenMobileMenu={isOpenMobileMenu}
        closeMobileMenu={closeMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
      />
      <LoginSignupModal />

      {/* Back to top button */}
      <button
        className={`btn-to-top ${showToTopBtn && "show-totop"}`}
        title="Lên đầu trang"
        onClick={scrollToTop}
      >
        <span className="iconify to-top-icon">
          <Icon icon="carbon:back-to-top" />
        </span>
      </button>
    </>
  );
}
