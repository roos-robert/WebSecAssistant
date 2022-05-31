const { Compilation } = require("webpack");
const pkg = require('./package.json')

function genManifest(manifestVersion) {
  const v2 = manifestVersion === 'v2';
  const v3 = !v2;

  const shared_permissions = [
    "activeTab",
    "storage",
    "unlimitedStorage",
  ];

  const host_permissions = [
    "<all_urls>",
    "*://*/*"
  ];

  const action = {
    default_popup: "popup.html",
    default_title: "__MSG_extName__",
    default_icon: {
      "16": "icons/icon16.png",
      "24": "icons/icon24.png",
      "32": "icons/icon32.png"
    }
  };

  const web_accessible_resources = [
    "audio/*",
    "img/*",
    "icons/*",
    "favicon.ico",
    "warning.html",
    "guide.html"
  ];

  return {
    manifest_version: v2 ? 2 : 3,
    name: "__MSG_extName__",
    homepage_url: "https://github.com/rr222cy/WebSecAssistant",
    description: "__MSG_extDescription__",
    version: pkg.version,
    default_locale: "en",
    icons: {
      "16": "icons/icon16.png",
      "24": "icons/icon24.png",
      "32": "icons/icon32.png",
      "48": "icons/icon48.png",
      "96": "icons/icon96.png",
      "128": "icons/icon128.png"
    },
    content_scripts: [
      {
        matches: ["<all_urls>"],
        js: ["js/content-script.js"]
      }
    ],

    ...(v2 && {
      permissions: [
        "webRequest",
        "webRequestBlocking",
        ...shared_permissions,
        ...host_permissions
      ],
      browser_action: action,
      background: {
        scripts: ["js/background.js"],
        persistent: true
      },
      web_accessible_resources,
      // browser_specific_settings: {
      //   gecko: {
      //     id: "websecassistant@xenolith.se"
      //   }
      // },
    }),

    ...(v3 && {
      permissions: [
        //"declarativeNetRequestWithHostAccess",
        ...shared_permissions
      ],
      host_permissions,
      action,
      background: {
        service_worker: "js/background.js",
      },
      web_accessible_resources: [{
        resources: web_accessible_resources,
        matches: [ '<all_urls>' ],
      }]
    })
  }
}

class ManifestPlugin {
  constructor(manifestVersion, filename) {
    this.manifestVersion = manifestVersion;
    this.filename = filename;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("ManifestPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "ManifestPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          const manifestJson = JSON.stringify(genManifest(this.manifestVersion), null, 2);
          assets[this.filename] = {
            source: () => manifestJson,
            size: () => manifestJson.length,
          };
        }
      )
    });
  }
}

module.exports = ManifestPlugin;
