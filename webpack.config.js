const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    // print: './src/print.js' /* // having knowing the answer to multiple vs single src (check JS Fundamentals note), does this count as lazy loading? Hmm, probably. Because you need to click the button to see the message. */
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
