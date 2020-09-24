'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('article');
	let {_id, read} = event;
	let params = {
		_id: _id
	};
	console.log(params,_id, 'article_update')
	let updateRead = parseInt(read) + 1;
	const res = await collection.doc(_id).update({
		read: updateRead
	});
	console.log(res, 'res')
	return res;
}