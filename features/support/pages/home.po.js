'use strict'

class Home {
    constructor(){
        this.title = $('h3')
        this.first = element(by.model('first'))
        this.operator = element(by.model('operator'))
        this.second = element(by.model('second'))
        this.goButton = element(by.id('gobutton'))
        this.result = element(by.binding('latest'))
    }
    go(){
        return browser.get('/protractor-demo/');
    }
}

module.exports = Home;