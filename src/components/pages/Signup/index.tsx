import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Signup: React.FC = () => (
  <Wrapper>
    <h1 className="text-center">Please sign up to continue</h1>
    <form className="mt-4">
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
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm the password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
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

      <button className="btn btn-outline-primary">Cancel</button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </Wrapper>
)
