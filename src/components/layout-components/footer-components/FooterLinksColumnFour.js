/* Common Imports */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */

import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  regularColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0rem 1rem 0rem",
    },
  },
  columnHeading: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    color: "#131415",
    marginBottom: "1rem",
  },
  columnLink: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.4rem",
    color: "#263238",
  },
}));

const FooterLinksColumnFour = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.regularColumn}>
        <Typography
          variant="body2"
          component="span"
          className={classes.columnHeading}
        >
          Trust & Legal
        </Typography>
        <Link
          href="/"
          rel="noopener"
          title="Terms & Conditions"
          className={classes.columnLink}
        >
          Terms & Conditions
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Privacy Policy"
          className={classes.columnLink}
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Trust Centre"
          className={classes.columnLink}
        >
          Trust Centre
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FooterLinksColumnFour;
