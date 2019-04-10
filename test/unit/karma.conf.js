// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    reporters: ['progress'],

    files:['./index.js'],

    //对指定文件的预处理
    preprocessors:{
        './index.js': ['webpack', 'sourcemap'],
    },
    // web server port
    port: 9876,

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // plugins: [
    //   'karma-mocha',
    //   'karma-mocha-reporter',
    //   'karma-firefox-launcher',
    //   'karma-chrome-launcher',
    //   'karma-opera-launcher',
    //   'karma-safari-launcher',
    //   'karma-webpack'
    // ],
    // singleRun: false,
    // concurrency: Infinity
  })
}
