import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNewsContext } from "../context/newsContext";
const SideBarLink = ({ path, icon, name, id, idx, icon2, handleBtn, btn }) => {
  const navigate = useNavigate();
  const { mode } = useNewsContext();
  const [state, setState] = useState(false);
  const handleIcon = () => {
    if (id === idx) {
      return setState(true);
    }
    setState(false);
  };
  const { pathname } = useLocation();
  return (
    <ListItem
      disablePadding
      sx={{
        m: { xs: 1, sm: 2 },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
      }}
      component={Link}
      // activeClassName={({ isActive }) => (isActive ? "active" : undefined)}

      to={`${path}`}
      // end
      onClick={() => handleBtn(name)}
    >
      {name === btn ? (
        <ListItemIcon>{icon}</ListItemIcon>
      ) : (
        <ListItemIcon>{icon2}</ListItemIcon>
      )}
      {/* {state ? <ListItemIcon>{icon}</ListItemIcon> : "working"} */}
      {/* <ListItemIcon>{icon}</ListItemIcon> */}
      {/* <ListItemIcon>{icon}</ListItemIcon> */}
      <ListItemText
        sx={{
          display: {
            xs: "none",
            sm: "block",
            color: `${
              name === btn ? "blue" : mode === "dark" ? "white" : "gray"
            } `,
            textTransform: "capitalize",
          },
        }}
        primary={`${name}`}
      />
    </ListItem>
  );
};

export default SideBarLink;
