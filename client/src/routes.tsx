import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Signup} from "./components/pages/Signup";
import {Signin} from "./components/pages/Signin";
import {Source} from "./components/pages/Source";
import {Archive} from "./components/pages/Archive";
import {Entire} from "./components/pages/Entire";
import {Profile} from "./components/pages/Profile";

const AuthorizedRoutes = () => (
    <Switch>
        <Route path="/profile">
            <Profile/>
        </Route>
        <Route path="/my-courses">Wow</Route>
    </Switch>
)

const UnauthorizedRoutes = () => (
    <Switch>
        <Route path="/api/auth/sign-up">
            <Signup/>
        </Route>

        <Route path="/api/auth/sign-in">
            <Signin/>
        </Route>
    </Switch>
)

const CommonRoutes = () => (
    <Switch>
        <Route path="/source">
            <Source/>
        </Route>

        <Route path="/archive">
            <Archive/>
        </Route>

        <Route path="/">
            <Entire/>
        </Route>
    </Switch>
)

export const useRoutes = (isAuth: boolean) => (
    <>
        {isAuth
            ? <AuthorizedRoutes/>
            : <UnauthorizedRoutes/>
        }
        <CommonRoutes/>
    </>
)

