import React from "react";
import HotelCard from "../HotelCard/HotelCard";

import styled from "styled-components";

export default function Main() {
  return (
    <SContainer>
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </SContainer>
  );
}

const SContainer = styled.div`
  margin: 1rem;
`;
