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
    [theme.breakpoints.up("md")]: {
      paddingRight: "4rem",
    },
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

const FooterLinksColumnThree = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.regularColumn}>
        <Typography
          variant="body2"
          component="span"
          className={classes.columnHeading}
        >
          Support
        </Typography>
        <Link
          href="/"
          rel="noopener"
          title="Help Topics"
          className={classes.columnLink}
        >
          Help Topics
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Getting Started"
          className={classes.columnLink}
        >
          Getting Started
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Features How To"
          className={classes.columnLink}
        >
          Features How To
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="FAQs"
          className={classes.columnLink}
        >
          FAQs
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Report a violation"
          className={classes.columnLink}
        >
          Report a violation
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FooterLinksColumnThree;
