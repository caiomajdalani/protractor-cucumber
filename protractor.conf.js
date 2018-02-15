'use strict'

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: [
        'features/*.feature'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: [
            'features/step_definitions/*.step.js',
        ],
        format: 'json:results.json',
        profile: false,
        'no-source': true
    },
    afterLaunch: function() {
        let reporter = require('cucumber-html-reporter');
        let options = {
            theme: 'bootstrap',
            jsonFile: 'results.json',
            output: 'e2e/tests_result/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        };
        reporter.generate(options);
    },
    baseUrl: 'http://juliemr.github.io/'
};