import { IInputProps, Input as NBInput } from "native-base";
import React from "react";

interface InputProps extends IInputProps {
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <NBInput
      variant="filled"
      w={{
        base: "75%",
        md: "25%",
      }}
      rounded={"md"}
      {...props}>
      {children}
    </NBInput>
  );
};

export default Input;
