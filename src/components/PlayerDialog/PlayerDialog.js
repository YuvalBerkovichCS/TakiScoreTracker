import React, { useCallback, useState } from "react";
import Form from "../Form";

import * as S from "./style";

const PlayerDialog = ({ isOpen, player, onClose, onChange }) => {
  const [errors, setErrors] = useState({});
  // const handlePlayerChange = (e, fieldName) => {
  //   onChange(player.id, { [fieldName]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameCounter = e.target.gameCounter.value;
    const name = e.target.name.value;
    const newData = {};
    const newErrors = {};

    if (gameCounter < 0) {
      newErrors.gameCounter = "Please enter a natural number";
    } else {
      newData.gameCounter = gameCounter;
    }

    if (name !== "") {
      newData.name = name;
    } else {
      newErrors.name = "Player name can't be empty";
    }

    console.log({ newData, errors: newErrors });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onChange(player.id, newData);

      onClose();
    }
  };

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      defaultValue: player.name,
    },
    {
      name: "gameCounter",
      label: "Counter",
      type: "number",
      defaultValue: player.gameCounter,
    },
  ];
  return (
    <S.BaseDialog open={isOpen} onClose={onClose}>
      <S.Title>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        Player Name:{player?.name} counter:{player?.gameCounter}
      </S.Title>
      {/* <Form form={''} onSubmit={handleSubmit} /> */}
      <Form
        fields={fields}
        errors={errors}
        onSubmit={handleSubmit}
        onClose={onClose}
      />
      {/* <S.Form onSubmit={handleSubmit}>
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
         <br />
        <S.CancelButton type="button" onClick={onClose}>
          Cancel
        </S.CancelButton>
        <S.SaveButton type="submit">Save</S.SaveButton>
      </S.Form> } */}
    </S.BaseDialog>
  );
};

export default PlayerDialog;
