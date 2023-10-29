import React from "react";
import WinnersList from "../WinnersList";

import * as S from "./style";

const EndGameDialog = ({ isOpen, onClose, winnersIds, playersList }) => {
  return (
    <S.BaseDialog open={isOpen} onClose={onClose}>
      <S.Title>score board</S.Title>
      <S.Content>
        <WinnersList winnersIds={winnersIds} playersList={playersList} />
      </S.Content>
      <S.Footer>
        <S.RestartGameButton onClick={onClose}>
          Restart Game
        </S.RestartGameButton>
        <S.EndGameButton onClick={onClose}>End Game</S.EndGameButton>
      </S.Footer>
    </S.BaseDialog>
  );
};

export default EndGameDialog;
