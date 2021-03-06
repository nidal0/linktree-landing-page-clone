/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0rem 4rem 0rem",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingRight: "11.1111%",
    paddingLeft: "5.55556%",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      padding: "1rem",
    },
  },
  heading: {
    width: "100%",
    color: "#131415",
    fontWeight: "400",
    fontSize: "3rem",
    lineHeight: "3.5rem",
    margin: "0rem 0rem 0.5rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      textAlign: "center",
    },
  },
  subHeading: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    width: "100%",
    color: "#263238",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
      textAlign: "center",
    },
  },
  illustrationSizer: {
    /* XXS breakpoint */
    [theme.breakpoints.down(theme.breakpoints.values.xs + 280)]: {
      height: "280px",
      width: "280px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "320px",
      width: "320px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "352px",
      width: "352px",
    },
    [theme.breakpoints.only("md")]: {
      height: "384px",
      width: "384px",
    },
    [theme.breakpoints.only("lg")]: {
      height: "512px",
      width: "512px",
    },
    [theme.breakpoints.only("xl")]: {
      height: "512px",
      width: "512px",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      height: "768px",
      width: "768px",
    },
  },
  animationDesktop: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  animationMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const SectionFour = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <div className={classes.animationMobile}>
          <img
            src="/animations/link_to_everywhere.gif"
            alt="Image not found"
            width={512}
            height={512}
            loading="lazy"
            referrerPolicy="no-referrer"
            longdesc="Linktree Clone"
            className={classes.illustrationSizer}
          />
        </div>
        <div className={classes.text}>
          <Typography variant="h1" component="span" className={classes.heading}>
            Link to everywhere
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.subHeading}
          >
            Linktree is the launchpad to your latest video, article, recipe,
            tour, store, website, social post - everywhere you are online.
          </Typography>
        </div>
        <div className={classes.animationDesktop}>
          <img
            src="/animations/link_to_everywhere.gif"
            alt="Image not found"
            width={512}
            height={512}
            loading="lazy"
            referrerPolicy="no-referrer"
            longdesc="Linktree Clone"
            className={classes.illustrationSizer}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionFour;
