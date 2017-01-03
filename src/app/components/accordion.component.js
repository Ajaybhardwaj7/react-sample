import React from 'react';
import ReactDOM from 'react-dom';

//import {Accordion , Panel , Glyphicon} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Subheader from 'material-ui/Subheader';
//import Toggle from 'material-ui/Toggle';
//import accordion contents
import SearchComponent from '../containers/search.component.js';

// module.exports = React.createClass({
//   getInitialState : function(){
//     return   {open: false};
//   },
//   handleNestedListToggle : () => {
//     this.setState({
//       open: !this.state.open,
//     });
//   },  
//    render : function(){
//      return (<AppBar title="Search" onTouchTap={this.handleNestedListToggle} iconClassNameRight="muidocs-icon-navigation-expand-more"  />)

//     //  <List >
//     //           <ListItem  primaryText="Search" rightIcon={<ContentInbox/>} initiallyOpen={true} primaryTogglesNestedList={this.handleNestedListToggle}
//     //           nestedItems={[<ListItem key={1} leftIcon={<ContentInbox />}><SearchComponent></SearchComponent> </ListItem>]}></ListItem>
//     //  </List>
//    }

// })

module.exports =  React.createClass({

	componentWillMount () {
  	    let accordion = [];
    
      accordion.push({
        title: 'Search', 
        content: <SearchComponent></SearchComponent>, 
        open: false
      });
  
		this.setState({
            accordionItems: accordion
    });
  },
  
  click (i) {
  	const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i)
    
    newAccordion[index].open = !newAccordion[index].open;
    this.setState({accordionItems: newAccordion});
  },
  
	render () {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div 
          className="title" 
          onClick={this.click.bind(null, i)}
        >
         <div className="arrow-wrapper">
           <i className={i.open 
             ? "fa-rotate-90 glyphicon glyphicon-chevron-right" 
             : " glyphicon glyphicon-chevron-right"}
           ></i>
         </div>
         <span className="title-text">
           {i.title}
         </span>
       </div>
       <div className={i.open 
         ? "content content-open" 
         : "content"}
        >
          <div className={i.open 
            ? "content-text content-text-open" 
            : "content-text"}
          > {i.content}
          </div>
        </div>
      </div>
    ));
    
    return (
      <div className="accordion">
        {sections}
      </div>
    );
   }
});


