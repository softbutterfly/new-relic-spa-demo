const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   // 'primary-color': '#008D9A', // NR Dark
        //   // 'primary-color': '#70CDD4', // NR Ligth
        //   // 'font-family': '"Fira Sans", sans-serif',
        //   // 'code-family': '"Fira Sans Mono", monospace'
        // },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.less'],
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
    }
  }
}
