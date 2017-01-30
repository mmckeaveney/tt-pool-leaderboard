// Actions
const CREATE_PLAYER = 'playerActions:CREATE_PLAYER';
const GET_CHAMPIONS = 'playerActions:GET_CHAMPIONS';
const GET_PLAYERS_BY_RANKING_FOR_SPORT = 'playerActions:GET_PLAYERS_BY_RANKING_FOR_SPORT';

const initialState = {
    players: []
};

// Reducers
const REDUCERS = {
    [CREATE_PLAYER]: (state, action) => ({
        ...state,
        player: state.players.concat(action.player)
    }),
    [GET_PLAYERS_BY_RANKING_FOR_SPORT]: (state, action) => ({
        ...state,
        player: state.players.concat(action.player)
    }),
    [GET_CHAMPIONS]: (state, action) => ({
        ...state,
        champions: action.champions
    })
};

export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];

    return handler ? handler(state, action) : state;
}

// Action Creators
export const createNewPlayer = (player) => (dispatch) => (
  dispatch({
    type: CREATE_PLAYER,
    payload: player
}));

// Action Creators
export const getPlayersByRankingForSport = (player) => (dispatch) => (
  dispatch({
    type: CREATE_PLAYER,
    payload: player
}));

export const getChampions = () => (dispatch) => {
  // return playerApis.getChampions()
  dispatch({
    type: GET_CHAMPIONS,
    payload: "champs"
  });
};
