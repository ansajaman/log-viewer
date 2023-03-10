const { addLessLoader, override } = require("customize-cra");

module.exports = override(
  myOverrides,
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    modifyVars: {
      "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
    },
    cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
    cssModules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
  })
);

function myOverrides(config) {

    config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "buffer": false
        }
      }
    // do stuff to config
    return config
  }