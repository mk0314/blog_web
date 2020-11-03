var webpack = require('webpack')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "windows.jQuery":"jquery",
      Popper: ['popper.js', 'default'],
    })
  ],
};
