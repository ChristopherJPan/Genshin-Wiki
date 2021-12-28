const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: "/public",
    },
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      "/api/**": "http://localhost:3000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};