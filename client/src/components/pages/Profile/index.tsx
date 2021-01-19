import React from 'react';
import {Col, Grid, Row} from "../../common/Grid";
import {Subheader} from "../../common/Header";
import {BandComponent} from "../../common/BandComponent";
import styled from "styled-components";
import {ProfileSettingsIcon} from "../../common/Icons/ProfileSettingsIcon";
import {Input} from "../../common/Input";
import {Button} from "../../common/Button";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`

const Description = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`

export const Profile = () => {
    return (
        <>
            <BandComponent>
                <Grid classes={["pt-4", "pb-3"]} fluid>
                    <ImageWrapper>
                        <ProfileSettingsIcon height={100} width={100}/>
                    </ImageWrapper>
                    <Subheader classes={["text-center", "pb-2"]} light>
                        tetest@gmail.com
                    </Subheader>
                </Grid>
            </BandComponent>
            <Grid classes={["pt-4", "pb-4"]}>
                <Row>
                    <Col classes={["col-md-8", "offset-md-2", "col-sm-12"]}>
                        <Title>
                            Personal information
                        </Title>
                        <Description>
                            This data is confidential. Only you can see them.
                        </Description>
                        <form className="mt-4 d-flex justify-content-center flex-column">
                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <Input
                                    name="email"
                                    type="email"
                                    id={["emailInput"]}
                                    aria-describedby="emailHelp"
                                    placeholder="Enter your email here..."
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nicknameInput">Nickname</label>
                                <Input
                                    name="nickname"
                                    type="text"
                                    id={["nicknameInput"]}
                                    placeholder="Enter your nickname here..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Email address</label>
                                <Input
                                    name="password"
                                    type="password"
                                    id={["passwordInput"]}
                                    aria-describedby="passwordHelp"
                                    placeholder="Enter your email here..."
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genderSelector">Gender</label>
                                <select className="custom-select" id="genderSelector">
                                    <option selected value="" disabled hidden>Choose...</option>
                                    <option value="Man">Man</option>
                                    <option value="Woman">Woman</option>
                                    <option value="Another">Another</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button color="primary">Save</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}