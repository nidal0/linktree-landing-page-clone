/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography, Button, Hidden, Divider } from "@material-ui/core";
import FeaturesCard from "./sub-components/FeaturesCard";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0rem 4rem 0rem",
  },
  cardsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  heading: {
    color: "#131415",
    fontSize: "2rem",
    lineHeight: "2.75rem",
  },
  button: {
    height: "48px",
    width: "auto",
    borderRadius: "0.75rem",
    borderWidth: "2px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#7551e9",
      color: "#ffffff",
    },
  },
}));

const SectionEight = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <Hidden smUp>
          <Typography variant="h4" component="span" className={classes.heading}>
            Amazing Features
          </Typography>
        </Hidden>
        <div className={classes.cardsRow}>
          <FeaturesCard
            img="/images/features/customize_your_linktree.webp"
            title={
              <span>
                Customize your
                <br />
                Linktree
              </span>
            }
            desc="Make your Linktree pop. Embody your brand through custom colors, fonts and images."
          />
          <FeaturesCard
            img="/images/features/analytics_and_insights.webp"
            title={
              <span>
                Analytics and
                <br />
                Insights
              </span>
            }
            desc="Gain valuable insight into your traffic and discover which content is performing with your audience."
          />
          <FeaturesCard
            img="/images/features/third_party_integrations.webp"
            title={
              <span>
                Powerful Third-Party
                <br />
                Integrations
              </span>
            }
            desc="Collect email subscribers, connect with third-party analytics and remarket to your audience."
          />
        </div>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          size="large"
        >
          SEE ALL FEATURES
        </Button>
      </div>
      <Divider style={{ marginTop: "4rem" }} />
    </React.Fragment>
  );
};

export default SectionEight;
