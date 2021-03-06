import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import png from '../../../assets/authors/no-logo.svg'
import {ISource} from "../../../../types";

const Wrapper = styled(Link)`
  color: #fff;
  text-decoration: none;
  background-color: darkslategray;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 230px;
  margin: 10px;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 150px;
  margin: 0;
`

const DescrWrapper = styled.div`
  border-top: 1px solid lightgray;
  padding: 15px;
  width: 100%;
  height: 90px;
`

const CardTitle = styled.h5`
`

interface IProps {
    source: ISource
}

export const AuthorCard: React.FC<IProps> = ({source}) => {
  return (
    <Wrapper to={`/archive?source=${source.name}`} >
      <Image src={png} className="card-img-top" alt="logo" />
      <DescrWrapper>
        <CardTitle>{source.name}</CardTitle>
        <p className="card-text">Author</p>
      </DescrWrapper>
    </Wrapper>
  )
}
