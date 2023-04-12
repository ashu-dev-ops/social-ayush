// import { Feed } from "@mui/icons-material";
import Feed from "../components/Feed";
import { Box, Stack } from "@mui/material";
import React from "react";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { Height } from "@mui/icons-material";
import Navbar from "../components/Navbar";

const DashBoard = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <SideBar />
        <Outlet />
        <RightBar />
      </Box>
    </Box>
  );
};

export default DashBoard;
