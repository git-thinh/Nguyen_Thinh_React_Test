Help:

+ Open DOS at path ..\Nguyen_Thinh_React_Test
+ cd Nguyen_Thinh_React_Test

+ npm init -i 
  -> create file package.json for declare scripts to run in project

+ npm install --save-dev webpack webpack-dev-server html-webpack-plugin
  -> package the entire source code and build project 
  (--save-dev for write package dependency into the file package.json)

+ Add the script into the file package.json for run webpack-dev-server and build project:
	...
	"scripts": {
		"start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
		"build": "webpack --progress --colors --config ./webpack.config.js"
	},
	...	
+ Make the file webpack.config.js as following:
	const webpack = require('webpack')
	const HtmlWebpackPlugin = require('html-webpack-plugin')

	module.exports = {
	  entry: './src/index.js',

	  output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'app.js'
	  },

	  devServer: {
		contentBase: './build'
	  },

	  plugins: [
		new HtmlWebpackPlugin({
		  template: 'src/index.html',
		  inject: true
		})
	  ]
	}

+ Make files as following: ./src/index.html, ./src/index.js

+ Run command on terminal: 
	- npm run build -> for build source into folder ./build
	- npm start
	- Open browser to go url: http;//localhost:8080



