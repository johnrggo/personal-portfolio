import React from "react";
import styled from "styled-components";
import { TextDecrypt } from "../content/TextDecrypt";
import { Typography } from "@material-ui/core";

const Button = styled.a`
  line-height: 36px;
  height: 3rem;
  padding-right: 1rem;
  text-decoration: none;
  display: flex;
  color: #ffffff;
  background-color: #40dca5;
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 1px 9px;
  font-size: 23px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto 3.5rem 2rem;
  font-family: "Cookie", cursive;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -o-transition: 0.3s all linear;
  -webkit-transition: 0.3s all linear;
  -moz-transition: 0.3s all linear;
  -ms-transition: 0.3s all linear;
  transition: 0.3s all linear;

  &:hover,
  &:active,
  &:focus {
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: black;
  }
`;

const Image = styled.img`
  width: 27px;
  margin-right: 4px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/johngo">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        onerror="this.onerror=null;this.src='https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg'"
        alt="Buy me a coffee"
      />
      <Typography variant="body1">
        <TextDecrypt text={" Buy me a coffee"} />
      </Typography>
    </Button>
  );
}

export default Coffee;
