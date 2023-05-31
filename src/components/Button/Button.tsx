import React, { ReactNode } from "react";
import { ButtonWrapper } from "./Button.styles";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
