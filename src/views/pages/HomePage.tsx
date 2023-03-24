import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import HotelCardSimple from "../components/HotelCardSimple/HotelCardSimple";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function HomePage() {
  const [allCharas, setAllCharas] = useState<Charas[]>([]);
  const [selectedChara, setSelectedChara] = useState("");

  useEffect(() => {
    fetcAllCharas();
  }, []);

  const fetcAllCharas = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    const resultArray = response.data;
    setAllCharas(resultArray);
  };

  type Charas = {
    id: string;
    gender: string;
    name: string;
    actor: string;
    house: string;
    image: string;
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (id: string) => {
    setSelectedChara(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const filtered = allCharas.find((chara) => chara.id === selectedChara);

  return (
    <SAllContainer>
      <SImageContainer>
        <ImageList
          sx={{ width: 1000, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={222}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 350, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </SImageContainer>
      <SHotelListContainer>
        {allCharas.map((chara, index) => {
          return (
            <HotelCardSimple
              id={chara.id}
              name={chara.name}
              image={chara.image}
              handleOpen={handleOpen}
              key={index}
            />
          );
        })}
      </SHotelListContainer>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedChara}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {filtered?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {filtered?.gender}
            </Typography>
          </Box>
        </Modal>
      </div>
    </SAllContainer>
  );
}

const SAllContainer = styled.div``;

const SImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SHotelListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 5rem;
`;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1656878564120-ab988c47f0b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHwlRTMlODMlOUIlRTMlODIlQjAlRTMlODMlQUYlRTMlODMlQkMlRTMlODMlODR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUUzJTgzJTlCJUUzJTgyJUIwJUUzJTgzJUFGJUUzJTgzJUJDJUUzJTgzJTg0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1467646208740-18124b37eb58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=620&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    title: "Coffee",
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
