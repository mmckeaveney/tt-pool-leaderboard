import {
    RECORD_MATCH,
    TOGGLE_RECORD_MATCH_DIALOG
} from 'actions/playerActions';

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
};
