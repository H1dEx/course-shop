import React from "react";
import styled from "styled-components";
import { Grid } from "../../common/Grid";

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
`;

export const AddCourse: React.FC = () => (
  <Grid classes={["pt-4", "pb-4"]}>
    <h1 className="text-center">Add course</h1>
    <Form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Course name</label>
        <input className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Course description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        />
      </div>
      <div className="form-group">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile">
            Choose course logo
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  </Grid>
);
