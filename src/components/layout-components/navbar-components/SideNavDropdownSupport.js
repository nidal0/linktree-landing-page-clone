/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import SideNavDropdownItem from "./SideNavDropdownItem";

const useStyles = makeStyles((theme) => ({
  sideNavButton: {
    color: "#263238",
    background: "#ffffff",
  },
  sideNavButtonText: {
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
  sideNavButtonTextActive: {
    color: "#7551e9",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
}));

const SideNavDropdownSupport = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {/* SideNav Button */}
      <ListItem button onClick={handleClick} className={classes.sideNavButton}>
        {/* Button Text */}
        <ListItemText
          primary={props.text}
          primaryTypographyProps={
            !open ? classes.sideNavButtonText : classes.sideNavButtonTextActive
          }
        />

        {/* Arrow down icon  */}
        <img
          decode="async"
          alt="Image could not load"
          longdesc="Linktree Clone"
          loading="lazy"
          referrerPolicy="no-referrer"
          height={14}
          width={14}
          style={{ marginRight: "0.25rem" }}
          src="/images/icons/nav/arrowdown.svg"
        />
      </ListItem>

      {/* Dropdown List */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <SideNavDropdownItem href="/" text="Help Topics" />
          <SideNavDropdownItem href="/" text="Getting Started" />
          <SideNavDropdownItem href="/" text="Features How To" />
          <SideNavDropdownItem href="/" text="FAQs" />
          <SideNavDropdownItem href="/" text="Report a violation" />
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default SideNavDropdownSupport;
