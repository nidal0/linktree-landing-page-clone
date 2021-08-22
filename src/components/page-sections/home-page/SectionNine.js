/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography, Grid } from "@material-ui/core";
import CommunityCard from "./sub-components/CommunityCard";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "0rem 0rem 6rem 0rem",
  },
  textRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "6rem 0rem 4rem 0rem",
  },
  heading: {
    width: "100%",
    color: "#131415",
    fontWeight: "400",
    fontSize: "3rem",
    lineHeight: "3.5rem",
    margin: "0rem 0rem 0.5rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      textAlign: "center",
    },
  },
  subHeading: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    width: "100%",
    color: "#263238",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
      textAlign: "center",
    },
  },
  horizontalScroller: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "noWrap",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-webkitOverflowScrolling": "touch",
    /* Padding Ignorer */
    [theme.breakpoints.only("xs")]: {
      margin: "0rem -1rem 0rem -1rem",
      width: "calc(100% + 2rem)",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0rem -1.5rem 0rem -1.5rem",
      width: "calc(100% + 3rem)",
    },
    [theme.breakpoints.only("md")]: {
      margin: "0rem -2rem 0rem -2rem",
      width: "calc(100% + 4rem)",
    },
    [theme.breakpoints.only("lg")]: {
      margin: "0rem -2.5rem 0rem -2.5rem",
      width: "calc(100% + 5rem)",
    },
    [theme.breakpoints.only("xl")]: {
      margin: "0rem -4rem 0rem -4rem",
      width: "calc(100% + 8rem)",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      margin: "0rem -16rem 0rem -16rem",
      width: "calc(100% + 32rem)",
    },
  },
  doubleDouble: {
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "48%",
    },
    [theme.breakpoints.only("md")]: {
      width: "45.5%",
    },
    [theme.breakpoints.only("lg")]: {
      width: "33.33333%",
    },
    [theme.breakpoints.only("xl")]: {
      width: "30%",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      width: "24%",
    },
    flex: "0 0 auto",
  },
}));

const SectionNine = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <div className={classes.textRow}>
          <Typography variant="h1" component="span" className={classes.heading}>
            Join the Linktree community
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.subHeading}
          >
            The world's biggest influencers, creators, publishers and brands
            <br /> use Linktree in their marketing strategy.
          </Typography>
        </div>
        <Grid
          display="flex"
          direction="row"
          alignItems="center"
          justify="flex-start"
          spacing={1}
          className={classes.horizontalScroller}
          container
        >
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/selena-gomez.webp"
              imgDP="/images/community/selena-gomez-dp.webp"
              name="Selena Gomez"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/the-guardian.webp"
              imgDP="/images/community/the-guardian-dp.webp"
              name="The Guardian"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/gary-vee.webp"
              imgDP="/images/community/gary-vee-dp.webp"
              name="Gary Vee"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/la-clippers.webp"
              imgDP="/images/community/la-clippers-dp.webp"
              name="LA Clippers"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/alicia.webp"
              imgDP="/images/community/alicia-dp.webp"
              name="Alicia Keys"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/red-bull.webp"
              imgDP="/images/community/red-bull-dp.webp"
              name="Red Bull"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/pharrell.webp"
              imgDP="/images/community/pharrell-dp.webp"
              name="Pharrell"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/rhettandlink.webp"
              imgDP="/images/community/rhettandlink-dp.webp"
              name="Rhett and Link"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/comedy-central.webp"
              imgDP="/images/community/comedy-central-dp.webp"
              name="Comedy Central"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/qantas.webp"
              imgDP="/images/community/qantas-dp.webp"
              name="QANTAS"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/patreon.webp"
              imgDP="/images/community/patreon-dp.webp"
              name="Patreon"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className={classes.doubleDouble}
            item
          >
            <CommunityCard
              img="/images/community/loreal.webp"
              imgDP="/images/community/loreal-dp.webp"
              name="L'Oréal Paris"
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default SectionNine;
