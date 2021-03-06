import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "../../common/Button";
import {Input} from "../../common/Input";
import {useHttp} from "../../../hooks/http.hook";
import {toast} from "react-toastify";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  padding-top: 17vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10vh;
`;

export const Signin: React.FC = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({email: '', password: ''})
    const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        clearError()
        setForm({...form, [e.target.name]: e.target.value})
    }
    const registerHandler = async () => {
        try {
            const data = await request<any>('sign-in', 'POST', {...form});
            auth.login(data.token, data.userId)
            history.push('/')
        } catch (e) {
            if (Array.isArray(e.errors)) {
                toast(e.errors.map((el: { msg: string }) => el.msg).join(' '), {type: "error"});
            } else {
                toast(e, {type: "error"});
            }
        }
    }
    return (
        <Wrapper>
            <h1 className="text-center">Please sign in to continue</h1>
            <form className="mt-4 d-flex justify-content-center flex-column" onChange={changeHandler}
                  onSubmit={registerHandler} method="post">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Input
                        name="email"
                        type="email"
                        id={["exampleInputEmail1"]}
                        aria-describedby="emailHelp"
                        placeholder="enter your email here..."
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Input
                        name="password"
                        type="password"
                        id={["exampleInputPassword1"]}
                        placeholder="enter your password here..."
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <Button outlined classes={["mr-3"]} color="secondary">
                        Cancel
                    </Button>
                    <Button color="primary" clickHandler={registerHandler}
                            disabled={loading || error || form.password.trim().length < 3 || form.email.trim().length < 3}>Submit</Button>
                </div>
            </form>
        </Wrapper>
    )
};
