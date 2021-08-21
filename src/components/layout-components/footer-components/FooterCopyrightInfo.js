/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyrightInfo: {
    textAlign: "center",
  },
  copyrightDesktop: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    color: "#131415",
    fontSize: "0.75rem",
    lineHeight: "1.5rem",
  },
  copyrightMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  flag: {
    margin: "1rem 0rem",
  },
}));

const FooterCopyrightInfo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.copyrightInfo}>
        <div className={classes.flag}>
          <img
            src="/images/icons/footer_flag.svg"
            alt="Image could not load"
            width={36}
            height={24}
            loading="lazy"
            referrerPolicy="no-referrer"
            longdesc="Linktree Clone"
          />
        </div>
        <Typography
          variant="body2"
          component="span"
          className={classes.copyrightDesktop}
        >
          We acknowledge the Traditional Custodians of the land on which our
          office stands, The Wurundjeri people of the Kulin Nation, and pay our
          respects to Elders past, present and emerging.
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default FooterCopyrightInfo;
