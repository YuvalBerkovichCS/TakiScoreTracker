import React from "react";
import * as S from "./style";

const Dialog = ({ isOpen = false, onClose = () => {}, title, children }) => {
  return (
    <S.DialogContainer open={isOpen} onClose={onClose}>
      <S.Title>{title}</S.Title>
      {children}
    </S.DialogContainer>
  );
};

export default Dialog;
