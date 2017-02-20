// Actions
const RECORD_MATCH = "matchActions:RECORD_MATCH";
const TOGGLE_RECORD_MATCH_DIALOG = "matchActions:TOGGLE_RECORD_MATCH_DIALOG";

// Action Creators
export const recordMatch = match =>
  dispatch => dispatch({ type: RECORD_MATCH, match });

export { RECORD_MATCH, TOGGLE_RECORD_MATCH_DIALOG };

export default {
  recordMatch
};
