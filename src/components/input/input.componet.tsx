import React from "react";

type InputProps = {
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} />
);

export default Input;
