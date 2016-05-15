const webpack = require('./webpack.config.js');
webpack.entry = {};

module.exports = config => config.set({
   basePath: '',
   frameworks: ['jasmine'],
   files: [
      'build/bundle.js',
      'test/**/*.spec.js'
   ],
   exclude: [],
   preprocessors: {
      'build/bundle.js': ['webpack'],
      'test/**/*.js': ['webpack']
   },
   reporters: ['progress'],
   port: 9876,
   colors: true,
   logLevel: config.LOG_INFO,
   autoWatch: true,
   browsers: ['PhantomJS'],
   singleRun: false,
   concurrency: 2,
   webpack,
   webpackMiddleware: { noInfo: true }
});;