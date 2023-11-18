import React, { useCallback, useState } from "react";
import Dialog from "../Dialog";
import Form from "../Form";

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
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={player.name + "'s settings"}
    >
      <Form
        fields={fields}
        errors={errors}
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default PlayerDialog;
