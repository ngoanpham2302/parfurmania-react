import AOS from "aos";
import "aos/dist/aos.css";
import "pages/home.css";

import About from "components/home/About";
import CustomerFeedbacks from "components/home/CustomerFeedbacks";
import FragranceFamilies from "components/home/FragranceFamilies";
import Services from "components/home/Services";
import LatestBlogs from "components/home/LatestBlogs";
import CustomerPictures from "components/home/CustomerPictures";
import FeaturedBrands from "components/home/FeaturedBrands";
import HeroContent from "components/home/HeroContent";

export default function Home() {
  AOS.init();

  return (
    <>
      <HeroContent />
      <About />
      <FragranceFamilies />
      <FeaturedBrands />
      <LatestBlogs />
      <Services />
      <CustomerFeedbacks />
      <CustomerPictures />
    </>
  );
}
