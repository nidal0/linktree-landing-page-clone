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
    backgroundColor: "#ffffff",
    paddingLeft: "2rem",
  },
  sideNavButtonActive: {
    color: "#CC0000",
    background: "-webkit-linear-gradient(0deg, #F74134, #EB1C61)",
    "-webkit-background-clip": "text",
    "-webkit-text-fillColor": "transparent",
    borderRightStyle: "solid",
    borderRightWidth: "3px",
    borderImage: "-webkit-linear-gradient(270deg, #F74134, #EB1C61) 1",
    paddingLeft: "2rem",
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
    case "navbar/services/propertyseekers":
      return "/images/icons/nav/propertyseekers.svg";
    case "navbar/services/propertyseekers/active":
      return "/images/icons/nav/propertyseekers-red.svg";
    case "navbar/services/landowners":
      return "/images/icons/nav/landowners.svg";
    case "navbar/services/landowners/active":
      return "/images/icons/nav/landowners-red.svg";
    case "navbar/services/developers":
      return "/images/icons/nav/developers.svg";
    case "navbar/services/developers/active":
      return "/images/icons/nav/developers-red.svg";
    case "navbar/services/agents":
      return "/images/icons/nav/agents.svg";
    case "navbar/services/agents/active":
      return "/images/icons/nav/agents-red.svg";
    case "navbar/services/rewards":
      return "/images/icons/nav/rewards.svg";
    case "navbar/services/rewards/active":
      return "/images/icons/nav/rewards-red.svg";
    case "navbar/company/aboutus":
      return "/images/icons/nav/aboutus.svg";
    case "navbar/company/aboutus/active":
      return "/images/icons/nav/aboutus-red.svg";
    case "navbar/company/faqs":
      return "/images/icons/nav/faqs.svg";
    case "navbar/company/faqs/active":
      return "/images/icons/nav/faqs-red.svg";
    case "navbar/company/careers":
      return "/images/icons/nav/careers.svg";
    case "navbar/company/careers/active":
      return "/images/icons/nav/careers-red.svg";
    case "navbar/company/contactus":
      return "/images/icons/nav/contactus.svg";
    case "navbar/company/contactus/active":
      return "/images/icons/nav/contactus-red.svg";
    default:
      return "/images/icons/nav/home.svg";
  }
};

const SideNavDropdownItem = (props) => {
  const classes = useStyles();
  const iconColor = props.router.pathname == props.href ? "active" : "inactive";

  return (
    <React.Fragment>
      {/* Dropdown List Item */}
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

export default SideNavDropdownItem;
