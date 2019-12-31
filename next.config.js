const webpack = require("webpack");

require("dotenv-flow").config();
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true
});
module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
};
