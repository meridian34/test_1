import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export const RegistrBlock =(props)=>{    
    const dispatch = useDispatch();
    
    const regUser = useSelector(store => store.regUser);
    const winner = useSelector(store => store.winner);
   
  
    return winner == null ? (regUser == null ? (
        <div className="RegistrationBlock">
          <div className="TitleReg">
            <h2>Registration user</h2>
          </div>
          <div className="ContentReg">
            <div className="someContent" >
              <p>First name:</p>
              <input className="Input" type="text" placeholder="Enter first name" />
              <p>Second name:</p>
              <input className="Input" type="text" placeholder="Enter Second name" />
            </div>
          </div>
          <div className="BottomReg">
            <button> Registration </button>
          </div>
          
          
        </div>
    ) : (
        <div className="RegistrationBlock">
          <div className="TitleReg">
            <h2>Registration user</h2>
          </div>
          <div className="ContentReg">
            <div className="someContent" >
              <p>First name:</p>
              <input className="Input" type="text" placeholder="Enter first name" />
              <p>Second name:</p>
              <input className="Input" type="text" placeholder="Enter Second name" />
            </div>
          </div>
          <div className="BottomReg">
            <button> Registration </button>
          </div>
          
          
        </div>
    )) : (
          <div className="RegistrationBlock">
            <div className="TitleReg">
            <h2>Registration user closed</h2>
          </div>
          <div className="ContentReg">
            
          </div>
          <div className="BottomReg">
            
          </div>
          </div>
    )
     
 
}