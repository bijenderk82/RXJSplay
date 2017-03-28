module.exports = {
  entry: "./main",
  output: {
    filename: "build/app.js"
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader?exportAsEs6Default"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".html"]
  },
   devtool: "#inline-source-map"
}