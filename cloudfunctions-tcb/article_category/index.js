'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('article_category');
	const res = await collection.orderBy("sort", "asc").get();
	return res;
}