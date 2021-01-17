import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {Alert} from "./components/common/Alert";

const alertOptions = {
    positions: positions.TOP_RIGHT,
    timeout: 4000,
    transitions: transitions.FADE
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AlertProvider template={Alert} {...alertOptions}>
                <App/>
            </AlertProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
