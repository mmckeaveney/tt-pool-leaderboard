import {
    not,
    or,
    isEmpty,
    isNil
} from 'ramda';

/*
 * Returns true if an array or object is not empty, null or undefined.
 * @type isNotEmpty :: a -> Boolean
 */
const isNotEmptyOrNil = (arrOrObj) => 
  not(or(
    isEmpty(arrOrObj), 
    isNil(arrOrObj)
  ));

export {
    isNotEmptyOrNil
};

