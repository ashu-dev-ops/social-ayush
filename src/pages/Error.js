import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">404 | NOT FOUND</Typography>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default Error;
