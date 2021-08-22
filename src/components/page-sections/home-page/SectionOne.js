/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography, Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
    justifyContent: "space-between",
    alignItems: "center",
    // height: "calc(100vh - 4rem)",
    width: "100%",
    padding: "8rem 0rem 12rem 0rem",
  },
  heading: {
    color: "#131415",
    fontWeight: "400",
    fontSize: "4rem",
    lineHeight: "4.5rem",
    margin: "0rem 0rem 0rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      textAlign: "center",
    },
  },
  subHeading: {
    color: "#263238",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    margin: "1rem 0rem 4rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
      textAlign: "center",
    },
  },
  button: {
    height: "64px",
    width: "auto",
    borderRadius: "1rem",
    borderWidth: "2px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#5e46ab",
    },
  },
  preLinkText: {
    color: "#131415",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.75rem",
    margin: "1rem 0rem 0rem 0rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    color: "#131415",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const SectionEight = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <Typography variant="h1" component="span" className={classes.heading}>
          The Only Link You’ll Ever Need
        </Typography>
        <Typography
          variant="body2"
          component="span"
          className={classes.subHeading}
        >
          Connect audiences to all of your content with just one link
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
        >
          GET STARTED FOR FREE
        </Button>
        <Typography
          variant="body2"
          component="span"
          className={classes.preLinkText}
        >
          Already on Linktree?{" "}
          <Link href="/" rel="noopener" title="Log in" className={classes.link}>
            Log in
          </Link>
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default SectionEight;
