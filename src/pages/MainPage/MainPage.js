import React, { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import LogoImg from "../../assets/Images/TAKI_logo.png";
import { v4 as uuidv4 } from "uuid";
import PlayerDialog from "./PlayerDialog";

const MainPage = () => {
  // Define the number of players
  const [playersList, setPlayersList] = useState([]); // [ { name: 'player 1', top: 0, left: 0 }, ...
  const [finishedPlayersIds, setFinishedPlayersIds] = useState([]);
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

  useEffect(() => {
    handleStartGame(playersAmount);
  }, []);

  const handlePlayerChange = (playerId, data) => {
    setPlayersList((prev) => {
      const playerIndex = prev.findIndex((player) => player.id === playerId);
      const newPlayersList = [...prev];
      if (data.hasOwnProperty("gameCounter")) {
        data.gameCounter = +data.gameCounter;
      }
      newPlayersList[playerIndex] = { ...newPlayersList[playerIndex], ...data };

      return newPlayersList;
    });
    console.log({ data });
    if (data.gameCounter === 0) {
      handlePlayerFinished(playerId);
    }
  };

  const handlePlayerFinished = (playerId) => {
    setFinishedPlayersIds((prev) => {
      const newFinishedPlayersIds = [...prev];
      newFinishedPlayersIds.push(playerId);
      return newFinishedPlayersIds;
    });
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
  console.log({ playersList: playersList });
  console.log({ finsihedPlayersId: finishedPlayersIds });

  const checkWinner = (playerId) => {
    console.log(playersList.find((player) => player.id === playerId));
    return (
      playersList.find((player) => player.id === playerId)?.gameCounter === 0
    );
  };

  const getPlayerNameById = (playerId) => {
    const currentPlayerName = playersList.find(
      ({ id }) => id === playerId
    )?.name;
    return currentPlayerName;
  };

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
      {playersList.length > 0 && (
        <S.TableCircle>
          {/* {winnerPlayerId} */}
          <S.LogoImg src={LogoImg} />
          {playersList.map(({ name, gameCounter, top, left, id }, index) => {
            const isPlayerFinished = gameCounter === 0;

            return (
              <S.Player
                playerwidth={PLAYER_WIDTH}
                style={{ marginTop: top, marginLeft: left }}
                key={index}
                onClick={() => setSelectedPlayerId(id)}
                // onClick={() => increasePlayerCounter(id, 1)}
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
          <S.WinnersList>
            {finishedPlayersIds.map((playerId) => {
              return (
                <S.WinnersListItem>
                  {getPlayerNameById(playerId)}
                </S.WinnersListItem>
              );
            })}
          </S.WinnersList>
        </S.TableCircle>
      )}
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
