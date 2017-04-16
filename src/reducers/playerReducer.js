import {
  CREATE_PLAYER,
  LOADING_PLAYERS_BY_RANKING_FOR_SPORT,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
  GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL,
  GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS,
  GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL,
  CLOSE_PLAYER_METRICS_DRAWER,
  GET_PLAYER_HOT_STREAKS_SUCCESS
} from 'actions/playerActions';
import { map } from 'ramda';

const initialState = {
  playersLoading: false,
  playersBySport: {},
  drilldownModal: {
    open: false
  }
};

// Reducers
const PLAYER_REDUCERS = {
  [CREATE_PLAYER]: (state, action) => ({
    ...state,
    playersBySport: map(
      (players) => [...players, action.player],
      state.playersBySport
    )
  }),
  [LOADING_PLAYERS_BY_RANKING_FOR_SPORT]: (state) => ({
    ...state,
    playersLoading: true
  }),
  [GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS]: (state, action) => ({
    ...state,
    playersBySport: {
      ...state.playersBySport,
      [action.sport]: action.players
    },
    playersLoading: false
  }),
  [GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL]: (state, action) => ({
    ...state,
    error: action.error,
    playersLoading: false
  }),
  [GET_METRICS_FOR_PLAYER_BY_SPORT_SUCCESS]: (state, action) => ({
    ...state,
    drilldownModal: {
      ...state.drilldownModal,
      metrics: action.metrics,
      open: true
    }
  }),
  [GET_METRICS_FOR_PLAYER_BY_SPORT_FAIL]: (state, action) => ({
    ...state,
    error: action.error
  }),
  [CLOSE_PLAYER_METRICS_DRAWER]: (state) => ({
    ...state,
    drilldownModal: {
      ...state.drilldownModal,
      metrics: null,
      open: false
    }
  }),
  [GET_PLAYER_HOT_STREAKS_SUCCESS]: (state, action) => ({
    ...state,
    hotStreaks: action.hotStreaks
  })
};

export default function playerReducer(state = initialState, action = {}) {
  const handler = PLAYER_REDUCERS[action.type];

  return handler ? handler(state, action) : state;
}
