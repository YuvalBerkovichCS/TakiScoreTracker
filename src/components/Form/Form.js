import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks";

import * as S from "./style";

const Form = ({ fields = [""], errors = {}, onSubmit, onClose }) => {
  const { form, handleChange } = useForm(fields);

  const handleSubmit = () => {
    console.log("handleSubmit");
    onSubmit({ ...form });
  };

  return (
    <S.Form>
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
                console.log(form);
              }}
            />
          );
        })}
      </S.Content>

      <S.Footer>
        <S.SubmitButton
          onClick={handleSubmit}
          type="button"
          className="submitButton"
        >
          Submit
        </S.SubmitButton>
        <S.CancelButton onClick={onClose} type="reset">
          Cancel
        </S.CancelButton>
      </S.Footer>
    </S.Form>
  );
};

export default Form;
