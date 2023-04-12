import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/helper/Button";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./Theme";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import Shared from "./pages/Shared";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Saved from "./pages/Saved";
import MyDocument from "./components/MyDocument";
import MyProfile from "./components/MyProfile";
import MyPay from "./components/MyPay";
import MyRetier from "./components/MyRetier";
import MyDashBoard from "./components/MyDashBoard";
import PersonalFeed from "./components/PersonalFeed";
import HomePage from "./pages/HomePage";
import SingleProfile from "./components/SingleProfile";
import { create } from "@mui/material/styles/createTransitions";
import { useState } from "react";
import { useNewsContext } from "./context/newsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Error";

function App() {
  // const [mode, setMode] = useState("light");
  const { mode } = useNewsContext();

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
            <Route path="document" element={<Feed />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="profile/:id" element={<SingleProfile />} />
            <Route path="saved" element={<Saved />} />
            <Route path="hot" element={<PersonalFeed />} />
            {/* <Route path="profile" element={<DashBoard />} /> */}

            <Route path="retierment" element={<MyRetier />} />
          </Route>
          {/* <Route path="/single-profile/:id" element={<SingleProfile />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
