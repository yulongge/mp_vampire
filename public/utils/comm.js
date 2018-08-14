const Comm = {
	random(start, end) {
		let area = end -start + 1;
		return Math.floor(Math.random() * area + start);
	}	
}

module.exports = Comm;
