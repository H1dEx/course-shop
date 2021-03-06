import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Grid} from "../Grid";
import {FacebookIcon} from "../Icons/FacebookIcon";
import {GithubIcon} from "../Icons/GithubIcon";
import {OdnoklassnikiIcon} from "../Icons/Odnoklassniki";
import {TwitterIcon} from "../Icons/TwitterIcon";
import {VkIcon} from "../Icons/VkIcon";
import {useHttp} from "../../../hooks/http.hook";
import {ICategoryPayload, ISource, ISourcePayload, ITag} from "../../../../types";

const Wrapper = styled.div`
  padding: 60px 0;
  background-color: #353a40;
  color: #fff;
  @media (max-width: 991px) {
    padding: 30px 0;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LabelText = styled.div`
  font-size: 23px;
  font-weight: 600;
  @media (max-width: 991px) {
    margin-bottom: 5px;
  }
`;

const DescrText = styled.div`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

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
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

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
`;

const LinksLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 14px;
`;

const LinksItem = styled(Link)`
  font-size: 14px;
  color: #fff;
  padding-bottom: 7px;

  &:hover {
    color: #fff;
  }
`;

const BoldLinksItem = styled(LinksItem)`
  font-weight: 600;
`

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LinkIcon = styled(Link)`
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  height: 35px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const Footer: React.FC = () => {
    const {request} = useHttp()
    const [tags, setTags] = useState<ITag[]>([])
    const [sources, setSources] = useState<ISource[]>([])
    useEffect(() => {
        const makeRequest = async() => {
            const [{tags}, {sources}] = await Promise.all([request<ICategoryPayload>('/categories'), request<ISourcePayload>('/sources')]);
            setTags(tags)
            setSources(sources)
        }
        makeRequest()
    }, [])
    return (
        <Wrapper>
            <Grid>
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
                            <BoldLinksItem to="/categories">
                                All categories
                            </BoldLinksItem>
                            {tags.map(({tag}, i)=> (i < 3) ? (
                                <LinksItem to={`/archive?category=${tag}`}>{tag}</LinksItem>): null)}
                        </LinksColumn>
                        <LinksColumn>
                            <LinksLabel>Sources</LinksLabel>
                            <BoldLinksItem to="/source">
                                All sources
                            </BoldLinksItem>
                            {sources.map(({name}, i)=> (i < 3) ? (
                            <LinksItem to={`/archive?source=${name}`}>{name}</LinksItem>) : null)}
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
    );
};
