import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  RefreshCw,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import dashboardPreview from "../assets/dashboard.png";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100); 
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
      <section className="pt-20 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-4">
            <p className="inline-flex items-center text-[#00A2E8] font-medium bg-[#bee8fa] px-3 py-1.5 rounded-full text-md">
              <Zap className="mr-1.5" size={14} />
              Now with AI-powered insights
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Insights for <span className="text-[#00A2E8]">Shopify</span>{" "}
            Retailers
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect your store in 60 seconds. See real-time customer behavior,
            inventory health, and revenue trends - all in one beautiful
            dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cursor-pointer px-8 py-3 bg-[#00A2E8] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Free Trial <ChevronRight size={20} />
            </button>
            <Link to="/dashboard">
              <button className="cursor-pointer px-8 py-3 border-2 border-[#00A2E8] text-[#00A2E8] font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
                View Dashboard Demo
              </button>
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-green-500" />
              <span>Trusted by 500+ retailers</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="ml-1">4.9/5 from 243 reviews</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, At A Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your complete retail command center with real-time metrics that
            matter.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-linear-to-r from-[#00A2E8]/20 to-blue-200/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
          <img
            src={dashboardPreview}
            alt="Dashboard Preview"
            className="relative rounded-2xl shadow-2xl border border-gray-200 w-full transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
          />
        </div>
      </section>
      <section
        id="features"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built specifically for Shopify retailers who want insights without
            complexity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-[#00A2E8]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real-time Analytics
            </h3>
            <p className="text-gray-600">
              Live revenue tracking, conversion rates, and customer insights.
              See what&apos;s working instantly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle className="text-amber-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Alerts
            </h3>
            <p className="text-gray-600">
              Low stock alerts, cart abandon detection, and VIP customer
              notifications. Never miss an opportunity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <RefreshCw className="text-green-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Automated Sync
            </h3>
            <p className="text-gray-600">
              Connect your Shopify store once. We sync data automatically every
              5 minutes.
            </p>
          </div>
        </div>
      </section>
      <section
        id="insights"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Turn Insights Into Revenue
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real opportunities your data reveals, actionable in one click.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Recover Lost Revenue
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    $1,245
                  </span>
                  <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
                    RECOVERABLE
                  </span>
                </div>
              </div>
              <Zap className="text-amber-500" size={32} />
            </div>
            <p className="text-gray-600 mb-6">
              23 customers abandoned carts in the last 48 hours
            </p>
            <button className="w-full py-3 bg-[#00A2E8] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2">
              Send Reminder Email <ArrowRight size={20} />
            </button>
          </div>
          <div className="bg-linear-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Prevent Stockouts
                </h3>
                <div className="text-5xl font-bold text-gray-900">3 items</div>
              </div>
              <AlertTriangle className="text-amber-500" size={32} />
            </div>
            <p className="text-gray-600 mb-6">
              Premium Sneakers at 12 units
              <br />
              Expected to sell out in 4 days
            </p>
            <button className="w-full py-3 bg-white border-2 border-[#00A2E8] text-[#00A2E8] font-semibold rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center gap-2">
              View Inventory Dashboard <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <footer
        id="footer"
        className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h1 className="text-3xl font-bold">
                  Retail<span className="text-[#00A2E8]">IQ</span>
                </h1>
              </div>
              <p className="text-gray-400">
                Smart analytics for Shopify retailers. Make data-driven
                decisions that grow your business.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition bg-transparent border-none text-left p-0"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("footer")}
                    className="hover:text-white transition bg-transparent border-none text-left p-0"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 RetailIQ Analytics. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
