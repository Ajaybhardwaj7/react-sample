
import  React from 'react';
import  ReactDOM from 'react-dom';
import configStore from './app/store/store';
import {Provider} from 'react-redux';
import {Router , browserHistory} from 'react-router';
import routes from './routes';

const store  = configStore();

ReactDOM.render(
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes}></Router>
    </Provider>, document.getElementById('main'))

// import App from './app/components/dummy';

// ReactDOM.render(
//     <App/>, document.getElementById('main'))