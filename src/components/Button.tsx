import React, { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

const Button: React.FC<Props> = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
