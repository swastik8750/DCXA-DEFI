import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    if (K === true) {
      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#1f2739";
      add_button.style.color = "#fff";
      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#fff";
      remove_button.style.color = "#000";

    } else {
      let remove_button = document.getElementById("add-button");
      remove_button.style.backgroundColor = "#fff";
      remove_button.style.color = "#000";
      let add_button = document.getElementById("remove-button");
      add_button.style.backgroundColor = "#1f2739";
      add_button.style.color = "#fff";
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained">
        <Button
          id="add-button"
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
          Deploy Liquidity
        </Button>

        <Button
          id="remove-button"
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
          Remove Liquidity
        </Button>
      </ButtonGroup>
    </div>
  );
}