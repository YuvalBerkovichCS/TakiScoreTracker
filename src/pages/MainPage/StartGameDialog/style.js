import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StartGameButton = styled.button``;

export const EndGameButton = styled.button``;
