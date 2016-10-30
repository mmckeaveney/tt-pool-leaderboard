/* @flow */

export type Query = {
	query: string,
	query_id: string,
	short_name: string,
	variable_required : boolean,
	categories: Array<string>
};

export type Job = {
	id: string,
	moduleName: string,
	createdAt: number,
	updatedAt: ?number
};

export type Question = {
	id: string,
	question: string,
	categories: Array<string>,
	shortQuestion: string,
	jobs: Array<Job>,
	createdAt: number,
	updatedAt: ?number
};

export type Groups = {
	faq: string,
	paq: string,
	aq: string
};

export type Asset = {
	hostname: string,
	publicIpAddress: string,
	os: string,
	assetGroups: Array<string>,
	cpuUtilization: number
};

