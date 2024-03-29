import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const MainLayout = () => {
  const location = useLocation();
  const noNavigation = location.pathname.includes("profile");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {noNavigation ? null : <HeroSection />}

      <div className="flex-1 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
