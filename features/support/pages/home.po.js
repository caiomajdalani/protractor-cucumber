'use strict'

class Home {
    constructor(){
        this.title = $('h3')
        this.first = element(by.model('first'))
        this.second = element(by.model('second'))
        this.goButton = element(by.id('gobutton'))
        this.result = element(by.binding('latest'))

        this.operator = element(by.model('operator'))
    }

    selectOption(name) {
        let option = this.operator.element(by.cssContainingText('option', name));
        option.click();
    }

    checkMultipleResults(result) {
        return element.all(by.cssContainingText('td[class=ng-binding]', result))
    }

    go(){
        return browser.get('/protractor-demo/');
    }
}

module.exports = Home;