import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)`
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
