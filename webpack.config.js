// const path = require('path');

// module.exports = {
//   mode: process.env.NODE_ENV,
//   entry: path.resolve(__dirname, "./src/index.js"),
//   devtool: "inline-source-map",
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, 'dist'),
//       publicPath: "/public",
//     },
//     historyApiFallback: true,
//     host: 'localhost',
//     port: 8080,
//     proxy: {
//       "/api/**": "http://localhost:3000/",
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react",
//               "@babel/preset-typescript",
//             ],
//           },
//         },
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js", "jsx"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: './src/index.js',
  entry: {
    // login: "./src/login.js",
    WifuPage: "./src/index.js",
  },
  mode: "development",
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  //   publicPath: '/',
  // },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      publicPath: "/",
      // ??????????
    },
    compress: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    historyApiFallback: true,
    host: "localhost",
    port: 8080,
    proxy: {
      '/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: false,
      },
      // "/sendWifuData": {
      //   target: "http://localhost:3000",
      // },
      // "/server/**": {
      //   target: "http://localhost:3000/",
      //   secure: false,
      // },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /.(css|scss)$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
