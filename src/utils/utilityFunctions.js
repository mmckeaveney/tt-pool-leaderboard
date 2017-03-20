import {
  not,
  or,
  isEmpty,
  isNil,
  join,
  compose,
  head,
  map,
  addIndex,
  split
} from 'ramda';

/*
 * Returns true if an array or object is not empty, null or undefined.
 * @type isNotEmpty :: a -> Boolean
 */
const isNotEmptyOrNil = (arrOrObj) => not(or(isEmpty(arrOrObj), isNil(arrOrObj)));

/**
 * Gets the initials of a player.
 * @type getInitials :: a -> String
 */
const getInitials = compose(join(''), map(head), split(' '));

// A composable binary function that maps over an array and provides the index while mapping.
const mapIndexed = addIndex(map);

export { isNotEmptyOrNil, getInitials, mapIndexed };
