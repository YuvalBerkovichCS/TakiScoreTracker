import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TableCircle = styled.div`
  height: 250px;
  width: 250px;
  background-color: #bbb;
  border-radius: 50%;
  display: block;
  position: relative;
`;

export const Player = styled.div`
  height: 50px;
  width: ${({ playerWidth }) => playerWidth}px;
  background-color: #bbb;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
