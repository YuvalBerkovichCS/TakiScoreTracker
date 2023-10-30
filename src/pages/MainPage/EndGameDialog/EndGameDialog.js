import React from "react";
import WinnersList from "../WinnersList";

import * as S from "./style";

const EndGameDialog = ({
  isOpen,
  onRestartGame,
  onEndGame,
  winnersIds,
  playersList,
}) => {
  return (
    <S.BaseDialog open={isOpen}>
      <S.Title>score board</S.Title>
      <S.Content>
        <WinnersList winnersIds={winnersIds} playersList={playersList} />
      </S.Content>
      <S.Footer>
        <S.RestartGameButton onClick={onRestartGame}>
          Restart Game
        </S.RestartGameButton>
        <S.EndGameButton onClick={onEndGame}>End Game</S.EndGameButton>
      </S.Footer>
    </S.BaseDialog>
  );
};

export default EndGameDialog;
