import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const BaseDialog = styled(Dialog)`
  & > .MuiDialog-container > .MuiPaper-root {
    padding: 10px;
  }

  & .MuiPaper-root {
    position: relative;
    width: 350px;
  }
`;

export const Title = styled(DialogTitle)`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Field = styled(TextField)``;

export const StartGameButton = styled(Button)``;

export const EndGameButton = styled(Button)``;
