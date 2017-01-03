import React from 'react';

//Header and footer
import HeaderComponent from './header.component.js';
import FooterComponent from './footer.component.js';


//import data table component
import Grid from '../containers/grid.component.js';
//import Accordion component
import AccordionComponent from './accordion.component.js';
//import actions 
import ActionsComponent from '../containers/actions.component.js';

//import modal component
import ModalComponent from './modal.component.js';

var socket = new WebSocket('ws://10.31.155.8.7890');
console.log(socket);
module.exports =  React.createClass({

    render : function(){
        return (<div className = 'main center'> 
        <HeaderComponent></HeaderComponent> 
        <ActionsComponent></ActionsComponent>
        <AccordionComponent></AccordionComponent>
        <Grid></Grid><br/>
         
        <FooterComponent></FooterComponent></div>)
    }
})