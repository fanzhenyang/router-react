import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from './MyNavLink'
import About from '../views/about'
import Home from '../views/home'

export default class App extends Component {
  // Switch作用是路由匹配才显示 
  render () {
    return (
      <div>
        <header className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
              <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}