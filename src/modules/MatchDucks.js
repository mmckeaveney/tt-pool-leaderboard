// Actions
const RECORD_MATCH = 'matchActions:RECORD_MATCH';
const TOGGLE_RECORD_MATCH_DIALOG = 'matchActions:TOGGLE_RECORD_MATCH_DIALOG';

const initialState = {
    matches: []
};

// Reducers
const REDUCERS = {
    [RECORD_MATCH]: (state, action) => ({
        ...state,
        matches: state.matches.concat(action.match)
    }),
    [TOGGLE_RECORD_MATCH_DIALOG]: (state) => ({
      ...state,
      recordMatchDialogOpen: !state.recordMatchDialogOpen
    })
};

export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];

    return handler ? handler(state, action) : state;
}

// Action Creators
export const recordMatch = (match) => (dispatch) => dispatch({ type: RECORD_MATCH, match });
