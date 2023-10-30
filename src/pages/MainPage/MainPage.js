import React, { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import LogoImg from "../../assets/Images/TAKI_logo.png";
import { v4 as uuidv4 } from "uuid";
import StartGameDialog from "./StartGameDialog";
import PlayerDialog from "./PlayerDialog";
import EndGameDialog from "./EndGameDialog";
import WinnersList from "./WinnersList";

const MainPage = () => {
  // Define the number of players
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playersList, setPlayersList] = useState([]); // [ { name: 'player 1', top: 0, left: 0 }, ...
  const [winnersIds, setWinnersIds] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const isPlayerDialogOpen = !!selectedPlayerId;
  const selectedPlayer = playersList.find(
    (player) => player.id === selectedPlayerId
  );
  const playersAmount = 8;
  const tableRadius = 125;
  const margin = tableRadius + PLAYER_WIDTH / 2 + 10;
  const players = createPlayersArray(playersAmount, margin);
  // const winnerPlayerId = playersList.find(
  //   (player) => player.gameCounter === 0
  // )?.id;

  // useEffect(() => {
  //   handleStartGame(playersAmount);
  // }, []);

  const startGame = () => {
    setIsGameStarted(true);
  };

  const handlePlayerChange = (playerId, data) => {
    setPlayersList((prev) => {
      console.log({ previousArray: prev });
      const playerIndex = prev.findIndex((player) => player.id === playerId);
      const newPlayersList = [...prev];
      if (data.hasOwnProperty("gameCounter")) {
        data.gameCounter = +data.gameCounter;

        if (prev.find((player) => player.id === playerId)?.gameCounter === 0) {
          setWinnersIds((prev) => {
            const newWinnersIds = prev.filter((id) => id !== playerId);
            return newWinnersIds;
          });
        }
      }
      newPlayersList[playerIndex] = { ...newPlayersList[playerIndex], ...data };

      return newPlayersList;
    });
    console.log({ data });
    if (data.gameCounter === 0) {
      handlePlayerFinished(playerId);
    }
  };

  const handleStartGame = (players) => {
    const playersList = createPlayersArray(players, margin).map(
      (player, index) => ({
        ...player,
        id: uuidv4(),
        name: PLAYERS_NAMES[index],
        gameCounter: 8,
      })
    );

    setPlayersList(playersList);
  };

  const handlePlayerFinished = (playerId) => {
    setWinnersIds((prev) => {
      const newWinnersIds = [...prev];
      newWinnersIds.push(playerId);
      return newWinnersIds;
    });
    console.log({ test: displayWinnersNames() });
  };
  // ['id','id2']
  // [{name:'name',id:'id'}]

  const handleRestartGame = () => {
    setPlayersList((prev) => {
      const newPlayersList = prev.map((player) => {
        return { ...player, gameCounter: 8 };
      });
      console.log({ newPlayersList: newPlayersList });
      return newPlayersList;
    });

    setWinnersIds([]);
  };

  const displayWinnersNames = () => {
    return winnersIds.map((winnerId) => {
      const playerName = playersList.find(({ id }) => id === winnerId)?.name;
      console.log(playerName);
      const WinnersNames = { id: winnerId, name: playerName };
      return WinnersNames;
    });
  };

  const handleEndGame = () => {};

  const increasePlayerCounter = (playerId, amount) => {
    const currentPlayerGameCounter = playersList.find(
      ({ id }) => id === playerId
    )?.gameCounter;

    const newData = {
      gameCounter: currentPlayerGameCounter + amount,
    };
    return handlePlayerChange(playerId, newData);
  };

  function createPlayersArray(playerAmount, margin) {
    const players = [];
    for (let i = 0; i < playerAmount; i++) {
      const angle = (360 / playerAmount) * i; // Calculate the angle for even distribution
      const angleRadians = (angle * Math.PI) / 180;
      const top = -Math.cos(angleRadians) * margin;
      const left = Math.sin(angleRadians) * margin;
      players.push({ top, left });
    }
    return players;
  }

  return (
    <S.Container>
      <S.TableCircle>
        <S.LogoImg src={LogoImg} issmalllogo={!!winnersIds?.length} />
        {playersList.length === 0 && (
          <S.StartGameButton onClick={() => startGame()}>
            Start Game
          </S.StartGameButton>
        )}
        {playersList.map(({ name, gameCounter, top, left, id }, index) => {
          const isPlayerFinished = gameCounter === 0;

          return (
            <S.Player
              playerwidth={PLAYER_WIDTH}
              style={{ marginTop: top, marginLeft: left }}
              key={index}
              onClick={() => setSelectedPlayerId(id)}
            >
              <span>{name}</span>
              <span>{gameCounter}</span>
              {!isPlayerFinished && (
                <S.ReduceButton
                  onClick={(e) => {
                    e.stopPropagation();
                    increasePlayerCounter(id, -1);
                  }}
                >
                  -
                </S.ReduceButton>
              )}
            </S.Player>
          );
        })}
        {/* Dialog */}
        {isPlayerDialogOpen && (
          <PlayerDialog
            isOpen={isPlayerDialogOpen}
            player={selectedPlayer}
            onChange={handlePlayerChange}
            onClose={() => setSelectedPlayerId()}
          />
        )}
        <WinnersList winnersIds={winnersIds} playersList={playersList} />
        <EndGameDialog
          isOpen={winnersIds.length === playersAmount - 1}
          onRestartGame={() => handleRestartGame()}
          onEndGame={() => handleEndGame()}
          winnersIds={winnersIds}
          playersList={playersList}
        />
        <StartGameDialog
          isOpen={isGameStarted}
          onStartGame={() => handleStartGame()}
          onEndGame={() => handleEndGame()}
        />
      </S.TableCircle>
    </S.Container>
  );
};

const PLAYER_WIDTH = 75;
const PLAYERS_NAMES = [
  "Yuval",
  "Yanko",
  "Pulik",
  "Alon",
  "Kobi",
  "Pekker",
  "Chen",
  "Daniel",
];

export default MainPage;
