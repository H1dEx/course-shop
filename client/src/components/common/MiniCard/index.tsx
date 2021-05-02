import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Wrapper = styled(Link)`
  box-sizing: border-box;
  width: 212px;
  height: 60px;
  padding: 15px 17px;
  margin: 10px;
  background-color: darkslategray;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #dad8de;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`

const CardImage = styled.img`
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  margin-right: 17px;
`

const CardDescr = styled.div`
  text-align: center;
  width: 100%;
`

interface IProps {
    link: string
    url: string
    text: string
}

export const MiniCard: React.FC<IProps> = ({url, text, link}) => {
    return (
        <Wrapper to={link}>
            <CardImage src={url} alt="card image"/>
            <CardDescr className="text-center">{text}</CardDescr>
        </Wrapper>
    )
}
