/* Common Imports */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */

import FooterLogo from "./FooterLogo";
import FooterSocialIcons from "./FooterSocialIcons";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  logoAndSocial: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem 0rem 1rem 0rem",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "1rem 0rem 1rem 0rem",
    },
  },
}));

const FooterHeader = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Divider />
      <div className={classes.logoAndSocial}>
        <FooterLogo />
        <FooterSocialIcons />
      </div>
      <Divider />
    </React.Fragment>
  );
};

export default FooterHeader;
