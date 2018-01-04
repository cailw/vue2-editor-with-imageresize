var path = require('path');
var webpack=require('webpack')
module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  webpack: {
    output: {
      path: path.resolve(__dirname, 'dist-example/'),
      publicPath: ""
    },
    plugins:[
      new webpack.ProvidePlugin({
        'window.Quill': 'quill'
      })
    ]
  },
  filename: {
    js: '[name].js',
    css: '[name].css'
  },
  html: {
    title: 'Vue2-Editor'
  },
  copy: true
}
