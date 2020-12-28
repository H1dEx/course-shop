import React from "react";
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

export const Signin: React.FC = () => (
  <Wrapper>
    <h1 className="text-center">Please sign in to continue</h1>
    <form className="mt-4 d-flex justify-content-center flex-column">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="enter your email here..."
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
          placeholder="enter your password here..."
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className="d-flex justify-content-center">
        <Button outlined classes={["mr-3"]} color="secondary">
          Cancel
        </Button>
        <Button color="primary">Submit</Button>
      </div>
    </form>
  </Wrapper>
);
