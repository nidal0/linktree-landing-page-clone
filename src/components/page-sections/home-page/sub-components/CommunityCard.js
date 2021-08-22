import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "2rem 5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 2rem",
    },
  },
  dpBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  name: {
    width: "100%",
    color: "#263238",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
  },
  imgHolder: {
    marginBottom: "1rem",
    borderRadius: "10%",
    display: "inline-block",
    boxShadow: "inset 0 0 0 10px rgba(255,255,255, 0)",
    transition: "all .8s ease 0s",
    "&:hover": {
      boxShadow: "inset 0 0 0 10px rgba(255,255,255, 1)",
    },
  },
  img: {
    borderRadius: "10%",
    display: "block",
    position: "relative",
    zIndex: -1,
    [theme.breakpoints.down("xs")]: {
      height: "165px",
      width: "250px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "165px",
      width: "250px",
    },
    [theme.breakpoints.only("md")]: {
      height: "165px",
      width: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "213px",
      width: "320px",
    },
  },
  imgDP: {
    height: 32,
    width: 32,
  },
}));

const CommunityCard = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.imgHolder}>
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
        </div>
        <div className={classes.dpBar}>
          <Avatar
            alt="Unable to load"
            src={props.imgDP}
            className={classes.imgDP}
          />
          <Typography variant="h1" component="span" className={classes.name}>
            {props.name}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommunityCard;
