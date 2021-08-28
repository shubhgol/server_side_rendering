var path = require("path");
module.exports = {
    mode: 'development',
  entry: {
    bundle:path.resolve(__dirname,'/components/index.jsx'),
  },
  output: {
    path:__dirname+'/dist',
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules\/|public\/js\/)/,
          loader: "babel-loader",
      },
    ],
  },
};