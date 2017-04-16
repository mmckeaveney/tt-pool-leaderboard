import 'rxjs';
import { combineEpics } from 'redux-observable';
import { RECORD_MATCH } from 'actions/matchActions';

const recordMatchEpic$ = (action$) =>
  action$.ofType(RECORD_MATCH).mapTo({ type: 'MATCH' });

export default combineEpics(recordMatchEpic$);
