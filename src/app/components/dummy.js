import React , {PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux';
import {connect , Provider} from 'react-redux';
import assign from 'object-assign';

class Temp extends React.Component {
    render() {
       return   <div>{this.props.resource.data  }</div>
    }
}

class App extends React.Component {
   
   constructor(props) {
       super(props);
       this._bind(['_onChange' , '_onSubmit']);
       this.refs = {};
   }
   _bind(handlers) {
       handlers.forEach((handler) => {
           this[handler] = this[handler].bind(this);
       })
   }
    render() {
        
        return (<div>
            <Temp resource = {this.props.resources}></Temp>
            <input type='text' ref="input"/>
            <input type = 'button' onClick = {this._onSubmit}/> Fetch
        </div>)
    }
    _onChange(event) {
        //this.props.update(event.target.value);
       // this.props.resources.data = event.target.value
    }   
    _onSubmit(event) {
        this.props.update(this.refs.input.value);
    }
    componentWillMount() {
        
        console.log('component will mount');
       // console.log(this.props.resources.data);
      //  console.log(this.state);

    }
}

class AsyncApi {
    static getData() {
       const promise = new Promise(function(resolve){
       setTimeout(function(){
           resolve(Math.floor(Math.random()*100))
       },3000)
        
    })
    return promise;
    }
}

App.PropTypes = {
    data : PropTypes.any,
    update : PropTypes.func
}

const initialState = null;
const reducer = function(state = {data : "null" } , action){
    switch(action.type){
        case "updating" : { console.log('updating'); return state; }
        case 'updated' : { console.log('updated');  var newState = assign({} ,state,{data : action.payload}) ; console.log(newState) ; return newState }
        default: {return state};
    }
}
const store = createStore(reducer); 

var ConnectApp = connect(function(state){
            return {resources : state};
} , function(dispatch){
    return {
        update : function(data){
           dispatch({type : "updating"});
            AsyncApi.getData().then(function(data){
                    return dispatch({type : "updated" , payload : data})
            })
            console.log('called update')
           // dispatch({type : "updated" , payload : data})
        }
    }
})(App);

export default class App1 extends React.Component {
    render() {
        return <Provider store = {store}><ConnectApp/></Provider>
    }
}



///// https://github.com/reactjs/redux/issues/1676
// http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
