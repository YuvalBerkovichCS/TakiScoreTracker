import React from "react";
import * as S from "./style";

const Player = ({
  name,
  gameCounter,
  top,
  left,
  color,
  id,
  index,
  onIncreaseCounter,
  width,
  onClick,
}) => {
  const isPlayerFinished = gameCounter === 0;

  return (
    <S.Container
      playerwidth={width}
      color={color}
      style={{ marginTop: top, marginLeft: left }}
      key={index}
      onClick={() => onClick(id)}
    >
      <span>{name}</span>
      <span>{gameCounter}</span>
      {!isPlayerFinished && (
        <S.ReduceButton
          onClick={(e) => {
            e.stopPropagation();
            onIncreaseCounter(id, -1);
          }}
        >
          -
        </S.ReduceButton>
      )}
    </S.Container>
  );
};

export default Player;
