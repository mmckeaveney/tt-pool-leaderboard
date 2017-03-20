import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from 'actions/modalActions';

const initialState = {
  notificationOpen: false,
  notificationMessage: ''
};

// Reducers
const MODAL_REDUCERS = {
  [OPEN_MODAL]: (state, action) => ({
    ...state,
    [action.modal]: true
  }),
  [CLOSE_MODAL]: (state, action) => ({
    ...state,
    [action.modal]: false
  }),
  [SHOW_NOTIFICATION]: (state, action) => ({
    ...state,
    notificationMessage: action.message,
    notificationOpen: true
  }),
  [HIDE_NOTIFICATION]: (state) => ({
    ...state,
    notificationMessage: '',
    notificationOpen: false
  })
};

export default function modalReducer(state = initialState, action = {}) {
  const handler = MODAL_REDUCERS[action.type];

  return handler ? handler(state, action) : state;
}
