import React, { useCallback, useEffect, useState } from "react";
import LogoImg from "../../assets/Images/TAKI_logo.png";
import StartGameDialog from "../../components/StartGameDialog";
import PlayerDialog from "../../components/PlayerDialog";
import EndGameDialog from "../../components/EndGameDialog";
import WinnersList from "../../components/WinnersList";
import Player from "../../components/Player";
import * as S from "./style";
import { useGame } from "../../hooks";

const MainPage = () => {
  const {
    playersList,
    isPlayerDialogOpen,
    winnersIds,
    startGame,
    setSelectedPlayerId,
    setIsStartDialogOpen,
    isStartDialogOpen,
    handleRestartGame,
    handleEndGame,
    handleStartGame,
    increasePlayerCounter,
    selectedPlayer,
    handlePlayerChange,
  } = useGame();

  return (
    <S.Container>
      <S.TableCircle>
        <S.LogoImg src={LogoImg} isSmallLogo={!!winnersIds?.length} />
        {playersList.length === 0 && (
          <S.StartGameButton onClick={startGame}>Start Game</S.StartGameButton>
        )}
        {playersList.map(
          ({ name, gameCounter, top, left, color, id }, index) => {
            return (
              <Player
                onIncreaseCounter={increasePlayerCounter}
                onClick={setSelectedPlayerId}
                name={name}
                gameCounter={gameCounter}
                top={top}
                left={left}
                color={color}
                id={id}
                index={index}
                width={PLAYER_WIDTH}
              />
            );
          }
        )}

        <WinnersList winnersIds={winnersIds} playersList={playersList} />
      </S.TableCircle>
      {isPlayerDialogOpen && (
        <PlayerDialog
          isOpen={isPlayerDialogOpen}
          player={selectedPlayer}
          onChange={handlePlayerChange}
          onClose={() => setSelectedPlayerId()}
        />
      )}
      <EndGameDialog
        isOpen={winnersIds.length === playersList.length - 1}
        onRestartGame={handleRestartGame}
        onEndGame={handleEndGame}
        winnersIds={winnersIds}
        playersList={playersList}
      />
      <StartGameDialog
        isOpen={isStartDialogOpen}
        onStartGame={handleStartGame}
        onEndGame={handleEndGame}
        onClose={() => setIsStartDialogOpen(false)}
      />
    </S.Container>
  );
};
const PLAYER_WIDTH = 75;

export default MainPage;
