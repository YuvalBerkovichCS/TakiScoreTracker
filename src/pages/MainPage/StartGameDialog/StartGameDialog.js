import React from "react";

import * as S from "./style";

const StartGameDialog = ({ isOpen, onStartGame, onEndGame, onClose }) => {
  const handleStartGame = (e) => {
    e.preventDefault();
    const playerAmount = e.target.playerAmount.value;
    onStartGame(playerAmount);
    onClose();
  };

  return (
    <S.BaseDialog open={isOpen}>
      <S.Title>score board</S.Title>
      <S.Form onSubmit={handleStartGame}>
        <S.Content>
        <S.Field
          name="playerAmount"
          label="Counter"
          type="number"
          variant="outlined"
          margin="normal"
        />
        </S.Content>

        <S.Footer>
          <S.StartGameButton onClick={onStartGame}>
            Start Game
          </S.StartGameButton>
          <S.EndGameButton onClick={onEndGame}>End Game</S.EndGameButton>
        </S.Footer>
      </S.Form>
    </S.BaseDialog>
  );
};

export default StartGameDialog;
