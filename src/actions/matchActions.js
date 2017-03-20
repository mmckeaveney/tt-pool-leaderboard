import matchApis from 'apis/matchApis';

// Actions
const RECORD_MATCH = 'matchActions:RECORD_MATCH';
const LOAD_ALL_MATCHES_FOR_SPORT = 'matchActions:LOAD_ALL_MATCHES_FOR_SPORT';
const GET_ALL_MATCHES_FOR_SPORT_SUCCESS = 'matchActions:GET_ALL_MATCHES_FOR_SPORT_SUCCESS';
const GET_ALL_MATCHES_FOR_SPORT_FAIL = 'matchActions:GET_ALL_MATCHES_FOR_SPORT_FAIL';
const TOGGLE_RECORD_MATCH_DIALOG = 'matchActions:TOGGLE_RECORD_MATCH_DIALOG';

// Action Creators
const recordMatch = (match) =>
  (dispatch) =>
    matchApis
      .recordMatch(match)
      .fork(console.error, () => dispatch({ type: RECORD_MATCH, match }));

const getAllMatchesForSport = (sport) => (dispatch) => {
  dispatch({ type: LOAD_ALL_MATCHES_FOR_SPORT });

  matchApis
    .getAllMatchesForSport(sport)
    .fork((error) => dispatch({ type: GET_ALL_MATCHES_FOR_SPORT_FAIL, error }), (
      { data }
    ) =>
      dispatch({
        type: GET_ALL_MATCHES_FOR_SPORT_SUCCESS,
        matches: data,
        sport
      }));
};

export {
  RECORD_MATCH,
  TOGGLE_RECORD_MATCH_DIALOG,
  LOAD_ALL_MATCHES_FOR_SPORT,
  GET_ALL_MATCHES_FOR_SPORT_SUCCESS,
  GET_ALL_MATCHES_FOR_SPORT_FAIL
};

export default {
  getAllMatchesForSport,
  recordMatch
};
