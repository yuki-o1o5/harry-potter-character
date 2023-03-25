import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <SContainer>
      <Sh1>Harry Potter</Sh1>
      <div>
        <Sul>
          <Sli onClick={() => navigate("/")}>Home</Sli>
          <Sli onClick={() => navigate("/spells")}>Spell Page</Sli>
        </Sul>
      </div>
    </SContainer>
  );
}

const SContainer = styled.div`
  background-color: #04235c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  color: #b79012;
`;

const Sul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const Sli = styled.li`
  padding: 30px;
  font-size: 1.7rem;
  cursor: pointer;
`;

const Sh1 = styled.h1`
  font-size: 3rem;
`;
