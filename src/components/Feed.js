import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNewsContext } from "../context/newsContext";
import CircularProgress from "@mui/material/CircularProgress";
import { alignProperty } from "@mui/material/styles/cssUtils";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import NewsCard from "./helper/NewsCard";
import axios from "axios";
const Feed = () => {
  const { news, saveNews } = useNewsContext();
  const [save, setSave] = useState("false");

  // console.log(news);
  if (!news) {
    return <h1>error</h1>;
  }
  if (news.length === 0) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        flex={4}
        p={2}
      >
        <CircularProgress size="10rem" />
      </Box>
    );
  }
  return (
    <Box
      bgcolor="white"
      sx={{ flex: { xs: 5, sm: 4 }, padding: { xs: 0, sm: 2 } }}
    >
      {news.map((i, idx) => {
        return <NewsCard news={i} key={idx}  />;
      })}
    </Box>
  );
};

export default Feed;
