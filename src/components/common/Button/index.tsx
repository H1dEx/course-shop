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
    outlined ? 'btn-outline-success ' : 'btn-success '
  } btn`
  return <ButtonStyle className={classes}>{children}</ButtonStyle>
}
