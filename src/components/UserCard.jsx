import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export const UserCard =(props)=>{    
    const dispatch = useDispatch();
    
    const winner = useSelector(store => store.winner);
  
   
  const handleClickItem = ()=>{

  }
  const handleDeliteItem = (idUser) =>{
      dispatch({
          type:'DELETE_USER',
          payload: {idUser}
      })
  }
  
    return winner == null ? (
        <div className="UserCard" onClick={handleClickItem}>
        <p>id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Time: {formatTime(props.time)}</p>
        <button onClick = {handleDeliteItem(props.id)}>Delete</button>
    </div> 
    ) : (
        <div className="UserCard" onClick={handleClickItem}>
        <p>id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Time: {formatTime(props.time)}</p>
    </div> 
    )
     
 
}
