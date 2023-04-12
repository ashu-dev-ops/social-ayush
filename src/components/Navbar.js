// import styled from "@emotion/styled";
// import { theme } from "../Theme";
// import { Mail } from "@mui/icons-material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { theme } from "../Theme";
import axios from "axios";
import { useNewsContext } from "../context/newsContext";
import { Link, useNavigate } from "react-router-dom";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../util/localStorage";
const Search = styled("div")(({ theme }) => ({
  //   backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  justifyContent: "space-around",
  //
  [theme.breakpoints.down("sm")]: {
    // down means apply this if screen size is less than 600px
    display: "none",
  },
}));
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const searchToolBar = styled(Box)(({ theme }) => ({
  width: "40%",
  //   display: "flex",
  //   justifyContent: "space-around",
  justifyContent: "space-between",
  //   gap: "20px",
}));
const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  border: "2px solid white",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
}));

const Navbar = () => {
  //   const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const { setNews } = useNewsContext();
  const fetchSport = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=sports&pageSize=10&apiKey=5d725676e8264bec8bc788df1a4ad986"
    );
    // console.log(data);
    // setNews(data);
    setNews(data.articles);
  };
  const fetchHealth = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=health&pageSize=1&apiKey=5d725676e8264bec8bc788df1a4ad986"
    );
    // console.log(data);
    setNews(data.articles);
  };
  //   technology
  //   https://newsapi.org/v2/everything?q=sports&pageSize=1&apiKey=5d725676e8264bec8bc788df1a4ad986
  const fetchTech = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=technology&pageSize=1&apiKey=5d725676e8264bec8bc788df1a4ad986"
    );
    // console.log(data);
    setNews(data.articles);
  };
  //   business
  const fetchBusiness = async () => {
    const { data } = await axios.get(
      " https://newsapi.org/v2/everything?q=business&pageSize=1&apiKey=5d725676e8264bec8bc788df1a4ad986"
    );
    // console.log(data);
    setNews(data.articles);
  };
  //   const fetchTech = async () => {
  //     const { data } = await axios.get(
  //       "https://newsapi.org/v2/top-headlines/sources?category=business&language=en&apiKey=d725676e8264bec8bc788df1a4ad986"
  //     );
  //     // console.log(data);
  //     setNews(data);
  //   };

  useEffect(() => {
    // fetchSport();
  }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding: "0 5px",
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));
  const { setLogInFalse } = useNewsContext();
  // const navigate = useNavigate();
  

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box onClick={() => navigate("/")}>
          <WhatsAppIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            CHAT
          </Typography>
        </Box>
        <SearchBar>
          <InputBase placeholder="search..." />
        </SearchBar>
        <UserBox onClick={() => setIsOpen(true)}>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            width="30"
            height="30"
            sx={{ cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ></Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        m={5}
        p={5}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick>Profile</MenuItem>
        <MenuItem onClick>My account</MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/");
            setLogInFalse();
            removeUserFromLocalStorage();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
     
    </AppBar>
  );
};

export default Navbar;
