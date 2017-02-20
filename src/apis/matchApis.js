import restUtils from "utils/restUtils";

const recordMatch = (match, sport) => restUtils.post(match, sport);

export { recordMatch };
