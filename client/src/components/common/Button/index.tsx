import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-weight: 700;
  font-size: 15px;
  padding: 5px 20px;
`;

interface IProps {
  outlined?: boolean;
  classes?: string[];
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "body"
    | "muted"
    | "white"
    | "black";
}

export const Button: React.FC<IProps> = ({
  children,
  outlined,
  classes = [],
  color = "success",
}) => {
  const newClasses = `${
    outlined ? `btn-outline-${color} ` : `btn-${color} `
  } btn 
  ${classes.join(" ")}`;
  return <ButtonStyle className={newClasses}>{children}</ButtonStyle>;
};
