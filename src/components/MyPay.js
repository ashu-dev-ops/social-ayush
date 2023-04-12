import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const MyPay = () => {
  return (
    <div className="box-one">
      <div className="nav-dash">
        <h1>pay</h1>

        <div className="user-box">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ria
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem eaque totam animi molestiae laborum dolor eveniet
                earum delectus adipisci dolorum dolore ut nisi fugiat,
                asperiores a modi illo saepe laudantium.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyPay;
