import React from 'react'
import { Entire } from './components/pages/Entire'
import { Navbar } from './components/common/Navbar'
import { Route, Switch } from 'react-router-dom'
import { Signup } from './components/pages/Signup'
import { Signin } from './components/pages/Signin'

function App() {
  return (
    <div
      style={{
        background: 'rgb(218, 216, 222, .2)',
        position: 'absolute',
        minHeight: '100vh',
        width: '100%',
        zIndex: -1,
      }}
    >
      <Navbar />
      <Switch>
        <Route path="/sign-up">
          <Signup />
        </Route>
        
        <Route path="/sign-in">
          <Signin />
        </Route>

        <Route path="/">
          <Entire />
        </Route>
      </Switch>
    </div>
  )
}

export default App
