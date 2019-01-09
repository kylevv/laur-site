import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'
import App from './App'

const history = createBrowserHistory({
  basename: ''
})
const location = history.location
const paths = ['/', '/rings', '/necklaces', '/bracelets', '/earrings']

history.listen((location, action) => {
  console.log(location, action)
})

class Routing extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          {paths.map((path, i) => {
            return <Route key={i} exact path={path} history={history} location={location} component={App} />
          })}
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default Routing
