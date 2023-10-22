import React from "react";
import * as S from "./style";

const MainPage = () => {
  // Define the number of players
  const playerAmount = 8;
  const margin = 350;
  const players = createPlayersArray(playerAmount, margin);

  return (
    <S.Container>
      <S.TableCircle />
      {players.map(({ name, top, left }) => (
        <S.Player style={{ marginTop: top, marginLeft: left }} key={name}>
          {name}
        </S.Player>
      ))}
    </S.Container>
  );
};

const createPlayersArray = (playerAmount, margin) => {
  const players = [];
  for (let i = 0; i < playerAmount; i++) {
    const angle = (360 / playerAmount) * i; // Calculate the angle for even distribution
    const radians = (angle * Math.PI) / 180;
    const top = -Math.cos(radians) * margin;
    const left = Math.sin(radians) * margin;
    players.push({ name: `player ${i + 1}`, top, left });
  }
  return players;
};

export default MainPage;
