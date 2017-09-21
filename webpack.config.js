const path = require('path');

module.exports = {
  entry: [
    './src/client/main.css',
    './src/client/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: path.join('assets', 'bundle.js')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['ng-annotate-loader', 'babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  }
};
