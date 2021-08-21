/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { Drawer, Link, List, Divider, Button } from "@material-ui/core/";
import SideNavButton from "./SideNavButton";
import SideNavDropdownServices from "./SideNavDropdownServices";

const useStyles = makeStyles((theme) => ({
  drawer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoAndListDiv: {
    width: 240,
  },
  drawerLogo: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  callBtnDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  callBtn: {
    height: "40px",
    width: "200px",
    background: "linear-gradient(90deg, #F74134 0%, #EB1C61 100%)",
    boxShadow:
      "0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: "5",
    color: "#ffffff",
    padding: "0.625rem 0.938rem",
    textTransform: "capitalize",
  },
}));

const SideNav = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* SideNav Phone */}
      <Drawer anchor="left" open={props.open} onClose={props.onClose}>
        <div className={classes.drawer}>
          <div className={classes.logoAndListDiv}>
            {/* Logo */}
            <div className={classes.drawerLogo}>
              <Link
                href="/"
                rel="noopener"
                aria-label="Beegru"
                title="Home"
                className={classes.link}
              >
                <img
                  src="/images/logo/logo.svg"
                  alt="Image could not load"
                  width={100}
                  height={28}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                />
              </Link>
            </div>
            <Divider />

            {/* Nav Items List */}
            <div>
              <List>
                <SideNavButton href="/" text="Home" icon="navbar/home" />
                <SideNavDropdownServices
                  href="/services"
                  text="Services"
                />
              </List>
            </div>
          </div>

          {/* Call Us Button */}
          <div className={classes.callBtnDiv}>
            <Button
              className={classes.callBtn}
              href="tel:18005720999"
              title="Call Us"
            >
              Call Us
            </Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default SideNav;
