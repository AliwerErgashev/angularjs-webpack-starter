module.exports = {
  entry: [
    './src/client/main.css',
    './src/client/main.js'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'assets/bundle.js'
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
  },
  devServer: {
    contentBase: 'public',
    open: true,
    port: 9001,
    proxy: {
      '/api': 'http://localhost:9000'
    }
  }
}
