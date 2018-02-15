const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
const expect = chai.expect;

const { Given, When, Then } = require('cucumber');

const Home = require('../support/pages/home.po.js');
const home = new Home();

When('eu digito a URL do site', callback => {
    browser.get('http://juliemr.github.io/protractor-demo/').then(callback);
});
Then('devo visualizar o título da página', callback => {
    // browser.wait(home.title.isPresent()).then(()=>{
    //     expect(home.title)
    //         .to.equal('Super Calculator')
    //         .and.notify(callback);
    // });
    home.title.getText()
        .then((value)=>{
            expect(value).to.eql('Super Calculator')
                // .and.notify(callback);
        }).then(callback);
});
