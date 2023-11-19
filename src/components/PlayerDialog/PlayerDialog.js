import React, { useCallback, useMemo, useState } from "react";
import Dialog from "../Dialog";
import Form from "../Form";

const PlayerDialog = ({ isOpen, player, onClose, onChange }) => {
  const [errors, setErrors] = useState({});
  // const handlePlayerChange = (e, fieldName) => {
  //   onChange(player.id, { [fieldName]: e.target.value });
  // };

  const handleSubmit = ({ gameCounter, name }) => {
    e.preventDefault();

    const newData = {};
    const newErrors = {};
    console.log({ gameCounter, name });
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

  const fields = useMemo(
    () => [
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
    ],
    [player.name, player.gameCounter]
  );

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
