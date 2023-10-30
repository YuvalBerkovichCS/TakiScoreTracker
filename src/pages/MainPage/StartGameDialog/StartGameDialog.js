import React from "react";

import * as S from "./style";

const StartGameDialog = ({ isOpen, onStartGame, onEndGame }) => {
  return (
    <S.BaseDialog open={isOpen}>
      <S.Title>score board</S.Title>

      <S.Footer>
        <S.StartGameButton onClick={onStartGame}>Start Game</S.StartGameButton>
        <S.EndGameButton onClick={onEndGame}>End Game</S.EndGameButton>
      </S.Footer>
    </S.BaseDialog>
  );
};

export default StartGameDialog;
