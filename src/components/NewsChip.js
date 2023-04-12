import { Done } from "@mui/icons-material";
import { Avatar, Chip } from "@mui/material";
import React from "react";

const NewsChip = ({ name, selected, setSelected, handleChip, chipNews }) => {
  return (
    <>
      <Chip
        onClick={() => handleChip(name)}
        // onDelete={selected && (() => {})}
        color={name === chipNews ? "primary" : "default"}
        variant={name === chipNews ? "default" : "outlined"}
        // deleteIcon={<Done />}
        label={name}
        // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
      />
    </>
  );
};

export default NewsChip;
