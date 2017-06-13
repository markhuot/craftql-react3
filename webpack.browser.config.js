var path = require('path');

module.exports = {
  entry: './start/browser.js',
  output: {
    filename: 'public/browser.bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-react-jsx'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'isomorphic-style-loader', 'css-loader', 'postcss-loader' ]
      },
      {
        test: /(\.jpg|\.png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: './public/images/',
            publicPath: (url) => url.replace('./public', ''),
            useRelativePath: false
          }
        }
      }
    ],
  }
};
