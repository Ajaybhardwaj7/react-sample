
import  React from 'react'
import  ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CitadelLightTheme  from '../constants/custom.theme.js';

//import all stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
//  import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
//  import 'bootstrap-material-design/dist/css/ripples.min.css';
import '../styles/common.less';
import '../styles/accordion.less';
import '../styles/checkbox.less';

// //import bootstrap-material-design
//  import 'bootstrap-material-design/dist/js/material.min.js';
//  import 'bootstrap-material-design/dist/js/ripples.min.js';

//import main component
import MainComponent from './main.component.js';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

// //initialising bootstrap-material-design
// jQuery.material.init();

var AppComponent = React.createClass({

    render : function(){
        return (<div className = "container">
             <MuiThemeProvider muiTheme={CitadelLightTheme}><MainComponent></MainComponent></MuiThemeProvider>
        </div>)
    }
})

module.exports = AppComponent;