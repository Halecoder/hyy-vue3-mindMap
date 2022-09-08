const path = require('path');
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	publicPath: isDev ? '' : './dist',
	outputDir: './dist', // 打包dist 所在路径
	lintOnSave: false,
	productionSourceMap: false,
	transpileDependencies: ['simple-mind-map'],
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/')
			}
		}
	}
}