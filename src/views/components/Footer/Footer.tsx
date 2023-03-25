import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <SContainer>
      <div>
        <cite> Yuki &copy; 2023, All Rights Reserved </cite>
      </div>
    </SContainer>
  );
}

const SContainer = styled.div`
  background-color: #04235c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  color: #b79012;
`;
