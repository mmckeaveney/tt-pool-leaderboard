import {
    CREATE_PLAYER,
    LOADING_PLAYERS_BY_RANKING_FOR_SPORT,
    GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS,
    GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL
} from 'actions/playerActions';

const initialState = {
    playersLoading: false
};

// Reducers
const PLAYER_REDUCERS = {
    [CREATE_PLAYER]: (state, action) => ({
        ...state,
        player: state.players.concat(action.player)
    }),
    [LOADING_PLAYERS_BY_RANKING_FOR_SPORT]: (state, action) => ({
        ...state,
        playersLoading: true 
    }),
    [GET_PLAYERS_BY_RANKING_FOR_SPORT_SUCCESS]: (state, action) => ({
        ...state,
        [action.sport]: action.players,
        playersLoading: false
    }),
    [GET_PLAYERS_BY_RANKING_FOR_SPORT_FAIL]: (state, action) => ({
        ...state,
        error: action.error,
        playersLoading: false
    })
};

export default function playerReducer(state = initialState, action = {}) {
    const handler = PLAYER_REDUCERS[action.type];

    return handler ? handler(state, action) : state;
};

