import React from "react";
import * as S from "./style";

const Dialog = ({
  isOpen = false,
  onClose = () => {},
  title,
  children,
  onKeyDown,
}) => {
  return (
    <S.DialogContainer open={isOpen} onClose={onClose} onKeyDown={onKeyDown}>
      <S.Title>{title}</S.Title>
      {children}
    </S.DialogContainer>
  );
};

export default Dialog;
