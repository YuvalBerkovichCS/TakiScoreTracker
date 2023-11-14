import React, { useState } from "react";
import Form from "../Form";
import * as S from "./style";

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
    <S.BaseDialog open={isOpen}>
      <S.Title>score board</S.Title>
      <Form
        fields={fields}
        errors={errors}
        onSubmit={handleStartGame}
        onClose={onClose}
      />
    </S.BaseDialog>
    // <Dialog title={} >
    //   <Form
    //   fields={fields}
    //   errors={errors}
    //   onSubmit={handleStartGame}
    //   onClose={onClose}
    // />
    //  // </Dialog>
  );
};

export default StartGameDialog;
