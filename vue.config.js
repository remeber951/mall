const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      .set('@components',resolve('src/components'))
      .set('@content',resolve('src/components/content'))
      .set('@common',resolve('src/components/common'))
      .set('@network',resolve('src/network'))
      .set('@views',resolve('src/views'))
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}