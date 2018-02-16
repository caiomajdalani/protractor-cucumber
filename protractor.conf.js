'use strict'

const path = require('path');

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: [
        'features/*.feature'
    ],
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: ['disable-infobars']
        },
        // metadata: {
        //     browser: {
        //         name: 'chrome',
        //         version: '58'
        //     },
        //     device: 'MacBook Pro 15',
        //     platform: {
        //         name: 'OSX',
        //         version: '10.12.6'
        //     }
        // }
    }],
    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), 'features/step_definitions/*.step.js')
        ],
        format: 'json:.tmp/results.json',
        strict: true
    },
    baseUrl: 'http://juliemr.github.io/',

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            customData: {
                title: 'Angular Calculator',
                data: [
                    {label: 'Project', value: 'Custom project'},
                    {label: 'Release', value: '1.2.3'},
                    {label: 'Cycle', value: 'B11221.34321'},
                    {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
                    {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
                ]
            },
            jsonOutputPath: '.tmp/report/',
            openReportInBrowser: true,
            removeOriginalJsonReportFile: true
        }
    }]
};