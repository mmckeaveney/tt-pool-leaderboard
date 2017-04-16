import { combineReducers } from 'redux';

// Reducers
import playerReducer from 'reducers/playerReducer';
import matchReducer from 'reducers/matchReducer';
import modalReducer from 'reducers/modalReducer';

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    playerReducer,
    matchReducer,
    modalReducer,
    ...asyncReducers
  });
};

export { playerReducer, matchReducer, modalReducer };

export default makeRootReducer;
