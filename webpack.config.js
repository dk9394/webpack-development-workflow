const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				// include: [path.resolve(__dirname, 'src')],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		// publicPath: 'dist',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html', // Reference your HTML file
			inject: 'body', // Automatically injects script tags
			scriptLoading: 'defer', // Options: 'blocking', 'defer'
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3000, // Choose the port you want
		hot: true, // Enable Hot Module Replacement
	},
};
