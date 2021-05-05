import React from "react";
import styled from "styled-components";
import { TextDecrypt } from "../content/TextDecrypt";
import { Tooltip, Typography, Zoom, Link } from "@material-ui/core";
import { ReactComponent as CoffeeIcon } from "./coffee.svg";

const Button = styled.button`
  position: absolute;
  left: 3rem;
  bottom: 3rem;
  cursor: pointer;
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  align-items: center;
  line-height: 36px;
  height: 3.75rem;
  margin-right: auto;
  padding: 1px 0 1px 9px;
  text-decoration: none;
  color: #ffffff;
  background-color: #40dca5;
  border-radius: 6px;
  border: 1px solid transparent;
  letter-spacing: 0.6px;
  font-family: "Cookie", cursive;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    opacity: 1;
    color: black;
  }

  @media (max-width: 500px) {
    width: 56px;
  }

  > .button__Text {
    flex: 1;
    overflow: hidden;
    font-size: clamp(100%, 1rem + 1vw, 18px);
    letter-spacing: 0.013rem;
    -o-transition: 0.25s all linear;
    -webkit-transition: 0.3s all linear;
    -moz-transition: 0.3s all linear;
    -ms-transition: 0.3s all linear;
    transition: 0.3s all linear;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const Image = styled(CoffeeIcon)`
  width: 34px;
  padding-left: 4px;
  box-shadow: none;
  border: none;
  overflow: hidden;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Link href="https://www.buymeacoffee.com/johngo" target="_blank">
      <Tooltip
        title={"Coffee??? 🥺👉🏽👈🏽"}
        placement="left"
        TransitionComponent={Zoom}
      >
        <Button>
          <Image alt="Coffee" />
          <Typography className="button__Text">
            <TextDecrypt className="button__Text" text={"Buy me a coffee"} />
          </Typography>
        </Button>
      </Tooltip>
    </Link>
  );
}
export default Coffee;
