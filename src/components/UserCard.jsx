import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

export const UserCard =(props)=>{    
    const dispatch = useDispatch();
    
    const winner = useSelector(store => store.winner);
  
  const history = useHistory();
  const handleClickItem = (id) => {
      console.log('EVENT '+id)
      history.push('/user/id:'+id);
    }
  
  const handleDeliteItem = (idUser) =>{
      dispatch({
          type:'DELETE_USER',
          payload: {idUser}
      })
  }
  
    return winner == null ? (
        <div className="UserCard" onClick = {()=>handleClickItem(props.props.id)}>                   
            <p>id: {props.props.id}</p>
            <p>Name: {props.props.name}</p>
            <p>Time: {formatTime(props.props.time)}</p>
            <button onClick = {()=>handleDeliteItem(props.id)}>Delete</button>
        </div> 
       
    ) : (
        <div className="UserCard" onClick={()=>handleClickItem(props.props.id)}>
        <p>id: {props.props.id}</p>
        <p>Name: {props.props.name}</p>
        <p>Time: {formatTime(props.props.time)}</p>
    </div> 
    )
     
 
}
