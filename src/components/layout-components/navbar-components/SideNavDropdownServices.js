/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import SideNavDropdownItem from "./SideNavDropdownItem";

const useStyles = makeStyles((theme) => ({
  sideNavButton: {
    color: "#757575",
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
    case "navbar/services":
      return "/images/icons/nav/services.svg";
    case "navbar/services/active":
      return "/images/icons/nav/services-red.svg";
    case "navbar/arrowdown":
      return "/images/icons/nav/arrowdown.svg";
    case "navbar/arrowdown/active":
      return "/images/icons/nav/arrowdown-red.svg";
    case "navbar/arrowup":
      return "/images/icons/nav/arrowup.svg";
    case "navbar/arrowup/active":
      return "/images/icons/nav/arrowup-red.svg";
    default:
      return "/images/icons/nav/home.svg";
  }
};

const SideNavDropdownServices = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {/* SideNav Button */}
      <ListItem button onClick={handleClick} className={classes.sideNavButton}>
        {/* Button Icon */}
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
            src={DispenseIcon("navbar/services")}
          />
        </ListItemIcon>

        {/* Button Text */}
        <ListItemText
          primary={props.text}
          primaryTypographyProps={classes.sideNavButtonText}
        />

        {/* Arrow up/down icons  */}
        <img
          decode="async"
          alt="Image could not load"
          longdesc="Linktree Clone"
          loading="lazy"
          referrerPolicy="no-referrer"
          height={14}
          width={14}
          style={{ marginRight: "0.25rem" }}
          src={DispenseIcon("navbar/arrowup")}
        />
      </ListItem>

      {/* Dropdown List */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <SideNavDropdownItem
            href="/services/property-seekers"
            text="Property Seekers"
            icon="navbar/services/propertyseekers"
          />
          <SideNavDropdownItem
            href="/services/land-owners"
            text="Landowners"
            icon="navbar/services/landowners"
          />
          <SideNavDropdownItem
            href="/services/developers"
            text="Developers"
            icon="navbar/services/developers"
          />
          <SideNavDropdownItem
            href="/services/agents"
            text="Agents"
            icon="navbar/services/agents"
          />
          <SideNavDropdownItem
            href="/services/rewards"
            text="Rewards Program"
            icon="navbar/services/rewards"
          />
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default SideNavDropdownServices;
