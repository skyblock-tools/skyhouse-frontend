import path from 'path';
import webpack, { BannerPlugin } from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	target: 'web',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/[contenthash].js',
		publicPath: '/',
		crossOriginLoading: 'anonymous',
		assetModuleFilename: 'assets/[contenthash][ext]',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jp(e?)g|gif|svg|webp|woff|woff2)$/,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime',
			'@': path.join(__dirname, 'src'),
		},
		symlinks: false,
	},
	plugins: [new HtmlWebpackPlugin(), new Dotenv()],
};

const devConfig: webpack.Configuration = {
	devtool: 'source-map',
	devServer: {
		compress: true,
		port: 3000,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};

const prodConfig: webpack.Configuration = {
	plugins: [
		new BannerPlugin({
			banner: () => `Copyright (c) ${new Date().getUTCFullYear()} Skyblock Tools. All Rights Reserved.`,
		}),
	],
};

export default (env: object, args: { mode: string }) => {
	switch (args.mode) {
		case 'development':
			return merge(config, devConfig);
		case 'production':
			return merge(config, prodConfig);
		default:
			throw new Error('Provide a valid mode with the --mode flag (development/production).');
	}
};
