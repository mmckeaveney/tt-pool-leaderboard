import Task from 'data.task';
import { isNotEmptyOrNil } from 'utils/utilityFunctions';
import { curry } from 'ramda';
import Either from 'data.either';
const {
  Left,
  Right
} = Either;

// futurize : Promise(a, Error) -> Task(b, Error)
const futurize = (promise) =>
  new Task((reject, resolve) => promise.then(resolve).catch(reject));

// eitherDefinedOrEmpty : a -> Error -> Either(a, Error)
const eitherDefinedOrEmpty = curry(
  (potentialError, value) =>
    isNotEmptyOrNil(value) ? Either.Right(value) : Either.Left(potentialError)
);

/**
 * Takes a predicate, error message/value and an expected value.
 * The predicate is called on the expected value and if it matches,
 * it returns the appropriate sub-branch of the Either Monad. This 
 * function encapsulates if/else statement behaviour in a functional way. 
 * eitherConditional : Boolean -> a -> Error -> Either(a, Error)
 */
const eitherConditional = curry((predicate, err, value) => {
  console.log(predicate(value) ? Right(value) : Left(err));
  return predicate(value) ? Right(value) : Left(err);
});

export { futurize, eitherDefinedOrEmpty, eitherConditional };
