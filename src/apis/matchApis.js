import restUtils from 'utils/restUtils';
import { REST_INTERFACE_PREFIX } from 'constants/restConstants';
import { futurize } from 'utils/monads';

const recordMatch = (match) =>
  futurize(
    restUtils.post(
      `${REST_INTERFACE_PREFIX}/match?challenge=${match.challenge}`,
      match
    )
  );

const getAllMatchesForSport = (sport) =>
  futurize(restUtils.get(`${REST_INTERFACE_PREFIX}/match/${sport}`));

export default { recordMatch, getAllMatchesForSport };
