import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HotelCardSimple({ id, name, image, handleOpen }) {
  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardActionArea
          onClick={() => {
            handleOpen(id);
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={
              image.length > 0
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1600px-Harry_Potter_wordmark.svg.png?20180929195053"
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
