/* Common Imports */
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component Imports */
import { Drawer, Link, List, Divider, Button } from "@material-ui/core/";
import SideNavButton from "./SideNavButton";
import SideNavDropdownCompany from "./SideNavDropdownCompany";
import SideNavDropdownPartnerships from "./SideNavDropdownPartnerships";
import SideNavDropdownSupport from "./SideNavDropdownSupport";
import SideNavDropdownTrustLegal from "./SideNavDropdownTrustLegal";

const useStyles = makeStyles((theme) => ({
  drawer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoAndListDiv: {
    width: 350,
  },
  drawerLogo: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    padding: "1rem",
  },
  footerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginTop: theme.spacing(2),
  },
  link: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "0.8rem",
    lineHeight: "1.375rem",
    color: "#131415",
    paddingLeft: theme.spacing(2),
  },
  socialIcons: {
    padding: "2rem 1rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
  },
}));

const SideNav = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* SideNav Phone */}
      <Drawer
        anchor="right"
        open={props.open}
        onClose={props.onClose}
        width="100%"
      >
        <div className={classes.drawer}>
          <div className={classes.logoAndListDiv}>
            {/* Logo */}
            <div className={classes.drawerLogo}>
              <Link
                href="/"
                rel="noopener"
                aria-label="Linktree"
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
              <Button
                color="inherit"
                aria-label="Close Drawer"
                edge="start"
                onClick={props.onClose}
              >
                <img
                  decode="async"
                  alt="Image could not load"
                  longdesc="Linktree Clone"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  height={24}
                  width={24}
                  src="/images/icons/nav/close.svg"
                />
              </Button>
            </div>

            {/* Nav Items List */}
            <div>
              <List>
                <SideNavButton href="/" text="Login" />
                <SideNavButton href="/" text="Blog" />
                <SideNavButton href="/" text="Pricing & Features" />
                <SideNavButton href="/" text="Help" />
                <SideNavDropdownCompany href="/" text="Company" />
                <SideNavDropdownPartnerships href="/" text="Partnerships" />
                <SideNavDropdownSupport href="/" text="Support" />
                <SideNavDropdownTrustLegal href="/" text="Trust & Legal" />
              </List>
            </div>
          </div>

          {/* SideNav Footer */}
          <div className={classes.footerDiv}>
            <Divider
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />
            <Link
              href="/"
              rel="noopener"
              title="Report a violation"
              className={classes.link}
            >
              Report a violation
            </Link>
            <Link
              href="/"
              rel="noopener"
              title="Careers"
              className={classes.link}
            >
              Careers
            </Link>
            <Link
              href="/"
              rel="noopener"
              title="About"
              className={classes.link}
            >
              About
            </Link>
            <div className={classes.socialIcons}>
              <Link
                href="https://linktr.ee/"
                rel="noopener"
                title="Follow Linktree on Linktree"
                target="_blank"
              >
                <img
                  src="/images/icons/social/linktree_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://instagram.com/"
                rel="noopener"
                title="Follow Linktree on Instagram"
                target="_blank"
              >
                <img
                  src="/images/icons/social/instagram_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://facebook.com/"
                rel="noopener"
                title="Follow Linktree on Facebook"
                target="_blank"
              >
                <img
                  src="/images/icons/social/facebook_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://twitter.com/"
                rel="noopener"
                title="Follow Linktree on Twitter"
                target="_blank"
              >
                <img
                  src="/images/icons/social/twitter_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://linkedin.com/"
                rel="noopener"
                title="Follow Beegru on LinkedIn"
                target="_blank"
              >
                <img
                  src="/images/icons/social/linkedin_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://tiktok.com/"
                rel="noopener"
                title="Follow Linktree on TikTok"
                target="_blank"
              >
                <img
                  src="/images/icons/social/tiktok_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
              <Link
                href="https://youtube.com/"
                rel="noopener"
                title="Follow Linktree on Youtube"
                target="_blank"
              >
                <img
                  src="/images/icons/social/youtube_social.svg"
                  alt="Image could not load"
                  width={21}
                  height={21}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  longdesc="Linktree Clone"
                  className={classes.socialLinkIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default SideNav;
