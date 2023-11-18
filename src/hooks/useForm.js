import React, { useState, useEffect } from "react";

const useForm = (fields = []) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (fields.length) {
      initForm();
    }
  }, [fields]);

  console.log(form);
  const handleChange = (fieldName, data) => {
    console.log("data", data);
    console.log(fieldName);

    setForm((prev) => {
      return { ...prev, [fieldName]: data };
    });
  };

  const initForm = () => {
    const tempForm = fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue;
      return acc;
    }, {});

    setForm(tempForm);
  };

  return { form, handleChange };
};

export default useForm;
