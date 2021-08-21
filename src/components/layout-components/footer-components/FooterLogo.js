/* Common Imports */
import React from "react";

const FooterLogo = () => {
  return (
    <React.Fragment>
      <div>
        <img
          src="/images/logo/logo.svg"
          alt="Image could not load"
          width={85}
          height={20}
          loading="lazy"
          referrerPolicy="no-referrer"
          longdesc="Linktree Clone"
        />
      </div>
    </React.Fragment>
  );
};

export default FooterLogo;
