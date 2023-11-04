import styled from "styled-components";
import Button from "@mui/material/Button";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TableCircle = styled.div`
  height: 250px;
  width: 250px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const LogoImg = styled.img`
  width: ${({ isSmallLogo }) => (isSmallLogo ? 60 : 80)}%;
`;

export const StartGameButton = styled(Button)``;
