import { combineReducers } from 'redux';

// Reducers
import counterReducer from 'modules/CounterDucks';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        counterReducer,
        ...asyncReducers
    });
};

export { counterReducer };

export default makeRootReducer;
