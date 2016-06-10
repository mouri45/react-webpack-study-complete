//使用するモジュールの読み込み
var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: '#source-map', //source mapを出力する指定
  entry: [//変換対象の設定
    './src/index.jsx'
  ],
  output: {//出力先の設定
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module : {
  loaders : [ //拡張子がjsxのファイルをbabelで変換する設定
    {
      test : /\.jsx?/,
      loader : 'babel',
      include : __dirname,
      exclude: /node_modules/
    }
  ]
  }
};

module.exports = config;
