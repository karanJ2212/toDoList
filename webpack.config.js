// eslint-disable-next-line no-undef, no-unused-vars
const path = require("path");
// eslint-disable-next-line no-undef, no-unused-vars
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef, no-unused-vars
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    // eslint-disable-next-line no-undef, no-unused-vars
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
