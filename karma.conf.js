const path = require('path')

/* global module */
module.exports = function (config) {
    'use strict';
    config.set({
        singleRun: true,
        browsers: ['jsdom'],
        frameworks: [ 'jasmine','commonjs'],
        reporters: ['progress','coverage'],
        plugins: ['karma-jasmine','karma-babel-preprocessor','karma-commonjs','karma-coverage','karma-jsdom-launcher'],
        files:[
            {pattern:'lib/mechanisms/*.js'},
            {pattern:'lib/mechanisms/interface/*.js'},
            {pattern:'lib/public/*.js'},
            {pattern:'lib/createStore.js'},
            {pattern:'lib/utils/*.js'},
            {pattern:'lib/spec/*.js'},
        ],
        preprocessors: {
            'lib/**/*.js': ['babel','coverage','commonjs'],
        },
        coverageReporter: {
            type : 'lcov',
            dir : '.',
            subdir : '.'
        }
    });
};