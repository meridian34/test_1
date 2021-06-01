import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";

export const UserDetail = ()=>{

const {id} = useParams();
const subId = id.replace("id:","");

let regUsers = useSelector(store => store.users);
let regUser = regUsers.filter(user=>user.id===subId)[0]

const history = useHistory();
  const handleClickItem = () => {
      console.log('EVENT ')
      history.push('/');
    }

console.log(regUsers);
console.log(regUser);

    return(
        <div className="UserCardDetail">                   
            <h1>User Detail</h1>
            <p>id: {subId}</p>
            <p>Name: {regUser.name}</p>
            <p>Secname: {regUser.secname}</p>
            <p>Time: {formatTime(regUser.time)}</p>         
            <button onClick = {()=>handleClickItem()}>BackToMain</button>   
        </div> 
    )
}