/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import FooterLinksColumnOne from "./FooterLinksColumnOne";
import FooterLinksColumnTwo from "./FooterLinksColumnTwo";
import FooterLinksColumnThree from "./FooterLinksColumnThree";
import FooterLinksColumnFour from "./FooterLinksColumnFour";

const useStyles = makeStyles((theme) => ({
  linksMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
    },
  },
  linksTablet: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  linksDesktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const FooterLinks = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.linksMobile}>
        <FooterLinksColumnOne />
        <FooterLinksColumnTwo />
        <FooterLinksColumnThree />
        <FooterLinksColumnFour />
      </div>
      <div className={classes.linksTablet}>
        <FooterLinksColumnOne />
        <FooterLinksColumnTwo />
        <FooterLinksColumnThree />
        <FooterLinksColumnFour />
      </div>
      <div className={classes.linksDesktop}>
        <FooterLinksColumnOne />
        <FooterLinksColumnTwo />
        <FooterLinksColumnThree />
        <FooterLinksColumnFour />
      </div>
    </React.Fragment>
  );
};

export default FooterLinks;
