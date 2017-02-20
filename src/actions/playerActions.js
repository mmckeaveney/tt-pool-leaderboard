import playerApis from "apis/playerApis";

// Actions
const CREATE_PLAYER = "playerActions:CREATE_PLAYER";
const GET_CHAMPIONS = "playerActions:GET_CHAMPIONS";
const LOADING_PLAYERS_BY_RANKING_FOR_SPORT = "playerActions:LOADING_PLAYERS_BY_RANKING_FOR_SPORT";
const GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS = "playerActions:GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS";
const GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL = "playerActions:GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL";

// Action Creators
const createNewPlayer = player => dispatch => dispatch({
  type: CREATE_PLAYER,
  payload: player
});

const getPlayersByRankingForSport = sport => dispatch => {
  dispatch({ type: LOADING_PLAYERS_BY_RANKING_FOR_SPORT });

  playerApis
  .getPlayersByRankingForSport(sport)
  .fork(console.error, 
  ({ data }) =>
    dispatch({
      type: GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
      players: data,
      sport
    }));
};

export {
  CREATE_PLAYER,
  LOADING_PLAYERS_BY_RANKING_FOR_SPORT,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL
};

export default {
  createNewPlayer,
  getPlayersByRankingForSport
};
