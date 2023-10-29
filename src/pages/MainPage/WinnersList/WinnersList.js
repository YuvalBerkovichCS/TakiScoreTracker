import React from "react";

import * as S from "./style";

const WinnersList = ({ winnersIds, playersList }) => {
  const getPlayerNameById = (playerId) => {
    const currentPlayerName = playersList.find(
      ({ id }) => id === playerId
    )?.name;
    return currentPlayerName;
  };
  return (
    <S.WinnersList>
      {winnersIds.map((playerId, index) => {
        return (
          <S.WinnersListItem key={index}>
            {index + 1}. {getPlayerNameById(playerId)}
          </S.WinnersListItem>
        );
      })}
    </S.WinnersList>
  );
};

export default WinnersList;
