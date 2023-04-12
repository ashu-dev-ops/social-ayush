import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { positions, width } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useNewsContext } from "../context/newsContext";
import { Person } from "../Data/Person";
const SingleProfile = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const { id } = useParams();
  console.log(id);
  console.log(Person);
  const currentPerson = Person.filter((i) => i.id == id);
  console.log(currentPerson);
  const { mode } = useNewsContext();
  return (
    <Box flex={4} sx={{ flex: { xs: 9, sm: 4 }, p: { xs: 1, sm: 2 } }}>
      {/* <h1>{currentPerson[0].name}</h1> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        // position="fixed"
      >
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          position="relative"
        >
          <Box
            height="30vh"
            width="100%"
            src={currentPerson[0].bgImage}
            alt=""
            component="img"
            bgcolor="red"
            // position="relative"
          ></Box>
          {/* <img /> */}
          <Typography color={mode} variant="h5" marginTop={5}>
            {currentPerson[0].name}
          </Typography>
          <Typography variant="h7">{currentPerson[0].status}</Typography>
          <Box position="absolute" top="40%">
            <Avatar
              src={currentPerson[0].profileImage}
              sx={{ height: "8rem", width: "8rem" }}
              bgcolor="red"
            ></Avatar>
          </Box>
        </Box>
      </Box>
      <Box p={0} m={0}>
        <ImageList
          sx={{
            width: "100%",
            height: 450,
            padding: 0,
            "&::-webkit-scrollbar": { display: "none" },
          }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default SingleProfile;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
