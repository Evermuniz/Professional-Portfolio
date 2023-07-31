import React, { useState } from "react";
// importing all the pages and the navbar. 
// navbar will be used to control which page will be displayed
import NavTabs from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// this will export all the components the App.js
export default function PortfolioContainer() {
    // setting the home page to the About me page and using state below to change the page
    const [currentPage, setCurrentPage] = useState("AboutMe");

    // render the page based on which page is active 
    const renderPage = () => {
    if (currentPage === "AboutMe") {
        return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
        return <Portfolio />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }
    };

    // change the page using useState hook to the active page
    const  handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* current page will come from which page is active on the navbar */}
            {/* exporting all the pages and the functions to render along with page changes */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}


        
