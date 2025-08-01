import React from "react";
import Header from "../Header/Header";
import SectionIntro from "../SectionIntro/SectionIntro";
import SectionService from "../SectinoService/SectionService";
import SectionAbout from "../SectionAbout/SectionAbout";
import VerticalTabs from "../SectionTabs/SectionTabs";
import SectionLocation from "../SectionLocation/SectionLocation";
import SectionTabsTwo from "../SectionTabsTwo/SectionTabsTwo";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <>
      <Header />
      <SectionIntro />
      <SectionService />
      <SectionAbout />
      {/*<VerticalTabs/>*/}
      <SectionTabsTwo />
      <SectionLocation />
      <Footer/>
    </>
  );
};

export default Main;
