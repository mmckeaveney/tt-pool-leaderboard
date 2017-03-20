import 'rxjs';
import { combineEpics } from 'redux-observable';
import { CREATE_PLAYER } from 'actions/playerActions';
import { SHOW_NOTIFICATION } from 'actions/modalActions';

const createPlayerEpic$ = (action$) => action$.ofType(CREATE_PLAYER).map((
  { player }
) => ({
  type: SHOW_NOTIFICATION,
  message: `Player ${player.name} has been created.`
}));

export default combineEpics(createPlayerEpic$);
