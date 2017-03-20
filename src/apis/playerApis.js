import restUtils from 'utils/restUtils';
import { REST_INTERFACE_PREFIX } from 'constants/restConstants';
import { futurize } from 'utils/monads';

const findPlayerById = (playerId) =>
  futurize(restUtils.get(`${REST_INTERFACE_PREFIX}/player/${playerId}`));

const createNewPlayer = (player) =>
  futurize(restUtils.post(`${REST_INTERFACE_PREFIX}/player/create`, player));

const updatePlayerDetails = (playerId, player) =>
  futurize(restUtils.post(`/player/update/${playerId}`, player));

const getPlayersByRankingForSport = (sport) =>
  futurize(restUtils.get(`${REST_INTERFACE_PREFIX}/player/byranking/${sport}`));

const getMetricsForPlayerBySport = (sport, playerId) =>
  futurize(
    restUtils.get(
      `${REST_INTERFACE_PREFIX}/player/metrics/${playerId}/${sport}`
    )
  );

const getPlayerHotStreaks = () =>
  futurize(restUtils.get(`${REST_INTERFACE_PREFIX}/player/metrics/hot`));

export default {
  findPlayerById,
  createNewPlayer,
  updatePlayerDetails,
  getPlayersByRankingForSport,
  getMetricsForPlayerBySport,
  getPlayerHotStreaks
};
