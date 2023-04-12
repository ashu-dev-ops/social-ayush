import { Avatar, AvatarGroup, Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import NewsChip from "./NewsChip";
import { Stack } from "@mui/system";
import HeadLineCard from "./HeadLineCard";
import { useNewsContext } from "../context/newsContext";

const RightBar = () => {
  const [headLine, setHeadLine] = useState([]);
  const fetchHeadlines = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d725676e8264bec8bc788df1a4ad986"
    );

    // setHeadLine(data.articles);
    console.log(data.articles);
    console.log(headLine);
  };

  const [chipNews, setChipNews] = useState("business");
  const [chipNewsFedd, setchipNewsFedd] = useState([]);
  const handleChip = (name) => {
    setChipNews(name);
  };
  const fetchNews = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${chipNews}&pageSize=10&apiKey=40190166e70d4143a3dbdb032cea41a2`
    );
    console.log(data.articles);
    setchipNewsFedd(data.articles);
  };
  useEffect(() => {
    fetchNews();
  }, [chipNews]);
  const { mode } = useNewsContext();
  return (
    <Box
      // bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "inline" } }}
    >
      <Box
        position="fixed"
        zIndex={2}
        bgcolor={mode === "light" ? "white" : "background.default"}
        // border
      >
        <Box p={1}>
          <Typography variant="h4" color="gray" fontWeight={100}>
            Online friends
          </Typography>
          <AvatarGroup max={8}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
        <Box>
          <Box>
            <Typography variant="h4" color="gray">
              Trending Topics
            </Typography>
            <Stack direction="row" spacing={1} m={1}>
              {chipsData.map((i) => {
                return (
                  <NewsChip
                    {...i}
                    handleChip={handleChip}
                    chipNews={chipNews}
                  />
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        {chipNewsFedd.length === 0 ? (
          "sorry no fedd"
        ) : (
          <Box
            sx={{
              position: "relative",
              overflowY: "scroll",
              top: "12rem",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {chipNewsFedd.map((i) => {
              return <HeadLineCard {...i} />;
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RightBar;
const chipsData = [
  {
    id: 1,
    name: "business",
  },
  {
    id: 2,
    name: "sports",
  },
  {
    id: 3,
    name: "technology",
  },
  {
    id: 4,
    name: "health",
  },
];
