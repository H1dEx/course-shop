import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
  font-weight: 400px;
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
  url: string
  text: string
}

export const MiniCard: React.FC<IProps> = ({ url, text }) => {
  return (
    <Wrapper>
      <CardImage src={url} alt="card image" />
      <CardDescr className="text-center">{text}</CardDescr>
    </Wrapper>
  )
}
