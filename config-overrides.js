const path = require('path');
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
      extensions: ['.js', '.scss', '.css'],
      alias: {
        'bets-theme': path.resolve(__dirname, './src/web/theme'),
        'bets-fonts': path.resolve(__dirname, './src/assets/fonts'),
        'bets-images': path.resolve(__dirname, './src/assets/images'),
        'bets-constants': path.resolve(__dirname, './src/constants'),
        'bets-api': path.resolve(__dirname, './src/api'),
        'bets-utils': path.resolve(__dirname, './src/lib/utils'),
        'bets-validation': path.resolve(__dirname, './src/lib/utils/Validators'),
        'bets-history': path.resolve(__dirname, './src/history'),
        'bets-model': path.resolve(__dirname, './src/model'),
        'bets-redux': path.resolve(__dirname, './src/store'),
        'bets-hooks': path.resolve(__dirname, './src/store/hooks'),
        'bets-framework': path.resolve(__dirname, './src/web/framework'),
        'bets-components': path.resolve(__dirname, './src/web/components'),
        'bets-pages': path.resolve(__dirname, './src/web/pages'),
        'bets-routes': path.resolve(__dirname, './src/web/routes'),
        'bets-templates': path.resolve(__dirname, './src/web/templates'),
        'bets-message': path.resolve(__dirname, './src/lib/config/message'),
      },
    }
  return config;
}