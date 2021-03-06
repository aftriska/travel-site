module.exports = {
  //to tell webpack which file it should begin looking at to create bundle
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },

  //to tell webpack where the final product bundled file should be output to
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        /* test is used to tell that only .js file to be changed */
        test: /\.js$/,

        /* we only need to convert only the .js files that we have write ourselves */
        exclude: /node_modules/
      }
    ]
  }
}
