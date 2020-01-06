const navigateUrl = function (url) {
	setTimeout(function() {
		uni.navigateTo({url})
	}, 200);
}

const reLanucnUrl = function(url) {
	setTimeout(function() {
		uni.reLaunch({url})
	}, 200);
}

const redirectUrl = function (url) {
	setTimeout(function() {
		uni.redirectTo({url})
	}, 200);
}

exports.navigateUrl = function (url) {
	navigateUrl(url);
}


exports.reLanucnUrl = function (url) {
	reLanucnUrl(url);
}


exports.redirectToUrl = function (url) {
	redirectUrl(url);
}
