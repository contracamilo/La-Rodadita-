const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

const devMode = process.env.NODE_ENV !== "production";
const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";

module.exports = {
	entry: [SRC_DIR + "/index.js"],
	output: {
		path: DIST_DIR,
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 10000,
						fallback: "file-loader",
						name: "images/[name].[hash].[ext]"
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff2?|otf)$/,
				use: "file-loader"
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015", "react", "stage-2"]
					}
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(html)$/,
				exclude: /node_modules/,
				use: {
					loader: "html-loader",
					options: { minimize: true }
				}
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".css"]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: SRC_DIR + "/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		}),
		new WebpackPwaManifestPlugin({
			name: "La Rodadita - viaja entre Bogota y Neiva facil",
			shortname: "La Rodadita 🚗",
			description:
				"Aqui puedes contactar viajeros que quieran comrpatir su auto para viajar a neiva",
			background_color: "#fff",
			theme_color: "#032f4e",
			icons: [
				{
					src: path.resolve("images/logo-pwa.png"),
					sizes: [96, 128, 180, 256, 384, 512]
				}
			]
		}),

		new WorkboxWebpackPlugin.GenerateSW({
			runtimeCaching: [
				{
					urlPattern: new RegExp(/\.(?:png|jpg|jpeg|svg)$/),
					handler: "CacheFirst",
					options: {
						cacheName: "images"
					}
				},
				{
					urlPattern: new RegExp(
						"^https://firestore.googleapis.com/"
					),
					handler: "NetworkFirst",
					options: {
						cacheName: "API"
					}
				}
			]
		})
	],
	devServer: {
		contentBase: DIST_DIR,
		hot: true,
		port: 9009
	}
};
