/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import FooterLinksColumnOne from "./FooterLinksColumnOne";
import FooterLinksColumnTwo from "./FooterLinksColumnTwo";
import FooterLinksColumnThree from "./FooterLinksColumnThree";
import FooterLinksColumnFour from "./FooterLinksColumnFour";

const useStyles = makeStyles((theme) => ({
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: "4.5rem",
  },
}));

const FooterLinks = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.links}>
        <FooterLinksColumnOne />
        <FooterLinksColumnTwo />
        <FooterLinksColumnThree />
        <FooterLinksColumnFour />
      </div>
    </React.Fragment>
  );
};

export default FooterLinks;
