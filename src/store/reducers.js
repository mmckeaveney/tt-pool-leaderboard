import { combineReducers } from 'redux';

// Reducers
import playerReducer from 'reducers/playerReducer';
import matchReducer from 'reducers/matchReducer';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        playerReducer,
        matchReducer,
        ...asyncReducers
    });
};

export { 
    playerReducer,
    matchReducer
 };

export default makeRootReducer;
