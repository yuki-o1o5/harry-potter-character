// import React from "react";
// import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

//{ characterValue }

export default function HotelCard() {
  const navigate = useNavigate();
  // const theme = useTheme();
  return (
    <div>
      <Card sx={{ display: "flex", marginBottom: "10px" }}>
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image="https://raw.githubusercontent.com/yuki-o1o5/my-portfolio/main/public/assets/main3.jpeg"
          alt="Live from space album cover"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", padding: "0 2rem" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Hotel Name
          </Typography>
          <SFlexContainer>
            <SFlexContainer>
              <HiOutlineMapPin />
              <SsubTitle>Address:</SsubTitle>
            </SFlexContainer>
            <Sp>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              et culpa consequuntur
            </Sp>
          </SFlexContainer>
          <SFlexContainer>
            <SFlexContainer>
              <HiOutlinePhone />
              <SsubTitle>Tel :</SsubTitle>
            </SFlexContainer>
            <Sp>123456789</Sp>
          </SFlexContainer>
          <SFlexContainer>
            <SFlexContainer>
              <HiOutlineGlobeAlt />
              <SsubTitle>Address:</SsubTitle>
            </SFlexContainer>
            <Sp>
              <a href="https://www.airbnb.ca/">https://www.airbnb.ca/</a>
            </Sp>
          </SFlexContainer>
          {/* <button onClick={() => navigate(`/search/${searchValue.id}`)}>
            details
          </button> */}
        </Box>
      </Card>
    </div>
  );
}

const SFlexContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Sp = styled.div`
  padding-left: 10px;
`;

const SsubTitle = styled.div`
  padding-left: 5px;
`;
