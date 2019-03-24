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

--------------------------------------------------------------
+ Install packs:
	- Hot reloading: npm install --save-dev react-hot-loader
		-> When changed source code then browser will reloaded it.
	- Babel: npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1 babel-preset-stage-2
		-> allow used ES6(ES2015)(convert to ES5) into this project.
		-> You must be create file ".babelrc" as following:
			{
			  "presets": [
				"es2015",
				"react",
				"stage-1",
				"stage-2"
			  ]
			}
		-> You must be updated file "webpack.config.js" as following:
			module.exports = {
			  ...
			  module: {
				loaders: [{
				  test: /\.js?$/,
				  exclude: /node_modules/,
				  loader: 'react-hot!babel'
				}]
			  },
			  ...
			};
+ Write components:
	- npm install --save react react-dom
	- Write code of React into the file "src/index.js" as following:
		import React from 'react';
		import ReactDOM from 'react-dom';
		import CustomerList from './components/CustomerList';

		const customers = [
		  {
			  id: 1,
			  name: 'Nguyễn Văn A'
		  },
		  {
			  id: 2,
			  name: 'Nguyễn Văn B'
		  }
		];

		ReactDOM.render(
			<CustomerList customers={customers} />,
			document.getElementById('app')
		);
	- Make file: src/components/CustomerList.js
--------------------------------------------------------------
+ Run command on terminal: 
	- npm run build -> for build source into folder ./build
	- npm start
	- Open browser to go url: http;//localhost:8080



