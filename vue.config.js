
module.exports = {
    configureWebpack: () => {
		rules:[
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			},
			{
				test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
						limit: 1024
					}
                }
			},
		]
	   
    }
}