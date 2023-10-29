import styled from "styled-components";

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

export const Player = styled.div`
  height: ${({ playerwidth }) => playerwidth}px;
  width: ${({ playerwidth }) => playerwidth}px;
  background-color: #bbb;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
`;

export const ReduceButton = styled.button`
  border-radius: 50%;
`;

export const LogoImg = styled.img`
  width: ${({ issmalllogo }) => (issmalllogo ? 60 : 80)}%;
`;
