// import { Box } from '@mui/system';
// import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Hero from "../components/Hero";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Mail } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Avatar, Badge, InputBase, Modal } from "@mui/material";
import { useNewsContext } from "../context/newsContext";
import axios from "axios";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../util/localStorage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // const [open, setOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));
  const { logIn } = useNewsContext();
  const [email, setEmail] = useState("");
  // const [open, setOpen] = useState(false);

  const [password, setPassword] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: "20px 20px",
    display: "flex",
    flexDirection: "column",
    boxShadow: 24,
    p: 4,
    flex: 1,
  };
  const navigate = useNavigate();
  const { setUser, setLogInTrue } = useNewsContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          // name: name,
          email: email,
          password: password,
          // status: status,
        }
      );
      console.log(data);
      // setUserAcc(data);
      setUser(data);
      removeUserFromLocalStorage();
      addUserToLocalStorage(data);
      // setLoading(false);
      setLogInTrue();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }

    // setUser({ name: name, email: email });
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {logIn ? (
              <UserBox>
                <Badge
                  badgeContent={4}
                  color="error"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Mail />
                </Badge>
                <Avatar
                  width="30"
                  height="30"
                  sx={{ cursor: "pointer" }}
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                ></Avatar>
              </UserBox>
            ) : (
              <Button color="inherit" onClick={() => setOpen(true)}>
                Login
              </Button>
            )}
          </Toolbar>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography>Enter Email</Typography>
              <InputBase
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email.."
              ></InputBase>
              <Typography>Enter password</Typography>
              <InputBase
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password.."
              ></InputBase>

              <Button
                type="submit"
                sx={{ width: "fit-content" }}
                onClick={handleSubmit}
              >
                submit
              </Button>
            </Box>
          </Modal>
        </AppBar>
      </Box>
      <Hero />
    </>
  );
};

export default HomePage;
