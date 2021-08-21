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

const FooterLinksColumnTwo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.regularColumn}>
        <Typography
          variant="body2"
          component="span"
          className={classes.columnHeading}
        >
          Partnerships
        </Typography>
        <Link
          href="/"
          rel="noopener"
          title="Linktree for Enterprise"
          className={classes.columnLink}
        >
          Linktree for Enterprise
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Charities"
          className={classes.columnLink}
        >
          Charities
        </Link>
        <Link
          href="/"
          rel="noopener"
          title="Linktree Ambassador"
          className={classes.columnLink}
        >
          Linktree Ambassador
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FooterLinksColumnTwo;
