import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { useNewsContext } from "../context/newsContext";
import CircularProgress from "@mui/material/CircularProgress";
import { alignProperty } from "@mui/material/styles/cssUtils";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
const Saved = () => {
  const { save } = useNewsContext();

  if (save.length === 0) {
    return (
      <Box bgcolor="white" flex={4} p={2}>
        <Typography variant="h4" m={4}>
          No articles saved yet
        </Typography>
      </Box>
    );
  }
  return (
    <Box bgcolor="white" flex={4} p={2}>
      {save.map((i) => {
        return (
          <Card sx={{ maxWidth: "100%" }} m={4}>
            <CardMedia
              sx={{ height: 240 }}
              image={`${i.urlToImage}`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="">
                <Button size="small">Share</Button>
                <Button
                  size="small"
                  href="https://www.wired.com/story/lab-grown-meat-vegan-ethics-environment/"
                >
                  Learn More
                </Button>
              </div>

              {/* <Button onClick={() => saveNews(i)}>
                <BookmarkOutlinedIcon />
              </Button> */}
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Saved;
