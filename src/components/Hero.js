import { Box, Button, InputBase, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../asset/home.webp";
import { useNewsContext } from "../context/newsContext";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useUserContext } from "../context/userContext.";
import { addUserToLocalStorage } from "../util/localStorage";

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

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { logIn, setLogInTrue, setUser } = useNewsContext();
  const navigate = useNavigate();
  // console.log(name, status);
  const [loading, setLoading] = useState(false);
  const { setUserAcc } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/auth/register",
      {
        name: name,
        email: email,
        password: password,
        status: status,
      }
    );
    console.log(data);
    // setUserAcc(data);
    setUser(data);
    addUserToLocalStorage(data);
    setLoading(false);
    setLogInTrue();
    navigate("/dashboard");

    // setUser({ name: name, email: email });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flex: 1,
        height: "90vh",
        // bgcolor: "red",
      }}
    >
      <Box sx={{ width: "50%", display: "flex" }}>
        <Box
          sx={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
            bgcolor: "#E0F1FF",
            height: "60vh",
            margin: "auto",
            width: "80%",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignProperty: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "medium" }}>
            singup for coolest social media
          </Typography>
          {logIn ? (
            <Button
              variant="contained"
              sx={{ width: "max-content" }}
              onClick={() => navigate("/dashboard")}
            >
              go to dashboard
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ width: "max-content" }}
              onClick={() => setOpen(true)}
            >
              sign up now
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ width: "50%", display: "flex" }}>
        <Box
          component="img"
          sx={{
            height: "70vh",
            margin: "auto",
            // width: "100%",
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={home}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Enter Name</Typography>
          <InputBase
            onChange={(e) => setName(e.target.value)}
            placeholder="name.."
            value={name}
          ></InputBase>
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
          <Typography>Enter Status</Typography>
          <InputBase
            onChange={(e) => setStatus(e.target.value)}
            value={status}
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
    </Box>
  );
};

export default Hero;
