import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid} from '../Grid'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { GithubIcon } from '../Icons/GithubIcon'
import { OdnoklassnikiIcon } from '../Icons/Odnoklassniki'
import { TwitterIcon } from '../Icons/TwitterIcon'
import { VkIcon } from '../Icons/VkIcon'

const Wrapper = styled.div`
  padding: 60px 0;
  background-color: #353a40;
  color: #fff;
  @media (max-width: 991px) {
    padding: 30px 0;
  }
`

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

const LabelText = styled.div`
  font-size: 23px;
  font-weight: 600;
  @media (max-width: 991px) {
    margin-bottom: 5px;
  }
`

const DescrText = styled.div`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 991px) {
    width: 70%;
    text-align: center;
    margin-bottom: 15px;
  }
  @media (max-width: 770px) {
    width: 90%;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;

  @media (max-width: 991px) {
    margin-right: 10px;
    margin-left: 10px;
    padding-right: 0;
    align-items: center;
  }
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
  @media (max-width: 991px) {
    max-width: 100%
  }
`

const LinkIcon = styled(Link)`
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: null;
  height: 35px;
  svg {
    width: 35px;
    height: 35px;
  }
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
              <GithubIcon/>
            </LinkIcon>
            <LinkIcon to="/">
              <TwitterIcon/>
            </LinkIcon>
            <LinkIcon to="/">
              <OdnoklassnikiIcon/>
            </LinkIcon>
          </SocialsWrapper>
        </RowWrapper>
      </Grid>
    </Wrapper>
  )
}
