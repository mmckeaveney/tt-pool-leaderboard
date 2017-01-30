import { combineReducers } from 'redux';

// Reducers
import playerReducer from 'modules/PlayerDucks';
import matchReducer from 'modules/MatchDucks';

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
