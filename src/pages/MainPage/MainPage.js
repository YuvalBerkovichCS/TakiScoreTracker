import React, { useEffect, useState } from "react";
import * as S from "./style";
import { v4 as uuidv4 } from "uuid";

const MainPage = () => {
  // Define the number of players
  const [playersList, setPlayersList] = useState([]); // [ { name: 'player 1', top: 0, left: 0 }, ...
  const playersAmount = 8;
  const tableRadius = 125;
  const margin = tableRadius + PLAYER_WIDTH / 2 + 10;
  const players = createPlayersArray(playersAmount, margin);

  useEffect(() => {
    handleStartGame(playersAmount);
  }, []);

  const handleStartGame = (players) => {
    const playersList = createPlayersArray(players, margin).map(
      (player, index) => ({
        ...player,
        id: uuidv4(),
        name: `player ${index + 1}`,
        gameCounter: 8,
      })
    );

    setPlayersList(playersList);
  };

  function increasePlayerCounter(playerId, amount) {
    setPlayersList((prev) => {
      const playerIndex = prev.findIndex((player) => player.id === playerId);
      const newPlayersList = [...prev];
      newPlayersList[playerIndex].gameCounter += amount;

      return newPlayersList;
    });
  }

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
          {playersList.map(({ name, top, left, id }, index) => (
            <S.Player
              playerWidth={PLAYER_WIDTH}
              style={{ marginTop: top, marginLeft: left }}
              key={index}
              // onClick={() => increasePlayerCounter(id, 1)}
            >
              {name}
            </S.Player>
          ))}
          {/* Dialog */}
        </S.TableCircle>
      )}
    </S.Container>
  );
};

const PLAYER_WIDTH = 50;

export default MainPage;
