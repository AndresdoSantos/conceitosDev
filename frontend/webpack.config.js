const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Arquivo a ser convertido
  output: { // Local para onde vai nosso arquivo depois de ser convertido
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Deve terminar com JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}