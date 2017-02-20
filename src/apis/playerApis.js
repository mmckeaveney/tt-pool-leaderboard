import restUtils from 'utils/restUtils';
import {
  REST_INTERFACE_PREFIX
} from 'constants/restConstants';
import {
  asyncTask
} from 'utils/monads';

const findPlayerById = (playerId) => asyncTask(restUtils.get(`${REST_INTERFACE_PREFIX}/player/${playerId}`));

const createNewPlayer = (player) => asyncTask(restUtils.post(`/player/create`, player));

const updatePlayerDetails = (playerId, player) => asyncTask(restUtils.post(`/player/update/${playerId}`, player));

const getPlayersByRankingForSport = (sport) => asyncTask(restUtils.get(`${REST_INTERFACE_PREFIX}/player/byranking/${sport}`));

export default {
  findPlayerById,
  createNewPlayer,
  updatePlayerDetails,
  getPlayersByRankingForSport
};
