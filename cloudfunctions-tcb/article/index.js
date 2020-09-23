'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('article');
	const {type} = event;
	let params = {};
	if(type) {
		params.type = type;
	}
	const res = await collection.where({
		...params
	}).orderBy("sort", "desc").get();
	return res;
}