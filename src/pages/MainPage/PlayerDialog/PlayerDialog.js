import React from "react";
import TextField from "@mui/material/TextField";
import * as S from "./style";

const PlayerDialog = ({ isOpen, player, onClose, onChange }) => {
  const handlePlayerChange = (e, fieldName) => {
    onChange(player.id, { [fieldName]: e.target.value });
  };

  return (
    <S.BaseDialog open={isOpen} onClose={onClose}>
      <S.Title>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        Player Name:{player?.name} counter:{player?.gameCounter}
      </S.Title>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        defaultValue={player?.name}
        onChange={(e) => handlePlayerChange(e, "name")}
      />
      <TextField
        label="Counter"
        variant="outlined"
        margin="normal"
        defaultValue={player?.gameCounter}
        onChange={(e) => handlePlayerChange(e, "gameCounter")}
      />
      {/* footer with save and cancel button mui form */}
    </S.BaseDialog>
  );
};

export default PlayerDialog;
