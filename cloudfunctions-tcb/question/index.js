'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	console.log(event, context, 'question')
	const collection = db.collection('question_' + event.title.toLowerCase());
	const res = await collection.get();
	return res;
};
