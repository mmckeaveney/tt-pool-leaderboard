import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import createStore from './store/createStore';
import AppContainer from 'containers/App';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// ========================================================
// Store and History Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

// ========================================================
// Render Setup
// ========================================================
const ROOT_NODE = document.getElementById('root');

ReactDOM.render(<AppContainer store={store} history={hashHistory}/>, ROOT_NODE);

export default AppContainer;
