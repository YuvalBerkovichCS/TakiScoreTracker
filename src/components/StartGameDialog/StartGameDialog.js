import React, { useState } from "react";
import Dialog from "../Dialog";
import Form from "../Form";

const StartGameDialog = ({ isOpen, onStartGame, onClose }) => {
  const [errors, setErrors] = useState({});

  const handleStartGame = (e) => {
    e.preventDefault();
    const playerAmount = +e.target.playerAmount.value;
    if (playerAmount < 2 || playerAmount > 8) {
      setErrors((prev) => ({
        ...prev,
        playerAmount: "Please choose a number between 2 and 8",
      }));
    } else {
      if (errors) {
        setErrors((prev) => {
          const copyObject = { ...prev };
          delete copyObject.playerAmount;

          return copyObject;
        });
      }
      onStartGame(playerAmount);
      onClose();
    }
  };
  const fields = [
    { name: "playerAmount", label: "Player Amount", type: "number" },
  ];
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={"TAKI"}>
      <Form
        fields={fields}
        errors={errors}
        onSubmit={handleStartGame}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default StartGameDialog;
