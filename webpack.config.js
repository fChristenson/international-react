const path = require("path");
const webpack = require("webpack");
const dirPath = "src/public/js/components/app";

const langs = ["en", "sv"];

module.exports = langs.map(lang => {
  return {
    entry: path.join(__dirname, dirPath, `app.${lang}.js`),
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
        "process.env.NODE_ENV": JSON.stringify(lang)
      })
    ]
  };
});
