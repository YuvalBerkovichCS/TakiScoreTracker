import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks";

import * as S from "./style";

const Form = ({ fields = [], errors = {}, onSubmit, onClose }) => {
  const { form, handleChange } = useForm(fields);
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
              value={form[field.name]}
              onChange={(e) => {
                handleChange(field.name, e.target.value);
              }}
            />
          );
        })}
      </S.Content>

      <S.Footer>
        <S.StartGameButton type="submit">Submit</S.StartGameButton>
        <S.EndGameButton type="reset" onClick={onClose}>
          Cancel
        </S.EndGameButton>
      </S.Footer>
    </S.Form>
  );
};

export default Form;
