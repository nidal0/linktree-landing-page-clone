/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import Container from "./Container";
import FooterLogoSocial from "./footer-components/FooterLogoSocial";
import FooterLinks from "./footer-components/FooterLinks";
import FooterCopyrightInfo from "./footer-components/FooterCopyrightInfo";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 6rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <Container>
          <FooterLinks />
          <FooterLogoSocial />
          <FooterCopyrightInfo />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
