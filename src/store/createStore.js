import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import makeRootReducer from './reducers';
import rootEpic from 'epics/rootEpic';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middleware = [thunk, epicMiddleware];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  store.asyncReducers = {};

  return store;
};
