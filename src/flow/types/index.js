/* @flow */

export type Player = {
	name: string,
	flowdockUsername: string,
	position: SportMetric,
	matchesPlayed: number,
	matchesWon: SportMetric,
	matchesLost: SportMetric,
	winLossRatio: SportMetric,
	winStreak: SportMetric,
	lastMatch: Match,
	winStreak: SportMetric,
	biggestTTVictory: Match,
	biggestTTDefeat: Match
};

export type Match = {
	playerOne: Player,
	playerTwo: Player,
 	score: Score
};

export type SportMetric = {
	pool: number,
	tableTennis: number
};

export type Score = {
	playerOneScore: number,
	playerTwoScore: number
};
