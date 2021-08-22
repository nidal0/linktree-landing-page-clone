/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0rem 4rem 0rem",
  },
  cardsRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "space-between",
    padding: "0rem 4rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  heading: {
    color: "#263238",
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: "2rem",
    paddingBottom: "1.5rem",
  },
  imgHolder: {
    height: "80px",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SectionEleven = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Divider style={{ marginTop: "4rem" }} />
      <div className={classes.sectionContainer}>
        <Typography variant="h4" component="span" className={classes.heading}>
          As featured in
        </Typography>
        <div className={classes.cardsRow}>
          <div className={classes.imgHolder}>
            <img
              src="/images/articles/digital-trends.svg"
              alt="Image could not load"
              width={162}
              height={32}
              loading="lazy"
              referrerPolicy="no-referrer"
              longdesc="Linktree Clone"
              className={classes.img}
            />
          </div>
          <div className={classes.imgHolder}>
            <img
              src="/images/articles/entrepreneur.svg"
              alt="Image could not load"
              width={136}
              height={32}
              loading="lazy"
              referrerPolicy="no-referrer"
              longdesc="Linktree Clone"
              className={classes.img}
            />
          </div>
          <div className={classes.imgHolder}>
            <img
              src="/images/articles/forbes.svg"
              alt="Image could not load"
              width={78}
              height={32}
              loading="lazy"
              referrerPolicy="no-referrer"
              longdesc="Linktree Clone"
              className={classes.img}
            />
          </div>
          <div className={classes.imgHolder}>
            <img
              src="/images/articles/engadget.svg"
              alt="Image could not load"
              width={112}
              height={32}
              loading="lazy"
              referrerPolicy="no-referrer"
              longdesc="Linktree Clone"
              className={classes.img}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionEleven;
