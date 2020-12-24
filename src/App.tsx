import React from "react";
import { Entire } from "./components/pages/Entire";
import { Navbar } from "./components/common/Navbar";
import { Route, Switch } from "react-router-dom";
import { Signup } from "./components/pages/Signup";
import { Signin } from "./components/pages/Signin";
import { Source } from "./components/pages/Source";
import { Archive } from "./components/pages/Archive";
import { Footer } from "./components/common/Footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <ContentWrapper>
        <Navbar />
        <Switch>
          <Route path="/sign-up">
            <Signup />
          </Route>

          <Route path="/sign-in">
            <Signin />
          </Route>

          <Route path="/source">
            <Source />
          </Route>

          <Route path="/archive">
            <Archive />
          </Route>

          <Route path="/">
            <Entire />
          </Route>
        </Switch>
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default App;
