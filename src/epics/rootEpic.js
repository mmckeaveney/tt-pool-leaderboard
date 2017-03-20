import { combineEpics } from 'redux-observable';
// import playerEpics$ from './playerEpics';
// import appEpics from './appEpics';
import matchEpics$ from './matchEpics';

const rootEpic$ = combineEpics(
  matchEpics$
  //  playerEpics$
);

export default rootEpic$;
