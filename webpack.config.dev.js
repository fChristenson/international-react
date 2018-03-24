const path = require("path");
const webpack = require("webpack");
const dirPath = "src/public/js/components/app";

const lang = process.env.NODE_ENV || "en";

module.exports = {
  entry: path.join(__dirname, dirPath, `app.js`),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `bundle.${lang}.js`
  },
  module: {
    rules: [
      {
        test: /.+\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["babel-preset-react"]
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      __LANGUAGE__: JSON.stringify(lang)
    })
  ]
};
