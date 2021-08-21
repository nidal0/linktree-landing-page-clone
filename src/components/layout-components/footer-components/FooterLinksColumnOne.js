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

const FooterLinksColumnOne = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.regularColumn}>
        <Typography
          variant="body2"
          component="span"
          className={classes.columnHeading}
        >
          Company
        </Typography>
        <Link
          href="/"
          rel="noopener"
          title="Blog"
          className={classes.columnLink}
        >
          Blog
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="About"
          className={classes.columnLink}
        >
          About
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Press"
          className={classes.columnLink}
        >
          Press
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Career"
          className={classes.columnLink}
        >
          Career
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Social Good"
          className={classes.columnLink}
        >
          Social Good
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Contact"
          className={classes.columnLink}
        >
          Contact
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FooterLinksColumnOne;
