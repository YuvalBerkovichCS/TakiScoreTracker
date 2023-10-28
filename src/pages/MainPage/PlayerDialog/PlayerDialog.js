import React from "react";

import * as S from "./style";

const PlayerDialog = ({ isOpen, player, onClose, onChange }) => {
  const handlePlayerChange = (e, fieldName) => {
    onChange(player.id, { [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameCounter = e.target.gameCounter.value;
    const name = e.target.name.value;
    onChange(player.id, {
      gameCounter,
      name,
    });
    onClose();
  };
  return (
    <S.BaseDialog open={isOpen} onClose={onClose}>
      <S.Title>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        Player Name:{player?.name} counter:{player?.gameCounter}
      </S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Field
          name="name"
          label="Name"
          variant="outlined"
          margin="normal"
          defaultValue={player?.name}
          //onChange={(e) => handlePlayerChange(e, "name")}
        />
        <S.Field
          name="gameCounter"
          label="Counter"
          type="number"
          variant="outlined"
          margin="normal"
          defaultValue={player?.gameCounter}
          //onChange={(e) => handlePlayerChange(e, "gameCounter")}
        />
        {/* footer with save and cancel button mui form */}
        <br />
        <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
        <S.SaveButton type="submit">Save</S.SaveButton>
      </S.Form>
    </S.BaseDialog>
  );
};

export default PlayerDialog;
