import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Button} from "../../common/Button";
import {Input} from "../../common/Input";
import {useHttp} from "../../../hooks/http.hook";

const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  padding-top: 17vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10vh;
`;

const RegisteredLink = styled.span`
  font-size: 13px;
  color: #949a9f;
  margin-bottom: 20px;
`

export const Signup: React.FC = () => {
    const {loading, error, request} = useHttp();
    const [form, setForm] = useState({email: '', password: '', confirmPassword: ''})
    const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        setForm({...form, [e.target.name]: e.target.value})

    }
    const registerHandler = async () => {
        try {
            const data = await request('sign-up', 'POST', {...form});
            console.log(data);
        } catch (e) {

        }
    }
    return (
        <Wrapper>
            <h1 className="text-center">Please sign up to continue</h1>
            <form className="mt-4 d-flex justify-content-center flex-column" onChange={changeHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Input
                        name="email"
                        type="email"
                        id={["exampleInputEmail1"]}
                        aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <Input
                        name="password"
                        type="password"
                        id={["inputPassword"]}
                    />
                </div>
                <div className="form-group" style={{marginBottom: 10}}>
                    <label htmlFor="exampleInputPassword1">Confirm the password</label>
                    <Input
                        name="confirmPassword"
                        type="password"
                        id={["exampleInputPassword1"]}
                    />
                </div>
                <RegisteredLink className="text-center">
                    Already registered? <Link to="/">Sign in</Link>
                </RegisteredLink>
                <div className="d-flex justify-content-center">
                    <Button outlined classes={["mr-3"]} color="secondary">
                        Cancel
                    </Button>
                    <Button color="primary" clickHandler={registerHandler}
                            disabled={loading || error || form.password.trim().length < 3 || form.email.trim().length < 3 || form.confirmPassword.trim().length < 3}
                    >Submit</Button>
                </div>
            </form>
        </Wrapper>
    )
}
