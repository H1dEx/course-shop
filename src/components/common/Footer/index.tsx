import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid} from '../Grid'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { TwitterIcon } from '../Icons/TwitterIcon'
import { VkIcon } from '../Icons/VkIcon'

const Wrapper = styled.div`
  padding: 60px 0;
  background-color: #353a40;
  color: #fff;
`

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const LabelText = styled.div`
  font-size: 23px;
  font-weight: 600;
`

const DescrText = styled.div`
  font-size: 16px;
  font-weight: 400;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-right: 20px;
`

const LinksLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 14px;
`

const LinksItem = styled(Link)<{ bold?: boolean }>`
  font-size: 14px;
  color: #fff;
  padding-bottom: 7px;
  ${({ bold }) => bold && 'font-weight: 600'};
  &:hover {
    color: #fff;
  }
`

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
`

const LinkIcon = styled(Link)`
  color: #fff;
  margin-right: 10px;
  text-decoration: null;
  width: 32px;
  height: 32px;
`

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid >
        <RowWrapper>
          <InfoWrapper>
            <LabelText>CourseShop</LabelText>
            <DescrText>
              Resource of video programming lessons for developers. Take the
              knowledge of your profile from us, because we are the best, bruh.
              Really.
            </DescrText>
          </InfoWrapper>
          <LinksWrapper>
            <LinksColumn>
              <LinksLabel>Categories</LinksLabel>
              <LinksItem to="/" bold>
                All categories
              </LinksItem>
              <LinksItem to="/">React</LinksItem>
              <LinksItem to="/">Angular</LinksItem>
              <LinksItem to="/">Vue</LinksItem>
            </LinksColumn>
            <LinksColumn>
              <LinksLabel>Sourses</LinksLabel>
              <LinksItem to="/" bold>
                All sources
              </LinksItem>
              <LinksItem to="/">Web4all</LinksItem>
              <LinksItem to="/">FreeSchool</LinksItem>
              <LinksItem to="/">Another author</LinksItem>
              <LinksItem to="/">FreeBuff</LinksItem>
            </LinksColumn>
          </LinksWrapper>
          <SocialsWrapper>
            <LinkIcon to="/">
              <VkIcon/>
            </LinkIcon>
            <LinkIcon to="/">
              <FacebookIcon/>
            </LinkIcon>
            <LinkIcon to="/">
              <TwitterIcon/>
            </LinkIcon>
          </SocialsWrapper>
        </RowWrapper>
      </Grid>
    </Wrapper>
  )
}
