import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
// import { FooterText } from "../components/footer/FooterText";
import { SocialIcons } from "../components/content/SocialIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { FooterButton } from "../components/footer/FooterButton";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <FooterButton />
      </div>
    </>
  );
};
