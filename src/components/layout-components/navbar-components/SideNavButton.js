/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { Link, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  sideNavButton: {
    color: "#263238",
    background: "#ffffff",
  },
  sideNavButtonText: {
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
}));

const SideNavButton = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link
        href={props.href}
        rel="noopener"
        aria-label={props.text}
        title={props.text}
        className={classes.link}
      >
        <ListItem button className={classes.sideNavButton}>
          <ListItemText
            primary={props.text}
            primaryTypographyProps={classes.sideNavButtonText}
          />
        </ListItem>
      </Link>
    </React.Fragment>
  );
};

export default SideNavButton;
