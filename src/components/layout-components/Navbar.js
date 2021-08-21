/* Common Imports */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

/* Component Imports */

import {
  AppBar,
  Toolbar,
  Link,
  useScrollTrigger,
  Button,
} from "@material-ui/core";
import NavButton from "./navbar-components/NavButton";
import SideNav from "./navbar-components/SideNav";

const useStyles = makeStyles((theme) => ({
  /* Navbar New */
  appBar: {
    backgroundColor: "#FFFFFF",
    height: "4.625rem",
    padding: "0rem 1rem 0rem 1rem",
  },
  toolBar: {
    width: "100%",
    height: "4.625rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0rem 0rem 0rem 0rem",
  },
  logoLink: {
    width: 85,
    height: "100%",
    marginRight: "2rem",
  },
  signupBtn: {
    height: "32px",
    width: "auto",
    background: "#39e09b",
    borderRadius: "8px",
    color: "#273b3d",
    padding: "0rem 1rem",
    marginLeft: "1rem",
    textTransform: "capitalize",
    "&:hover": {
      background: "#28bf7b",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#808080",
    padding: "0rem 0rem 0rem 0rem",
    width: "1.5rem",
    height: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileLogoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginRight: "-4rem",
    },
  },
  logoImg: {
    height: "1.25rem",
    width: "5.313rem",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [drawerSwitch, setDrawerSwitch] = React.useState(false);
  return (
    <React.Fragment>
      {/* SideNav Phone */}
      <SideNav
        open={drawerSwitch}
        onClose={() => {
          setDrawerSwitch(false);
        }}
      />

      {/* Navbar Desktop */}
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          {/* Logo */}
          <div className={classes.mobileLogoContainer}>
            <Link
              href="/"
              rel="noopener"
              aria-label="Linktree"
              title="Home"
              className={classes.logoLink}
            >
              <img
                loading="lazy"
                decode="async"
                alt="Image could not load"
                longdesc="Linktree Clone"
                referrerPolicy="no-referrer"
                width={100}
                height={28}
                style={{ marginRight: "2rem" }}
                src="/images/logo/logo.svg"
              />
            </Link>
            <NavButton href="/" text="Blog" icon="navbar/home/active" />
            <NavButton href="/" text="Pricing" icon="navbar/home/active" />
            <NavButton href="/" text="Help" icon="navbar/home/active" />
          </div>
          {/* Page Links */}
          <div>
            <NavButton href="/" text="Log in"/>
            <Button className={classes.signupBtn}>SIGN UP FOR FREE</Button>
          </div>

          {/* SideNav Button */}
          <Button
            color="inherit"
            aria-label="Open Drawer"
            edge="start"
            onClick={() => {
              setDrawerSwitch(!drawerSwitch);
            }}
            className={classes.menuButton}
          >
            <img
              decode="async"
              alt="Image could not load"
              longdesc={props.href ? props.href : "#"}
              loading="lazy"
              referrerPolicy="no-referrer"
              height={24}
              width={24}
              src="/images/icons/misc/menu.svg"
              className={classes.logoImg}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBar} />
    </React.Fragment>
  );
};

export default Navbar;
