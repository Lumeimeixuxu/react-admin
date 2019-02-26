import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import './assets/less/index.less'
export default class App  extends Component{
    render(){
      return(
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Admin}/>
          </Switch>
        </BrowserRouter>
      )
    }
}
