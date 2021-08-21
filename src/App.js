// Common Imports
import React from "react";

// Component Imports
import Layout from "./components/layout-components/Layout";
import SectionThree from "./components/page-sections/home-page/SectionThree";
import SectionFour from "./components/page-sections/home-page/SectionFour";
import SectionFive from "./components/page-sections/home-page/SectionFive";
import SectionSix from "./components/page-sections/home-page/SectionSix";
import SectionSeven from "./components/page-sections/home-page/SectionSeven";
import SectionEight from "./components/page-sections/home-page/SectionEight";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </Layout>
    </React.Fragment>
  );
}

export default App;
