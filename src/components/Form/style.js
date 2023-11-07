import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Field = styled(TextField)`
  width: 100%;
`;

export const StartGameButton = styled(Button)``;

export const EndGameButton = styled(Button)``;
