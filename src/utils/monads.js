import Task from "data.task";
import Either from "data.either";
import {
    isNotEmptyOrNil
} from 'utils/utilityFunctions';
import {
    curry
} from 'ramda';

// asyncTask : Promise(a, Error) -> Task(b, Error)
const asyncTask = promise =>
  new Task((reject, resolve) => promise.then(resolve).catch(reject));


// eitherDefinedOrEmpty : a -> Error -> Either(a, Error)   
const eitherDefinedOrEmpty = curry((potentialError, value) =>
  isNotEmptyOrNil(value)
    ? Either.Right(value)
    : Either.Left(potentialError));

export { asyncTask, eitherDefinedOrEmpty };
