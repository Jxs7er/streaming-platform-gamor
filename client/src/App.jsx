import { CategoriesSection, HeroBannerSection } from "./components";
import { ThemeProvider } from "./context";
import { MainLayout } from "./ui";

const App = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <HeroBannerSection />
        <CategoriesSection />
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
