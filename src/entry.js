import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import createStore from './store/createStore';
import AppContainer from 'containers/App';

// CSS
import 'bootstrap/dist/css/bootstrap.css';



// ========================================================
// Store and History Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

// ========================================================
// Render Setup
// ========================================================
class App extends Component {
  render() {
    return <AppContainer store={store} history={hashHistory} />;
  }
}

export default App;
