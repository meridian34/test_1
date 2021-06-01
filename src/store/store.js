import {createStore} from 'redux';
import { userData } from '../userData';

const initialState = {

    users: userData.map(user=>{
        return{
          id: user._id, 
          name: user.name,
          secname: user.company,       
          time: user.age
        }
      }),
      
    winner: null,
    regUser: {
        name:'',
        secname:'',
        time:0
    }
}


const reducer = (store=initialState, action) => {
    switch (action.type){
        case 'ADD_PARTICIPANT':
            return {
                ...store,
                users: [...store.users, action.payload]
            }
        
        case 'REG_ADD_USER':      
        console.log(action.payload);
            return{
                ...store,
                regUser:{
                    name:action.payload.name,
                    secname:action.payload.secname
                }
            }
        case 'REG_ADD_TIME_USER':            
            return{
                ...store, 
                users:[...store.users, action.payload],
                regUser:{
                    name:'',
                    secname:'',
                    time:0
                }
            }
        case 'DELETE_PARTICIPANT':
            return {
                ...store,
                users: store.users
                    .filter(part => part.id !== action.payload.id)
            }
        case 'SHOW_WINNER':
            return {
                ...store,
                winner: [...store.users].sort((a,b) => a.time - b.time)[0]
            }        
        default:
            return store;    
    }
}

const store = createStore(reducer);

export default store;
