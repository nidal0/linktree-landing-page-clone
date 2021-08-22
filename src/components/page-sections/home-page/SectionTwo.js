/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0rem 4rem 0rem",
  },
  imgSizer: {
    height: "100%",
    width: "100%",
  },
}));

const SectionTwo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <div>
          <img
            src="/images/linktree.jpg"
            alt="Image not found"
            width={512}
            height={512}
            loading="lazy"
            referrerPolicy="no-referrer"
            longdesc="Linktree Clone"
            className={classes.imgSizer}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionTwo;
