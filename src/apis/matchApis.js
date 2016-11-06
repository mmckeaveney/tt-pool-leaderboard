import ApiUtils from 'utils/ApiUtils';

const getListOfPreviousMatchesBySport = (sport) => ApiUtils.get(sport);

const recordMatch = (match, sport) => ApiUtils.post(match, sport);

export {
  getListOfPreviousMatchesBySport,
  recordMatch
};
