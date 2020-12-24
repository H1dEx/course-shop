import React from "react";
import { Course } from "../../common/CourseItem";
import { MiniCard } from "../../common/MiniCard";
import { Search } from "../../common/Search";
import { BandComponent } from "../../common/BandComponent";
import { Button } from "../../common/Button";
import { Col, Grid, Row } from "../../common/Grid";
import img from "../../../assets/icons/css.png";
import styled from "styled-components";
import { Header, Subheader } from "../../common/Header";

const ButtonWrapper = styled.div`
  text-align: center;
  button {
    height: 40px;
    width: 270px;
  }
`;

const categories = [
  { name: "CSS", icon: "css.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "Vue", icon: "css.png" },
  { name: "React", icon: "reactjs.jpg" },
  { name: "Java", icon: "java.png" },
  { name: "Python", icon: "python.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "Other", icon: "drugoe.png" },
];

export function Entire() {
  return (
    <>
      <Grid classes={["pt-4"]}>
        <Row>
          <Col classes={["col-md-8", "offset-md-2", "col-sm-12"]}>
            <Header classes={["text-center", "mt-4"]}>
              Welcome to CourseShop
            </Header>
            <p
              className="text-center mt-4"
              style={{ fontSize: 24, color: "#969494" }}
            >
              Resource of video programming lessons for developers. Take the
              knowledge of your profile from us, because we are the best, bruh.
              Really.
            </p>
          </Col>
          <Col
            classes={[
              "col-md-6",
              "offset-md-3",
              "mt-md-5",
              "mt-3",
              "col-8",
              "offset-2",
            ]}
          >
            <Search />
          </Col>
        </Row>
      </Grid>

      <BandComponent>
        <Grid classes={["pt-4", "pb-3"]}>
          <Subheader classes={["text-center", "pb-2"]} light>
            Popular categories
          </Subheader>
          <Row classes={["justify-content-center"]}>
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
          </Row>
          <ButtonWrapper className="pt-3">
            <Button>All categories</Button>
          </ButtonWrapper>
        </Grid>
      </BandComponent>

      <Grid classes={["pt-4", "pb-5"]}>
        <Row>
          <Col>
            <Subheader classes={["text-center", "mb-4"]}>
              Recently added courses
            </Subheader>
            <Course>
              <Course.Item />
              <Course.Item />
              <Course.Item />
              <Course.Item />
              <Course.Item />
            </Course>
            <ButtonWrapper className="pt-3">
              <Button>All courses</Button>
            </ButtonWrapper>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
