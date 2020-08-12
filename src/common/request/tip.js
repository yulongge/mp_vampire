export function showLoading() {
	uni.showLoading({
        title: 'loading'
    })
}

export function hideLoading() {
	uni.hideLoading();
}

export function showToast(errmsg, duration = 2000) {
	uni.showToast({
		title: errmsg,
		icon: 'none',
		duration: duration
	})
}