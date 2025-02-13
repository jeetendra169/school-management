import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Herosection from "./landing/Herosection";
import Learning from "./landing/Learning";
import WordOfStudent from "./landing/WordOfStudent";
import Jorney from "./landing/Jorney";
import Studay from "./landing/Studay";
import Crousel from "./landing/Crousel";
import ContactUs from "./landing/ContactUs";
import Team from "./landing/Team";
import Blog from "./landing/Blog";
import Aboutus from "./landing/Aboutus";
function Landing() {
  return (
    <>
      <div className="bg-blue-50">

      <Header />
      <Crousel />
      <Aboutus/>
      <Herosection />
      <Learning />
      <WordOfStudent />
      <Jorney />
      <Studay />
      <Team />
      <Blog/>
      <ContactUs />
      <Footer />
      </div>
    </>
  );
}

export default Landing;
