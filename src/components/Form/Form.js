import React from "react";
import * as S from "./style";

const Form = ({ fields, errors, onSubmit, onClose }) => {
  console.log({ fields });
  console.log(errors);
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Content>
        {fields.map((field, index) => {
          return (
            <S.Field
              key={index}
              error={!!errors[field.name]}
              name={field.name}
              label={field.label}
              type={field.type}
              variant="outlined"
              margin="normal"
              helperText={errors[field.name] ?? ""}
            />
          );
        })}
      </S.Content>

      <S.Footer>
        <S.StartGameButton type="submit">Start Game</S.StartGameButton>
        <S.EndGameButton type="reset" onClick={onClose}>
          Cancel
        </S.EndGameButton>
      </S.Footer>
    </S.Form>
  );
};

export default Form;
