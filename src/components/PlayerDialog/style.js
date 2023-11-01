import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";

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

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled(DialogTitle)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 !important;
`;

export const Form = styled.form``;

export const Field = styled(TextField)``;

export const CancelButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 60px;
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
