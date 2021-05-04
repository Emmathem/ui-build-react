import React from "react";

const AppInput = ({ label }) => {
  return (
    <a-form-item label={label} colon="colon" required="required">
      <input></input>
    </a-form-item>
  );
};

export default AppInput;
