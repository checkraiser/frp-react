module.exports = {
    context: __dirname ,
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
