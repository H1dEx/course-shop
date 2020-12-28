import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../common/Button";

const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  padding-top: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10vh;
`;

const RegistredLink = styled.span`
  font-size: 13px;
  color: #949a9f;
  margin-bottom: 20px;
`

export const Signup: React.FC = () => (
  <Wrapper>
    <h1 className="text-center">Please sign up to continue</h1>
    <form className="mt-4 d-flex justify-content-center flex-column">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group" style={{marginBottom: 10}}>
        <label htmlFor="exampleInputPassword1">Confirm the password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
        <RegistredLink className="text-center">
          Already registred? <Link to="/">Sign in</Link>
        </RegistredLink>
      <div className="d-flex justify-content-center">
        <Button outlined classes={["mr-3"]} color="secondary">
          Cancel
        </Button>
        <Button color="primary">Submit</Button>
      </div>
    </form>
  </Wrapper>
);
