import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
