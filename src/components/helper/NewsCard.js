// import React from "react";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useNewsContext } from "../context/newsContext";
import CircularProgress from "@mui/material/CircularProgress";
import { alignProperty } from "@mui/material/styles/cssUtils";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useNewsContext } from "../../context/newsContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Box, Modal } from "@mui/material";
import { EmailShareButton, FacebookShareButton } from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
const NewsCard = () => {
  const { news, saveNews } = useNewsContext();
  const [save, setSave] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(save);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [shareUrl, setShareUrl] = useState();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px 20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            height: 200,
            width: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px 20px",
            flexDirection: "column",
          }}
        >
          <Typography align="center" my={3}>SHARE WITH SOCIAL BEINGS</Typography>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size="5rem" color="primary" fontSize="large" />
          </FacebookShareButton>
        </Box>
      </Modal>
      {news.map((i, idx) => {
        return (
          <Card sx={{ maxWidth: "100%" }} m={4} key={idx}>
            <CardMedia
              sx={{ height: 240, display: "flex", flexDirection: "column" }}
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
                {/* <Button size="small">Share</Button> */}
                <Button
                  onClick={() => {
                    handleOpen();
                    setShareUrl(i.url);
                  }}
                >
                  share fb
                </Button>
                <Button
                  size="small"
                  href="https://www.wired.com/story/lab-grown-meat-vegan-ethics-environment/"
                >
                  Learn More
                </Button>
              </div>

              <Button
                onClick={() => {
                  saveNews(i);
                  setSave(!save);
                }}
              >
                {save ? <BookmarkOutlinedIcon /> : <BookmarkBorderIcon />}
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default NewsCard;
