/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0rem 4rem 0rem",
  },
  button: {
    height: "48px",
    width: "auto",
    borderRadius: "0.75rem",
    borderWidth: "2px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#5e46ab",
    },
  },
}));

const SectionEleven = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
        >
          GET STARTED FOR FREE
        </Button>
      </div>
    </React.Fragment>
  );
};

export default SectionEleven;
