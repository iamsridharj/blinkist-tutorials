import React from "react";

type ChecboxProps = {
  id: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const Checkbox = ({ id, isChecked, onChange, label }: ChecboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}> {label}</label>
    </div>
  );
};

export default Checkbox;
