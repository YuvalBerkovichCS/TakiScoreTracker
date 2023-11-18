import React from "react";
import WinnersList from "../WinnersList";
import Dialog from "../Dialog";

import * as S from "./style";

const EndGameDialog = ({
  isOpen,
  onRestartGame,
  onEndGame,
  winnersIds,
  playersList,
}) => {
  return (
    <Dialog isOpen={isOpen} title={"Score Board"}>
      <S.Content>
        <WinnersList winnersIds={winnersIds} playersList={playersList} />
      </S.Content>
      <S.Footer>
        <S.RestartGameButton onClick={onRestartGame}>
          Restart Game
        </S.RestartGameButton>
        <S.EndGameButton onClick={onEndGame}>End Game</S.EndGameButton>
      </S.Footer>
    </Dialog>
  );
};

export default EndGameDialog;
