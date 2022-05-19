const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ZipPlugin = require('zip-webpack-plugin');
const pkg = require('./package.json')

module.exports = (env) => {
  const manifest = env.manifest || 'v2';
  return merge(common(manifest), {
    mode: 'production',
    plugins: [
      new ZipPlugin({
        path: '../artifacts',
        filename: `websec-assistant-v${pkg.version}-m${manifest}-production.zip`,
      })
    ]
  });
}