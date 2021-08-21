import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    /* XXS breakpoint */
    [theme.breakpoints.down(theme.breakpoints.values.xs + 280)]: {
      padding: "0rem 0.5rem 1rem 0.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0rem 1.5rem 1rem 1.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0rem 3rem 1rem 3rem",
    },
    [theme.breakpoints.only("md")]: {
      padding: "0rem 4rem 1rem 4rem",
    },
    [theme.breakpoints.only("lg")]: {
      padding: "0rem 4rem 1rem 4rem",
    },
    /* XLG breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.lg + 48)]: {
      padding: "0rem 5rem 1rem 5rem",
    },
    /* Full HD breakpoint */
    [theme.breakpoints.up("xl")]: {
      padding: "0rem 23rem 1rem 23rem",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      padding: "0rem 36rem 1rem 36rem",
    },
    /* XXXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
      padding: "0rem 72rem 1rem 72rem",
    },
  },
}));

const BeegruContainer = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>{props.children}</div>
    </React.Fragment>
  );
};

export default BeegruContainer;
