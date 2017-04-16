import { curry } from 'ramda';

// Actions
const OPEN_MODAL = 'modalActions:OPEN_MODAL';
const CLOSE_MODAL = 'modalActions:CLOSE_MODAL';
const SHOW_NOTIFICATION = 'modalActions:SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'modalActions:HIDE_NOTIFICATION';

// Action Creators
const openModal = curry((modal, dispatch) =>
  dispatch({ type: OPEN_MODAL, modal }));

const closeModal = curry((modal, dispatch) =>
  dispatch({ type: CLOSE_MODAL, modal }));

const displayNotification = curry((message, dispatch) =>
  dispatch({ type: SHOW_NOTIFICATION, message }));

const closeNotification = curry((modal, dispatch) =>
  dispatch({ type: HIDE_NOTIFICATION }));

export { OPEN_MODAL, CLOSE_MODAL, SHOW_NOTIFICATION, HIDE_NOTIFICATION };

export default {
  openModal,
  closeModal,
  closeNotification,
  displayNotification
};
