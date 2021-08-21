/* React Imports */
import React from "react";
import { Helmet } from "react-helmet";

/* Component Imports */
import Footer from "./Footer";
import Navbar from "./Navbar";
import Container from "./Container";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div id="rootDiv">
        <Navbar />
        <Helmet>
          <html lang="en-GB" />
        </Helmet>
        <Container>{props.children}</Container>
        <Footer id="footer" />
      </div>
    </React.Fragment>
  );
};

export default Layout;
