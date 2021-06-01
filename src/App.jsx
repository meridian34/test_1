import React, {useState} from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from './components/UserCard';
import { RegistrBlock } from './components/RegistrBlock';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'
import store from './store/store'
import { Route, BrowserRouter as Router, Switch, matchPath } from "react-router-dom";
import { UserDetail } from './components/UserDetail';
import { WinnerBlock } from './components/WinnerBlock';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  
  return (
    <Router>
      <Switch>
        <Route path="/user/:id" children={<UserDetail/>}/>
          
        <Route path="/">
          <div className="App">  
          <div className="View">
          <input className="Input" type="text" placeholder="Enter name"/> 
            <div className="CardContainer">
              {users.map(user=><UserCard props={user} />)}      
            </div>
          </div>
          <div className="RightBar">
            {<RegistrBlock/>}
            {console.log('aft')}
            {<WinnerBlock/>}
          </div>
        </div>
        </Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;
