import restUtils from 'utils/restUtils';

const findPlayerById = (playerId) => restUtils.get(`/player/${playerId}`);

const createNewPlayer = (player) => restUtils.post(`/player/create`, player);

const updatePlayerDetails = (playerId, player) => restUtils.post(`/player/update/${playerId}`, player);

const getPlayersByRankingForSport = (sport) => restUtils.get(`/player/byRanking/${sport}`);


export default {
  findPlayerById,
  createNewPlayer,
  updatePlayerDetails,
  getPlayersByRankingForSport
};
