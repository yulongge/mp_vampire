'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('article');
	let {type, limit} = event;
	let params = {};
	if(type) {
		params.type = type;
	}
	if(!limit) {
		limit = 100;
	}
	const res = await collection.limit(limit).where({
		...params
	}).orderBy("sort", "desc").get();
	return res;
}