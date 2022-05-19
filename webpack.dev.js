const { merge } = require('webpack-merge');
const WebExtension = require('webpack-target-webextension');
const common = require('./webpack.common.js');

module.exports = (env) => {
  const manifest = env.manifest || 'v2';

  const options = merge(common(manifest), {
    mode: 'development',
    devtool: 'cheap-source-map',
  });

  // Only use HMR for manifest v2
  if (manifest === 'v2') {
    return merge(options, {
      plugins: [
        new WebExtension({
          background: {
            entry: 'background',
            manifest: 2,
          },
          weakRuntimeCheck: true,
        }),
      ],
      devServer: {
        hot: 'only',
      },
    });
  }
  
  return options;
}
