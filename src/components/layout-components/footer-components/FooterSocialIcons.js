/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  socialLinkIcon: {
    margin: "0rem 0.5rem 0rem 0.5rem",
  },
}));

const FooterSocialIcons = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
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
    </React.Fragment>
  );
};

export default FooterSocialIcons;
