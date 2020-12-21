import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  font-weight: 700;
  font-size: 15px;
`

interface IProps {
  outlined?: boolean
}

export const Button: React.FC<IProps> = ({ children, outlined }) => {
  const classes = `${
    outlined ? 'btn-outline-success' : 'btn-success '
  } btn mt-4 pl-4 pr-4 pt-2 pb-2`
  return <ButtonStyle className={classes}>{children}</ButtonStyle>
}
