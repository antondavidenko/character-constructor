
const path = require('path');

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
        '@src': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/scripts')
  },
  watch: true
};