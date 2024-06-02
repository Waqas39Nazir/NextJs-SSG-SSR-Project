import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  value: string;
  name: string;
  onChange?: any;
};

const Input = ({ label, placeholder, value, name, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        className="border rounded-sm px-2 py-1"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
