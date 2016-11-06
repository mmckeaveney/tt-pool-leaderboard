import ApiUtils from 'utils/ApiUtils';

const getPlayerListBySport = (sport) => ApiUtils.get(sport);

const addNewPlayer = (player) => ApiUtils.post(player);

export {
  getPlayerListBySport,
  addNewPlayer
};
