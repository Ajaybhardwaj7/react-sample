import React from 'react';
import ReactDOm from 'react-dom';
import {RaisedButton} from 'material-ui';
import ModalComponent from '../components/modal.component';
import {connect} from 'react-redux';

//get actions
import {allOpen} from '../actions' ;
//csv conversion related files.
import json2csv from 'json2csv';    
import fileSaver from 'file-saver';

class ActionsComponent extends React.Component {
    constructor(props){
        super(props);
        this._bind(['exportToExcel' , 'openPopup' , 'closePopup']);
        this.state = {showModal : false};
        
    }
    _bind(handlers) {
        var that = this;
        handlers.forEach(function(handler){
            that[handler] = that[handler].bind(that);
        })
    }
    render() {
        return ( <div className = "actions">
            <RaisedButton primary={true} onClick =  {this.props.allOpen}>All Open</RaisedButton>
            <RaisedButton primary={true} disabled = {!this.props.selections.length}  onClick={this.openPopup}>Notes</RaisedButton>
            <RaisedButton primary={true} disabled = {!this.props.selections.length} onClick={this.openPopup}>Modify Details</RaisedButton>
            <RaisedButton primary={true} onClick =  {this.exportToExcel}>Export To Excel</RaisedButton>
            <RaisedButton primary={true} disabled = {!this.props.selections.length} onClick={this.openPopup}>Close Alerts</RaisedButton>
            <ModalComponent closeModal={this.closePopup} showModal = {this.state.showModal}></ModalComponent>
            </div>
       ) 
       
    }
    openPopup (){
        this.setState({showModal : true})
       }
    closePopup (){
        this.state.showModal = false;
    }
    exportToExcel() {
        try {
                console.log(this.props.events); 
                var result = json2csv({ data: this.props.events });
                var blob = new Blob([result], {type: "text/csv;charset=utf-8"});
                fileSaver.saveAs(blob, "events.csv");
            } catch (err) {
            // Errors are thrown for bad options, or if the data is empty and no fields are provided.
            // Be sure to provide fields if it is possible that your data array will be empty.
                console.error(err);
            }

    }
}

let connectActionsComponent = connect(function(state){
    return {events : state.app.events.currentEvents , selections : state.app.selectedEvents}
} , function(dispatch){
    return {
        allOpen : function(){
            dispatch(allOpen());
        }
    }
})(ActionsComponent)

export default connectActionsComponent;