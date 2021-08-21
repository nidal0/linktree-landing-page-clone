import { withRouter } from "next/router";
import Head from "next/head";
import React from "react";
import AppConfig from "../../AppConfig";

const Header = ({ router, keywords, description, title, canonicalUrl }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#CC0000" />
        <meta
          name="Description"
          content={"This is a linktree landing page clone"}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Linktree Clone" />
        <meta property="og:title" content="Linktree Clone" />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Beegru Real Estate Advisory, your one stop property shop. Experience Bengaluru's real estate world with our professional real estate services."
          }
        />
        <meta property="og:url" content="https://advisory.beegru.com/" />
        <meta
          property="og:image"
          content="https://advisory.beegru.com/images/icons/logo/og_512.jpg"
        />
        <meta
          property="og:image:alt"
          content="https://advisory.beegru.com/images/icons/logo/og_512.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://advisory.beegru.com/images/icons/logo/og_512.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="en_GB" />
        <link rel="icon" href="/images/icons/logo/favicon_48.png" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/icons/logo/favicon_48.png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/icons/logo/favicon_192.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>{title ? title : "Beegru"}</title>
      </Head>
    </React.Fragment>
  );
};

export default withRouter(Header);
