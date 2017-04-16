import {
  LOAD_ALL_MATCHES_FOR_SPORT,
  GET_ALL_MATCHES_FOR_SPORT_SUCCESS,
  GET_ALL_MATCHES_FOR_SPORT_FAIL,
  RECORD_MATCH
} from 'actions/matchActions';

const initialState = {
  matchesLoading: false
};

// Reducers
const MATCH_REDUCERS = {
  [RECORD_MATCH]: (state, { match }) => ({
    ...state,
    [match.sport]: [match, ...state[match.sport]]
  }),
  [LOAD_ALL_MATCHES_FOR_SPORT]: (state) => ({
    ...state,
    matchesLoading: true
  }),
  [GET_ALL_MATCHES_FOR_SPORT_SUCCESS]: (state, action) => ({
    ...state,
    [action.sport]: action.matches,
    matchesLoading: false
  }),
  [GET_ALL_MATCHES_FOR_SPORT_FAIL]: (state, action) => ({
    ...state,
    error: action.error,
    matchesLoading: false
  })
};

export default function matchReducer(state = initialState, action = {}) {
  const handler = MATCH_REDUCERS[action.type];

  return handler ? handler(state, action) : state;
}
