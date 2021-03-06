module.exports = {
  entry: './src/createAriaMenuButton.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?loose=all', exclude: /node_modules/ }
    ]
  },
  externals: {
    react: 'react'
  },
  output: {
    filename: 'dist/createAriaMenuButton.js',
    libraryTarget: 'umd',
    library: 'AriaMenuButton'
  }
};
