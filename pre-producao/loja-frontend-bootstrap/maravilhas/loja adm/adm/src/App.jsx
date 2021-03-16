import React ,{ Component } from 'react'
import './App.css';

import Auth from './components/auth/auth'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class App extends Component{
  

  render(){
    
      return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                  <Route exact={true} path="/auth-administration" component={Auth} />
                </Switch>
            </BrowserRouter>
        </div>
      )
    }
}


