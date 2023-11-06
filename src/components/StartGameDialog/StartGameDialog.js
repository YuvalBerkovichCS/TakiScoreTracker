import React, { useState } from "react";

import * as S from "./style";

const StartGameDialog = ({ isOpen, onStartGame, onClose }) => {
  const [isError, setIsError] = useState(false);
  const handleStartGame = (e) => {
    e.preventDefault();
    const playerAmount = +e.target.playerAmount.value;
    if (playerAmount < 2 || playerAmount > 8) {
      setIsError(true);
    } else {
      if(isError===true){
        setIsError(false);
      }
      onStartGame(playerAmount);
      onClose();
    }
  };

  return (
    <S.BaseDialog open={isOpen}>
      <S.Title>score board</S.Title>
      <S.Form onSubmit={handleStartGame}>
        <S.Content>
          <S.Field
            error={isError}
            name="playerAmount"
            label="Counter"
            type="number"
            variant="outlined"
            margin="normal"
            helperText={isError ? "Please enter a number between 2 and 8" : ""}
          />
        </S.Content>

        <S.Footer>
          <S.StartGameButton type="submit" onClick={onStartGame}>
            Start Game
          </S.StartGameButton>
          <S.EndGameButton type="reset" onClick={onClose}>
            Cancel
          </S.EndGameButton>
        </S.Footer>
      </S.Form>
    </S.BaseDialog>
  );
};

export default StartGameDialog;
