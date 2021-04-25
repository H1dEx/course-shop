import React from "react"
import {Navbar} from "./components/common/Navbar"
import {Footer} from "./components/common/Footer"
import {ToastContainer} from 'react-toastify'
import styled from "styled-components"
import 'react-toastify/dist/ReactToastify.css'
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./components/context/AuthContext"
import {useRoutes} from "./routes"

const ContentWrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`;

export default function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)

    return (
        <>
            <AuthContext.Provider value={{login, logout, userId, token, isAuth}}>
                <ContentWrapper>
                    <Navbar/>
                    <ToastContainer/>
                    {routes}
                    <Footer/>
                </ContentWrapper>
            </AuthContext.Provider>
        </>
    );
}