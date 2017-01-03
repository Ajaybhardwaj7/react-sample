import axios from 'axios';

axios.defaults.baseURL = 'https://api.myjson.com/bins';
//axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

export function get(url , data) {
   return  axios.get(url , data)
    .then(function(response){
        return response.data;
    })
    .catch(function(error){
        console.log(error);
    })
}