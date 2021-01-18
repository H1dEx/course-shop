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
    disabled?: boolean;
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
    clickHandler?: (e: any) => void
}

export const Button: React.FC<IProps> = ({
                                             children,
                                             outlined,
                                             classes = [],
                                             color = "success",
                                             disabled,
                                             clickHandler
                                         }) => {
    const newClasses = `${
        outlined ? `btn-outline-${color} ` : `btn-${color} `
    } btn 
  ${classes.join(" ")}`;
    return <ButtonStyle onClick={clickHandler} className={newClasses} disabled={disabled}>{children}</ButtonStyle>;
};
