import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 17vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Signin: React.FC = () => (
  <Wrapper>
    <h1 className="text-center">Please sign in to continue</h1>
    <form className="mt-4">
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </Wrapper>
)
