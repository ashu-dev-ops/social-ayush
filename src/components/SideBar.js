import { Box, Input, Switch, TextField } from "@mui/material";
import React, { useState } from "react";
// import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ShareIcon from "@mui/icons-material/Share";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Person2Icon from "@mui/icons-material/Person2";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import BookIcon from "@mui/icons-material/Book";
import logo from "../asset/logo.jpeg";
import SideBarLink from "./SideBarLink";
import ModeNightIcon from "@mui/icons-material/ModeNight";
// import ShareIcon from "@mui/icons-material/Share";
import { Links } from "../Data/link";
import AddBtn from "./AddBtn";
import { useNewsContext } from "../context/newsContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const SideBar = () => {
  const { setModeToDark, mode } = useNewsContext();
  const navigate = useNavigate();
  const navigateToDoc = () => {
    return navigate("/document");
  };
  const navigateToProfile = () => {
    return navigate("/profile");
  };
  const navigateToPay = () => {
    return navigate("/pay");
  };
  const navigateToRetier = () => {
    return navigate("/retierment");
  };
  const navigateToDashBoard = () => {
    return navigate("/");
  };
  // const navigateTo
  // const Links = [
  //   { id: 0, name: "feed", icon: <HomeIcon />, path: "/" },
  //   { id: 1, name: "hot", icon: <HomeIcon />, path: "/hot" },
  //   { id: 2, name: "profile", icon: <Person2Icon />, path: "/profile" },
  //   { id: 3, name: "saved", icon: <BookIcon />, path: "/saved" },
  //   { id: 4, name: "shared", icon: <ShareIcon />, path: "/shared" },
  // ];
  const [btnActive, setBtnActive] = useState("feed");
  const handleBtn = (name) => {
    setBtnActive(name);
  };
  return (
    <Box
      // bgcolor="lightblue"
      // flex={1}
      // sx={{ flex: { xs: "10%", sm: 1 }, width: { xs: "0%" } }}
      // p={3}
      sx={{ flex: { xs: 1, sm: 1 } }}
    >
      <Box position="fixed">
        <List
          // position="sticky"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 0 },
          }}
        >
          {Links.map((i, idx) => {
            return (
              <SideBarLink
                key={idx}
                idx={idx}
                {...i}
                handleBtn={handleBtn}
                btn={btnActive}
              />
            );
          })}
          <ListItem>
            <ListItemIcon>
              {mode === "light" ? (
                <ModeNightIcon />
              ) : (
                <WbSunnyIcon color="white" />
              )}
            </ListItemIcon>

            <ListItemText>
              <Switch
                sx={{ display: { xs: "none", sm: "initial" } }}
                onChange={(e) =>
                  setModeToDark(mode === "light" ? "dark" : "light")
                }
              />
            </ListItemText>
          </ListItem>
        </List>
        <AddBtn />
      </Box>
    </Box>
  );
};

export default SideBar;
