import React, {useState} from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from './components/UserCard';
import { RegistrBlock } from './components/RegistrBlock';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'
import store from './store/store'



const i = {
  _id:12345678,
  name:'',
  time:0  
};


function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  
  return (
    
    <div className="App">      

      <div className="View">
      <input className="Input" type="text" placeholder="Enter name"/> 
        <div className="CardContainer">
          {users.map(user=>UserCard(user))}      
        </div>
      </div>
      <div className="RightBar">
        {RegistrBlock()}
        <div className="WinnerBlock">
            <h2>Total participants: {}</h2>
            <button> Show winner </button>          
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
