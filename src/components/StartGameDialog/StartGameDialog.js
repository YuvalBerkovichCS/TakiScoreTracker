import React, { useState } from "react";
import Dialog from "../Dialog";
import Form from "../Form";

const StartGameDialog = ({ isOpen, onStartGame, onClose }) => {
  const [errors, setErrors] = useState({});

  const handleStartGame = ({ playerAmount }) => {
    console.log(playerAmount);
    const newData = {};
    const newErrors = {};

    if (!playerAmount || playerAmount < 2 || playerAmount > 8) {
      newErrors.playerAmount = "Please choose a number between 2 and 8";
    } else {
      newData.playerAmount = playerAmount;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onStartGame(newData);
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      const submitButton = document.querySelector(".submitButton");
      submitButton.click();
    }
  };
  const fields = [
    { name: "playerAmount", label: "Player Amount", type: "number" },
  ];
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={"TAKI"}
      onKeyDown={handleKeyPress}
    >
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
