import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HotelCardSimple from "../components/CharaCard/CharaCard";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
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
    wizard: boolean;
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
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1, height: 400 }}>
        <CardCover sx={{ borderRadius: 0 }}>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h1"
            fontWeight="lg"
            textColor=" #C9B681"
            mt={{ xs: 12, sm: 18 }}
          >
            Let's Find Your Favorite Characters
          </Typography>
        </CardContent>
      </Card>
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
            <SMaindiv>{filtered?.name}</SMaindiv>
            <Sdiv>Actor : {filtered?.actor}</Sdiv>
            <Sdiv>House : {filtered?.house}</Sdiv>
            <Sdiv>Gender : {filtered?.gender}</Sdiv>
          </Box>
        </Modal>
      </div>
    </SAllContainer>
  );
}

const SAllContainer = styled.div``;

const SHotelListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 3rem 5rem;
`;

const Sdiv = styled.div`
  font-size: 2rem;
  color: #074166;
`;

const SMaindiv = styled.div`
  font-size: 3rem;
  color: #9c372a;
`;
