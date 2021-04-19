import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {UseScrollToTop} from './hooks/scrollToTop.hook'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UseScrollToTop/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
