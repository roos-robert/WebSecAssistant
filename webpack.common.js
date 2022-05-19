const path = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const ManifestPlugin = require('./manifest.js');

module.exports = (manifestVersion) => {
  if (manifestVersion !== 'v2' && manifestVersion !== 'v3') {
    throw new Error(`Invalid manifest version: ${manifestVersion}`);
  }

  return {
    mode: 'development',
    entry: {
      background: `./src/background/background-${manifestVersion}.js`,
      popup: './src/popup/browser-action.js',
      warning: './src/warning-page/main.js',
      guide: './src/guide-page/main.js',
      'content-script': './src/content-scripts/content-script.js',
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, `dist/${manifestVersion}`),
      clean: true,
    },
    // resolve: {
    //   alias: {
    //     // Use runtime vue-i18n to avoid eval CSP issues
    //     'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
    //   }
    // },
    module: {
      noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
      rules: [
        {
          test: /\.vue$/,
          use: { loader: 'vue-loader', options: { shadowMode: true } },
        },
        {
          test: /\.css$/,
          oneOf: [
            { resourceQuery: /\?vue/, use: [{ loader: 'vue-style-loader', options: { shadowMode: true } }, 'css-loader'] },
            { use: ['vue-style-loader', 'css-loader'] },
          ],
        },
        {
          test: /\.scss$/,
          oneOf: [
            { resourceQuery: /\?vue/, use: [{ loader: 'vue-style-loader', options: { shadowMode: true } }, 'css-loader', 'sass-loader'] },
            { use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
          ],
        },
      ],
    },
    performance: {
      maxAssetSize: 4000000, // 4MB firefox limit
      maxEntrypointSize: 4000000, // 4MB firefox limit
      assetFilter: assetFilename => assetFilename.endsWith('.js'),
    },
    plugins: [
      new DefinePlugin({
        __MANIFEST_VERSION__: JSON.stringify(manifestVersion),

        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,

        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __VUE_I18N_PROD_DEVTOOLS__: false,
      }),

      new ProvidePlugin({
        'browser': 'webextension-polyfill',
      }),

      // Vue apps
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        chunks: ['popup'],
        filename: 'popup.html',
        title: "Popup",
        template: './src/extension-page.html',
      }),
      new HtmlWebpackPlugin({
        chunks: ['warning'],
        filename: 'warning.html',
        title: "Warning",
        template: './src/extension-page.html',
      }),
      new HtmlWebpackPlugin({
        chunks: ['guide'],
        filename: 'guide.html',
        title: "Guide",
        template: './src/extension-page.html',
      }),
      
      new CopyPlugin({
        patterns: [
          // Copy the public extension files to the dist folder
          { from: "public", to: "." },
        ],
      }),
      
      new ManifestPlugin(manifestVersion, 'manifest.json'),
    ],
  };
};
