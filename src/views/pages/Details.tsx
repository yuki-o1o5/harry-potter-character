import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Details() {
  // const { id } = useParams();

  // const [hotelInfo, sethotelInfo] = useState({});

  // useEffect(() => {
  //   getHotelDataById();
  // }, []);

  // const getHotelDataById = async () => {
  //   const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
  //   setHotelInfo(data);
  // };

  return (
    <>
      <SDetailsContainer>
        {/* <image src="https://raw.githubusercontent.com/yuki-o1o5/my-portfolio/main/public/assets/main3.jpeg" /> */}
        <h1>hotel name</h1>
        <div>address</div>
        <div>Tel</div>
        <div>room</div>
        <div>rate</div>
      </SDetailsContainer>
    </>
  );
}

const SDetailsContainer = styled.div`
  background-color: #fff;
  margin: 0 10rem;
  justify-content: center;
`;
