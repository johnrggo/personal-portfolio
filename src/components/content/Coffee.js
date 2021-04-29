import React from "react";
import styled from "styled-components";
import { TextDecrypt } from "../content/TextDecrypt";
import { Tooltip, Typography, Zoom } from "@material-ui/core";

const Container = styled.div`
  width: 300px;

  @media (max-width: 500px) {
    width: 60px;
  }
`;

const Button = styled.a`
  line-height: 36px;
  height: 3.75rem;
  padding-right: 1rem;
  text-decoration: none;
  display: flex;
  color: #ffffff;
  background-color: #40dca5;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 1px 9px;
  padding-left: 1rem;
  font-size: 23px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto 3rem 3rem;
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

  @media (max-width: 500px) {
    width: 60px;
  }

  > .button__text {
    padding-top: 4px;
    padding-left: 4px;

    @media (max-width: 500px) {
      display: none;
    }

    @media (max-width: 600px) {
      font-size: 1.1667rem;
    }
  }
`;

const Image = styled.img`
  width: 26px;
  margin-right: 4px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Container>
      <Tooltip
        title={"Coffee plith 🥺👉🏽👈🏽"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <Button target="_blank" href="https://www.buymeacoffee.com/johngo">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            onerror="this.onerror=null;this.src='https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg'"
            alt="Buy me a coffee"
          />
          <Typography className="button__text" variant="body1">
            <TextDecrypt text={" Buy me a coffee"} />
          </Typography>
        </Button>
      </Tooltip>
    </Container>
  );
}

export default Coffee;
