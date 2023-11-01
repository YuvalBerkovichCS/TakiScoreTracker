import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useGame = () => {
  const [isStartDialogOpen, setIsStartDialogOpen] = useState(false);
  const [playersList, setPlayersList] = useState([]);
  const [winnersIds, setWinnersIds] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const isPlayerDialogOpen = !!selectedPlayerId;
  const selectedPlayer = playersList.find(
    (player) => player.id === selectedPlayerId
  );
  const calculatedMargin = MAIN_TABLE_RADIUS + PLAYER_WIDTH / 2 + 10;

  const startGame = () => {
    setIsStartDialogOpen(true);
  };

  const handlePlayerChange = (playerId, data) => {
    setPlayersList((prev) => {
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

    if (data.gameCounter === 0) {
      handlePlayerFinished(playerId);
    }
  };

  const handleStartGame = (playerAmount) => {
    const playersList = createPlayersArray(playerAmount, calculatedMargin).map(
      (player, index) => ({
        ...player,
        id: uuidv4(),
        name: PLAYERS_NAMES[index],
        gameCounter: INITIAL_GAME_COUNTER,
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
  };

  const handleRestartGame = () => {
    setPlayersList((prev) => {
      const newPlayersList = prev.map((player) => ({
        ...player,
        gameCounter: INITIAL_GAME_COUNTER,
      }));

      return newPlayersList;
    });

    setWinnersIds([]);
  };

  const handleEndGame = (playerAmount) => {
    playerAmount.preventDefault();
    setIsStartDialogOpen(false);
    setPlayersList([]);
    setWinnersIds([]);
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

  return {
    handleStartGame,
    startGame,
    playersList,
    isPlayerDialogOpen,
    winnersIds,
    selectedPlayer,
    handlePlayerChange,
    handleRestartGame,
    handleEndGame,
    selectedPlayerId,
    calculatedMargin,
    handlePlayerFinished,
    increasePlayerCounter,
    setIsStartDialogOpen,
    isStartDialogOpen,
    setSelectedPlayerId,
  };
};
const MAIN_TABLE_RADIUS = 125;
const PLAYER_WIDTH = 75;
const INITIAL_GAME_COUNTER = 8;
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

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "cyan",
];
function createPlayersArray(playerAmount, margin) {
  const players = [];

  for (let i = 0; i < playerAmount; i++) {
    const angle = (360 / playerAmount) * i; // Calculate the angle for even distribution
    const angleRadians = (angle * Math.PI) / 180;
    const top = -Math.cos(angleRadians) * margin;
    const left = Math.sin(angleRadians) * margin;
    const color = COLORS[i];
    players.push({ top, left, color });
  }

  return players;
}

export default useGame;
