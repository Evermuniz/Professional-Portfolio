import "./App.css";
import React from "react";
// importing the header, footer, and the Portfolio Container which will render based on the link
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="d-flex flex-column min-vh-100">
      <div>
        <Header />
        <PortfolioContainer />
      </div>
      <Footer />
    </section>
  );
}

export default App;
