import React from 'react';
import ReactDOM from 'react-dom';
//import {DropdownButton , MenuItem , ButtonToolbar} from 'react-bootstrap';
import SelectField from 'material-ui/SelectField'; 
import MenuItem from 'material-ui/MenuItem';
import {RaisedButton} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import {search} from '../actions';
import {connect} from 'react-redux';
import assign from 'object-assign';

var RegionComponent  = React.createClass({
    getInitialState : function(){
         this.baseState = {value: null};
         let initiaState = assign({},this.baseState);
          return initiaState;
    },
    componentWillReceiveProps: function(nextProps ){
        if(nextProps.clearState == true){
            this.setState(this.baseState)
        }
    },
    handleChange : function(event, index, value) { this.setState({value}); this.props.updateState({region : value})},
    render : function(){
        return (<SelectField maxHeight={300} floatingLabelText="Choose Region" value={this.state.value} onChange={this.handleChange} id = "region" className="category">
            <MenuItem value = {null} key = "1" primaryText = ""></MenuItem>
            <MenuItem value = 'Action1' key = "2" primaryText = "Action1"></MenuItem>
            <MenuItem value = 'Action2' key = "3" primaryText = "Action2"></MenuItem>
            <MenuItem value = 'Action3' key = "4" primaryText = "Action3"></MenuItem>
        </SelectField>)
    }
});
var ScopeComponent  = React.createClass({
     getInitialState : function(){
        this.baseState = {value: null};
         let initiaState = assign({},this.baseState);
          return initiaState;
    },
    componentWillReceiveProps: function(nextProps){
        if(nextProps.clearState == true){
            this.setState(this.baseState)
        }
    },
    handleChange : function(event, index, value) { this.setState({value}); this.props.updateState({scope : value})},
    render : function(){
        return (<SelectField maxHeight={300} floatingLabelText="Choose Scope"  value={this.state.value} onChange={this.handleChange} id = "scope" className="category">
            <MenuItem value = {null} key = "1" primaryText = ""></MenuItem>
            <MenuItem value = 'Action1' key = "2" primaryText = "Action1"></MenuItem>
            <MenuItem value = 'Action2' key = "3" primaryText = "Action2"></MenuItem>
            <MenuItem value = 'Action3' key = "4" primaryText = "Action3"></MenuItem>
        </SelectField>)
    }
});
var SubjectComponent  = React.createClass({
     getInitialState : function(){
       this.baseState = {value: null};
         let initiaState = assign({},this.baseState);
          return initiaState;
    },
    componentWillReceiveProps: function(nextProps ){
        if(nextProps.clearState == true){
            this.setState(this.baseState)
        }
    },
    handleChange : function(event, index, value) { this.setState({value}); this.props.updateState({subject:value})},
    render : function(){
        return (<SelectField maxHeight={300} floatingLabelText="Choose Subject"  value={this.state.value} onChange={this.handleChange} id = "subject"  className="category">
            <MenuItem value = {null} key = "1" primaryText = ""></MenuItem>
            <MenuItem value = 'Action1' key = "2" primaryText = "Action1"></MenuItem>
            <MenuItem value = 'Action2' key = "3" primaryText = "Action2"></MenuItem>
            <MenuItem value = 'Action3' key = "4" primaryText = "Action3"></MenuItem>
        </SelectField>)
    }
});
var StatusComponent  = React.createClass({
     getInitialState : function(){
       this.baseState = {value: null};
         let initiaState = assign({},this.baseState);
          return initiaState;
    },
    componentWillReceiveProps: function(nextProps ){
        if(nextProps.clearState == true){
            this.setState(this.baseState)
        }
    },
    handleChange : function(event, index, value) { this.setState({value}); this.props.updateState({status:value})},
    render : function(){
        return (<SelectField maxHeight={300} floatingLabelText="Choose Status"  value={this.state.value} onChange={this.handleChange} id = "status"  className="category">
            <MenuItem value = {null} key = "1" primaryText = ""></MenuItem>
            <MenuItem value = 'Action1' key = "2" primaryText = "Action1"></MenuItem>
            <MenuItem value = 'Action2' key = "3" primaryText = "Action2"></MenuItem>
            <MenuItem value = 'Action3' key = "4" primaryText = "Action3"></MenuItem>
        </SelectField>)
    }
});
var SelectDates = React.createClass({
     getInitialState: function() {
        this.baseState = {from: null, to: null};
         let initiaState = assign({},this.baseState);
          return initiaState;
    },
    componentWillReceiveProps: function(nextProps ){
        if(nextProps.clearState == true){
            this.setState(this.baseState)
        }
    },
    onChangeFromDate : function(event, from) {  this.setState({from}); this.props.updateState({from})},
    onChangeToDate : function(event, to) {  this.setState({to}); this.props.updateState({to})},
    render : function(){
        const optionsStyle = {
                maxWidth: 255,
                marginRight: 'auto',
                };
        return (<div className="date-pickers">
        <DatePicker value = {this.state.from} onChange ={this.onChangeFromDate} hintText="From" floatingLabelText="From" id="from"/><DatePicker value = {this.state.to}  onChange ={this.onChangeToDate} hintText="To"  floatingLabelText="To"  id="to"/>
        </div>)
    }
});  
var Actions = React.createClass({
    getInitialState: function(){
        return {params : this.props.values}
    },
    render : function(){
        return (<div  className="query-clear"><RaisedButton primary={true} onClick={this._handleClick}>Query</RaisedButton>
        <RaisedButton onClick = {this.props.reset} primary={true}>Clear</RaisedButton> </div>)
    },
   _handleClick : function(){
       this.props.search(this.state.params);
   }

});
var SearchComponent = React.createClass({
    getInitialState : function(){
        return { selections : {} , reset : false};
    },
    updateState : function(value){ 
        this.reset = false;
        assign(this.state.selections , value)
    },
    onReset: function(){
        this.reset= true;
        this.setState({selections : {}})
    },
    render : function(){
        return  (<div className = 'search-container'><RegionComponent clearState = {this.reset} updateState = {this.updateState}></RegionComponent>
        <ScopeComponent  clearState = {this.reset} updateState = {this.updateState}></ScopeComponent><SubjectComponent clearState = {this.reset} updateState = {this.updateState}></SubjectComponent><StatusComponent clearState = {this.reset} updateState = {this.updateState}></StatusComponent><br/><SelectDates clearState = {this.reset} updateState = {this.updateState}></SelectDates><br/> <Actions reset={this.onReset} values = {this.state.selections} search = {this.props.searchEvents}></Actions></div>)
    }
});

var ConnectSearchComponent = connect(null, function(dispatch){
    return {
        searchEvents : function(params){
            dispatch(search(params));
        }
    }
})(SearchComponent);

module.exports = ConnectSearchComponent;
