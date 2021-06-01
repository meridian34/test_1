import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export const RegistrBlock =()=>{    
    const dispatch = useDispatch();
    
    let winner = useSelector(store => store.winner);
    let regUser = useSelector(store => store.regUser);
  
   console.log(regUser);
  

   const handleChangeName = (e) =>{
     regUser.name = e.target.value;
     console.log(regUser);
   }

   const handleChangeSecname = (e) =>{
    regUser.secname = e.target.value;
    console.log(regUser);
    }

    const handleRegistrationClick = () =>{
      console.log("regUser");
      if(regUser.name !=="" && regUser.secname!=="")
      {dispatch({type: 'REG_ADD_USER', payload: regUser})}
   }

   const handleChangeTime = (e) =>{
     const i = parseInt(e.target.value);
     if(Number.isInteger(i)){
      regUser.time = i;
     }
    
    console.log(regUser);
    }

   const handleTimeRegistrationClick = () =>{
    console.log("regUserTime");
    if(regUser.time>0){
      dispatch({type: 'REG_ADD_TIME_USER', payload: regUser})
    }
  
 }

    return (regUser.name == "" && regUser.secname == "") ? (
        <div className="RegistrationBlock">
          <div className="TitleReg">
            <h2>Registration user</h2>
          </div>
          <div className="ContentReg">
            <div className="someContent" >
              <p>First name:</p>
              <input className="InputName" type="text" placeholder="Enter first name" defaultValue={regUser.name} onChange={handleChangeName}/>
              <p>Second name:</p>
              <input className="InputSurname" type="text" placeholder="Enter Second name" defaultValue={regUser.surname} onChange={handleChangeSecname}/>
            </div>
          </div>
          <div className="BottomReg">
            <button onClick={handleRegistrationClick}> Registration </button>
          </div>
        </div>
    ) : (
        <div className="RegistrationBlock">
          <div className="TitleReg">
            <h2>Registration user</h2>
          </div>
          <div className="ContentReg">
            <div className="someContent" >
              <p>Time:</p>
              <input className="InputT" type="text" placeholder="Enter time" onChange={handleChangeTime} />              
            </div>
          </div>
          <div className="BottomReg">
            <button onClick={handleTimeRegistrationClick}> Registration </button>
          </div>
        </div>
    )
     
 
}