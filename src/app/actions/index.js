
//constants 
import constants from '../constants/constants.js';
import {get} from "../api/apiConfig";

 export function fetchEvents() {
    const request = get('/z1g4f');
    return function(dispatch){
          request.then(function(response){
                if(response!= null || response != undefined){
                      dispatch({type : "FETCH_EVENTS" , payload : response})
                }
         })
    }
}   
 
 export function search(params) {
       console.log(params);
       const request = get('/wimtz');
       return function(dispatch) {
             request.then(function(response){
                   if(response!= null || response != undefined){
                        dispatch({type : "FETCH_EVENTS" , payload : response});
                   }
             })
       }
 } 

export function allOpen(){      
      const request = get('/crop3');
      return function(dispatch){
            request.then(function(response){
                  if(response!= null || response != undefined){
                        dispatch({type : "FETCH_EVENTS" , payload : response})
                  }
            })
      }
}



