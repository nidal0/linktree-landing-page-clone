// Common Imports
import React from "react";

// Component Imports
import Layout from "./components/layout-components/Layout";
import SectionOne from "./components/page-sections/home-page/SectionOne";
import SectionTwo from "./components/page-sections/home-page/SectionTwo";
import SectionThree from "./components/page-sections/home-page/SectionThree";
import SectionFour from "./components/page-sections/home-page/SectionFour";
import SectionFive from "./components/page-sections/home-page/SectionFive";
import SectionSix from "./components/page-sections/home-page/SectionSix";
import SectionSeven from "./components/page-sections/home-page/SectionSeven";
import SectionEight from "./components/page-sections/home-page/SectionEight";
import SectionNine from "./components/page-sections/home-page/SectionNine";
import SectionTen from "./components/page-sections/home-page/SectionTen";
import SectionEleven from "./components/page-sections/home-page/SectionEleven";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
        <SectionEleven />
      </Layout>
    </React.Fragment>
  );
}

export default App;
