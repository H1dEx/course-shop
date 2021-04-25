import React, {useContext, useEffect, useState} from 'react';
import {Col, Grid, Row} from "../../common/Grid";
import {Subheader} from "../../common/Header";
import {BandComponent} from "../../common/BandComponent";
import styled from "styled-components";
import {ProfileSettingsIcon} from "../../common/Icons/ProfileSettingsIcon";
import {Input} from "../../common/Input";
import {Button} from "../../common/Button";
import {useHttp} from "../../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Spinner} from "../../common/Spinner";
import {toast} from "react-toastify";

export const LoadingWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
    const {token} = useContext(AuthContext)
    const [formData, setFormData] = useState({email: '', nickname: '', gender: ''});
    const [isLoading, setLoading] = useState(true);
    const {loading, request} = useHttp()
    useEffect(() => {
        const makeRequest = async () => {
            const data = await request<typeof formData>('/profile', 'GET', null, {authorization: token});
            setFormData(data)
            setLoading(loading)
        }
        makeRequest()
            .catch((e) => {
                    if (Array.isArray(e.errors)) {
                        toast(e.errors.map((el: { msg: string }) => el.msg).join(' '), {type: "error"});
                    } else {
                        toast(e, {type: "error"});
                    }
                }
            )
    }, []);

    const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        try {
            const data = await request<typeof formData>('/profile', 'POST', {...formData}, {authorization: token});
            setFormData(data)
            toast("Information has been successfully updated", {type: "success"})
        } catch (e) {
            if (Array.isArray(e.errors)) {
                toast(e.errors.map((el: { msg: string }) => el.msg).join(' '), {type: "error"});
            } else {
                toast("An error has occurred", {type: "error"});
            }
        }
    }

    return isLoading
        ? <LoadingWrapper><Spinner/></LoadingWrapper>
        : (
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
                            <form className="mt-4 d-flex justify-content-center flex-column" onChange={changeHandler}
                                  onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="emailInput">Email address</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        id={["emailInput"]}
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your email here..."
                                        disabled
                                        value={formData.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nicknameInput">Nickname</label>
                                    <Input
                                        name="nickname"
                                        type="text"
                                        id={["nicknameInput"]}
                                        placeholder="Enter your nickname here..."
                                        value={formData.nickname}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <Input
                                        name="password"
                                        type="password"
                                        id={["passwordInput"]}
                                        aria-describedby="passwordHelp"
                                        placeholder=""
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="genderSelector">Gender</label>
                                    <select className="custom-select" id="genderSelector"
                                            value={formData.gender} name="gender">
                                        <option value="" disabled hidden>Choose...</option>
                                        <option value="Man">Man</option>
                                        <option value="Woman">Woman</option>
                                        <option value="Another">Another</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary" clickHandler={submitHandler}>Save</Button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </>
        )
}