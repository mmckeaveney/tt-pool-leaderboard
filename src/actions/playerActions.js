import { curry } from 'ramda';
import playerApis from 'apis/playerApis';

// Actions
const CREATE_PLAYER = 'playerActions:CREATE_PLAYER';
const LOADING_PLAYERS_BY_RANKING_FOR_SPORT = 'playerActions:LOADING_PLAYERS_BY_RANKING_FOR_SPORT';
const GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS = 'playerActions:GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS';
const GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL = 'playerActions:GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL';
const GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS = 'playerActions:GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS';
const GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL = 'playerActions:GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL';
const CLOSE_PLAYER_METRICS_DRAWER = 'playerActions:CLOSE_PLAYER_METRICS_DRAWER';
const GET_PLAYER_HOT_STREAKS_SUCCESS = 'playerActions:GET_PLAYER_HOT_STREAKS_SUCCESS';

// Action Creators
const createNewPlayer = curry((player, dispatch) =>
  playerApis
    .createNewPlayer(player)
    .fork(console.error, ({ data }) =>
      dispatch({ type: CREATE_PLAYER, player: data })));

const getPlayersByRankingForSport = curry((sport, dispatch) => {
  dispatch({ type: LOADING_PLAYERS_BY_RANKING_FOR_SPORT });

  playerApis
    .getPlayersByRankingForSport(sport)
    .fork(
      (error) => dispatch({ type: GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL, error }),
      ({ data }) => dispatch({
        type: GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
        players: data,
        sport
      })
    );
});

const playerDrilldown = (sport) =>
  (dispatch) => (playerId) =>
    playerApis
      .getMetricsForPlayerBySport(sport, playerId)
      .fork(
        (error) => dispatch({ type: GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL, error }),
        ({ data }) => dispatch({
          type: GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS,
          metrics: data
        })
      );

const getPlayerHotStreaks = () =>
  (dispatch) =>
    playerApis
      .getPlayerHotStreaks()
      .fork(
        (error) => dispatch({ type: GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL, error }),
        ({ data }) => dispatch({
          type: GET_PLAYER_HOT_STREAKS_SUCCESS,
          hotStreaks: data.slice(0, 5)
        })
      );

const closePlayerMetricsDrawer = () =>
  (dispatch) => dispatch({ type: CLOSE_PLAYER_METRICS_DRAWER });

export {
  CREATE_PLAYER,
  LOADING_PLAYERS_BY_RANKING_FOR_SPORT,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL,
  GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS,
  GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL,
  CLOSE_PLAYER_METRICS_DRAWER,
  GET_PLAYER_HOT_STREAKS_SUCCESS
};

export default {
  createNewPlayer,
  getPlayersByRankingForSport,
  playerDrilldown,
  closePlayerMetricsDrawer,
  getPlayerHotStreaks
};
