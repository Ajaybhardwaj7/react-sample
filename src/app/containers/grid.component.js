import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Glyphicon} from 'react-bootstrap';
//import  {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchEvents} from '../actions';


var columns = ['Id' , 'Name' , 'City' , 'Street' , 'Phone' , 'Lat' , 'Long' ];

// Bootrap react table grid
const options = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      } , {text : "All"}], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last' // Last page button text
    //  paginationShowsTotal: renderShowsTotal  // Accept bool or function
     //  hideSizePerPage: true > You can hide the dropdown for sizePerPage
    }
  
var Grid =  React.createClass({
    getInitialState: function(){
      return {selected : []}
    },
    updateLength : function(){
      var length = this.props.events.length;
      options.sizePerPageList.forEach(function(paginationRecord){
          if(paginationRecord.text == "All"){
             paginationRecord.value =length;
          } 
      })
    },
    componentWillMount : function(){
       this.props.fetchEvents();
    },
    onSelectAll : function(isSelected){
        if(isSelected){
          this.state.selected = [];
          this.state.selected =  this.props.events.map(row => row.id)
        }else {
          this.state.selected = [];
          };
        console.log(this.state.selected);
        this.props.eventSelections(this.state.selected)
    },
    onRowSelect: function(row , isSelected){
      console.log('isSelected' , isSelected)
        if(isSelected){
            this.state.selected.push(row.id);
        }else{
          if(this.state.selected.indexOf(row.id)!= -1){
            this.state.selected.splice(this.state.selected.indexOf(row.id),1)
          }
        }
        console.log(this.state.selected);
        this.props.eventSelections(this.state.selected);
    },
    render : function(){
      const selectRowProp = {
          bgColor: "rgba(127, 221, 233, 0.4)",
          mode: 'checkbox',
          clickToSelect: true,
          onSelectAll : this.onSelectAll,
          onSelect: this.onRowSelect,
        // selected: this.state.selected
      }
      //calculating the total size of records
       this.updateLength();
        return (<BootstrapTable data={this.props.events} striped={true} hover={true}  selectRow={ selectRowProp } pagination={true} options={options}>
                          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}> ID</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'TextFilter', placeholder: 'Please enter a value' , delay: 10 }} dataField="name" dataSort={true}>Name</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'TextFilter', placeholder: 'Please enter a value' , delay: 10 }} dataField="city" dataSort={true}>City</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'TextFilter', placeholder: 'Please enter a value' , delay: 10 }} dataField="street" dataSort={true}>Street</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'TextFilter', placeholder: 'Please enter a value' , delay: 10 }}
                          dataField="phone" dataSort={true}>Phone</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'NumberFilter', placeholder: 'Please enter a value' , delay: 10 }}
                          dataField="lat" dataSort={true}>Lat</TableHeaderColumn>
                          <TableHeaderColumn filter={ { type: 'NumberFilter', placeholder: 'Please enter a value' , delay: 10 }}
                          dataField="long" dataSort={true}>Long</TableHeaderColumn>
               </BootstrapTable>)
    }
})

var GridConnect =   connect(function(state){
      return {events : state.app.events.currentEvents}
  } , function(dispatch) {
      return {
        fetchEvents : function(){
          dispatch(fetchEvents())
        },
        eventSelections : function(selections){
          dispatch({type : "EVENTS_SELECTION" , payload:selections })
        }
      }
  })(Grid);

  export default GridConnect;
  


// //table header properties
// let headerProps = {
//     enableSelectAll : true,
//     displaySelectAll : true,
//     adjustForCheckbox: true
// }

// let headers = [
//     { name : 'Id' , key : "id" },
//     { name : 'Name' , key : "name" },
//     { name : 'City' , key : "city" },
//     { name : 'Street' , key : "street" },
//     { name : 'Phone' , key : "phone" },
//     { name : 'Lat' , key : "lat" },
//     { name : 'Long' , key : "long" }

// ];

// var SortTableHeader  = React.createClass({
//     render : function(){
//         let style = {cursor: "pointer"  , fontSize: "18px"}

//         if(this.props.isSortColumn){
           
//             style.color= "black";
//         }

//         return (<TableHeaderColumn>
//             <div style={style} onClick={ ()=> this.props.onClicked()}>{this.props.name} <span className="glyphicon glyphicon-sort"></span></div>
//         </TableHeaderColumn>)
//     }
// });

// var SortRow = React.createClass({
//         render : function(){
//             let columns = this.props.columns;
//             return (
//                 <TableRow key={columns.index}>
//                     <TableRowColumn >{columns.id}</TableRowColumn>
//                     <TableRowColumn >{columns.name}</TableRowColumn>
//                     <TableRowColumn >{columns.city}</TableRowColumn>
//                     <TableRowColumn >{columns.street}</TableRowColumn>
//                     <TableRowColumn >{columns.phone}</TableRowColumn>
//                     <TableRowColumn >{columns.lat}</TableRowColumn>
//                     <TableRowColumn >{columns.long}</TableRowColumn>
//                 </TableRow>
//             ) 
//         }

// });
// module.exports = React.createClass({

//     getInitialState : function(){
//         return { 
//             stripedRows : true,  
//             showRowHover: false,
//             selectable: true,
//             multiSelectable: true,
//             deselectOnClickaway: true,
//             showCheckboxes: true,
//             rows : json,
//             sortBy: 'Name'
//         }
//     },
//     handleToggle : function(event , toggled){
//         this.setState({ [event.target.name] : toggled })
//     },

//     updateSortBy: function(key){
//         // multiple clicks on the same column reverse the sort order
//       if( key == this.state.sortBy ){
//         this.setState( {rows: [...this.state.rows.reverse()]} );
//         return;
//       }
        
//         let sorted = this.state.rows.sort((a, b) => {
//            if ( a[key] < b[key] )
//                 return -1;
//             if ( a[key] > b[key] )
//                 return 1;
//             return 0;
//         } );
//         this.setState({rows : sorted, sortBy : key});
//     },
   
//     render: function(){
//         return (<Table selectable={this.state.selectable}
//                        multiSelectable={this.state.multiSelectable}>
//                     <TableHeader {...headerProps}>
//                         <TableRow>
//                             {headers.map((header) => (
//                                 <SortTableHeader key={header.key}
//                                 isSortColumn={this.state.sortBy == header.key}
//                                 onClicked = {() => this.updateSortBy(header.key)} name={header.name}></SortTableHeader>
//                             ))}
//                         </TableRow>
//                     </TableHeader>
//         <TableBody  displayRowCheckbox={true}
//                     deselectOnClickaway={this.state.deselectOnClickaway}
//                     showRowHover={this.state.showRowHover}
//                     stripedRows={this.state.stripedRows}>
//                    {   
//                           this.state.rows.map((columns , index) => (
//                                     <TableRow key={columns.id}>
//                                         <TableRowColumn >{columns.id}</TableRowColumn>
//                                         <TableRowColumn >{columns.name}</TableRowColumn>
//                                         <TableRowColumn >{columns.city}</TableRowColumn>
//                                         <TableRowColumn >{columns.street}</TableRowColumn>
//                                         <TableRowColumn >{columns.phone}</TableRowColumn>
//                                         <TableRowColumn >{columns.lat}</TableRowColumn>
//                                         <TableRowColumn >{columns.long}</TableRowColumn>
//                                     </TableRow> 
//                     ))
//                  }
//         </TableBody>
//         </Table>)
//     }
    
// })



  


