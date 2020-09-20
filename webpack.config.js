const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].[hash].js',
	},
	mode: 'development',
	watch: true,
	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			}
		]
	},
	devServer: {
		port: 4200
	}
}