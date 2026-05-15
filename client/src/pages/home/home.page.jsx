import { CategoriesSection, HeroBannerSection } from "../../components";
import PromotionSection from "../../components/promotion/PromotionSection";

const HomePage = () => {
  return (
    <div>
      <HeroBannerSection />
      {/* <hr />
      <hr /> */}
      <CategoriesSection />
      <PromotionSection />
    </div>
  );
};
export default HomePage;
