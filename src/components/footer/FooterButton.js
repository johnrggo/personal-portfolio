import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Tooltip, Zoom, Typography, Link } from "@material-ui/core";
import { CoffeeIcon } from "../content/CoffeeButton";

const useStyles = makeStyles((theme) => ({
  footerButton: {
    position: "absolute",
    bottom: "48px",
    left: "48px",
    width: "240px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    cursor: "pointer",
    backgroundColor: "#40dca5",
    border: "1px solid transparent",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none",
    height: "3.75rem",
    lineHeight: "36px",
    padding: "1px 0 1px 9px",

    "@media (max-width: 500px)": {
      width: "56px",
    },
  },
  text: {
    overflow: "hidden",
    transition: "0.3s all linear",
    paddingLeft: "8px",
    fontSize: "clamp(100%, 2rem + 1vw, 19px)",
    "&:hover,&:active,&:focus": {
      color: "black",
    },

    "@media (max-width: 500px)": {
      display: "none",
    },
  },
}));

export const FooterButton = () => {
  const classes = useStyles();

  return (
    <Tooltip
      title={"Coffee??? 🥺👉🏽👈🏽"}
      placement="left"
      TransitionComponent={Zoom}
    >
      <Link
        underline="none"
        href="https://www.buymeacoffee.com/johngo"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footerButton}
      >
        <CoffeeIcon />
        <Typography className={classes.text}>
          <TextDecrypt text={"Buy me a coffee"} />
        </Typography>
      </Link>
    </Tooltip>
  );
};
