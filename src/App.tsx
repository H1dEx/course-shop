import React from 'react'
import { Entire } from './components/pages/Entire'
import { Navbar } from './components/common/Navbar'
import { Route, Switch } from 'react-router-dom'
import { Signup } from './components/pages/Signup'
import { Signin } from './components/pages/Signin'
import { Source } from './components/pages/Source'
import { Archive } from './components/pages/Archive'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
