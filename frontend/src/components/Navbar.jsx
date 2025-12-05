/* eslint-disable react/prop-types */
import logo from "/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection, scrollToTop }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      if (scrollToSection) {
        scrollToSection(sectionId);
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const handleHomeClick = () => {
    if (isHomePage) {
      if (scrollToTop) {
        scrollToTop();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full h-16 bg-gray-50 flex flex-row justify-between px-10 shadow-md items-center sticky top-0 z-50">
      <Link to="/">
        <div className="flex flex-row justify-start items-center font-bold space-x-2">
          <img
            src={logo}
            alt="RetailIQ Logo"
            className="rounded-full h-10 w-10 mt-1"
          />
          <h1 className="text-3xl">
            Retail<span className="text-[#00A2E8]">IQ</span>
          </h1>
        </div>
      </Link>
      <div className="flex flex-row justify-between items-center space-x-8 text-lg">
        <button
          onClick={handleHomeClick}
          className="font-semibold cursor-pointer hover:text-[#00A2E8] transition bg-transparent border-none text-lg"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("features")}
          className="font-semibold cursor-pointer hover:text-[#00A2E8] transition bg-transparent border-none text-lg"
        >
          Features
        </button>
        <button
          onClick={() => handleNavigation("insights")}
          className="font-semibold cursor-pointer hover:text-[#00A2E8] transition bg-transparent border-none text-lg"
        >
          Insights
        </button>
        <button
          onClick={() => handleNavigation("footer")}
          className="font-semibold cursor-pointer hover:text-[#00A2E8] transition bg-transparent border-none text-lg"
        >
          Contact
        </button>
      </div>
      <Link to="/dashboard">
        <button className="px-4 py-2 bg-[#00A2E8] text-white rounded-3xl font-semibold cursor-pointer hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;