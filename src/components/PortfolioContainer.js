import React, { useState } from "react";
import Header from "./Header";
//import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    /*if(currentPage === "Projects"){
      return <Projects />;
    }*/
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="main-content">{renderPage()}</main>
      {/* <Footer /> */}
    </div>
  );
}
export default PortfolioContainer;
