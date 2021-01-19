import React from 'react'
import styled from 'styled-components'

interface IStyle {
    light?: boolean
}

const StyledHeader = styled.h1<IStyle>`
  font-size: 38px;
  color: #313131;
  font-weight: 600;
  ${({light}) => light && 'color: rgb(237, 237, 238)'};
  text-align: center;
`

const StyledSubheader = styled.h2<IStyle>`
  font-size: 34px;
  color: #313131;
  font-weight: 600;
  ${({light}) => light && 'color: rgb(237, 237, 238)'};
  text-align: center;
`

interface IProps {
    classes?: string[]
    light?: boolean
}

export const Header: React.FC<IProps> = ({
                                             children,
                                             classes = [],
                                             light = false,
                                         }) => {
    return (
        <StyledHeader className={classes.join(' ')} light={light}>
            {children}
        </StyledHeader>
    )
}

export const Subheader: React.FC<IProps> = ({
                                                children,
                                                classes = [],
                                                light = false,
                                            }) => {
    return (
        <StyledSubheader className={classes.join(' ')} light={light}>
            {children}
        </StyledSubheader>
    )
}
