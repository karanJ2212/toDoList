// eslint-disable-next-line no-undef, no-unused-vars
const path = require("path");
// eslint-disable-next-line no-undef, no-unused-vars
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef, no-unused-vars
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].js",
    // eslint-disable-next-line no-undef, no-unused-vars
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
