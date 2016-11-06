// Actions
const CREATE_PLAYER = 'tt-pool-leaderboard-js/playerReducer/CREATE_PLAYER';
const GET_CHAMPIONS = 'tt-pool-leaderboard-js/playerReducer/GET_CHAMPIONS';

const initialState = {
    players: []
};

// Reducers
const REDUCERS = {
    [CREATE_PLAYER]: (state, action) => ({
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
export const addPlayer = (player) => (dispatch) => (
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
