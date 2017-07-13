'use strict';

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: [
        'features/*.feature'
    ],

    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: function () {
    browser.ignoreSynchronization = true;
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                'window-size=1440,900'
                //'disable-extensions',
                //'--start-maximized'
            ]
        }
    },

    baseUrl: 'https://angularjs.org/',

    cucumberOpts: {
        require: 'features/step_definitions/test_step_definitions.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }

};

// ignoreUncaughtExceptions: true