/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { Link, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  sideNavButton: {
    color: "#757575",
    borderRight: "solid 3px #FFFFFF",
    background: "#ffffff",
  },
  sideNavButtonActive: {
    color: "#CC0000",
    background: "-webkit-linear-gradient(0deg, #F74134, #EB1C61)",
    "-webkit-background-clip": "text",
    "-webkit-text-fillColor": "transparent",
    borderRightStyle: "solid",
    borderRightWidth: "3px",
    borderImage: "-webkit-linear-gradient(270deg, #F74134, #EB1C61) 1",
  },
  listIcon: {
    minWidth: "auto",
  },
  sideNavButtonText: {
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  sideNavButtonTextActive: {
    color: "#CC0000",
    background: "-webkit-linear-gradient(0deg, #F74134, #EB1C61)",
    "-webkit-background-clip": "text",
    "-webkit-text-fillColor": "transparent",
    fontWeight: "500",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
}));

const DispenseIcon = (iconString) => {
  switch (iconString) {
    case "navbar/home":
      return "/images/icons/nav/home.svg";
    case "navbar/home/active":
      return "/images/icons/nav/home-red.svg";
    default:
      return "/images/icons/nav/home.svg";
  }
};

const SideNavButton = (props) => {
  const classes = useStyles();
  const iconColor = props.router.pathname == props.href ? "active" : "inactive";
  return (
    <React.Fragment>
      <Link
        href={props.href}
        rel="noopener"
        aria-label={props.text}
        title={props.text}
        className={classes.link}
      >
        <ListItem
          button
          className={
            props.router.pathname == props.href
              ? classes.sideNavButtonActive
              : classes.sideNavButton
          }
        >
          <ListItemIcon className={classes.listIcon}>
            <img
              decode="async"
              alt="Image could not load"
              longdesc="Linktree Clone"
              loading="lazy"
              referrerPolicy="no-referrer"
              height={24}
              width={24}
              style={{ marginRight: "0.5rem" }}
              src={DispenseIcon(
                iconColor == "inactive" ? props.icon : props.icon + "/active"
              )}
            />
          </ListItemIcon>
          <ListItemText
            primary={props.text}
            primaryTypographyProps={{
              className:
                props.router.pathname == props.href
                  ? classes.sideNavButtonTextActive
                  : classes.sideNavButtonText,
            }}
          />
        </ListItem>
      </Link>
    </React.Fragment>
  );
};

export default SideNavButton;
