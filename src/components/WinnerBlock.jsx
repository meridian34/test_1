import React, {useState} from 'react';
import {formatTime} from '../helpers/formatTime';
import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';


export const WinnerBlock = () =>{

    const dispatch = useDispatch();
    const winner = useSelector(store => store.winner);
    const users1 = useSelector(store => store.users);
    console.log("Winners");
    console.log(users1.length);
  

    const handleShowWinner = () =>{
        dispatch({
            type:'SHOW_WINNER'
        })
    }

    return winner == null ? (
        <div className="WinnerBlock">
                <h2>Total participants: {users1.length}</h2>
                <button onClick={()=>handleShowWinner()}> Show winner </button>          
            </div>
    ) : (
        <div className="WinnerBlock">
                <h2>Winner: {winner.name}</h2>                         
                <h2>Time: {formatTime(winner.time)}</h2>
            </div>
    )
}
