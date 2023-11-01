import styled from "styled-components";

export const Container = styled.div`
  height: ${({ playerwidth }) => playerwidth}px;
  width: ${({ playerwidth }) => playerwidth}px;
  background-color: ${({ color }) => color};
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
