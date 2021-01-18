import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Signup} from "./components/pages/Signup";
import {Signin} from "./components/pages/Signin";
import {Source} from "./components/pages/Source";
import {Archive} from "./components/pages/Archive";
import {Entire} from "./components/pages/Entire";
import {Profile} from "./components/pages/Profile";

export const useRoutes = (isAuth: boolean) => isAuth
    ? (
        <Switch>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/source">
                <Source/>
            </Route>
            <Route path="/archive">
                <Archive/>
            </Route>
            <Route path="/">
                <Entire/>
            </Route>
        </Switch>)
    : (
        <Switch>

            <Route path="/sign-up">
                <Signup/>
            </Route>

            <Route path="/sign-in">
                <Signin/>
            </Route>

            <Route path="/source">
                <Source/>
            </Route>

            <Route path="/archive">
                <Archive/>
            </Route>

            <Route path="/">
                <Entire/>
            </Route>
        </Switch>)