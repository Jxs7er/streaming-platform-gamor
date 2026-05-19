import { CategoriesSection, HeroBannerSection } from "@/components";
import PromotionSection from "@/components/promotion/PromotionSection";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-stretch justify-center">
        <HeroBannerSection />
      </div>
      <PromotionSection />
      <CategoriesSection />
    </div>
  );
};
export default HomePage;
