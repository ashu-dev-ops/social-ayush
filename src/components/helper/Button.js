import React from "react";
import Button from "@mui/material/Button";
const ButtonMui = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </div>
  );
};

export default ButtonMui;
