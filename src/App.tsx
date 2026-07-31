import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/navbar/Footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Automatically scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentRoute]);

  // Show/hide scroll-to-top button based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentRoute) {
      case "careers":
        return <CareersPage />;
      case "about":
        return <AboutPage />;
      case "products":
        return <ProductsPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <div>
        <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
        <main>{renderPage()}</main>
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#0d9999] hover:bg-[#0D998B] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;
