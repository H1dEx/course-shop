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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;

const FooterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`

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
                    <FooterWrapper>
                        {routes}
                        <Footer/>
                    </FooterWrapper>
                </ContentWrapper>
            </AuthContext.Provider>
        </>
    );
}