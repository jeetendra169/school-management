import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Herosection from "./landing/Herosection";
import Learning from "./landing/Learning";
import WordOfStudent from "./landing/WordOfStudent";
import Jorney from "./landing/Jorney";
import Studay from "./landing/Studay";
import Crousel from "./landing/Crousel";
function Landing() {
  return (
    <>
     <Header />
        <Crousel/>
        <Herosection />
        <Learning/>
        <WordOfStudent/>
        <Jorney/>
        <Studay/>
        <Footer />
    </>
  )
}

export default Landing
