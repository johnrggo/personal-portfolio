import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Coffee from "../content/Coffee";

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: "theme.spacing(6)",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <Coffee ClassName={classes.footerText} />
  );
};
