var path = require('path')
var webpack = require('webpack')
var fs = require('fs')
var Path = require("path")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    function () {
      this.plugin("done", function (statsData) {
        var stats = statsData.toJson();

        if (!stats.errors.length) {
          var htmlFileName = "index.html";
          var html = fs.readFileSync(Path.join(__dirname, htmlFileName), "utf8");

          var htmlOutput = html.replace(
            /<script\s+src=(["'])(.+?)build\.js\1/i,
            "<script src=$1$2" + stats.assetsByChunkName.main[0] + "$1");

          fs.writeFileSync(
            Path.join(__dirname, "build.html"),
            htmlOutput);
        }
      });
    }    

  ])
}
