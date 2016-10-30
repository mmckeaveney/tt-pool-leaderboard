// Actions
const INCREMENT = 'endpoint-search-js/counter/INCREMENT';
const DECREMENT = 'endpoint-search-js/counter/DECREMENT';

const initialState = {
    value: 0
};

// Reducers
const REDUCERS = {
    [INCREMENT]: (state) => ({
        ...state,
        value: state.value + 1
    }),
    [DECREMENT]: (state) => ({
        ...state,
        value: state.value - 1
    })
};

export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];
    
    return handler ? handler(state, action) : state;
}

// Action Creators
export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT  
});
