import { useState } from "react";
import { keyframes, css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const big = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

type Props = {
  id: string;
  name: string;
  handleOpen: (id: string) => void;
};

export default function SpellCard({ id, name, handleOpen }: Props) {
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", width: 300 }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "#9c372a" }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
