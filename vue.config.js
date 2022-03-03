module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: config => {
    enableShadowCss(config);
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/browser-action.js',
      title: 'Popup'
    },
    warning: {
      template: 'public/browser-extension.html',
      entry: './src/warning-page/main.js',
      title: 'Warning'
    },
    guide: {
      template: 'public/browser-extension.html',
      entry: './src/guide-page/main.js',
      title: 'Guide'
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}

// see: https://medium.com/@royprins/get-started-with-vue-web-components-593b3d5b3200
function enableShadowCss(config) {
  const configs = [
    config.module.rule('vue').use('vue-loader'),
    config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('css').oneOf('normal').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('postcss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('scss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('sass').oneOf('normal').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('less').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('less').oneOf('normal').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue').use('vue-style-loader'),
    //config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader'),
    //config.module.rule('stylus').oneOf('normal').use('vue-style-loader'),
  ];
  configs.forEach(c => c.tap(options => {
    if (options) {
      options.shadowMode = true;
    }
    return options;
  }));
}
