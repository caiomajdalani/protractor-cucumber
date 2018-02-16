const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
const expect = chai.expect;
let fs = require('fs');

const { Given, When, Then, AfterAll, BeforeAll, After, Before } = require('cucumber');

const Home = require('../support/pages/home.po.js');
const home = new Home();
const Helper = require('../support/helpers.js');
const helper = new Helper();

// After(() => {
//     let world = this;
//     return browser.takeScreenshot().then(screenShot => {
//         // screenShot is a base-64 encoded PNG
//         world.attach(screenShot, 'image/png');
//     });
// });

When("i enter in the site's URL", callback => {
    home.go().then(callback);
});

Then('i should see the home page title', callback => {
    home.title.getText()
        .then(value => {
            expect(value).to.eql('Super Calculator')
        }).then(callback);
});

When('i add {int} and {int}', (int, int2, callback) => {
    home.first.sendKeys(int)
    home.second.sendKeys(int2)
    home.goButton.click()
        .then(callback)
});

Then('the calculator should give me the result {string}', (result, callback) => {
    home.result.getText()
        .then(value => {
            expect(value).to.eq(result)
        }).then(callback)
});

When('i multiply {int} and {int}', function (int, int2, callback) {
    home.first.sendKeys(int)
    home.second.sendKeys(int2)
    home.operator.click()
    home.selectOption('*')
    home.goButton.click()
        .then(callback)
});

Then('the calculator should give me the results {string} and {string}', function (result1, result2, callback) {
    home.checkMultipleResults(result1).getText()
        .then(value => {
            expect(value).to.include(result1)
        });
    home.checkMultipleResults(result2).getText()
        .then(value => {
            expect(value).to.include(result2)
        }).then(callback)
});