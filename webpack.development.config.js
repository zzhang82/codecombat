// Use this webpack config for development, with `webpack --config webpack.development.config.js`

// process.traceDeprecation = true;
const webpack = require('webpack');
const _ = require('lodash');

const baseConfigFn = require('./webpack.base.config')
// Development webpack config
module.exports = (env) => {
  if (!env) env = {};
  const baseConfig = baseConfigFn(env);
  return _.merge(baseConfig, {
    devtool: 'eval-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: {
      contentBase: './public'
    },
    plugins: baseConfig.plugins.concat([
      new webpack.ProgressPlugin({ profile: false }),
      new webpack.BannerPlugin({ // Label each module in the output bundle
        banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
      }),
    ])
  })
}
