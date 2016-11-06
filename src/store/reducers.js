import { combineReducers } from 'redux';

// Reducers
import playerReducer from 'modules/PlayerDucks';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        playerReducer,
        ...asyncReducers
    });
};

export { playerReducer };

export default makeRootReducer;
