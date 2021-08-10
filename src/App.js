import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


import Body from './layouts/body/Body'
import Header from './layouts/header/Header';
import history from './history';


console.warn = () => {};
export default class App extends Component{
  render(){
    return(
      <div className='App'>
          <Router history={history}>
            <Header/>
            <Body/>
          </Router>
      </div>
    )
  }
}