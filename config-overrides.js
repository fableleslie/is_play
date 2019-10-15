const { override, fixBabelImports,addWebpackAlias,addBabelPlugins } = require('customize-cra')
const path = require('path')

// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config
//   }

 module.exports = override(
      ...addBabelPlugins(
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ]
      ),
      fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
      }),
      addWebpackAlias({
        ["assets"]: path.resolve(__dirname, "src/assets"),
        ["styles"]: path.resolve(__dirname, "src/assets/styles"),
        ["pages"]: path.resolve(__dirname, "src/pages"),
        ["components"]: path.resolve(__dirname, "src/components"),
        ["images"] : path.resolve(__dirname,'src/pages/home/images'),
      })
)