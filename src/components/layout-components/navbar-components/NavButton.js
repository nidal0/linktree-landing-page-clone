/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  navButton: {
    color: "#263238",
    borderBottom: "solid 3px #FFFFFF",
    padding: "1.5rem 1rem 1.4rem 1rem",
    borderRadius: 0,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.6rem",
    letterSpacing: "0.047rem",
    textTransform: "capitalize",
    "&:hover": {
      background: "#ffffff",
      borderBottomStyle: "solid",
      borderWidth: "0px 0px 3px 0px",
      borderImage:
        "linear-gradient(to right, rgb(40, 191, 123), rgb(46, 211, 186) 20%, rgb(68, 194, 215) 40%, rgb(90, 162, 220) 60%, rgb(112, 141, 224) 80%, rgb(138, 134, 229)) 1",
    },
  },
}));

const NavButton = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link
        href={props.href}
        rel="noopener"
        aria-label={props.text}
        title={props.text}
        className={classes.link}
      >
        <Button
          aria-controls={props.ariaControls}
          aria-haspopup={props.ariaHaspopup}
          onClick={props.onClick}
          className={classes.navButton}
        >
          <span>{props.text}</span>
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default NavButton;
