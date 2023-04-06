import React from "react";
import { Container } from "./styled";

interface IProps {
  children: React.ReactNode;
}

export const ButtonHeader: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
