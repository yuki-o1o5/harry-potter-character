import { useState } from "react";
import { keyframes, css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const big = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export default function HotelCardSimple({ id, name, image, handleOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardActionArea
          onClick={() => {
            handleOpen(id);
          }}
          sx={{
            display: "flex",
            animation: isHovered
              ? css`
                  ${big} 1.2s forwards
                `
              : undefined,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardMedia
            component="img"
            sx={{
              width: 125,
              height: 200,
              filter: isHovered ? "brightness(70%)" : "none",
              transition: "filter 0.2s",
            }}
            image={
              image.length > 0
                ? image
                : "https://files.cults3d.com/uploaders/23381950/illustration-file/b2728508-681e-4472-a558-aa2843b2dd8e/20230221_184758_1.jpg"
            }
            alt="chara"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
              backgroundColor: "#074166",
              color: "#D7B277",
            }}
          >
            <Typography gutterBottom variant="h6" component="div" sx={{}}>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
