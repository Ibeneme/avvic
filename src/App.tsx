import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/navbar/Footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState("home");

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
    <div>
      <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
