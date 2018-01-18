const path = require('path')
const webpack = require('webpack')

const { CONCAT } = process.env

module.exports = {
	context: __dirname,
	entry: {
		app: ['./src/index'],
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/',
		filename: `[name]${ CONCAT ? '-scope-hoisted' : '' }.js`,
	},
	node: false,
	devtool: false,
	plugins: [
		CONCAT && new webpack.optimize.ModuleConcatenationPlugin(),
	].filter(Boolean)
}
