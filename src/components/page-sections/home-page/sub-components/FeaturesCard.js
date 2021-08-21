import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "2rem 4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 2rem",
    },
  },
  heading: {
    width: "100%",
    color: "#263238",
    fontWeight: "400",
    fontSize: "2rem",
    lineHeight: "2.5rem",
    textAlign: "center",
    margin: "0rem 0rem 0.5rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
  },
  subHeading: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    width: "100%",
    color: "#263238",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1.75rem",
    },
  },
  img: {
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      height: "175px",
      width: "175px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "150px",
      width: "150px",
    },
    [theme.breakpoints.only("md")]: {
      height: "230px",
      width: "230px",
    },
    [theme.breakpoints.only("lg")]: {
      height: "310px",
      width: "310px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "310px",
      width: "310px",
    },
  },
}));

const FeaturesCard = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.card}>
        <img
          src={props.img}
          alt="Image not found"
          width={310}
          height={310}
          loading="lazy"
          referrerPolicy="no-referrer"
          longdesc="Linktree Clone"
          className={classes.img}
        />
        <Typography variant="h1" component="span" className={classes.heading}>
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="span"
          className={classes.subHeading}
        >
          {props.desc}
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default FeaturesCard;
